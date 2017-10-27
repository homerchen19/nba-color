# NBA Color

> Get all NBA team's color code (Hex or RGB).<br>
> Useful for building NBA-related colorful product.

## Install

```
$ npm install log-update
```

## Usage

```js
const chalk = require('chalk');
const { getTeamMainColor } = require('nba-color');

const warriorsColor = getTeamMainColor('GSW').hex;

console.log(chalk.bgHex(warriorsColor).bold('Golden State Warriors'));
```

## API

### getAllColors() => `Object`

Return the `object` containing all NBA teams colors data.  
The `Object`'s keys are **[Team Abbreviations](https://en.wikipedia.org/wiki/Wikipedia:WikiProject_National_Basketball_Association/National_Basketball_Association_team_abbreviations)**

### getTeamMainColor(teamAbbreviation) => `Object`

Return an `object` containing the NBA team main color's **Hexadecimal Colors Code** and **RGB Color Code**.  

Note.  
If received an excluded team abbreviation, return `undefined`.

Example
```js
const { getTeamMainColor } = require('nba-color');

console.log(getTeamMainColor('CLE'));

/*
{
  hex: '#6F263D',
  rgb: [111, 38, 61]
}
*/
```

### getTeamColors(teamAbbreviation) => `Object`

Return an `object` containing the NBA team all colors, including **Hexadecimal Colors Code** and **RGB Color Code** for each color.

Note.  
If received an excluded team abbreviation, return `undefined`.

Example
```js
const { getTeamColors } = require('nba-color');

console.log(getTeamColors('LAL'));

/*
{
  purple: {
    hex: '#702F8A',
    rgb: [112, 47, 138],
  },
  gold: {
    hex: '#FFC72C',
    rgb: [255, 199, 44],
  },
  white: {
    hex: '#fff',
    rgb: [255, 255, 255],
  }
}
*/
```

### getTeamColorsList(teamAbbreviation) => `Array`

Return an `array` containing the NBA team colors.

Note.  
If received an excluded team abbreviation, return `undefined`.

Example
```js
const { getTeamColorsList } = require('nba-color');

console.log(getTeamColorsList('LAL'));

/*
['purple', 'gold', 'white']
*/
```

### getTeamFullName(teamAbbreviation) => `String`

Return the NBA team full name.

Note.  
If received an excluded team abbreviation, return `undefined`.

Example
```js
const { getTeamFullName } = require('nba-color');

console.log(getTeamFullName('SAS'));

/*
'San Antonio Spurs'
*/
```
