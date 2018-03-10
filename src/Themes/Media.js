import { css } from 'styled-components';

const sizes = {
  lg: 1200,
  md: 992,
  sm: 768,
};

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }`;

  return acc;
}, {});

export default media;
