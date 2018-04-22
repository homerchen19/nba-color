'use strict';

var _identity2 = require('ramda/src/identity');

var _identity3 = _interopRequireDefault(_identity2);

var _isEmpty2 = require('ramda/src/isEmpty');

var _isEmpty3 = _interopRequireDefault(_isEmpty2);

var _ifElse2 = require('ramda/src/ifElse');

var _ifElse3 = _interopRequireDefault(_ifElse2);

var _keys2 = require('ramda/src/keys');

var _keys3 = _interopRequireDefault(_keys2);

var _compose2 = require('ramda/src/compose');

var _compose3 = _interopRequireDefault(_compose2);

var _prop2 = require('ramda/src/prop');

var _prop3 = _interopRequireDefault(_prop2);

var _toUpper2 = require('ramda/src/toUpper');

var _toUpper3 = _interopRequireDefault(_toUpper2);

var _colors = require('./colors');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Team = teamAbbreviation => ({
  toUpperCase: () => Team((0, _toUpper3.default)(teamAbbreviation)),
  getMainColor: () => (0, _prop3.default)('mainColor', _colors2.default[teamAbbreviation]),
  getColors: () => (0, _prop3.default)('colors', _colors2.default[teamAbbreviation]),
  getColorsList: () => {
    const getColorsKeys = (0, _compose3.default)(_keys3.default, (0, _prop3.default)('colors'));
    const checkEmpty = (0, _ifElse3.default)((0, _isEmpty3.default)(), () => undefined, (0, _identity3.default)());

    return (0, _compose3.default)(checkEmpty, getColorsKeys)(_colors2.default[teamAbbreviation]);
  },
  getFullName: () => (0, _prop3.default)('fullName', _colors2.default[teamAbbreviation])
});

const getAllColors = () => _colors2.default;

const getMainColor = teamAbbreviation => Team(teamAbbreviation).toUpperCase().getMainColor();

const getColors = teamAbbreviation => Team(teamAbbreviation).toUpperCase().getColors();

const getColorsList = teamAbbreviation => Team(teamAbbreviation).toUpperCase().getColorsList();

const getFullName = teamAbbreviation => Team(teamAbbreviation).toUpperCase().getFullName();

module.exports = {
  getAllColors,
  getMainColor,
  getColors,
  getFullName,
  getColorsList
};