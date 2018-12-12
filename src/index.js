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

export const getAllColors = () => NbaColors;

export const getMainColor = compose(
  team => {
    const mainColorKey = prop('mainColor', team);

    return path(['colors', mainColorKey], team);
  },
  propOr({}, __, NbaColors),
  toUpper
);

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
