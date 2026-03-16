'use client'

import { useEffect, useRef } from 'react'

const vertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`

const fragmentShader = `
precision highp float;

uniform sampler2D uTexture;
uniform vec2 uMouse;
uniform float uTime;
uniform vec2 uResolution;
uniform vec2 uImageSize;
uniform vec2 uRipplePos;
uniform float uRippleTime;

varying vec2 vUv;

float hash(vec2 p) {
  p = fract(p * vec2(234.34, 435.345));
  p += dot(p, p + 34.23);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i),                 hash(i + vec2(1.0, 0.0)), u.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
    u.y
  );
}

float fbm(vec2 p) {
  float value = 0.0;
  float amplitude = 0.5;
  mat2 rot = mat2(1.6, 1.2, -1.2, 1.6);
  for (int i = 0; i < 6; i++) {
    value += amplitude * noise(p);
    p = rot * p;
    amplitude *= 0.5;
  }
  return value;
}

// Remap UV to cover the viewport (like object-cover)
vec2 coverUv(vec2 uv, vec2 imageSize, vec2 resolution) {
  float imageAspect = imageSize.x / imageSize.y;
  float viewAspect = resolution.x / resolution.y;
  vec2 scale = vec2(1.0);
  if (imageAspect > viewAspect) {
    scale.x = viewAspect / imageAspect;
  } else {
    scale.y = imageAspect / viewAspect;
  }
  return (uv - 0.5) * scale + 0.5;
}

void main() {
  vec2 uv = vUv;

  // Aspect-corrected UVs for distance math
  float aspect = uResolution.x / uResolution.y;
  vec2 uvA       = vec2(uv.x * aspect, uv.y);
  vec2 mouseA    = vec2(uMouse.x * aspect, uMouse.y);
  vec2 ripplePosA = vec2(uRipplePos.x * aspect, uRipplePos.y);

  // --- FBM ambient distortion ---
  float t = uTime * 0.08;
  vec2 p = uv * 3.0;
  float f1 = fbm(p + t);
  float f2 = fbm(p + vec2(f1 + t * 1.1, f1 - t * 0.9));
  vec2 fbmDistort = vec2(
    fbm(p + vec2(f1, f2) + t * 0.5),
    fbm(p + vec2(f2, f1) - t * 0.5)
  ) * 0.005 - 0.0025;

  // --- Mouse proximity warp ---
  float mouseDist = distance(uvA, mouseA);
  float proximityStrength = smoothstep(0.4, 0.0, mouseDist) * 0.007;
  vec2 toMouse = normalize(uvA - mouseA + vec2(0.0001)) / vec2(aspect, 1.0);
  vec2 proximityDistort = -toMouse * proximityStrength;

  // --- Expanding ripple wave ---
  vec2 rippleDistort = vec2(0.0);
  float rippleAge = uTime - uRippleTime;
  if (rippleAge > 0.0 && rippleAge < 3.5) {
    float dist = distance(uvA, ripplePosA);
    float rippleRadius = rippleAge * 1.4;
    float fade = exp(-rippleAge * 1.2) * exp(-dist * 1.8);
    float wave = sin((dist - rippleRadius) * 38.0) * fade;
    float ring = smoothstep(0.18, 0.0, abs(dist - rippleRadius));
    vec2 dir = normalize(uvA - ripplePosA + vec2(0.0001)) / vec2(aspect, 1.0);
    rippleDistort = dir * wave * ring * 0.018;
  }

  // Apply all distortions, then remap for cover
  vec2 distorted = uv + fbmDistort + proximityDistort + rippleDistort;
  vec2 finalUv = coverUv(clamp(distorted, 0.001, 0.999), uImageSize, uResolution);
  finalUv = clamp(finalUv, 0.001, 0.999);

  gl_FragColor = texture2D(uTexture, finalUv);
}
`

interface HeroSceneProps {
  imageSrc: string
  imageWidth: number
  imageHeight: number
}

export default function HeroScene({ imageSrc, imageWidth, imageHeight }: HeroSceneProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    let mounted = true
    let animId: number

    import('three').then((THREE) => {
      if (!mounted) return

      const renderer = new THREE.WebGLRenderer({ canvas, alpha: false, antialias: false })
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.setSize(window.innerWidth, window.innerHeight)

      const scene = new THREE.Scene()
      const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)

      const startTime = performance.now()

      const uniforms = {
        uTexture:    { value: null as THREE.Texture | null },
        uMouse:      { value: new THREE.Vector2(0.5, 0.5) },
        uTime:       { value: 0 },
        uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
        uImageSize:  { value: new THREE.Vector2(imageWidth, imageHeight) },
        uRipplePos:  { value: new THREE.Vector2(0.5, 0.5) },
        uRippleTime: { value: -10.0 },
      }

      const geometry = new THREE.PlaneGeometry(2, 2)
      const material = new THREE.ShaderMaterial({ vertexShader, fragmentShader, uniforms })
      const mesh = new THREE.Mesh(geometry, material)
      scene.add(mesh)

      // Load texture
      const loader = new THREE.TextureLoader()
      loader.load(imageSrc, (tex) => {
        if (!mounted) { tex.dispose(); return }
        tex.minFilter = THREE.LinearFilter
        tex.magFilter = THREE.LinearFilter
        uniforms.uTexture.value = tex
      })

      // Mouse tracking
      let lastMouseX = 0.5
      let lastMouseY = 0.5
      let lastRippleTime = 0

      const handleMouseMove = (e: MouseEvent) => {
        const x = e.clientX / window.innerWidth
        const y = 1.0 - e.clientY / window.innerHeight
        uniforms.uMouse.value.set(x, y)

        const dx = x - lastMouseX
        const dy = y - lastMouseY
        const speed = Math.sqrt(dx * dx + dy * dy)
        const now = performance.now()

        if (speed > 0.006 && now - lastRippleTime > 180) {
          uniforms.uRipplePos.value.set(x, y)
          uniforms.uRippleTime.value = (now - startTime) / 1000
          lastRippleTime = now
        }
        lastMouseX = x
        lastMouseY = y
      }

      const handleResize = () => {
        renderer.setSize(window.innerWidth, window.innerHeight)
        uniforms.uResolution.value.set(window.innerWidth, window.innerHeight)
      }

      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('resize', handleResize)

      function animate() {
        animId = requestAnimationFrame(animate)
        uniforms.uTime.value = (performance.now() - startTime) / 1000
        renderer.render(scene, camera)
      }
      animate()

      // Cleanup stored for return
      ;(canvas as any).__cleanup = () => {
        window.removeEventListener('mousemove', handleMouseMove)
        window.removeEventListener('resize', handleResize)
        cancelAnimationFrame(animId)
        renderer.dispose()
        material.dispose()
        geometry.dispose()
        uniforms.uTexture.value?.dispose()
      }
    })

    return () => {
      mounted = false
      cancelAnimationFrame(animId)
      ;(canvas as any).__cleanup?.()
    }
  }, [imageSrc, imageWidth, imageHeight])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full block"
    />
  )
}
