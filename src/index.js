import NbaColors from './colors';

const getAllColors = () => NbaColors;

const getTeamMainColor = teamAbbreviation => {
  if (NbaColors[teamAbbreviation]) {
    return NbaColors[teamAbbreviation].mainColor;
  }

  return undefined;
};

const getTeamColors = teamAbbreviation => {
  if (NbaColors[teamAbbreviation]) {
    return NbaColors[teamAbbreviation].colors;
  }

  return undefined;
};

const getTeamColorsList = teamAbbreviation => {
  if (NbaColors[teamAbbreviation]) {
    return Object.keys(NbaColors[teamAbbreviation].colors);
  }

  return undefined;
};

const getTeamFullName = teamAbbreviation => {
  if (NbaColors[teamAbbreviation]) {
    return NbaColors[teamAbbreviation].fullName;
  }

  return undefined;
};

module.exports = {
  getAllColors,
  getTeamMainColor,
  getTeamColors,
  getTeamFullName,
  getTeamColorsList,
};
