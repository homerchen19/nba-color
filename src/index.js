import NbaColors from './colors';

const getAllColors = () => NbaColors;

const getMainColor = teamAbbreviation => {
  const abbreviation = teamAbbreviation.toUpperCase();
  if (NbaColors[abbreviation]) {
    return NbaColors[abbreviation].mainColor;
  }

  return undefined;
};

const getColors = teamAbbreviation => {
  const abbreviation = teamAbbreviation.toUpperCase();
  if (NbaColors[abbreviation]) {
    return NbaColors[abbreviation].colors;
  }

  return undefined;
};

const getColorsList = teamAbbreviation => {
  const abbreviation = teamAbbreviation.toUpperCase();
  if (NbaColors[abbreviation]) {
    return Object.keys(NbaColors[abbreviation].colors);
  }

  return undefined;
};

const getFullName = teamAbbreviation => {
  const abbreviation = teamAbbreviation.toUpperCase();
  if (NbaColors[abbreviation]) {
    return NbaColors[abbreviation].fullName;
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
