import Joi from 'joi';

import {
  mainSchema,
  colorSchema,
  colorsSchema,
  colorsListSchema,
} from '../schema';
import NbaColor from '../';

describe('NbaColor', () => {
  it('should exist', () => {
    expect(NbaColor).toBeDefined();
  });

  describe('getAllColors', () => {
    const { getAllColors } = NbaColor;

    it('should exist', () => {
      expect(getAllColors).toBeDefined();
    });

    it('should match schema', () => {
      const allColors = getAllColors();
      const validateResult = Joi.validate(allColors, mainSchema);

      expect(validateResult.error).toBe(null);
    });
  });

  describe('getTeamMainColor', () => {
    const { getTeamMainColor } = NbaColor;

    it('should exist', () => {
      expect(getTeamMainColor).toBeDefined();
    });

    it('should return undefined if pass excluded team abbreviation', () => {
      const teamMainColor = getTeamMainColor('QQ');

      expect(teamMainColor).toBe(undefined);
    });

    it('should match colorSchema if pass included team abbreviation', () => {
      const teamMainColor = getTeamMainColor('GSW');
      const validateResult = Joi.validate(teamMainColor, colorSchema);

      expect(validateResult.error).toBe(null);
    });
  });

  describe('getTeamColors', () => {
    const { getTeamColors } = NbaColor;

    it('should exist', () => {
      expect(getTeamColors).toBeDefined();
    });

    it('should return undefined if pass excluded team abbreviation', () => {
      const teamColors = getTeamColors('QQ');

      expect(teamColors).toBe(undefined);
    });

    it('should match colorsSchema if pass included team abbreviation', () => {
      const teamColors = getTeamColors('BOS');
      const validateResult = Joi.validate(teamColors, colorsSchema);

      expect(validateResult.error).toBe(null);
    });
  });

  describe('getTeamColorsList', () => {
    const { getTeamColorsList } = NbaColor;

    it('should exist', () => {
      expect(getTeamColorsList).toBeDefined();
    });

    it('should return undefined if pass excluded team abbreviation', () => {
      const teamColorsList = getTeamColorsList('QQ');

      expect(teamColorsList).toBe(undefined);
    });

    it('should match colorsListSchema if pass included team abbreviation', () => {
      const teamColorsList = getTeamColorsList('OKC');
      const validateResult = Joi.validate(teamColorsList, colorsListSchema);

      expect(validateResult.error).toBe(null);
    });
  });

  describe('getTeamFullName', () => {
    const { getTeamFullName } = NbaColor;

    it('should exist', () => {
      expect(getTeamFullName).toBeDefined();
    });

    it('should return undefined if pass excluded team abbreviation', () => {
      const teamFullName = getTeamFullName('QQ');

      expect(teamFullName).toBe(undefined);
    });

    it('should return full name if pass included team abbreviation', () => {
      const teamFullName = getTeamFullName('CHI');

      expect(typeof teamFullName).toBe('string');
      expect(teamFullName).toEqual('Chicago Bulls');
    });
  });
});
