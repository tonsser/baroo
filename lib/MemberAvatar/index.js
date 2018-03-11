'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  text-align: center;\n  min-height: 345px;\n'], ['\n  text-align: center;\n  min-height: 345px;\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  width: 60%;\n  border-radius: 50%;\n  mask-image: radial-gradient(circle, #fff, #000);\n  display: inline-block;\n  margin: 2em 0 1.5em;\n  overflow: hidden;\n  z-index: 1;\n  position: relative;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  img {\n    width: 100%;\n    transition: transform 0.2s;\n    z-index: 0;\n    position: relative;\n  }\n  &:hover img {\n    transform: scale(1.2);\n  }\n'], ['\n  width: 60%;\n  border-radius: 50%;\n  mask-image: radial-gradient(circle, #fff, #000);\n  display: inline-block;\n  margin: 2em 0 1.5em;\n  overflow: hidden;\n  z-index: 1;\n  position: relative;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  img {\n    width: 100%;\n    transition: transform 0.2s;\n    z-index: 0;\n    position: relative;\n  }\n  &:hover img {\n    transform: scale(1.2);\n  }\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  font-weight: 500;\n  font-size: 22px;\n  line-height: 30px;\n  margin: 0;\n'], ['\n  font-weight: 500;\n  font-size: 22px;\n  line-height: 30px;\n  margin: 0;\n']),
    _templateObject4 = _taggedTemplateLiteralLoose(['\n  font-weight: 300;\n  color: rgba(255,255,255,0.6);\n  margin: 0;\n'], ['\n  font-weight: 300;\n  color: rgba(255,255,255,0.6);\n  margin: 0;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var MemberAvatar = _styledComponents2.default.div(_templateObject);
var MemberPicture = _styledComponents2.default.div(_templateObject2);

var MemberName = _styledComponents2.default.h2(_templateObject3);

var MemberTitle = _styledComponents2.default.p(_templateObject4);

exports.default = function (props) {
  return _react2.default.createElement(
    MemberAvatar,
    null,
    _react2.default.createElement(
      MemberPicture,
      null,
      _react2.default.createElement('img', { src: props.image, alt: props.name })
    ),
    _react2.default.createElement(
      MemberName,
      null,
      props.name
    ),
    _react2.default.createElement(
      MemberTitle,
      null,
      props.title
    )
  );
};

module.exports = exports['default'];