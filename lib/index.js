'use strict';

var _colors = require('./colors');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getAllColors = () => _colors2.default;

const getMainColor = teamAbbreviation => {
  const abbreviation = teamAbbreviation.toUpperCase();
  if (_colors2.default[abbreviation]) {
    return _colors2.default[abbreviation].mainColor;
  }

  return undefined;
};

const getColors = teamAbbreviation => {
  const abbreviation = teamAbbreviation.toUpperCase();
  if (_colors2.default[abbreviation]) {
    return _colors2.default[abbreviation].colors;
  }

  return undefined;
};

const getColorsList = teamAbbreviation => {
  const abbreviation = teamAbbreviation.toUpperCase();
  if (_colors2.default[abbreviation]) {
    return Object.keys(_colors2.default[abbreviation].colors);
  }

  return undefined;
};

const getFullName = teamAbbreviation => {
  const abbreviation = teamAbbreviation.toUpperCase();
  if (_colors2.default[abbreviation]) {
    return _colors2.default[abbreviation].fullName;
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