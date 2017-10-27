'use strict';

var _colors = require('./colors');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getAllColors = () => _colors2.default;

const getTeamMainColor = teamAbbreviation => {
  if (_colors2.default[teamAbbreviation]) {
    return _colors2.default[teamAbbreviation].mainColor;
  }

  return undefined;
};

const getTeamColors = teamAbbreviation => {
  if (_colors2.default[teamAbbreviation]) {
    return _colors2.default[teamAbbreviation].colors;
  }

  return undefined;
};

const getTeamColorsList = teamAbbreviation => {
  if (_colors2.default[teamAbbreviation]) {
    return Object.keys(_colors2.default[teamAbbreviation].colors);
  }

  return undefined;
};

const getTeamFullName = teamAbbreviation => {
  if (_colors2.default[teamAbbreviation]) {
    return _colors2.default[teamAbbreviation].fullName;
  }

  return undefined;
};

module.exports = {
  getAllColors,
  getTeamMainColor,
  getTeamColors,
  getTeamFullName,
  getTeamColorsList
};