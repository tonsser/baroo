'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  min-height: unset;\n  > div {\n    width: 80px;\n    height: 80px;\n    background: #202020;\n    border-color: #717171;\n    border-width: 2px;\n    border-style: solid;\n    margin-bottom: 0;\n  }\n'], ['\n  min-height: unset;\n  > div {\n    width: 80px;\n    height: 80px;\n    background: #202020;\n    border-color: #717171;\n    border-width: 2px;\n    border-style: solid;\n    margin-bottom: 0;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _MemberAvatar = require('../MemberAvatar');

var _MemberAvatar2 = _interopRequireDefault(_MemberAvatar);

var _FlexboxGrid = require('../FlexboxGrid');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

// preferred primary_position for each position
var POSITIONS = {
  GK: [1],
  LB: [2, 5, 3, 4, 6],
  CB: [3, 2, 4, 5, 6],
  RB: [4, 6, 3, 2, 5],
  LWB: [5, 2, 3, 4, 6],
  RWB: [6, 4, 3, 2, 5],
  DM: [7, 8, 9, 10, 11],
  CM: [8, 7, 11, 9, 10],
  LM: [9, 8, 11, 7, 10],
  RM: [10, 8, 11, 7, 9],
  AM: [11, 8, 9, 10, 7],
  LW: [12, 14, 13],
  RW: [13, 14, 12],
  ST: [14, 12, 13]
};

var FORMATION = {
  '4-4-2': [[POSITIONS.LW, POSITIONS.RW], [POSITIONS.LM, POSITIONS.CM, POSITIONS.CM, POSITIONS.RM], [POSITIONS.LWB, POSITIONS.LB, POSITIONS.RB, POSITIONS.RWB], [POSITIONS.GK]],
  '3-4-3': [[POSITIONS.LW, POSITIONS.ST, POSITIONS.RW], [POSITIONS.LM, POSITIONS.CM, POSITIONS.CM, POSITIONS.RM], [POSITIONS.LB, POSITIONS.CB, POSITIONS.RB], [POSITIONS.GK]]
};

var MemberAvatarStyled = (0, _styledComponents2.default)(_MemberAvatar2.default)(_templateObject);
var getPlayer = function getPlayer() {
  var player = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var onClick = arguments[1];
  return _react2.default.createElement(MemberAvatarStyled, { className: 'baroo player', image: player.profile_picture, name: player.lastname, onClick: onClick });
};

var generateLineup = function generateLineup() {
  var players = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var formation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : FORMATION['3-4-3'];

  var lineup = _lodash2.default.cloneDeep(formation);
  var playersSorted = _lodash2.default.orderBy(players, function (p) {
    return p.stats ? p.stats.match_count || 0 : -1;
  }).reverse();
  var subsitutes = [];
  // for each player
  // we iterare the FORMATION
  // and for each position
  // if the position is not already attributed to a player
  // we get priority of the player's position for this position
  // we keep the best priority
  // attribute the position to the player
  playersSorted.forEach(function (player) {
    if (player.primary_position) {
      var bestIndex = 999;
      var bestPosition = null;
      var primary_pos_id = player.primary_pos_id;

      lineup.forEach(function (line, lineIndex) {
        line.forEach(function (position, positionIndex) {
          if (_lodash2.default.isArray(position) && position.includes(primary_pos_id) && position.indexOf(primary_pos_id) < bestIndex) {
            bestIndex = position.indexOf(primary_pos_id);
            bestPosition = [lineIndex, positionIndex];
          }
        });
      });
      if (bestPosition) {
        lineup[bestPosition[0]][bestPosition[1]] = player;
      } else {
        subsitutes.push(player);
      }
    } else {
      subsitutes.push(player);
    }
  });
  return {
    attackers: lineup[0],
    midfielders: lineup[1],
    defenders: lineup[2],
    goalkeeper: lineup[3],
    subsitutes: subsitutes
  };
};

var Lineup = function Lineup(_ref) {
  var _React$createElement;

  var players = _ref.players,
      formation = _ref.formation,
      onPlayerClick = _ref.onPlayerClick;

  var _generateLineup = generateLineup(players, FORMATION[formation]),
      attackers = _generateLineup.attackers,
      midfielders = _generateLineup.midfielders,
      defenders = _generateLineup.defenders,
      goalkeeper = _generateLineup.goalkeeper,
      subsitutes = _generateLineup.subsitutes;

  return _react2.default.createElement(
    'div',
    { className: 'baroo lineup' },
    _react2.default.createElement(
      'div',
      { className: 'baroo field' },
      _react2.default.createElement(
        _FlexboxGrid.Div,
        { row: true, aroundXs: true, noGutters: true, className: 'baroo attackers' },
        attackers.map(function (player) {
          return getPlayer(player, onPlayerClick);
        })
      ),
      _react2.default.createElement(
        _FlexboxGrid.Div,
        { row: true, aroundXs: true, noGutters: true, className: 'baroo midfielders' },
        midfielders.map(function (player) {
          return getPlayer(player, onPlayerClick);
        })
      ),
      _react2.default.createElement(
        _FlexboxGrid.Div,
        { row: true, aroundXs: true, noGutters: true, className: 'baroo defenders' },
        defenders.map(function (player) {
          return getPlayer(player, onPlayerClick);
        })
      ),
      _react2.default.createElement(
        _FlexboxGrid.Div,
        { row: true, aroundXs: true, noGutters: true, className: 'baroo goalkeeper' },
        goalkeeper.map(function (player) {
          return getPlayer(player, onPlayerClick);
        })
      )
    ),
    _react2.default.createElement(
      _FlexboxGrid.Div,
      (_React$createElement = { row: true, noGutters: true, startXs: true }, _React$createElement['noGutters'] = true, _React$createElement.className = 'baroo subsitutes', _React$createElement),
      subsitutes.map(function (player) {
        return getPlayer(player, onPlayerClick);
      })
    )
  );
};

Lineup.propTypes = process.env.NODE_ENV !== "production" ? {
  players: _propTypes2.default.array,
  formation: _propTypes2.default.string,
  onPlayerClick: _propTypes2.default.func
} : {};

Lineup.defaultProps = {
  players: [],
  formation: '4-4-2',
  onPlayerClick: function onPlayerClick() {}
};

exports.default = Lineup;
module.exports = exports['default'];