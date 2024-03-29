/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: '#333',
            a: {
              color: '#1d85fd',
            },
          },
        },
      },
      fontFamily: {
        mont: ['var(--font-montserrat)'],
        indie: ['var(--font-indie)'],
        inter: ['var(--font-inter)'],
      },
      colors: {
        dark: '#1b1b1b',
        gray: '#7D7D7D',
        light: '#f5f5f5',
        lightGray: '#ececec',
        codeBgLight: '#EAE9E5',
        codeBgDark: '#252525',
        red: '#a4253b',
        blue: '#053a86',
        darkBlue: '#030329',
        lightPurple: '#2C107D',
        lightBlue: '#1A065F',
        lightGreen: '#405016',
        primary: '#9d0208',
        primaryYellow: '#ffba08',
        yellow: '#cab539',
        emerald: '#116668',
        green: '#11342d',
        orange: '#e85d04',
        purple: '#61173c',
        plum: '#8c4659',
        slate: '#c2cbe2',
      },
      screens: {
        mobile: '360px', // @media (min-width: 360px)
        foldable: '523px', // @media (min-width: 523px)
        tablet: '768px', // @media (min-width: 768px)
        laptop: '1024px',
        desktop: '1280px',
        tv: '1536px',
        'under-foldable': { max: '522px' }, // @media (max-width: 522px)
        'under-tablet': { max: '767px' }, // @media (max-width: 767px)
        'under-mobile': { max: '359px' }, // @media (max-width: 359px)
      },
      fontSize: {
        big: '3.5rem',
        h1: '2.25rem',
        h2: '1.5rem',
        h3: '1.25rem',
        normal: '1rem',
        small: '0.825rem',
        smaller: '0.813rem',
        tiny: '0.625rem',
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        bold: '600',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
