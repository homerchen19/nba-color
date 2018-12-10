import R from 'ramda';

import NbaColors from './colors';

const getColorsKeys = R.compose(
  R.keys,
  R.prop('colors')
);

const checkEmpty = R.ifElse(R.isEmpty(), () => undefined, R.identity());

export const getAllColors = () => NbaColors;

export const getMainColor = R.compose(
  R.nth(0),
  R.propOr([], R.__, NbaColors),
  R.toUpper
);

export const getColors = R.compose(
  R.prop('colors'),
  R.propOr({}, R.__, NbaColors),
  R.toUpper
);

export const getFullName = R.compose(
  R.prop('fullName'),
  R.propOr({}, R.__, NbaColors),
  R.toUpper
);

export const getColorsList = R.compose(
  R.compose(
    checkEmpty,
    getColorsKeys
  ),
  R.propOr({}, R.__, NbaColors),
  R.toUpper
);
