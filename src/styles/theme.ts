export const size = {
  // 기본이 모바일 뷰(500px 이하)로 가정
  largest: '75em', // 1200px
  large: '56.25em', // 900px
  medium: '37.5em', // 600px
  small: '31.25em', // 500px
  smallest: '25em', // 400px
};

const theme = {
  // colors
  primaryYellow: '#FFBE0F',
  primaryMint: '#4ECDC4',

  // responsive
  under400: `only screen and (max-width: ${size.smallest})`,
  tablet: `only screen and (min-width: ${size.small})`,
  laptop: `only screen and (min-width: ${size.large})`,
  desktop: `only screen and (min-width: ${size.largest})`,
};

export default theme;
