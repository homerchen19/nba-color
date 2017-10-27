const pureWhite = {
  hex: '#fff',
  rgb: [255, 255, 255],
};

const pureBlack = {
  hex: '#000',
  rgb: [0, 0, 0],
};

const nbaColors = {
  ATL: {
    fullName: 'Atlanta Hawks',
    mainColor: {
      hex: '#C8102E',
      rgb: [200, 16, 46],
    },
    colors: {
      red: {
        hex: '#C8102E',
        rgb: [200, 16, 46],
      },
      green: {
        hex: '#C4D600',
        rgb: [196, 214, 0],
      },
      white: pureWhite,
      gray: {
        hex: '#25282A',
        rgb: [37, 40, 42],
      },
    },
  },
  BKN: {
    fullName: 'Brooklyn Nets',
    mainColor: {
      hex: '#010101',
      rgb: [1, 1, 1],
    },
    colors: {
      black: {
        hex: '#010101',
        rgb: [1, 1, 1],
      },
      white: pureWhite,
    },
  },
  BOS: {
    fullName: 'Boston Celtics',
    mainColor: {
      hex: '#007A33',
      rgb: [0, 122, 51],
    },
    colors: {
      green: {
        hex: '#007A33',
        rgb: [0, 122, 51],
      },
      black: pureBlack,
      white: pureWhite,
      gold: {
        hex: '#FFD700',
        rgb: [255, 215, 0],
      },
      silver: {
        hex: '#C0C0C0',
        rgb: [192, 192, 192],
      },
    },
  },
  CHA: {
    fullName: 'Charlotte Hornets',
    mainColor: {
      hex: '#201747',
      rgb: [32, 23, 71],
    },
    colors: {
      purple: {
        hex: '#201747',
        rgb: [32, 23, 71],
      },
      teal: {
        hex: '#00778B',
        rgb: [0, 119, 139],
      },
      white: '#fff',
      gray: {
        hex: '#888B8D',
        rgb: [136, 139, 141],
      },
    },
  },
  CHI: {
    fullName: 'Chicago Bulls',
    mainColor: {
      hex: '#BA0C2F',
      rgb: [186, 12, 47],
    },
    colors: {
      red: {
        hex: '#BA0C2F',
        rgb: [186, 12, 47],
      },
      black: pureBlack,
      white: pureWhite,
    },
  },
  CLE: {
    fullName: 'Cleveland Cavaliers',
    mainColor: {
      hex: '#6F263D',
      rgb: [111, 38, 61],
    },
    colors: {
      wine: {
        hex: '#6F263D',
        rgb: [111, 38, 61],
      },
      white: pureWhite,
      navy: {
        hex: '#041E42',
        rgb: [4, 30, 66],
      },
      gold: {
        hex: '#FFB81C',
        rgb: [255, 184, 28],
      },
    },
  },
  DAL: {
    fullName: 'Dallas Mavericks',
    mainColor: {
      hex: '#0050B5',
      rgb: [0, 80, 181],
    },
    colors: {
      blue: {
        hex: '#0050B5',
        rgb: [0, 80, 181],
      },
      silver: {
        hex: '#8D9093',
        rgb: [141, 144, 147],
      },
      navy: {
        hex: '#0C2340',
        rgb: [12, 35, 64],
      },
      black: pureBlack,
      white: pureWhite,
    },
  },
  DEN: {
    fullName: 'Denver Nuggets',
    mainColor: {
      hex: '#418FDE',
      rgb: [65, 143, 222],
    },
    colors: {
      blue: {
        hex: '#418FDE',
        rgb: [65, 143, 222],
      },
      gold: {
        hex: '#FFC72C',
        rgb: [255, 199, 44],
      },
      navy: {
        hex: '#0C2340',
        rgb: [12, 35, 64],
      },
      white: pureWhite,
    },
  },
  DET: {
    fullName: 'Detroit Pistons',
    mainColor: {
      hex: '#003DA5',
      rgb: [0, 61, 165],
    },
    colors: {
      blue: {
        hex: '#003DA5',
        rgb: [0, 61, 165],
      },
      red: {
        hex: '#D50032',
        rgb: [213, 0, 50],
      },
      navy: {
        hex: '#041E42',
        rgb: [4, 30, 66],
      },
      white: pureWhite,
    },
  },
  GSW: {
    fullName: 'Golden State Warriors',
    mainColor: {
      hex: '#FFC72D',
      rgb: [255, 199, 44],
    },
    colors: {
      gold: {
        hex: '#FFC72D',
        rgb: [255, 199, 44],
      },
      blue: {
        hex: '#003DA5',
        rgb: [0, 61, 165],
      },
    },
  },
  HOU: {
    fullName: 'Houston Rockets',
    mainColor: {
      hex: '#BA0C2F',
      rgb: [186, 12, 47],
    },
    colors: {
      red: {
        hex: '#BA0C2F',
        rgb: [186, 12, 47],
      },
      silver: {
        hex: '#8D9093',
        rgb: [141, 144, 147],
      },
      yellow: {
        hex: '#FDB927',
        rgb: [253, 185, 39],
      },
      white: pureWhite,
      black: pureBlack,
    },
  },
  IND: {
    fullName: 'Indiana Pacers',
    mainColor: {
      hex: '#041E42',
      rgb: [4, 30, 66],
    },
    colors: {
      blue: {
        hex: '#041E42',
        rgb: [4, 30, 66],
      },
      gold: {
        hex: '#FFB81C',
        rgb: [255, 184, 28],
      },
      silver: {
        hex: '#B1B3B3',
        rgb: [177, 179, 179],
      },
      white: pureWhite,
    },
  },
  LAC: {
    fullName: 'Los Angeles Clippers',
    mainColor: {
      hex: '#D50032',
      rgb: [213, 0, 50],
    },
    colors: {
      red: {
        hex: '#D50032',
        rgb: [213, 0, 50],
      },
      blue: {
        hex: '#003DA5',
        rgb: [0, 61, 165],
      },
      silver: {
        hex: '#B1B3B3',
        rgb: [177, 179, 179],
      },
      white: pureWhite,
    },
  },
  LAL: {
    fullName: 'Los Angeles Lakers',
    mainColor: {
      hex: '#702F8A',
      rgb: [112, 47, 138],
    },
    colors: {
      purple: {
        hex: '#702F8A',
        rgb: [112, 47, 138],
      },
      gold: {
        hex: '#FFC72C',
        rgb: [255, 199, 44],
      },
      white: pureWhite,
    },
  },
  MEM: {
    fullName: 'Memphis Grizzlies',
    mainColor: {
      hex: '#23375B',
      rgb: [35, 55, 91],
    },
    colors: {
      midnightBlue: {
        hex: '#23375B',
        rgb: [35, 55, 91],
      },
      bealeStreetBlue: {
        hex: '#6189B9',
        rgb: [97, 137, 185],
      },
      smokeBlue: {
        hex: '#BBD1E4',
        rgb: [187, 209, 228],
      },
      gold: {
        hex: '#FFD432',
        rgb: [255, 215, 50],
      },
    },
  },
  MIA: {
    fullName: 'Miami Heat',
    mainColor: {
      hex: '#862633',
      rgb: [134, 38, 51],
    },
    colors: {
      red: {
        hex: '#862633',
        rgb: [134, 38, 51],
      },
      yellow: {
        hex: '#FFA300',
        rgb: [255, 163, 0],
      },
      white: pureWhite,
      black: pureBlack,
    },
  },
  MIL: {
    fullName: 'Milwaukee Bucks',
    mainColor: {
      hex: '#2C5234',
      rgb: [44, 82, 52],
    },
    colors: {
      green: {
        hex: '#2C5234',
        rgb: [44, 82, 52],
      },
      cream: {
        hex: '#DDCBA4',
        rgb: [221, 203, 164],
      },
      blue: {
        hex: '#0057B8',
        rgb: [0, 87, 184],
      },
      white: pureWhite,
      black: pureBlack,
    },
  },
  MIN: {
    fullName: 'Minnesota Timberwolves',
    mainColor: {
      hex: '#002B5C',
      rgb: [0, 42, 92],
    },
    colors: {
      blue: {
        hex: '#002B5C',
        rgb: [0, 42, 92],
      },
      grey: {
        hex: '#C6CFD4',
        rgb: [198, 208, 215],
      },
      green: {
        hex: '#7AC143',
        rgb: [122, 192, 67],
      },
      white: pureWhite,
    },
  },
  NOP: {
    fullName: 'New Orleans Pelicans',
    mainColor: {
      hex: '#002B5C',
      rgb: [0, 43, 92],
    },
    colors: {
      blue: {
        hex: '#002B5C',
        rgb: [0, 43, 92],
      },
      gold: {
        hex: '#B4975A',
        rgb: [180, 151, 90],
      },
      red: {
        hex: '#E31937',
        rgb: [227, 25, 55],
      },
      white: pureWhite,
    },
  },
  NYK: {
    fullName: 'New York Knicks',
    mainColor: {
      hex: '#003DA5',
      rgb: [0, 61, 165],
    },
    colors: {
      blue: {
        hex: '#003DA5',
        rgb: [0, 61, 165],
      },
      orange: {
        hex: '#FF671F',
        rgb: [255, 103, 31],
      },
      silver: {
        hex: '#B1B3B3',
        rgb: [177, 179, 179],
      },
      white: pureWhite,
    },
  },
  OKC: {
    fullName: 'Oklahoma City Thunder',
    mainColor: {
      hex: '#007DC3',
      rgb: [0, 125, 195],
    },
    colors: {
      blue: {
        hex: '#007DC3',
        rgb: [0, 125, 195],
      },
      orange: {
        hex: '#F05133',
        rgb: [240, 81, 51],
      },
      yellow: {
        hex: '#FDBB30',
        rgb: [253, 187, 48],
      },
      darkBlue: {
        hex: '#002D62',
        rgb: [0, 45, 98],
      },
    },
  },
  ORL: {
    fullName: 'Orlando Magic',
    mainColor: {
      hex: '#007DC5',
      rgb: [0, 125, 197],
    },
    colors: {
      blue: {
        hex: '#007DC5',
        rgb: [0, 125, 197],
      },
      silver: {
        hex: '#C4CED3',
        rgb: [196, 206, 211],
      },
      white: pureWhite,
      black: pureBlack,
    },
  },
  PHI: {
    fullName: 'Philadelphia 76ers',
    mainColor: {
      hex: '#006BB6',
      rgb: [0, 102, 182],
    },
    colors: {
      blue: {
        hex: '#006BB6',
        rgb: [0, 102, 182],
      },
      red: {
        hex: '#ED174C',
        rgb: [237, 23, 76],
      },
      white: pureWhite,
    },
  },
  PHX: {
    fullName: 'Phoenix Suns',
    mainColor: {
      hex: '#E56020',
      rgb: [229, 96, 32],
    },
    colors: {
      orange: {
        hex: '#E56020',
        rgb: [229, 96, 32],
      },
      purple: {
        hex: '#1D1160',
        rgb: [29, 17, 96],
      },
      gray: {
        hex: '#63717A',
        rgb: [99, 113, 122],
      },
      white: pureWhite,
      black: pureBlack,
    },
  },
  POR: {
    fullName: 'Portland Trailblazers',
    mainColor: {
      hex: '#F0163A',
      rgb: [240, 22, 58],
    },
    colors: {
      red: {
        hex: '#F0163A',
        rgb: [240, 22, 58],
      },
      silver: {
        hex: '#B6BFBF',
        rgb: [182, 191, 191],
      },
      white: pureWhite,
      black: pureBlack,
    },
  },
  SAC: {
    fullName: 'Sacramento Kings',
    mainColor: {
      hex: '#724C9F',
      rgb: [114, 76, 159],
    },
    colors: {
      purple: {
        hex: '#724C9F',
        rgb: [114, 76, 159],
      },
      silver: {
        hex: '#8E9090',
        rgb: [142, 144, 144],
      },
      white: pureWhite,
      black: pureBlack,
    },
  },
  SAS: {
    fullName: 'San Antonio Spurs',
    mainColor: {
      hex: '#B6BFBF',
      rgb: [182, 191, 191],
    },
    colors: {
      silver: {
        hex: '#B6BFBF',
        rgb: [182, 191, 191],
      },
      white: pureWhite,
      black: pureBlack,
    },
  },
  TOR: {
    fullName: 'Toronto Raptors',
    mainColor: {
      hex: '#CE1141',
      rgb: [206, 17, 65],
    },
    colors: {
      red: {
        hex: '#CE1141',
        rgb: [206, 17, 65],
      },
      silver: {
        hex: '#C4CED3',
        rgb: [196, 206, 211],
      },
      white: pureWhite,
      black: pureBlack,
    },
  },
  UTA: {
    fullName: 'Utah Jazz',
    mainColor: {
      hex: '#002B5C',
      rgb: [0, 43, 92],
    },
    colors: {
      navy: {
        hex: '#002B5C',
        rgb: [0, 43, 92],
      },
      yellow: {
        hex: '#F9A01B',
        rgb: [249, 160, 27],
      },
      green: {
        hex: '#00471B',
        rgb: [0, 71, 27],
      },
      gray: {
        hex: '#BEC0C2',
        rgb: [190, 192, 194],
      },
    },
  },
  WAS: {
    fullName: 'Washington Wizards',
    mainColor: {
      hex: '#0C2340',
      rgb: [12, 35, 64],
    },
    colors: {
      navy: {
        hex: '#0C2340',
        rgb: [12, 35, 64],
      },
      red: {
        hex: '#C8102E',
        rgb: [200, 16, 46],
      },
      silver: {
        hex: '#8D9093',
        rgb: [141, 144, 147],
      },
      white: pureWhite,
    },
  },
};

const getAllColors = () => nbaColors;

const getTeamMainColor = teamAbbreviation => {
  if (nbaColors[teamAbbreviation]) {
    return nbaColors[teamAbbreviation].mainColor;
  }

  return undefined;
};

const getTeamColors = teamAbbreviation => {
  if (nbaColors[teamAbbreviation]) {
    return nbaColors[teamAbbreviation].colors;
  }

  return undefined;
};

const getTeamColorsList = teamAbbreviation => {
  if (nbaColors[teamAbbreviation]) {
    return Object.keys(nbaColors[teamAbbreviation].colors);
  }

  return undefined;
};

const getTeamFullName = teamAbbreviation => {
  if (nbaColors[teamAbbreviation]) {
    return nbaColors[teamAbbreviation].fullName;
  }

  return undefined;
};

export {
  getAllColors,
  getTeamMainColor,
  getTeamColors,
  getTeamFullName,
  getTeamColorsList,
};
