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
        background: '#0a0a0a',
        foreground: '#f0ede8',
        accent: '#FFE234',
        muted: 'rgba(240,237,232,0.45)',
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        brand: ['Kenoky', 'var(--font-dm-sans)', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#f0ede8',
            fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
            a: { color: '#FFE234', textDecoration: 'none' },
            'a:hover': { color: '#FFE234', textDecoration: 'underline' },
            h1: { fontFamily: 'var(--font-cormorant), Georgia, serif', fontWeight: '400' },
            h2: { fontFamily: 'var(--font-cormorant), Georgia, serif', fontWeight: '400' },
            h3: { fontFamily: 'var(--font-cormorant), Georgia, serif', fontWeight: '400' },
            strong: { color: '#f0ede8' },
            blockquote: { borderLeftColor: '#FFE234', color: 'rgba(240,237,232,0.7)' },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

export default config
