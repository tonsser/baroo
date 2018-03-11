import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { Div } from '../FlexboxGrid';
import Button from '../Button';

const Header = Div.extend`
  position: absolute;
  right: 0;
  left: 0;
  z-index: 1000;
  padding-top: 16px;
  padding-bottom: 16px;
  ${props => props.type === 'black' && css`
    background-color: black;
  `
}
`;
const Logo = styled.img`
  height: 34px;
`;
const Link = Div.extend`
  letter-spacing: 0.3px;
  border-bottom: 1px solid white;
  padding-bottom: 2px;
  color: white
`;

const Separator = Div.extend`
  height: 30px;
  border-right: 1px solid white;
  margin: 0 20px;
`;
export default class extends Component {
  render() {
    const { logo, cta, link } = this.props;
    const showCta = cta !== false;
    const showLogo = logo !== false;
    const showLink = link !== false;
    return (<Header {...this.props}>
      <Div container>
        <Div row betweenXs middleXs>
          <Div colXs>
            {showLogo && <Logo alt="logo" src={logo} />}
          </Div>
          <Div colXs row middleXs endXs>
            {showLink && <Link><a href={link.url} target="_blank">{link.title}</a></Link>}
            {showLink && <Separator />}
            {showCta && <Div ><Button href={cta.url}>{cta.title}</Button></Div>}
          </Div>
        </Div>
      </Div>
    </Header>);
  }
}
