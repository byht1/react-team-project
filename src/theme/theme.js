export const colors = Object.freeze({
  a: 'var(--accent)',
  bg: 'var(--background)',
  g: 'var(--grey)',
  l: 'var(--link)',
  buttonBg: 'var(--button-bg)',
  da: 'var(--dark-accent)',
  w: 'var(--white)',
  b: 'var(--black)',
  gradient: 'var(--gradient)',
  overlay: 'var(--overlay)',
  wt: 'var(--white-text)',
  bt: 'var(--black-text)',
});

export const fonts = Object.freeze({
  manrope: "'Manrope', sans-serif",
  inter: "'Inter', sans-serif",
});

export const lineHeights = Object.freeze({
  min: 1.1,
  normal: '100%',
  heading: 1.35,
  haf: 1.5,
  big: 1.625,
});

export const theme = {
  colors,
  space: [
    0, 2, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 49, 52, 56, 60, 64, 110,
    128, 256,
  ],
  fonts,
  fontSizes: {
    min: '12px',
    s: '14px',
    m: '16px',
    l: '18px',
    xl: '20px',
    xxl: '24px',
    xxxl: '28px',
    logo: '32px',
    xxxxl: '48px',
  },
  fontWeights: {
    normal: 400,
    average: 500,
    semiBold: 600,
    bold: 700,
  },
  lineHeights,
  borders: {
    none: 'none',
    normal: '2px solid',
  },
  radii: {
    none: '0',
    inputRadius: '40px',
    buttonRadius: '40px',
    currentAnymal: '0px 0px 40px 40px',
    normal: '20px',
    round: '50%',
  },
  size: {
    maxVH: '100vh',
    maxVW: '100vw',
    max: '100%',
    half: '50%',
    quarter: '25%',
  },
  shadows: {
    s: 'var(--shadow)',
  },
};
