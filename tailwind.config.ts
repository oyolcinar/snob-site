import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        mainText: '#3F3B3C',
        secondaryText: '#FCC2BE',
        bannerColor: '#D0F4E8',
        dividerColor: '#93BCAD',
        footerColor: '#F7DEE1',
        buttonPink: '#FAC9D1',
        landingGreen: '#C3E9E9',
        landingPink: '#F7DADF',
        buttonGreen: '#D8E0BB',
        landingGreenTwo: '#D8E0BB',
        buttonPinkTwo: '#FFD9E7',
        landingPinkTwo: '#FCC2BE',
        buttonYellow: '#EDE2B5',
        landingYellow: '#EDE2B5',
        buttonPinkThree: '#F7DEE1',
        landingBeige: '#FCEBF3',
        buttonGreenThree: '#C3E9E9',
        selectColor: '#EF5E84',
        menuPink: '#FCE3EB',
        menuGreen: '#D0F4E8',
        menuYellow: '#FCF2C8',
        menuPinkDivider: '#C699A4',
        menuGreenDivider: '#93BCAD',
        menuYellowDivider: '#CCC39F',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
