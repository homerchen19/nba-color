import R from 'ramda';

import NbaColors from './colors';

const Team = teamAbbreviation => ({
  toUpperCase: () => Team(R.toUpper(teamAbbreviation)),
  getMainColor: () => R.prop('mainColor', NbaColors[teamAbbreviation]),
  getColors: () => R.prop('colors', NbaColors[teamAbbreviation]),
  getColorsList: () => {
    const getColorsKeys = R.compose(
      R.keys,
      R.prop('colors')
    );
    const checkEmpty = R.ifElse(R.isEmpty(), () => undefined, R.identity());

    return R.compose(
      checkEmpty,
      getColorsKeys
    )(NbaColors[teamAbbreviation]);
  },
  getFullName: () => R.prop('fullName', NbaColors[teamAbbreviation]),
});

export const getAllColors = () => NbaColors;

export const getMainColor = teamAbbreviation =>
  Team(teamAbbreviation)
    .toUpperCase()
    .getMainColor();

export const getColors = teamAbbreviation =>
  Team(teamAbbreviation)
    .toUpperCase()
    .getColors();

export const getColorsList = teamAbbreviation =>
  Team(teamAbbreviation)
    .toUpperCase()
    .getColorsList();

export const getFullName = teamAbbreviation =>
  Team(teamAbbreviation)
    .toUpperCase()
    .getFullName();
