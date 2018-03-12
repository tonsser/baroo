import React from 'react';
import styled from 'styled-components';
import media from '../Themes/Media';
import { size } from '../Themes/Fonts';
import color from '../Themes/Colors';

const Button = styled.a`
  padding: 10px 20px;
  font-size: ${size.small};
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.5);
  font-weight: 900;
  text-transform: uppercase;
  background-color: ${color.green};
  color: ${color.black};
  display: inline-block;
    margin-bottom: 0;
    text-align: center;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    outline: 0;
    white-space: nowrap;
    border-radius: 999em;
    transition: 100ms background-color, 100ms border-color, 100ms color;
  ${media.sm`
    padding-left: 40px;
    padding-right: 40px;
    font-size: ${size.medium};
  `}
  &:hover,
  &:focus {
    color: ${color.white}
    background-color: ${color.darkGrey}
  }
`;


export default () => <Button href={this.props.href}>{this.props.children}</Button>;
