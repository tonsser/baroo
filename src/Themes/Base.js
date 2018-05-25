import styledNormalize from 'styled-normalize';
import { injectGlobal } from 'styled-components';
import { style, type } from './Fonts';

export default () => injectGlobal`
  ${styledNormalize}
  @-ms-viewport {
  width: device-width;
  }
  html {
  box-sizing: border-box;
  -ms-overflow-style: scrollbar;
  }
  body {
    padding: 0;
    ${style.normal}
  }
  *,
  *::before,
  *::after {
  box-sizing: inherit;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${type.base}
  }
  a,
  a:hover,
  a:focus,
  a:active,
  a:visited {
    text-decoration: none;
  }
`;
