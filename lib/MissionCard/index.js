'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  background: black;\n  color: #9b9b9b;\n  padding: 16px;\n  border-radius: 15px;\n  cursor: pointer;\n'], ['\n  background: black;\n  color: #9b9b9b;\n  padding: 16px;\n  border-radius: 15px;\n  cursor: pointer;\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  color: white;\n  margin-bottom: 4px;\n  margin-top: 0\n  font-size: ', '\n'], ['\n  color: white;\n  margin-bottom: 4px;\n  margin-top: 0\n  font-size: ', '\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  margin-bottom: ', 'px;\n  overflow: hidden;\n  max-height: ', 'px;\n  transition: margin .3s ease, max-height .3s ease;\n'], ['\n  margin-bottom: ', 'px;\n  overflow: hidden;\n  max-height: ', 'px;\n  transition: margin .3s ease, max-height .3s ease;\n']),
    _templateObject4 = _taggedTemplateLiteralLoose(['\n\n'], ['\n\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Fonts = require('../Themes/Fonts');

var _ProgressBar = require('../ProgressBar');

var _ProgressBar2 = _interopRequireDefault(_ProgressBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var Card = _styledComponents2.default.div(_templateObject);

var Title = _styledComponents2.default.h3(_templateObject2, _Fonts.size.regular);

var Description = _styledComponents2.default.div(_templateObject3, function (props) {
  return props.hide ? 0 : 20;
}, function (props) {
  return props.hide ? 0 : 300;
});

var Goals = _styledComponents2.default.small(_templateObject4);

var MissionCard = function (_React$Component) {
  _inherits(MissionCard, _React$Component);

  function MissionCard(props) {
    _classCallCheck(this, MissionCard);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.onCardClick = function () {
      if (_this.props.expandable && !_this.props.cta) {
        _this.setState({ expanded: !_this.state.expanded });
      }
    };

    _this.state = { expanded: true };
    return _this;
  }

  MissionCard.prototype.componentWillMount = function componentWillMount() {
    if (this.props.expandable && !this.props.cta) {
      this.setState({ expanded: false });
    }
  };

  MissionCard.prototype.render = function render() {
    var _props = this.props,
        title = _props.title,
        description = _props.description,
        goals = _props.goals,
        progress = _props.progress;
    var expanded = this.state.expanded;

    return _react2.default.createElement(
      Card,
      { onClick: this.onCardClick },
      _react2.default.createElement(
        Title,
        null,
        title
      ),
      description && _react2.default.createElement(
        Description,
        { hide: !expanded },
        description
      ),
      _react2.default.createElement(_ProgressBar2.default, { progress: progress }),
      goals && _react2.default.createElement(
        Goals,
        null,
        goals
      )
    );
  };

  return MissionCard;
}(_react2.default.Component);

MissionCard.propTypes = process.env.NODE_ENV !== "production" ? {
  title: _propTypes2.default.string.isRequired,
  progress: _propTypes2.default.number.isRequired,
  description: _propTypes2.default.string,
  goals: _propTypes2.default.string,
  expandable: _propTypes2.default.bool
} : {};

MissionCard.defaultProps = {
  description: '',
  goals: '',
  expandable: false
};

exports.default = MissionCard;
module.exports = exports['default'];