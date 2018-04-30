import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import MemberAvatar from '../MemberAvatar';
import { Div } from '../FlexboxGrid';

// preferred primary_position for each position
const POSITIONS = {
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
  ST: [14, 12, 13],
};

const FORMATION = {
  '4-4-2': [[POSITIONS.LW, POSITIONS.RW], [POSITIONS.LM, POSITIONS.CM, POSITIONS.CM, POSITIONS.RM], [POSITIONS.LWB, POSITIONS.LB, POSITIONS.RB, POSITIONS.RWB], [POSITIONS.GK]],
  '3-4-3': [[POSITIONS.LW, POSITIONS.ST, POSITIONS.RW], [POSITIONS.LM, POSITIONS.CM, POSITIONS.CM, POSITIONS.RM], [POSITIONS.LB, POSITIONS.CB, POSITIONS.RB], [POSITIONS.GK]],
};

const getPlayer = (player = {}, onClick) => (
  <MemberAvatar className="baroo player" image={player.profile_picture} name={player.lastname} teamLogo={player.teamLogo} onClick={() => onClick(player)} />
);

const generateLineup = (players = [], formation = FORMATION['3-4-3']) => {
  const lineup = _.cloneDeep(formation);
  const playersSorted = _.orderBy(players, (p) => (p.stats ? p.stats.match_count || 0 : -1)).reverse();
  const subsitutes = [];
  // for each player
  // we iterare the FORMATION
  // and for each position
  // if the position is not already attributed to a player
  // we get priority of the player's position for this position
  // we keep the best priority
  // attribute the position to the player
  playersSorted.forEach((player) => {
    if (player.primary_position) {
      let bestIndex = 999;
      let bestPosition = null;
      const { primary_pos_id } = player;
      lineup.forEach((line, lineIndex) => {
        line.forEach((position, positionIndex) => {
          if (_.isArray(position) && position.includes(primary_pos_id) && position.indexOf(primary_pos_id) < bestIndex) {
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
    subsitutes,
  };
};

const Lineup = ({ players, formation, onPlayerClick, className }) => {
  const { attackers, midfielders, defenders, goalkeeper, subsitutes } = generateLineup(players, FORMATION[formation]);
  return (
    <div className={`baroo lineup ${className}`}>
      <div className="baroo field">
        <Div row aroundXs noGutters className="baroo attackers">
          {attackers.map((player) => getPlayer(player, onPlayerClick))}
        </Div>
        <Div row aroundXs noGutters className="baroo midfielders">
          {midfielders.map((player) => getPlayer(player, onPlayerClick))}
        </Div>
        <Div row aroundXs noGutters className="baroo defenders">
          {defenders.map((player) => getPlayer(player, onPlayerClick))}
        </Div>
        <Div row aroundXs noGutters className="baroo goalkeeper">
          {goalkeeper.map((player) => getPlayer(player, onPlayerClick))}
        </Div>
      </div>
      <Div row noGutters startXs className="baroo subsitutes">
        {subsitutes.map((player) => getPlayer(player, onPlayerClick))}
      </Div>
    </div>
  );
};

Lineup.propTypes = {
  players: PropTypes.array,
  formation: PropTypes.string,
  onPlayerClick: PropTypes.func,
  className: PropTypes.string,
};

Lineup.defaultProps = {
  players: [],
  formation: '4-4-2',
  onPlayerClick: () => {},
  className: '',
};

export default Lineup;
