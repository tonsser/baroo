'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  font-size: ', '\n  padding: 14px 24px;\n'], ['\n  font-size: ', '\n  padding: 14px 24px;\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  font-size: ', '\n  padding: 8px 18px;\n'], ['\n  font-size: ', '\n  padding: 8px 18px;\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  font-size: ', '\n  padding: 6px 14px;\n'], ['\n  font-size: ', '\n  padding: 6px 14px;\n']),
    _templateObject4 = _taggedTemplateLiteralLoose(['\n  background-color: transparent;\n  color: ', ';\n  border-color: ', ';\n  &:hover,\n  &:focus {\n    opacity: 0.6;\n    color: ', ';\n  }\n'], ['\n  background-color: transparent;\n  color: ', ';\n  border-color: ', ';\n  &:hover,\n  &:focus {\n    opacity: 0.6;\n    color: ', ';\n  }\n']),
    _templateObject5 = _taggedTemplateLiteralLoose(['\n  color:  ', ';\n  background-color: black;\n  &:hover,\n  &:focus {\n    opacity: 0.6;\n    color: ', ';\n  }\n'], ['\n  color:  ', ';\n  background-color: black;\n  &:hover,\n  &:focus {\n    opacity: 0.6;\n    color: ', ';\n  }\n']),
    _templateObject6 = _taggedTemplateLiteralLoose(['\n  background-color: transparent;\n  color: black;\n  border-color: black;\n  &:hover,\n  &:focus {\n    opacity: 0.6;\n    color: black;\n  }\n'], ['\n  background-color: transparent;\n  color: black;\n  border-color: black;\n  &:hover,\n  &:focus {\n    opacity: 0.6;\n    color: black;\n  }\n']),
    _templateObject7 = _taggedTemplateLiteralLoose(['\n  padding: 10px 20px;\n  font-size: ', ';\n  font-weight: 900;\n  user-select: none;\n  text-transform: uppercase;\n  background-color: ', ';\n  color: ', ';\n  display: inline-block;\n    margin-bottom: 0;\n    text-align: center;\n    vertical-align: middle;\n    touch-action: manipulation;\n    cursor: pointer;\n    background-image: none;\n    border: 1px solid transparent;\n    outline: 0;\n    white-space: nowrap;\n    border-radius: 999em;\n    transition: 100ms background-color, 100ms border-color, 100ms color;\n  &:hover,\n  &:focus {\n    opacity: 0.6;\n    color: ', ';\n  }\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'], ['\n  padding: 10px 20px;\n  font-size: ', ';\n  font-weight: 900;\n  user-select: none;\n  text-transform: uppercase;\n  background-color: ', ';\n  color: ', ';\n  display: inline-block;\n    margin-bottom: 0;\n    text-align: center;\n    vertical-align: middle;\n    touch-action: manipulation;\n    cursor: pointer;\n    background-image: none;\n    border: 1px solid transparent;\n    outline: 0;\n    white-space: nowrap;\n    border-radius: 999em;\n    transition: 100ms background-color, 100ms border-color, 100ms color;\n  &:hover,\n  &:focus {\n    opacity: 0.6;\n    color: ', ';\n  }\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']),
    _templateObject8 = _taggedTemplateLiteralLoose(['\n    opacity: 0.5;\n  '], ['\n    opacity: 0.5;\n  ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Media = require('../Themes/Media');

var _Media2 = _interopRequireDefault(_Media);

var _Fonts = require('../Themes/Fonts');

var _Colors = require('../Themes/Colors');

var _Colors2 = _interopRequireDefault(_Colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var ButtonLarge = (0, _styledComponents.css)(_templateObject, _Fonts.size.large);

var ButtonSmall = (0, _styledComponents.css)(_templateObject2, _Fonts.size.small);

var ButtonExtraSmall = (0, _styledComponents.css)(_templateObject3, _Fonts.size.tiny);
var ButtonOutline = (0, _styledComponents.css)(_templateObject4, _Colors2.default.green, _Colors2.default.green, _Colors2.default.green);

var ButtonReverse = (0, _styledComponents.css)(_templateObject5, _Colors2.default.green, _Colors2.default.green);

var ButtonOutlineReverse = (0, _styledComponents.css)(_templateObject6);
var Button = _styledComponents2.default.a(_templateObject7, _Fonts.size.medium, _Colors2.default.green, _Colors2.default.black, _Colors2.default.black, function (props) {
  return props.disabled && (0, _styledComponents.css)(_templateObject8);
}, function (props) {
  return props.btnLg && ButtonLarge;
}, function (props) {
  return props.btnSm && ButtonSmall;
}, function (props) {
  return props.btnXs && ButtonExtraSmall;
}, function (props) {
  return props.btnOutline && ButtonOutline;
}, function (props) {
  return props.btnOutlineReverse && ButtonOutlineReverse;
}, function (props) {
  return props.btnReverse && ButtonReverse;
});

exports.default = Button;
module.exports = exports['default'];