import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {

    colors : {
      'stone' : '#0c0a09',
      'linearRed' : '#4c0000',
      'neutral' : '#f5f5f5',
      'strongRed' :'#2C0000',
      'escuro': '#F6F6F6',
      'bej' : '#CFC5C5',
      'darkRed' : '#270A0A',
      'black100' : '#0E0E0E',
      'bloodRed' : '#6B0000',
      'bordo' : '#480000'
    }
  },
  plugins: [],
}
export default config
