'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  background: black;\n  padding-top: 60px;\n  padding-bottom: 30px;\n  color: #b2b2b2;\n\n  h4 {\n     text-transform: uppercase;\n     margin: 0 0 0.5em;\n     font-size: 16px;\n     line-height: 26px;\n     font-weight: 300;\n   }\n\n   ul {\n     margin: 0 0 2em;\n     padding: 0;\n     min-height: 100px;\n\n     li {\n       margin: 0;\n       list-style: none;\n\n       a {\n         color: white;\n         transition: color .1s;\n         &:hover {\n           color: ', '\n         }\n       }\n     }\n   }\n'], ['\n  background: black;\n  padding-top: 60px;\n  padding-bottom: 30px;\n  color: #b2b2b2;\n\n  h4 {\n     text-transform: uppercase;\n     margin: 0 0 0.5em;\n     font-size: 16px;\n     line-height: 26px;\n     font-weight: 300;\n   }\n\n   ul {\n     margin: 0 0 2em;\n     padding: 0;\n     min-height: 100px;\n\n     li {\n       margin: 0;\n       list-style: none;\n\n       a {\n         color: white;\n         transition: color .1s;\n         &:hover {\n           color: ', '\n         }\n       }\n     }\n   }\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  text-indent: -10000px;\n  display: block;\n  margin-bottom: 0.5em;\n  background: transparent url(', ') no-repeat top left;\n  width: 159px;\n  height: 34px;\n  background-size: 159px 34px;\n'], ['\n  text-indent: -10000px;\n  display: block;\n  margin-bottom: 0.5em;\n  background: transparent url(', ') no-repeat top left;\n  width: 159px;\n  height: 34px;\n  background-size: 159px 34px;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _FlexboxGrid = require('../FlexboxGrid');

var _Colors = require('../Themes/Colors');

var _Colors2 = _interopRequireDefault(_Colors);

var _Forms = require('../Forms');

var _Forms2 = _interopRequireDefault(_Forms);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var Select = _Forms2.default.Select;

var Footer = _FlexboxGrid.Div.extend(_templateObject, _Colors2.default.green);

var Logo = _styledComponents2.default.li(_templateObject2, function (props) {
  return props.url;
});

var getCategory = function getCategory(cat) {
  return _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement(
      'h4',
      null,
      cat.title
    ),
    _react2.default.createElement(
      'ul',
      null,
      cat.items.map(function (item) {
        return _react2.default.createElement(
          'li',
          null,
          item.link ? _react2.default.createElement(
            'a',
            { href: item.link },
            item.text
          ) : item.text
        );
      })
    )
  );
};

exports.default = function (props) {
  var categories = props.categories,
      logoUrl = props.logoUrl;

  return _react2.default.createElement(
    Footer,
    { containerFluid: true },
    _react2.default.createElement(
      _FlexboxGrid.Div,
      { container: true },
      _react2.default.createElement(
        _FlexboxGrid.Div,
        { row: true },
        categories[0] && _react2.default.createElement(
          _FlexboxGrid.Div,
          { colMd: 2, colSm: 4, colXs: 6 },
          getCategory(categories[0])
        ),
        categories[1] && _react2.default.createElement(
          _FlexboxGrid.Div,
          { colMd: 3, colSm: 4, colXs: 6 },
          getCategory(categories[1])
        ),
        categories[2] && _react2.default.createElement(
          _FlexboxGrid.Div,
          { colMd: 2, colSm: 4, colXs: 6 },
          getCategory(categories[2])
        ),
        categories[3] && _react2.default.createElement(
          _FlexboxGrid.Div,
          { colMd: 2, colSm: 4, colXs: 6 },
          getCategory(categories[3])
        ),
        _react2.default.createElement(
          _FlexboxGrid.Div,
          { colMd: 3, colSm: 6, firstMd: true, colXs: 12 },
          _react2.default.createElement(
            _FlexboxGrid.Div,
            { row: true },
            _react2.default.createElement(
              _FlexboxGrid.Div,
              { colXs: 6, colSm: 12 },
              _react2.default.createElement(
                Logo,
                { url: logoUrl },
                'Tonsser'
              )
            ),
            _react2.default.createElement(
              _FlexboxGrid.Div,
              { colXs: 6, colSm: 12 },
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  'small',
                  null,
                  'Language'
                )
              ),
              _react2.default.createElement(
                Select,
                null,
                _react2.default.createElement(
                  'option',
                  { value: 'no' },
                  'Norsk (NOR)'
                ),
                _react2.default.createElement(
                  'option',
                  { value: 'se' },
                  'Svenska (SWE)'
                ),
                _react2.default.createElement(
                  'option',
                  { value: 'dk' },
                  'Dansk (DK)'
                ),
                _react2.default.createElement(
                  'option',
                  { selected: 'selected', value: 'en' },
                  'English (UK)'
                ),
                _react2.default.createElement(
                  'option',
                  { value: 'fr' },
                  'Fran\xE7ais (FR)'
                ),
                _react2.default.createElement(
                  'option',
                  { value: 'de' },
                  'Deutsch (DE)'
                )
              )
            )
          )
        )
      )
    )
  );
};

module.exports = exports['default'];