export const theme = Object.freeze({
  colors: {
    white: '#ffffff',
    dark: '#19191A',
    violet: '#a972cb',
    pink: ' #ef6eae',
    orange: '#ffa260',
    green: '#8fc866',
    red: '#ff0000',
    gray: '#444444',
    lightGray: '#f0f0f0',
  },
  fontSizes: {
    xs: '12px',
    small: '18px',
    medium: '22px',
    large: '28px',
    big: '36px',
  },
  spacing: value => `${4 * value}px`,
  shadows: {
    small: '0 5px 7px -1px rgba(51, 51, 51, 0.23)',
    regular: ' 0 0 20px 0 #000000',
    medium: '0 9px 47px 11px rgba(51, 51, 51, 0.18);',
  },
  animation: {
    cubicBezier: '0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98)',
  },
});
