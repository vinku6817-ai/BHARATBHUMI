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
        'bharati-green': '#2D5016',
        'bharati-light-green': '#5CAD56',
        'bharati-earth': '#8B6F47',
        'bharati-light': '#F5F5F0',
      },
    },
  },
  plugins: [],
}
export default config
