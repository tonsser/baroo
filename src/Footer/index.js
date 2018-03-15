import React, { Fragment } from 'react';
import styled, { css } from 'styled-components';
import { Div } from '../FlexboxGrid';
import Colors from '../Themes/Colors';
import Forms from '../Forms';

const { Select } = Forms;
const Footer = Div.extend`
  background: black;
  padding-top: 60px;
  padding-bottom: 30px;
  color: #b2b2b2;

  h4 {
     text-transform: uppercase;
     margin: 0 0 0.5em;
     font-size: 16px;
     line-height: 26px;
     font-weight: 300;
   }

   ul {
     margin: 0 0 2em;
     padding: 0;
     min-height: 100px;

     li {
       margin: 0;
       list-style: none;

       a {
         color: white;
         transition: color .1s;
         &:hover {
           color: ${Colors.green}
         }
       }
     }
   }
`;

const Logo = styled.li`
  text-indent: -10000px;
  display: block;
  margin-bottom: 0.5em;
  background: transparent url(${(props) => props.url}) no-repeat top left;
  width: 159px;
  height: 34px;
  background-size: 159px 34px;
`;


const getCategory = (cat) => (
  <Fragment>
    <h4>{cat.title}</h4>
    <ul>
      {cat.items.map((item) => (
        <li>
          {item.link ? <a href={item.link}>{item.text}</a>
            : item.text}
        </li>
      ))}
    </ul>
  </Fragment>
);

export default (props) => {
  const { categories, logoUrl } = props;
  return (
    <Footer containerFluid>
      <Div container>
        <Div row>

          {categories[0] &&
            <Div colMd={2} colSm={4} colXs={6}>
              {getCategory(categories[0])}
            </Div>
          }
          {categories[1] &&
            <Div colMd={3} colSm={4} colXs={6}>
              {getCategory(categories[1])}
            </Div>
          }
          {categories[2] &&
            <Div colMd={2} colSm={4} colXs={6}>
              {getCategory(categories[2])}
            </Div>
          }
          {categories[3] &&
            <Div colMd={2} colSm={4} colXs={6}>
              {getCategory(categories[3])}
            </Div>
          }
          <Div colMd={3} colSm={6} firstMd colXs={12}>
            <Div row>
              <Div colXs={6} colSm={12}>
                <Logo url={logoUrl}>Tonsser</Logo>
              </Div>
              <Div colXs={6} colSm={12}>
                <div><small>Language</small></div>
                <Select >
                  <option value="no">Norsk (NOR)</option>
                  <option value="se">Svenska (SWE)</option>
                  <option value="dk">Dansk (DK)</option>
                  <option selected="selected" value="en">English (UK)</option>
                  <option value="fr">Français (FR)</option>
                  <option value="de">Deutsch (DE)</option>
                </Select>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
    </Footer>
  );
};
