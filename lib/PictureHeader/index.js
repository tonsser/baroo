'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  background: url(', ') no-repeat center center;\n  background-size: cover;\n  padding: 7em 0 4em;\n  ', '\n'], ['\n  background: url(', ') no-repeat center center;\n  background-size: cover;\n  padding: 7em 0 4em;\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n    background-attachment: fixed;\n  '], ['\n    background-attachment: fixed;\n  ']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  text-align: center;\n  font-size: 70px;\n  font-weight: 900;\n  color: white;\n  margin: 0;\n'], ['\n  text-align: center;\n  font-size: 70px;\n  font-weight: 900;\n  color: white;\n  margin: 0;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _FlexboxGrid = require('../FlexboxGrid');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var PictureHeader = _FlexboxGrid.Div.extend(_templateObject, function (props) {
  return props.imageUrl;
}, function (props) {
  return props.parallax && (0, _styledComponents.css)(_templateObject2);
});

var Title = _styledComponents2.default.h1(_templateObject3);

exports.default = function (props) {
  var title = props.title,
      children = props.children;

  return _react2.default.createElement(
    PictureHeader,
    props,
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

module.exports = exports['default'];