'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  text-align: center;\n  cursor: pointer;\n'], ['\n  text-align: center;\n  cursor: pointer;\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  display: inline-block;\n  margin-top: 1em;\n  overflow: hidden;\n  z-index: 1;\n  position: relative;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  background: #202020;\n  border-color: #717171;\n  border-width: 2px;\n  border-style: solid;\n  img {\n    width: 100%;\n    transition: transform 0.2s;\n    z-index: 0;\n    position: relative;\n  }\n  &:hover img {\n    transform: scale(1.2);\n  }\n  ', '\n'], ['\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  display: inline-block;\n  margin-top: 1em;\n  overflow: hidden;\n  z-index: 1;\n  position: relative;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  background: #202020;\n  border-color: #717171;\n  border-width: 2px;\n  border-style: solid;\n  img {\n    width: 100%;\n    transition: transform 0.2s;\n    z-index: 0;\n    position: relative;\n  }\n  &:hover img {\n    transform: scale(1.2);\n  }\n  ', '\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n    width: 80px;\n    height: 80px;\n    margin-top: 2em;\n  '], ['\n    width: 80px;\n    height: 80px;\n    margin-top: 2em;\n  ']),
    _templateObject4 = _taggedTemplateLiteralLoose(['\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 16px;\n  text-transform: uppercase;\n  margin: 0;\n  ', '\n'], ['\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 16px;\n  text-transform: uppercase;\n  margin: 0;\n  ', '\n']),
    _templateObject5 = _taggedTemplateLiteralLoose(['\n    font-size: 16px;\n    line-height: 18px;\n  '], ['\n    font-size: 16px;\n    line-height: 18px;\n  ']),
    _templateObject6 = _taggedTemplateLiteralLoose(['\n  font-weight: 300;\n  opacity: 0.6;\n  margin: 0;\n  font-size: 12px;\n  ', '\n'], ['\n  font-weight: 300;\n  opacity: 0.6;\n  margin: 0;\n  font-size: 12px;\n  ', '\n']),
    _templateObject7 = _taggedTemplateLiteralLoose(['\n    font-size: 14px;\n  '], ['\n    font-size: 14px;\n  ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Media = require('../Themes/Media');

var _Media2 = _interopRequireDefault(_Media);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var MemberAvatar = _styledComponents2.default.div(_templateObject);
var MemberPicture = _styledComponents2.default.div(_templateObject2, _Media2.default.sm(_templateObject3));

var MemberName = _styledComponents2.default.h2(_templateObject4, _Media2.default.sm(_templateObject5));

var MemberTitle = _styledComponents2.default.p(_templateObject6, _Media2.default.sm(_templateObject7));

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
      image && image.length !== 0 && _react2.default.createElement('img', { src: image, alt: name })
    ),
    name && name.length !== 0 && _react2.default.createElement(
      MemberName,
      null,
      name
    ),
    title && title.length !== 0 && _react2.default.createElement(
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