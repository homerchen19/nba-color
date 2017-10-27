'use strict';

var _colors = require('./colors');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getAllColors = () => _colors2.default;

const getMainColor = teamAbbreviation => {
  if (_colors2.default[teamAbbreviation]) {
    return _colors2.default[teamAbbreviation].mainColor;
  }

  return undefined;
};

const getColors = teamAbbreviation => {
  if (_colors2.default[teamAbbreviation]) {
    return _colors2.default[teamAbbreviation].colors;
  }

  return undefined;
};

const getColorsList = teamAbbreviation => {
  if (_colors2.default[teamAbbreviation]) {
    return Object.keys(_colors2.default[teamAbbreviation].colors);
  }

  return undefined;
};

const getFullName = teamAbbreviation => {
  if (_colors2.default[teamAbbreviation]) {
    return _colors2.default[teamAbbreviation].fullName;
  }

  return undefined;
};

module.exports = {
  getAllColors,
  getMainColor,
  getColors,
  getFullName,
  getColorsList
};