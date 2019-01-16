import {
  compose,
  keys,
  prop,
  propOr,
  path,
  ifElse,
  isEmpty,
  identity,
  toUpper,
  __,
} from 'ramda';

import NbaColors from './colors';

const getColorsKeys = compose(
  keys,
  prop('colors')
);

const checkEmpty = ifElse(isEmpty(), () => undefined, identity());

const getSpecialColorByKey = key =>
  compose(
    team => {
      const colorKey = prop(key, team);

      return path(['colors', colorKey], team);
    },
    propOr({}, __, NbaColors),
    toUpper
  );

export const getAllColors = () => NbaColors;

export const getMainColor = getSpecialColorByKey('mainColor');

export const getSecondaryColor = getSpecialColorByKey('secondaryColor');

export const getColors = compose(
  prop('colors'),
  propOr({}, __, NbaColors),
  toUpper
);

export const getFullName = compose(
  prop('fullName'),
  propOr({}, __, NbaColors),
  toUpper
);

export const getColorsList = compose(
  compose(
    checkEmpty,
    getColorsKeys
  ),
  propOr({}, __, NbaColors),
  toUpper
);
