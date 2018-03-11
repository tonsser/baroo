'use strict';

exports.__esModule = true;
exports.default = undefined;

var _templateObject = _taggedTemplateLiteralLoose(['\n  padding: 10px 20px;\n  font-size: ', ';\n  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.5);\n  font-weight: 900;\n  text-transform: uppercase;\n  background-color: ', ';\n  color: ', ';\n  display: inline-block;\n    margin-bottom: 0;\n    text-align: center;\n    vertical-align: middle;\n    touch-action: manipulation;\n    cursor: pointer;\n    background-image: none;\n    border: 1px solid transparent;\n    outline: 0;\n    white-space: nowrap;\n    border-radius: 999em;\n    transition: 100ms background-color, 100ms border-color, 100ms color;\n  ', '\n  &:hover,\n  &:focus {\n    color: ', '\n    background-color: ', '\n  }\n'], ['\n  padding: 10px 20px;\n  font-size: ', ';\n  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.5);\n  font-weight: 900;\n  text-transform: uppercase;\n  background-color: ', ';\n  color: ', ';\n  display: inline-block;\n    margin-bottom: 0;\n    text-align: center;\n    vertical-align: middle;\n    touch-action: manipulation;\n    cursor: pointer;\n    background-image: none;\n    border: 1px solid transparent;\n    outline: 0;\n    white-space: nowrap;\n    border-radius: 999em;\n    transition: 100ms background-color, 100ms border-color, 100ms color;\n  ', '\n  &:hover,\n  &:focus {\n    color: ', '\n    background-color: ', '\n  }\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n    padding-left: 40px;\n    padding-right: 40px;\n    font-size: ', ';\n  '], ['\n    padding-left: 40px;\n    padding-right: 40px;\n    font-size: ', ';\n  ']);

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var Button = _styledComponents2.default.a(_templateObject, _Fonts.size.small, _Colors2.default.green, _Colors2.default.black, _Media2.default.sm(_templateObject2, _Fonts.size.medium), _Colors2.default.white, _Colors2.default.darkGrey);

var _default = function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  _default.prototype.render = function render() {
    return _react2.default.createElement(
      Button,
      { href: this.props.href },
      this.props.children
    );
  };

  return _default;
}(_react.Component);

exports.default = _default;
module.exports = exports['default'];