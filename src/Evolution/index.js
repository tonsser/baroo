import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import color from '../Themes/Colors';
import { size } from '../Themes/Fonts';


const up = '&#x25B2';
const down = '&#x25BC';
const stable = '&#x25AC';

const Evo = styled.div`
  color: ${(props) => (props.type === 'up' ? color.greenBadge : props.type === 'down' ? color.redBadge : color.blueBadge)};
  font-size: ${size.small};
  font-weight: bold;
  ${(props) => props.type === 'stable' && `
    > span {
      vertical-align: text-top;
    }
  `}
`;

const Evolution = (props) => {
  let value = +parseFloat((props.value).toFixed(2));
  let symbol = stable;
  let type = 'stable';
  if (value > 0) {
    symbol = up;
    type = 'up';
  } else if (value < 0) {
    symbol = down;
    type = 'down';
    value = -value;
  }
  return (
    <Evo type={type}><span dangerouslySetInnerHTML={{ __html: symbol }} /> {value}</Evo>
  );
};

Evolution.propTypes = { value: PropTypes.number.isRequired };

export default Evolution;
