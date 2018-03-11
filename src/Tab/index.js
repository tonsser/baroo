import React from 'react';

import styled, { css } from 'styled-components';
import { Div } from '../FlexboxGrid';
import media from '../Themes/Media';
import color from '../Themes/Colors';

const Tab = Div.extend`
  margin-right: 10px;
  display: inline-block;
  ${media.sm`
    margin-right: 30px;
  `}
  ${props => props.active && css`
    a {
      border-bottom: solid 6px ${color.green}
    }
  `}
`;

const Link = styled.a`
  line-height: 3em;
  border: none;
  border-bottom: 6px solid transparent;
  padding: 8px 30px;
  font-size: 16px;
  display: block;
`;

export default props => (
  <Tab {...props}>
    <Link {...props}>{props.children}</Link>
  </Tab>
);
