'use strict';

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

var _schema = require('../schema');

var _ = require('../');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('NbaColor', () => {
  it('should exist', () => {
    expect(_2.default).toBeDefined();
  });

  describe('getAllColors', () => {
    const { getAllColors } = _2.default;

    it('should exist', () => {
      expect(getAllColors).toBeDefined();
    });

    it('should match schema', () => {
      const allColors = getAllColors();
      const validateResult = _joi2.default.validate(allColors, _schema.mainSchema);

      expect(validateResult.error).toBe(null);
    });
  });

  describe('getMainColor', () => {
    const { getMainColor } = _2.default;

    it('should exist', () => {
      expect(getMainColor).toBeDefined();
    });

    it('should return undefined if pass excluded team abbreviation', () => {
      const teamMainColor = getMainColor('QQ');

      expect(teamMainColor).toBe(undefined);
    });

    it('should match colorSchema if pass included team abbreviation', () => {
      const teamMainColor = getMainColor('GSW');
      const validateResult = _joi2.default.validate(teamMainColor, _schema.colorSchema);

      expect(validateResult.error).toBe(null);
    });
  });

  describe('getColors', () => {
    const { getColors } = _2.default;

    it('should exist', () => {
      expect(getColors).toBeDefined();
    });

    it('should return undefined if pass excluded team abbreviation', () => {
      const teamColors = getColors('QQ');

      expect(teamColors).toBe(undefined);
    });

    it('should match colorsSchema if pass included team abbreviation', () => {
      const teamColors = getColors('BOS');
      const validateResult = _joi2.default.validate(teamColors, _schema.colorsSchema);

      expect(validateResult.error).toBe(null);
    });
  });

  describe('getColorsList', () => {
    const { getColorsList } = _2.default;

    it('should exist', () => {
      expect(getColorsList).toBeDefined();
    });

    it('should return undefined if pass excluded team abbreviation', () => {
      const teamColorsList = getColorsList('QQ');

      expect(teamColorsList).toBe(undefined);
    });

    it('should match colorsListSchema if pass included team abbreviation', () => {
      const teamColorsList = getColorsList('OKC');
      const validateResult = _joi2.default.validate(teamColorsList, _schema.colorsListSchema);

      expect(validateResult.error).toBe(null);
    });
  });

  describe('getFullName', () => {
    const { getFullName } = _2.default;

    it('should exist', () => {
      expect(getFullName).toBeDefined();
    });

    it('should return undefined if pass excluded team abbreviation', () => {
      const teamFullName = getFullName('QQ');

      expect(teamFullName).toBe(undefined);
    });

    it('should return full name if pass included team abbreviation', () => {
      const teamFullName = getFullName('CHI');

      expect(typeof teamFullName).toBe('string');
      expect(teamFullName).toEqual('Chicago Bulls');
    });
  });
});