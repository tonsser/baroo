'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  margin-right: 10px;\n  display: inline-block;\n  ', '\n  ', '\n'], ['\n  margin-right: 10px;\n  display: inline-block;\n  ', '\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n    margin-right: 30px;\n  '], ['\n    margin-right: 30px;\n  ']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n    a {\n      border-bottom: solid 6px ', '\n    }\n  '], ['\n    a {\n      border-bottom: solid 6px ', '\n    }\n  ']),
    _templateObject4 = _taggedTemplateLiteralLoose(['\n  line-height: 3em;\n  border: none;\n  border-bottom: 6px solid transparent;\n  padding: 8px 30px;\n  font-size: 16px;\n  display: block;\n'], ['\n  line-height: 3em;\n  border: none;\n  border-bottom: 6px solid transparent;\n  padding: 8px 30px;\n  font-size: 16px;\n  display: block;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _FlexboxGrid = require('../FlexboxGrid');

var _Media = require('../Themes/Media');

var _Media2 = _interopRequireDefault(_Media);

var _Colors = require('../Themes/Colors');

var _Colors2 = _interopRequireDefault(_Colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var Tab = _FlexboxGrid.Div.extend(_templateObject, _Media2.default.sm(_templateObject2), function (props) {
  return props.active && (0, _styledComponents.css)(_templateObject3, _Colors2.default.green);
});

var Link = _styledComponents2.default.a(_templateObject4);

exports.default = function (props) {
  return _react2.default.createElement(
    Tab,
    props,
    _react2.default.createElement(
      Link,
      props,
      props.children
    )
  );
};

module.exports = exports['default'];