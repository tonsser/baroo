'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  color: ', ';\n  font-size: ', ';\n  font-weight: bold;\n  ', '\n'], ['\n  color: ', ';\n  font-size: ', ';\n  font-weight: bold;\n  ', '\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Colors = require('../Themes/Colors');

var _Colors2 = _interopRequireDefault(_Colors);

var _Fonts = require('../Themes/Fonts');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var up = '&#x25B2';
var down = '&#x25BC';
var stable = '&#x25AC';

var Evo = _styledComponents2.default.div(_templateObject, function (props) {
  return props.type === 'up' ? _Colors2.default.greenBadge : props.type === 'down' ? _Colors2.default.redBadge : _Colors2.default.blueBadge;
}, _Fonts.size.small, function (props) {
  return props.type === 'stable' && '\n    > span {\n      vertical-align: text-top;\n    }\n  ';
});

var Evolution = function Evolution(props) {
  var value = +parseFloat(props.value.toFixed(2));
  var symbol = stable;
  var type = 'stable';
  if (value > 0) {
    symbol = up;
    type = 'up';
  } else if (value < 0) {
    symbol = down;
    type = 'down';
    value = -value;
  }
  return _react2.default.createElement(
    Evo,
    { type: type },
    _react2.default.createElement('span', { dangerouslySetInnerHTML: { __html: symbol } }),
    ' ',
    value
  );
};

Evolution.propTypes = process.env.NODE_ENV !== "production" ? { value: _propTypes2.default.number.isRequired } : {};

exports.default = Evolution;
module.exports = exports['default'];