import React from 'react';
import styled, { css } from 'styled-components';
import media from '../Themes/Media';
import { size } from '../Themes/Fonts';
import color from '../Themes/Colors';

const ButtonLarge = css`
  font-size: ${size.large}
  padding: 14px 24px;
`;

const ButtonSmall = css`
  font-size: ${size.small}
  padding: 8px 18px;
`;

const ButtonExtraSmall = css`
  font-size: ${size.tiny}
  padding: 6px 14px;
`;
const ButtonOutline = css`
  background-color: transparent;
  color: ${color.green};
  border-color: ${color.green};
  &:hover,
  &:focus {
    opacity: 0.6;
    color: inherit;
  }
`;

const ButtonReverse = css`
  color:  ${color.green};
  background-color: black;
  &:hover,
  &:focus {
    opacity: 0.6;
    color: ${color.green};
  }
`;

const ButtonOutlineReverse = css`
  background-color: transparent;
  color: black;
  border-color: black;
  &:hover,
  &:focus {
    opacity: 0.6;
    color: black;
  }
`;
const Button = styled.a`
  padding: 10px 20px;
  font-size: ${size.medium};
  font-weight: 900;
  user-select: none;
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
  &:hover,
  &:focus {
    opacity: 0.6;
    color: inherit;
  }
  ${(props) => props.disabled && css`
    opacity: 0.5;
  `}
  ${(props) => props.btnLg && ButtonLarge}
  ${(props) => props.btnSm && ButtonSmall}
  ${(props) => props.btnXs && ButtonExtraSmall}
  ${(props) => props.btnOutline && ButtonOutline}
  ${(props) => props.btnOutlineReverse && ButtonOutlineReverse}
  ${(props) => props.btnReverse && ButtonReverse}
`;


export default Button;
