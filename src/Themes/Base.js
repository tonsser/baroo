import styledNormalize from 'styled-normalize';
import { injectGlobal } from 'styled-components';
import { style } from './Fonts';

export default () => injectGlobal`
  ${styledNormalize}
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  body {
    padding: 0;
    ${style.normal}
  }
  h1: {
    ${style.h1}
  }
  h2: {
    ${style.h2}
  }
  h3: {
    ${style.h3}
  }
  h4: {
    ${style.h4}
  }
  h5: {
    ${style.h5}
  }
  h6: {
    ${style.h6}
  }
  a,
  a:hover,
  a:focus,
  a:active,
  a:visited {
    text-decoration: none;
    color: inherit;
  }
`;
