import styledNormalize from 'styled-normalize';
import { injectGlobal } from 'styled-components';

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
  }
  *,
  *::before,
  *::after {
  box-sizing: inherit;
  }

  a,
  a:hover,
  a:focus,
  a:active,
  a:visited {
    text-decoration: none;
  }
`;
