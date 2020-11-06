export const size = {
  // 기본이 1200px로 가정
  largest: '75em', // 1200px
  large: '56.25em', // 900px
  medium: '37.5em', // 600px
};

const theme = {
  // responsive
  tablet: `only screen and (min-width: ${size.medium})`,
  laptop: `only screen and (min-width: ${size.large})`,
  desktop: `only screen and (min-width: ${size.largest})`,
};

export default theme;
