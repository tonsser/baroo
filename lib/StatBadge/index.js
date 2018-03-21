'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactChartjs = require('react-chartjs');

var _Fonts = require('../Themes/Fonts');

var _Colors = require('../Themes/Colors');

var _Colors2 = _interopRequireDefault(_Colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StatBadge = function StatBadge(props) {
  var chartOptions = {
    segmentShowStroke: false,
    segmentStrokeColor: '#fff',
    segmentStrokeWidth: 2,
    percentageInnerCutout: 90,
    animationSteps: 30,
    animationEasing: 'easeInCubic',
    animateRotate: true,
    animateScale: false,
    showTooltips: false
  };

  var chartData = [{
    value: props.progress,
    color: props.color,
    highlight: props.color
  }, {
    value: 1 - props.progress,
    color: '#313131',
    highlight: '#313131'
  }];
  return _react2.default.createElement(_reactChartjs.Doughnut, { data: chartData, options: chartOptions, width: '60', height: '60' });
};

StatBadge.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes2.default.string,
  progress: _propTypes2.default.number.isRequired

} : {};

StatBadge.defaultProps = { color: _Colors2.default.blue };
exports.default = StatBadge;
module.exports = exports['default'];