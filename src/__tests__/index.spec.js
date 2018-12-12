import Joi from 'joi';

import {
  mainSchema,
  colorSchema,
  colorsSchema,
  colorsListSchema,
} from '../schema';
import {
  getAllColors,
  getMainColor,
  getColors,
  getColorsList,
  getFullName,
} from '..';

describe('NbaColor', () => {
  describe('getAllColors', () => {
    it('should exist', () => {
      expect(getAllColors).toBeDefined();
    });

    it('should match schema', () => {
      const allColors = getAllColors();
      const validateResult = Joi.validate(allColors, mainSchema);

      expect(validateResult.error).toBe(null);
    });
  });

  describe('getMainColor', () => {
    it('should exist', () => {
      expect(getMainColor).toBeDefined();
    });

    it('should return undefined if pass excluded team abbreviation', () => {
      const teamMainColor = getMainColor('QQ');

      expect(teamMainColor).toBe(undefined);
    });

    it('should match colorSchema if pass included uppercase team abbreviation', () => {
      const teamMainColor = getMainColor('GSW');
      const validateResult = Joi.validate(teamMainColor, colorSchema);

      expect(validateResult.error).toBe(null);
      expect(teamMainColor).toEqual({
        hex: '#ffc72d',
        rgb: [255, 199, 44],
      });
    });

    it('should match colorSchema if pass included lowercase team abbreviation', () => {
      const teamMainColor = getMainColor('gsw');
      const validateResult = Joi.validate(teamMainColor, colorSchema);

      expect(validateResult.error).toBe(null);
      expect(teamMainColor).toEqual({
        hex: '#ffc72d',
        rgb: [255, 199, 44],
      });
    });
  });

  describe('getColors', () => {
    it('should exist', () => {
      expect(getColors).toBeDefined();
    });

    it('should return undefined if pass excluded team abbreviation', () => {
      const teamColors = getColors('QQ');

      expect(teamColors).toBe(undefined);
    });

    it('should match colorsSchema if pass included uppercase team abbreviation', () => {
      const teamColors = getColors('GSW');
      const validateResult = Joi.validate(teamColors, colorsSchema);

      expect(validateResult.error).toBe(null);
      expect(teamColors).toEqual({
        gold: {
          hex: '#ffc72d',
          rgb: [255, 199, 44],
        },
        blue: {
          hex: '#003da5',
          rgb: [0, 61, 165],
        },
      });
    });

    it('should match colorSchema if pass included lowercase team abbreviation', () => {
      const teamColors = getColors('gsw');
      const validateResult = Joi.validate(teamColors, colorsSchema);

      expect(validateResult.error).toBe(null);
      expect(teamColors).toEqual({
        gold: {
          hex: '#ffc72d',
          rgb: [255, 199, 44],
        },
        blue: {
          hex: '#003da5',
          rgb: [0, 61, 165],
        },
      });
    });
  });

  describe('getColorsList', () => {
    it('should exist', () => {
      expect(getColorsList).toBeDefined();
    });

    it('should return undefined if pass excluded team abbreviation', () => {
      const teamColorsList = getColorsList('QQ');

      expect(teamColorsList).toBe(undefined);
    });

    it('should match colorsListSchema if pass included uppercase team abbreviation', () => {
      const teamColorsList = getColorsList('OKC');
      const validateResult = Joi.validate(teamColorsList, colorsListSchema);

      expect(validateResult.error).toBe(null);
      expect(teamColorsList).toEqual(['blue', 'orange', 'yellow', 'darkBlue']);
    });

    it('should match colorsListSchema if pass included lowercase team abbreviation', () => {
      const teamColorsList = getColorsList('okc');
      const validateResult = Joi.validate(teamColorsList, colorsListSchema);

      expect(validateResult.error).toBe(null);
      expect(teamColorsList).toEqual(['blue', 'orange', 'yellow', 'darkBlue']);
    });
  });

  describe('getFullName', () => {
    it('should exist', () => {
      expect(getFullName).toBeDefined();
    });

    it('should return undefined if pass excluded team abbreviation', () => {
      const teamFullName = getFullName('QQ');

      expect(teamFullName).toBe(undefined);
    });

    it('should return full name if pass included uppercase team abbreviation', () => {
      const teamFullName = getFullName('CHI');

      expect(typeof teamFullName).toBe('string');
      expect(teamFullName).toEqual('Chicago Bulls');
    });

    it('should return full name if pass included lowercase team abbreviation', () => {
      const teamFullName = getFullName('chi');

      expect(typeof teamFullName).toBe('string');
      expect(teamFullName).toEqual('Chicago Bulls');
    });
  });
});
