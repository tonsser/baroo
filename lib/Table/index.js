'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\ndisplay: flex;\nalign-items: stretch;\njustify-content: space-between;\npadding: 20px 15px;\n'], ['\ndisplay: flex;\nalign-items: stretch;\njustify-content: space-between;\npadding: 20px 15px;\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  width: 100%;\n  max-width: 100%;\n  border-collapse: collapse;\n  th, td {\n    padding: 4px 6px;\n    ', '\n  }\n  th {\n    text-align: left;\n    user-select: none;\n  }\n  tr {\n    border-bottom: solid 1px ', ';\n  }\n  tbody {\n    > tr {\n      &:last-of-type {\n        border-bottom: none;\n      }\n    }\n  }\n'], ['\n  width: 100%;\n  max-width: 100%;\n  border-collapse: collapse;\n  th, td {\n    padding: 4px 6px;\n    ', '\n  }\n  th {\n    text-align: left;\n    user-select: none;\n  }\n  tr {\n    border-bottom: solid 1px ', ';\n  }\n  tbody {\n    > tr {\n      &:last-of-type {\n        border-bottom: none;\n      }\n    }\n  }\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n      padding: 10px 15px;\n    '], ['\n      padding: 10px 15px;\n    ']),
    _templateObject4 = _taggedTemplateLiteralLoose(['\n  width: 100%;\n  overflow-x: auto;\n'], ['\n  width: 100%;\n  overflow-x: auto;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Themes = require('../Themes');

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var Pagination = _styledComponents2.default.div(_templateObject);

var TableStyled = _styledComponents2.default.table(_templateObject2, _Themes.Media.md(_templateObject3), _Themes.Colors.darkGrey);
var TableResponsive = _styledComponents2.default.div(_templateObject4);

var Table = function (_React$Component) {
  _inherits(Table, _React$Component);

  function Table(props) {
    _classCallCheck(this, Table);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.getRows = function (d) {
      return _react2.default.createElement(
        'tr',
        null,
        _this.props.columns.map(function (c) {
          return _this.getCells(d, c);
        })
      );
    };

    _this.getCellContent = function (data, column) {
      return typeof column.accessor === 'function' ? column.accessor(data) : data[column.accessor];
    };

    _this.getCells = function (data, column) {
      return _react2.default.createElement(
        'td',
        null,
        _this.getCellContent(data, column)
      );
    };

    _this.getTotalPage = function () {
      return Math.ceil(_this.props.data.length / _this.props.pageSize);
    };

    _this.previousPage = function () {
      if (_this.state.currentPage > 0) {
        _this.setState({ currentPage: _this.state.currentPage - 1 });
      }
    };

    _this.nextPage = function () {
      if (_this.state.currentPage < _this.getTotalPage() - 1) {
        _this.setState({ currentPage: _this.state.currentPage + 1 });
      }
    };

    _this.getSortedData = function () {
      var _this$state = _this.state,
          sortColumnIndex = _this$state.sortColumnIndex,
          sortType = _this$state.sortType;
      var _this$props = _this.props,
          columns = _this$props.columns,
          data = _this$props.data;

      var targetColumn = columns[sortColumnIndex];
      var sortedData = data;
      if (sortColumnIndex === -1 || !targetColumn) {
        return sortedData;
      }

      var accessor = targetColumn.accessor;
      if (targetColumn.sortMethod) {
        sortedData = data.sort(function (a, b) {
          return targetColumn.sortMethod(_this.getCellContent(a, targetColumn), _this.getCellContent(b, targetColumn));
        });
      } else {
        sortedData = _lodash2.default.sortBy(data, accessor);
      }
      if (sortType < 0) {
        sortedData = sortedData.reverse();
      }
      return sortedData;
    };

    _this.getPaginatedData = function () {
      var _this$props2 = _this.props,
          data = _this$props2.data,
          pageSize = _this$props2.pageSize;
      var currentPage = _this.state.currentPage;

      var pageStart = pageSize * currentPage;
      var pageEnd = pageStart + pageSize;
      return _this.getSortedData().slice(pageStart, pageEnd);
    };

    _this.sortTable = function (column, columnIndex) {
      var _this$state2 = _this.state,
          sortColumnIndex = _this$state2.sortColumnIndex,
          sortType = _this$state2.sortType;

      var newSortType = sortType;
      var newColumnIndex = sortColumnIndex;
      if (columnIndex === sortColumnIndex) {
        newSortType = sortType * -1;
      } else {
        newSortType = 1;
        newColumnIndex = columnIndex;
      }
      _this.setState({ sortType: newSortType, sortColumnIndex: newColumnIndex });
    };

    _this.state = { currentPage: 0, sortColumnIndex: -1, sortType: -1 };
    return _this;
  }

  Table.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        columns = _props.columns,
        data = _props.data,
        pageSize = _props.pageSize,
        showPager = _props.showPager,
        previousText = _props.previousText,
        nextText = _props.nextText,
        pageText = _props.pageText,
        ofText = _props.ofText,
        rowsText = _props.rowsText;
    var currentPage = this.state.currentPage;

    var totalPage = this.getTotalPage();
    var paginatedData = this.getPaginatedData();
    return _react2.default.createElement(
      _react.Fragment,
      null,
      _react2.default.createElement(
        TableResponsive,
        null,
        _react2.default.createElement(
          TableStyled,
          null,
          _react2.default.createElement(
            'thead',
            null,
            _react2.default.createElement(
              'tr',
              null,
              columns.map(function (c, i) {
                return _react2.default.createElement(
                  'th',
                  { onClick: function onClick() {
                      return _this2.sortTable(c, i);
                    } },
                  c.Header
                );
              })
            )
          ),
          _react2.default.createElement(
            'tbody',
            null,
            paginatedData.map(this.getRows)
          )
        )
      ),
      showPager && _react2.default.createElement(
        Pagination,
        null,
        _react2.default.createElement(
          _Button2.default,
          { btnXs: true, onClick: this.previousPage },
          previousText
        ),
        _react2.default.createElement(
          'div',
          null,
          pageText,
          ' ',
          this.state.currentPage + 1,
          ' ',
          ofText,
          ' ',
          totalPage
        ),
        _react2.default.createElement(
          _Button2.default,
          { btnXs: true, onClick: this.nextPage },
          nextText
        )
      )
    );
  };

  return Table;
}(_react2.default.Component);

Table.propTypes = process.env.NODE_ENV !== "production" ? {
  data: _propTypes2.default.array.isRequired,
  columns: _propTypes2.default.array.isRequired,
  pageSize: _propTypes2.default.number,
  showPager: _propTypes2.default.bool,
  previousText: _propTypes2.default.string,
  nextText: _propTypes2.default.string,
  pageText: _propTypes2.default.string,
  ofText: _propTypes2.default.string
} : {};

Table.defaultProps = {
  pageSize: 10,
  showPager: true,
  previousText: 'Previous',
  nextText: 'Next',
  pageText: 'Page',
  ofText: 'of'
};

exports.default = Table;
module.exports = exports['default'];