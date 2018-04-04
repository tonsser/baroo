'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  list-style-type: none;\n  background: #ececec;\n  color: black;\n  > ul {\n    list-style-type: none;\n    padding-left: 0;\n    margin: 0;\n\n  }\n'], ['\n  list-style-type: none;\n  background: #ececec;\n  color: black;\n  > ul {\n    list-style-type: none;\n    padding-left: 0;\n    margin: 0;\n\n  }\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  display: flex;\n  padding: 8px 16px;\n  margin: 0;\n  align-items: center;\n  text-decoration: none;\n  position: relative;\n  user-select: none;\n'], ['\n  display: flex;\n  padding: 8px 16px;\n  margin: 0;\n  align-items: center;\n  text-decoration: none;\n  position: relative;\n  user-select: none;\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  display: flex;\n  justify-content: flex-start;\n  min-width: 56px;\n  > img {\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n  }\n'], ['\n  display: flex;\n  justify-content: flex-start;\n  min-width: 56px;\n  > img {\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n  }\n']),
    _templateObject4 = _taggedTemplateLiteralLoose(['\n  display: flex;\n  flex: 1 1 auto;\n  overflow: hidden;\n  align-items: flex-start;\n  justify-content: center;\n  flex-direction: column;\n'], ['\n  display: flex;\n  flex: 1 1 auto;\n  overflow: hidden;\n  align-items: flex-start;\n  justify-content: center;\n  flex-direction: column;\n']),
    _templateObject5 = _taggedTemplateLiteralLoose(['\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 100%;\n'], ['\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 100%;\n']),
    _templateObject6 = _taggedTemplateLiteralLoose(['\n  height:  24px;\n  line-height: 24px;\n  position: relative;\n  text-align: left;\n  font-weight: bold;\n'], ['\n  height:  24px;\n  line-height: 24px;\n  position: relative;\n  text-align: left;\n  font-weight: bold;\n']),
    _templateObject7 = _taggedTemplateLiteralLoose(['\n  font-size: 14px;\n  > img {\n    width: 20px;\n    height: 20px;\n    padding: 4px;\n    background-color: white;\n    vertical-align: middle;\n    border-radius: 50%;\n    margin-right: 6px;\n\n  }\n'], ['\n  font-size: 14px;\n  > img {\n    width: 20px;\n    height: 20px;\n    padding: 4px;\n    background-color: white;\n    vertical-align: middle;\n    border-radius: 50%;\n    margin-right: 6px;\n\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var List = _styledComponents2.default.div(_templateObject);
var Item = _styledComponents2.default.div(_templateObject2);

var Avatar = _styledComponents2.default.div(_templateObject3);

var Content = _styledComponents2.default.div(_templateObject4);

var Title = _styledComponents2.default.div(_templateObject5);

var Header = Title.extend(_templateObject6);

var Description = Title.extend(_templateObject7);

List.Item = Item;
List.Avatar = Avatar;
List.Content = Content;
List.Header = Header;
List.Description = Description;

exports.default = List;
module.exports = exports['default'];