'use strict';

exports.__esModule = true;
exports.default = undefined;

var _templateObject = _taggedTemplateLiteralLoose(['\n  background: url(', ') no-repeat center center;\n  background-size: cover;\n  padding: 7em 0 4em;\n  ', '\n'], ['\n  background: url(', ') no-repeat center center;\n  background-size: cover;\n  padding: 7em 0 4em;\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n    background-attachment: fixed;\n  '], ['\n    background-attachment: fixed;\n  ']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  text-align: center;\n  font-size: 70px;\n  font-weight: 900;\n  color: white;\n  margin: 0;\n'], ['\n  text-align: center;\n  font-size: 70px;\n  font-weight: 900;\n  color: white;\n  margin: 0;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _FlexboxGrid = require('../FlexboxGrid');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var PictureHeader = _FlexboxGrid.Div.extend(_templateObject, function (props) {
  return props.imageUrl;
}, function (props) {
  return props.parallax && (0, _styledComponents.css)(_templateObject2);
});

var Title = _styledComponents2.default.h1(_templateObject3);

var _default = function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  _default.prototype.render = function render() {
    var _props = this.props,
        title = _props.title,
        children = _props.children;

    return _react2.default.createElement(
      PictureHeader,
      this.props,
      title && _react2.default.createElement(
        _FlexboxGrid.Div,
        { container: true },
        _react2.default.createElement(
          _FlexboxGrid.Div,
          { row: true },
          _react2.default.createElement(
            _FlexboxGrid.Div,
            { colSm: 8, colSmOffset: 2, colXs: 10, colXsOffset: 1 },
            _react2.default.createElement(
              Title,
              null,
              title
            )
          )
        )
      ),
      !title && { children: children }
    );
  };

  return _default;
}(_react.Component);

exports.default = _default;
module.exports = exports['default'];