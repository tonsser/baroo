import React from 'react';
import styled from 'styled-components';


const FormControl = styled.div`
display: block;
width: 100%;
padding: 0.375rem 0.75rem;
font-size: 1rem;
line-height: 1.5;
color: white;
background-color: black;
background-image: none;
background-clip: padding-box;
border: 1px solid white;
border-radius: 0.25rem;
transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
&:focus {
  outline: none;
  color: white;
  background-color: black;
  border-color: white;
}
`;

const Select = FormControl.withComponent('select').extend`
    height: calc(2.25rem + 2px);
`;
export default {
  FormControl,
  Select,
};
