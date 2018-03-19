'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n    @media (min-width: ', 'px) {\n      ', '\n    }'], ['\n    @media (min-width: ', 'px) {\n      ', '\n    }']);

var _styledComponents = require('styled-components');

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var sizes = {
  lg: 1200,
  md: 992,
  sm: 768
};

// Iterate through the sizes and create a media template
var media = Object.keys(sizes).reduce(function (acc, label) {
  acc[label] = function () {
    return (0, _styledComponents.css)(_templateObject, sizes[label], _styledComponents.css.apply(undefined, arguments));
  };

  return acc;
}, {});

exports.default = media;
module.exports = exports['default'];