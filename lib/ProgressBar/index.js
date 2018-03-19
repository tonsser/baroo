'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  display: flex;\n  border-radius: ', 'px;\n  background-color: ', ';\n  overflow: hidden;\n  font-size: ', '\n  height: ', 'px;\n  position: relative;\n'], ['\n  display: flex;\n  border-radius: ', 'px;\n  background-color: ', ';\n  overflow: hidden;\n  font-size: ', '\n  height: ', 'px;\n  position: relative;\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  width: ', '%\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  color: white;\n  text-align: center;\n  background: ', ';\n  transition: width .6s ease;\n  box-shadow: ', ';\n'], ['\n  width: ', '%\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  color: white;\n  text-align: center;\n  background: ', ';\n  transition: width .6s ease;\n  box-shadow: ', ';\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  width: 2px;\n  background: white;\n  height: 100%;\n  position: absolute;\n  left: ', '%;\n'], ['\n  width: 2px;\n  background: white;\n  height: 100%;\n  position: absolute;\n  left: ', '%;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Fonts = require('../Themes/Fonts');

var _Colors = require('../Themes/Colors');

var _Colors2 = _interopRequireDefault(_Colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var Progress = _styledComponents2.default.div(_templateObject, function (props) {
  return props.height / 2;
}, _Colors2.default.activityGrey, _Fonts.size.tiny, function (props) {
  return props.height;
});

var buildGradient = function buildGradient(colors) {
  var segments = colors.map(function (c, i) {
    return c + ' ' + 100 * i / (colors.length - 1) + '%';
  });
  return 'linear-gradient(to right, ' + segments.join(',') + ')';
};

var getBarColor = function getBarColor(props) {
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

var getBoxShadow = function getBoxShadow(props) {
  var shadowColor = props.progress >= props.delimiter ? props.successColors.slice(-1) : props.failColors.slice(-1);
  return '10px 0px 100px 0px ' + shadowColor;
};

var Bar = _styledComponents2.default.div(_templateObject2, function (props) {
  return props.progress;
}, function (props) {
  return getBarColor(props);
}, function (props) {
  return getBoxShadow(props);
});

var Delimiter = _styledComponents2.default.div(_templateObject3, function (props) {
  return props.delimiter;
});

var ProgressBar = function ProgressBar(props) {
  return _react2.default.createElement(
    Progress,
    props,
    _react2.default.createElement(Bar, props),
    props.showDelimiter && _react2.default.createElement(Delimiter, props)
  );
};

ProgressBar.propTypes = process.env.NODE_ENV !== "production" ? {
  height: _propTypes2.default.number,
  progress: _propTypes2.default.number.isRequired,
  showDelimiter: _propTypes2.default.bool,
  delimiter: _propTypes2.default.number,
  successColors: _propTypes2.default.arrayOf(_propTypes2.default.string),
  failColors: _propTypes2.default.arrayOf(_propTypes2.default.string)

} : {};

ProgressBar.defaultProps = {
  height: 12,
  showDelimiter: false,
  delimiter: 60,
  successColors: ['#00baf9', '#00ffc8'],
  failColors: ['#fb4a4a', '#f9ff00']
};
exports.default = ProgressBar;
module.exports = exports['default'];