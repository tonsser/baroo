import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { Div } from '../FlexboxGrid';


const PictureHeader = Div.extend`
  background: url(${(props) => props.imageUrl}) no-repeat center center;
  background-size: cover;
  padding: 7em 0 4em;
  ${(props) => props.parallax && css`
    background-attachment: fixed;
  `}
`;

const Title = styled.h1`
  text-align: center;
  font-size: 70px;
  font-weight: 900;
  color: white;
  margin: 0;
`;
export default (props) => {
  const { title, children } = props;
  return (
    <PictureHeader {...props}>
      {title &&
      <Div container>
        <Div row>
          <Div colSm={8} colSmOffset={2} colXs={10} colXsOffset={1}>
            <Title>{title}</Title>
          </Div>
        </Div>
      </Div>
      }
      {!title && { children }}
    </PictureHeader>
  );
};
