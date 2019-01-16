# NBA Color

> Get all NBA team's color code (Hex or RGB).<br>
> Useful for building NBA-related colorful product.

[![Build Status](https://travis-ci.org/xxhomey19/nba-color.svg?branch=master)](https://travis-ci.org/xxhomey19/nba-color)
[![Coverage Status](https://coveralls.io/repos/github/xxhomey19/nba-color/badge.svg)](https://coveralls.io/github/xxhomey19/nba-color)
<a target="_blank" href="https://opensource.org/licenses/MIT" title="License: MIT"><img src="https://img.shields.io/badge/License-MIT-yellow.svg"></a>
<a target="_blank" href="http://makeapullrequest.com" title="PRs Welcome"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square"></a>

![screen shot 2017-10-27 at 9 33 07 pm](https://user-images.githubusercontent.com/12113222/32106524-925211e2-baf1-11e7-95e0-5d82a52cc7c0.png)

## Install

```shell
$ npm install nba-color
```

or

```shell
$ yarn add nba-color
```

## Usage

```js
import chalk from 'chalk';
import { getMainColor, getFullName } from 'nba-color';

const warriors = 'GSW';
const { hex: warriorsColorHex } = getMainColor(warriors);
const warriorsFullName = getFullName(warriors);

console.log(chalk.bgHex(warriorsColorHex).bold(warriorsFullName));
```

result:
![screen shot 2017-10-28](https://user-images.githubusercontent.com/12113222/32114858-451ab492-bb0a-11e7-8839-b3012977a18c.png)

## APIs

### `getAllColors()` => `Object`

Return an `Object` containing all NBA teams colors data.  
The object's keys are **uppercase [Team Abbreviations](https://en.wikipedia.org/wiki/Wikipedia:WikiProject_National_Basketball_Association/National_Basketball_Association_team_abbreviations)**.

### `getMainColor(teamAbbreviation)` => `Object`

Parameter: `String`  
It can be **uppercase or lowercase [Team Abbreviations](https://en.wikipedia.org/wiki/Wikipedia:WikiProject_National_Basketball_Association/National_Basketball_Association_team_abbreviations)**.

Return: `Object`  
Contain the NBA team main color's **Hexadecimal Colors Code** and **RGB Color Code**.

Note.  
If received an excluded team abbreviation, return `undefined`.

Example

```js
import { getMainColor } from 'nba-color';

console.log(getMainColor('CLE'));

/*
{
  hex: '#6f263d',
  rgb: [111, 38, 61]
}
*/
```

### `getSecondaryColor(teamAbbreviation)` => `Object`

Parameter: `String`  
It can be **uppercase or lowercase [Team Abbreviations](https://en.wikipedia.org/wiki/Wikipedia:WikiProject_National_Basketball_Association/National_Basketball_Association_team_abbreviations)**.

Return: `Object`  
Contain the NBA team secondary color's **Hexadecimal Colors Code** and **RGB Color Code**.

Note.  
If received an excluded team abbreviation, return `undefined`.

Example

```js
import { getSecondaryColor } from 'nba-color';

console.log(getSecondaryColor('NYK'));

/*
{
  hex: '#ff671f',
  rgb: [255, 103, 31],
}
*/
```

### `getColors(teamAbbreviation)` => `Object`

Parameter: `String`  
It can be **uppercase or lowercase [Team Abbreviations](https://en.wikipedia.org/wiki/Wikipedia:WikiProject_National_Basketball_Association/National_Basketball_Association_team_abbreviations)**.

Return: `Object`  
Contain the NBA team all colors, including **Hexadecimal Colors Code** and **RGB Color Code** for each color.

Note.  
If received an excluded team abbreviation, return `undefined`.

Example

```js
import { getColors } from 'nba-color';

console.log(getColors('LAL'));

/*
{
  purple: {
    hex: '#702f8a',
    rgb: [112, 47, 138],
  },
  gold: {
    hex: '#ffc72c',
    rgb: [255, 199, 44],
  },
  white: {
    hex: '#ffffff',
    rgb: [255, 255, 255],
  }
}
*/
```

### `getColorsList(teamAbbreviation)` => `Array`

Parameter: `String`  
It can be **uppercase or lowercase [Team Abbreviations](https://en.wikipedia.org/wiki/Wikipedia:WikiProject_National_Basketball_Association/National_Basketball_Association_team_abbreviations)**.

Return: `Array`  
Contain the NBA team colors.

Note.  
If received an excluded team abbreviation, return `undefined`.

Example

```js
import { getColorsList } from 'nba-color';

console.log(getColorsList('LAL'));

/*
['purple', 'gold', 'white']
*/
```

### `getFullName(teamAbbreviation)` => `String`

Parameter: `String`  
It can be **uppercase or lowercase [Team Abbreviations](https://en.wikipedia.org/wiki/Wikipedia:WikiProject_National_Basketball_Association/National_Basketball_Association_team_abbreviations)**.

Return: `String`  
The NBA team full name.

Note.  
If received an excluded team abbreviation, return `undefined`.

Example

```js
import { getFullName } from 'nba-color';

console.log(getFullName('SAS'));

/*
'San Antonio Spurs'
*/
```

## License

MIT © [xxhomey19](https://github.com/xxhomey19)
