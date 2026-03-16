import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0e0e0e',
        foreground: '#f5f5f0',
        accent: '#c8a96e',
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#f5f5f0',
            a: { color: '#c8a96e' },
            h1: { fontFamily: 'var(--font-cormorant)' },
            h2: { fontFamily: 'var(--font-cormorant)' },
            h3: { fontFamily: 'var(--font-cormorant)' },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

export default config
