# NBA Color
> Get all NBA team's color code (Hex or RGB).<br>
> Useful for building NBA-related colorful product.

![screen shot 2017-10-27 at 9 33 07 pm](https://user-images.githubusercontent.com/12113222/32106524-925211e2-baf1-11e7-95e0-5d82a52cc7c0.png)

<a target="_blank" href="https://opensource.org/licenses/MIT" title="License: MIT"><img src="https://img.shields.io/badge/License-MIT-yellow.svg"></a>
<a target="_blank" href="http://makeapullrequest.com" title="PRs Welcome"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square"></a>
## Install

```
$ npm install nba-color
```

## Usage

```js
const chalk = require('chalk');
const { getMainColor } = require('nba-color');

const warriorsColor = getMainColor('GSW').hex;

console.log(chalk.bgHex(warriorsColor).bold('Golden State Warriors'));
```
result:
![screen shot 2017-10-27 at 9 40 06 pm](https://user-images.githubusercontent.com/12113222/32106924-b1dcd7f8-baf2-11e7-83f6-6a111765c652.png)

## API

### getAllColors() => `Object`

Return the `object` containing all NBA teams colors data.  
The `Object`'s keys are **[Team Abbreviations](https://en.wikipedia.org/wiki/Wikipedia:WikiProject_National_Basketball_Association/National_Basketball_Association_team_abbreviations)**

### getMainColor(teamAbbreviation) => `Object`

Return an `object` containing the NBA team main color's **Hexadecimal Colors Code** and **RGB Color Code**.  

Note.  
If received an excluded team abbreviation, return `undefined`.

Example
```js
const { getMainColor } = require('nba-color');

console.log(getMainColor('CLE'));

/*
{
  hex: '#6F263D',
  rgb: [111, 38, 61]
}
*/
```

### getColors(teamAbbreviation) => `Object`

Return an `object` containing the NBA team all colors, including **Hexadecimal Colors Code** and **RGB Color Code** for each color.

Note.  
If received an excluded team abbreviation, return `undefined`.

Example
```js
const { getColors } = require('nba-color');

console.log(getColors('LAL'));

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

### getColorsList(teamAbbreviation) => `Array`

Return an `array` containing the NBA team colors.

Note.  
If received an excluded team abbreviation, return `undefined`.

Example
```js
const { getColorsList } = require('nba-color');

console.log(getColorsList('LAL'));

/*
['purple', 'gold', 'white']
*/
```

### getFullName(teamAbbreviation) => `String`

Return the NBA team full name.

Note.  
If received an excluded team abbreviation, return `undefined`.

Example
```js
const { getFullName } = require('nba-color');

console.log(getFullName('SAS'));

/*
'San Antonio Spurs'
*/
```  


## License

MIT
