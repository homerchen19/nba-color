'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.colorsListSchema = exports.colorsSchema = exports.colorSchema = exports.mainSchema = undefined;

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const hexRegex = /^#[a-zA-Z0-9]{6}$/;

const colorSchema = _joi2.default.object().keys({
  hex: _joi2.default.string().regex(hexRegex).required(),
  rgb: _joi2.default.array().items(_joi2.default.number()).length(3).required()
});

const colorsSchema = _joi2.default.object().pattern(/[a-zA-z]/, colorSchema).required();

const mainSchema = _joi2.default.object().length(30).pattern(/[A-Z]{3}/, _joi2.default.object().keys({
  fullName: _joi2.default.string().required(),
  mainColor: colorSchema.required(),
  colors: colorsSchema
}));

const colorsListSchema = _joi2.default.array().items(_joi2.default.string().required());

exports.mainSchema = mainSchema;
exports.colorSchema = colorSchema;
exports.colorsSchema = colorsSchema;
exports.colorsListSchema = colorsListSchema;