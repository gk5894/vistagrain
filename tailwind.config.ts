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
        serif: ['Kenoky', 'sans-serif'],
        sans: ['Kenoky', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#ffffff',
            fontFamily: 'Kenoky, sans-serif',
            a: { color: '#FFE234' },
            h1: { fontFamily: 'Kenoky, sans-serif' },
            h2: { fontFamily: 'Kenoky, sans-serif' },
            h3: { fontFamily: 'Kenoky, sans-serif' },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

export default config
