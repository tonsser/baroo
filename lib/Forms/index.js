'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\ndisplay: block;\nwidth: 100%;\npadding: 0.375rem 0.75rem;\nfont-size: 1rem;\nline-height: 1.5;\ncolor: white;\nbackground-color: black;\nbackground-image: none;\nbackground-clip: padding-box;\nborder: 1px solid white;\nborder-radius: 0.25rem;\ntransition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n&:focus {\n  outline: none;\n  color: white;\n  background-color: black;\n  border-color: white;\n}\n'], ['\ndisplay: block;\nwidth: 100%;\npadding: 0.375rem 0.75rem;\nfont-size: 1rem;\nline-height: 1.5;\ncolor: white;\nbackground-color: black;\nbackground-image: none;\nbackground-clip: padding-box;\nborder: 1px solid white;\nborder-radius: 0.25rem;\ntransition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n&:focus {\n  outline: none;\n  color: white;\n  background-color: black;\n  border-color: white;\n}\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n    height: calc(2.25rem + 2px);\n'], ['\n    height: calc(2.25rem + 2px);\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var FormControl = _styledComponents2.default.div(_templateObject);

var Select = FormControl.withComponent('select').extend(_templateObject2);
exports.default = {
  FormControl: FormControl,
  Select: Select
};
module.exports = exports['default'];