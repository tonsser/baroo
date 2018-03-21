import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Doughnut } from 'react-chartjs';

import { size } from '../Themes/Fonts';
import color from '../Themes/Colors';


const StatBadge = (props) => {
  const chartOptions = {
    segmentShowStroke: false,
    segmentStrokeColor: '#fff',
    segmentStrokeWidth: 2,
    percentageInnerCutout: 90,
    animationSteps: 30,
    animationEasing: 'easeInCubic',
    animateRotate: true,
    animateScale: false,
    showTooltips: false,
  };

  const chartData = [
    {
      value: props.progress,
      color: props.color,
      highlight: props.color,
    },
    {
      value: 1 - props.progress,
      color: '#313131',
      highlight: '#313131',
    },
  ];
  return (
    <Doughnut data={chartData} options={chartOptions} width="60" height="60" />
  );
};

StatBadge.propTypes = {
  color: PropTypes.string,
  progress: PropTypes.number.isRequired,

};

StatBadge.defaultProps = { color: color.blue };
export default StatBadge;
