import NbaColors from './colors';

const getAllColors = () => NbaColors;

const getMainColor = teamAbbreviation => {
  if (NbaColors[teamAbbreviation]) {
    return NbaColors[teamAbbreviation].mainColor;
  }

  return undefined;
};

const getColors = teamAbbreviation => {
  if (NbaColors[teamAbbreviation]) {
    return NbaColors[teamAbbreviation].colors;
  }

  return undefined;
};

const getColorsList = teamAbbreviation => {
  if (NbaColors[teamAbbreviation]) {
    return Object.keys(NbaColors[teamAbbreviation].colors);
  }

  return undefined;
};

const getFullName = teamAbbreviation => {
  if (NbaColors[teamAbbreviation]) {
    return NbaColors[teamAbbreviation].fullName;
  }

  return undefined;
};

module.exports = {
  getAllColors,
  getMainColor,
  getColors,
  getFullName,
  getColorsList,
};
