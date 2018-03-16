import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { size } from '../Themes/Fonts';
import color from '../Themes/Colors';

const Progress = styled.div`
  display: flex;
  border-radius: ${(props) => props.height / 2}px;
  background-color: ${color.activityGrey};
  overflow: hidden;
  font-size: ${size.tiny}
  height: ${(props) => props.height}px;
  position: relative;
`;

const buildGradient = (colors) => {
  const segments = colors.map((c, i) => `${c} ${(100 * i) / (colors.length - 1)}%`);
  return `linear-gradient(to right, ${segments.join(',')})`;
};

const getBarColor = (props) => {
  if (props.progress >= props.delimiter) {
    if (props.successColors.length === 1) {
      return props.successColors[0];
    }
    return buildGradient(props.successColors);
  }

  if (props.failColors.length === 1) {
    return props.failColors[0];
  }
  return buildGradient(props.failColors);
};

const getBoxShadow = (props) => {
  const shadowColor = props.progress >= props.delimiter ? props.successColors.slice(-1) : props.failColors.slice(-1);
  return `10px 0px 100px 0px ${shadowColor}`;
};

const Bar = styled.div`
  width: ${(props) => props.progress}%
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  text-align: center;
  background: ${(props) => getBarColor(props)};
  transition: width .6s ease;
  box-shadow: ${(props) => getBoxShadow(props)};
`;

const Delimiter = styled.div`
  width: 2px;
  background: white;
  height: 100%;
  position: absolute;
  left: ${(props) => props.delimiter}%;
`;

const ProgressBar = (props) => (
  <Progress {...props}>
    <Bar {...props} />
    {props.showDelimiter && <Delimiter {...props} />}
  </Progress>
);

ProgressBar.propTypes = {
  height: PropTypes.number,
  progress: PropTypes.number.isRequired,
  showDelimiter: PropTypes.bool,
  delimiter: PropTypes.number,
  successColors: PropTypes.arrayOf(PropTypes.string),
  failColors: PropTypes.arrayOf(PropTypes.string),

};

ProgressBar.defaultProps = {
  height: 12,
  showDelimiter: false,
  delimiter: 60,
  successColors: ['#00baf9', '#00ffc8'],
  failColors: ['#fb4a4a', '#f9ff00'],
};
export default ProgressBar;
