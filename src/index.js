import R from 'ramda';

import NbaColors from './colors';

const Team = teamAbbreviation => ({
  toUpperCase: () => Team(R.toUpper(teamAbbreviation)),
  getMainColor: () => R.prop('mainColor', NbaColors[teamAbbreviation]),
  getColors: () => R.prop('colors', NbaColors[teamAbbreviation]),
  getColorsList: () => {
    const getColorsKeys = R.compose(R.keys, R.prop('colors'));
    const checkEmpty = R.ifElse(R.isEmpty(), () => undefined, R.identity());

    return R.compose(checkEmpty, getColorsKeys)(NbaColors[teamAbbreviation]);
  },
  getFullName: () => R.prop('fullName', NbaColors[teamAbbreviation]),
});

const getAllColors = () => NbaColors;

const getMainColor = teamAbbreviation =>
  Team(teamAbbreviation)
    .toUpperCase()
    .getMainColor();

const getColors = teamAbbreviation =>
  Team(teamAbbreviation)
    .toUpperCase()
    .getColors();

const getColorsList = teamAbbreviation =>
  Team(teamAbbreviation)
    .toUpperCase()
    .getColorsList();

const getFullName = teamAbbreviation =>
  Team(teamAbbreviation)
    .toUpperCase()
    .getFullName();

module.exports = {
  getAllColors,
  getMainColor,
  getColors,
  getFullName,
  getColorsList,
};
