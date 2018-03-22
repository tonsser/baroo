'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  position: absolute;\n  right: 0;\n  left: 0;\n  z-index: 1000;\n  padding-top: 16px;\n  padding-bottom: 16px;\n  ', '\n'], ['\n  position: absolute;\n  right: 0;\n  left: 0;\n  z-index: 1000;\n  padding-top: 16px;\n  padding-bottom: 16px;\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n    background-color: black;\n  '], ['\n    background-color: black;\n  ']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  height: 34px;\n'], ['\n  height: 34px;\n']),
    _templateObject4 = _taggedTemplateLiteralLoose(['\n  letter-spacing: 0.3px;\n  border-bottom: 1px solid white;\n  padding-bottom: 2px;\n  color: white;\n'], ['\n  letter-spacing: 0.3px;\n  border-bottom: 1px solid white;\n  padding-bottom: 2px;\n  color: white;\n']),
    _templateObject5 = _taggedTemplateLiteralLoose(['\n  height: 30px;\n  border-right: 1px solid white;\n  margin: 0 20px;\n'], ['\n  height: 30px;\n  border-right: 1px solid white;\n  margin: 0 20px;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _FlexboxGrid = require('../FlexboxGrid');

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var Header = _FlexboxGrid.Div.extend(_templateObject, function (props) {
  return props.type === 'black' && (0, _styledComponents.css)(_templateObject2);
});
var Logo = _styledComponents2.default.img(_templateObject3);
var Link = _FlexboxGrid.Div.withComponent('a').extend(_templateObject4);

var Separator = _FlexboxGrid.Div.extend(_templateObject5);

exports.default = function (props) {
  var logo = props.logo,
      cta = props.cta,
      link = props.link;

  var showCta = cta !== false;
  var showLogo = logo !== false;
  var showLink = link !== false;
  return _react2.default.createElement(
    Header,
    props,
    _react2.default.createElement(
      _FlexboxGrid.Div,
      { container: true },
      _react2.default.createElement(
        _FlexboxGrid.Div,
        { row: true, middleXs: true },
        _react2.default.createElement(
          _FlexboxGrid.Div,
          { colXs: 4 },
          showLogo && _react2.default.createElement(Logo, { alt: 'logo', src: logo })
        ),
        _react2.default.createElement(
          _FlexboxGrid.Div,
          { colXs: 8 },
          _react2.default.createElement(
            _FlexboxGrid.Div,
            { row: true, middleXs: true, endXs: true, noGutters: true },
            showLink && _react2.default.createElement(
              Link,
              { dNoneXs: true, dBlockSm: true, href: link.url, target: '_blank' },
              link.title
            ),
            showLink && _react2.default.createElement(Separator, { dNoneXs: true, dBlockSm: true }),
            showCta && _react2.default.createElement(
              _FlexboxGrid.Div,
              null,
              _react2.default.createElement(
                _Button2.default,
                { href: cta.url },
                cta.title
              )
            )
          )
        )
      )
    )
  );
};

module.exports = exports['default'];