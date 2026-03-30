import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink:          '#1A1E2E',
        'ink-mid':    '#3D4461',
        'ink-muted':  '#6B7480',
        paper:        '#F7F3ED',
        'paper-subtle': '#EDE8DC',
        canvas:       '#FDFAF6',
        rule:         '#D0C9BC',
        forest:       '#1B5438',
        'forest-mid': '#2A7050',
        'forest-light': '#E5F2EB',
        gold:         '#C47A2B',
        'gold-light': '#FDF0E0',
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        body:    ['var(--font-barlow)', 'system-ui', 'sans-serif'],
      },
      animation: {
        ticker: 'ticker 40s linear infinite',
      },
      keyframes: {
        ticker: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
