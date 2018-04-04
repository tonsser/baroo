const clubs = ['Paris Saint-Germain', 'Olympique lyonnais', 'AS Monaco FC', 'OGC Nice', 'Lille OSC', 'AS Saint-Étienne'];
const categories = ['U13', 'U15', 'U18', 'Senior'];
const divisions = ['Regional 1', 'Regional 2', 'National', 'Departemental'];
const players = ['Fabien Barthez', 'Lilian Thuram', 'Marcel Desailly', 'Frank Lebœuf', 'Bixente Lizarazu', 'Didier Deschamps', 'Christian Karembeu', 'Emmanuel Petit', 'Zinédine Zidane', 'Youri Djorkaeff', 'Stéphane Guivarc', 'Alain Boghossian', 'Christophe Dugarry', 'Patrick Vieira'];

const getRandom = (max, min = 0) => Math.floor(Math.random() * (max + 1)) + min;

const generatePlayer = () => ({
  name: players[getRandom(13)],
  club: clubs[getRandom(5)],
  category: categories[getRandom(3)],
  division: divisions[getRandom(3)],
  goals: getRandom(30),
  matches: getRandom(100),
  passes: getRandom(30),
  note: getRandom(100) / 10,
});
const generatePlayers = (number = 100) => [...Array(number)].map(generatePlayer);

const generateTeam = () => ({
  name: clubs[getRandom(5)],
  category: categories[getRandom(3)],
  division: divisions[getRandom(3)],
  matches: getRandom(100, 50),
  victory: getRandom(50),
  defeat: getRandom(50),
  draw: getRandom(50),
  goalsFor: getRandom(100),
  goalsAgainst: getRandom(100),

});
const generateTeams = (number = 100) => [...Array(number)].map(generateTeam);

const generateClub = () => ({
  name: clubs[getRandom(5)],
  matches: getRandom(100, 50),
  victory: getRandom(50),
  defeat: getRandom(50),
  draw: getRandom(50),
  goalsFor: getRandom(100),
  goalsAgainst: getRandom(100),
});
const generateClubs = (number = 100) => [...Array(number)].map(generateClub);

export default {
  players: generatePlayers(),
  teams: generateTeams(),
  clubs: generateClubs(),
};
