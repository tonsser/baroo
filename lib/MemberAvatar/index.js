'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  text-align: center;\n  min-height: 345px;\n  cursor: pointer;\n'], ['\n  text-align: center;\n  min-height: 345px;\n  cursor: pointer;\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  width: 60%;\n  border-radius: 50%;\n  mask-image: radial-gradient(circle, #fff, #000);\n  display: inline-block;\n  margin: 2em 0 1.5em;\n  overflow: hidden;\n  z-index: 1;\n  position: relative;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  img {\n    width: 100%;\n    transition: transform 0.2s;\n    z-index: 0;\n    position: relative;\n  }\n  &:hover img {\n    transform: scale(1.2);\n  }\n'], ['\n  width: 60%;\n  border-radius: 50%;\n  mask-image: radial-gradient(circle, #fff, #000);\n  display: inline-block;\n  margin: 2em 0 1.5em;\n  overflow: hidden;\n  z-index: 1;\n  position: relative;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  img {\n    width: 100%;\n    transition: transform 0.2s;\n    z-index: 0;\n    position: relative;\n  }\n  &:hover img {\n    transform: scale(1.2);\n  }\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  font-weight: 500;\n  font-size: 22px;\n  line-height: 30px;\n  margin: 0;\n'], ['\n  font-weight: 500;\n  font-size: 22px;\n  line-height: 30px;\n  margin: 0;\n']),
    _templateObject4 = _taggedTemplateLiteralLoose(['\n  font-weight: 300;\n  color: rgba(255,255,255,0.6);\n  margin: 0;\n'], ['\n  font-weight: 300;\n  color: rgba(255,255,255,0.6);\n  margin: 0;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var MemberAvatar = _styledComponents2.default.div(_templateObject);
var MemberPicture = _styledComponents2.default.div(_templateObject2);

var MemberName = _styledComponents2.default.h2(_templateObject3);

var MemberTitle = _styledComponents2.default.p(_templateObject4);

var MemberAvatarComponent = function MemberAvatarComponent(_ref) {
  var onClick = _ref.onClick,
      image = _ref.image,
      name = _ref.name,
      title = _ref.title,
      etc = _objectWithoutProperties(_ref, ['onClick', 'image', 'name', 'title']);

  return _react2.default.createElement(
    MemberAvatar,
    _extends({ onClick: onClick }, etc),
    _react2.default.createElement(
      MemberPicture,
      null,
      image.length !== 0 && _react2.default.createElement('img', { src: image, alt: name })
    ),
    name.length !== 0 && _react2.default.createElement(
      MemberName,
      null,
      name
    ),
    title.length !== 0 && _react2.default.createElement(
      MemberTitle,
      null,
      title
    )
  );
};

MemberAvatarComponent.propTypes = process.env.NODE_ENV !== "production" ? {
  image: _propTypes2.default.string,
  name: _propTypes2.default.string,
  title: _propTypes2.default.string,
  onClick: _propTypes2.default.func
} : {};

MemberAvatarComponent.defaultProps = {
  image: '',
  name: '',
  title: '',
  onClick: function onClick() {}
};

exports.default = MemberAvatarComponent;
module.exports = exports['default'];