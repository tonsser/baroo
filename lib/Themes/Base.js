'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n  @-ms-viewport {\n  width: device-width;\n  }\n  html {\n  box-sizing: border-box;\n  -ms-overflow-style: scrollbar;\n  }\n  body {\n    padding: 0;\n  }\n  *,\n  *::before,\n  *::after {\n  box-sizing: inherit;\n  }\n\n  a,\n  a:hover,\n  a:focus,\n  a:active,\n  a:visited {\n    text-decoration: none;\n  }\n'], ['\n  ', '\n  @-ms-viewport {\n  width: device-width;\n  }\n  html {\n  box-sizing: border-box;\n  -ms-overflow-style: scrollbar;\n  }\n  body {\n    padding: 0;\n  }\n  *,\n  *::before,\n  *::after {\n  box-sizing: inherit;\n  }\n\n  a,\n  a:hover,\n  a:focus,\n  a:active,\n  a:visited {\n    text-decoration: none;\n  }\n']);

var _styledNormalize = require('styled-normalize');

var _styledNormalize2 = _interopRequireDefault(_styledNormalize);

var _styledComponents = require('styled-components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

exports.default = function () {
  return (0, _styledComponents.injectGlobal)(_templateObject, _styledNormalize2.default);
};

module.exports = exports['default'];