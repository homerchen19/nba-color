const pureWhite = {
  hex: '#ffffff',
  rgb: [255, 255, 255],
};

const pureBlack = {
  hex: '#000000',
  rgb: [0, 0, 0],
};

const colors = {
  ATL: {
    fullName: 'Atlanta Hawks',
    mainColor: {
      hex: '#c8102e',
      rgb: [200, 16, 46],
    },
    colors: {
      red: {
        hex: '#c8102e',
        rgb: [200, 16, 46],
      },
      green: {
        hex: '#c4d600',
        rgb: [196, 214, 0],
      },
      white: pureWhite,
      gray: {
        hex: '#25282a',
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
      hex: '#007a33',
      rgb: [0, 122, 51],
    },
    colors: {
      green: {
        hex: '#007a33',
        rgb: [0, 122, 51],
      },
      black: pureBlack,
      white: pureWhite,
      gold: {
        hex: '#ffd700',
        rgb: [255, 215, 0],
      },
      silver: {
        hex: '#c0c0c0',
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
        hex: '#00778b',
        rgb: [0, 119, 139],
      },
      white: pureWhite,
      gray: {
        hex: '#888b8d',
        rgb: [136, 139, 141],
      },
    },
  },
  CHI: {
    fullName: 'Chicago Bulls',
    mainColor: {
      hex: '#ba0c2f',
      rgb: [186, 12, 47],
    },
    colors: {
      red: {
        hex: '#ba0c2f',
        rgb: [186, 12, 47],
      },
      black: pureBlack,
      white: pureWhite,
    },
  },
  CLE: {
    fullName: 'Cleveland Cavaliers',
    mainColor: {
      hex: '#6f263d',
      rgb: [111, 38, 61],
    },
    colors: {
      wine: {
        hex: '#6f263d',
        rgb: [111, 38, 61],
      },
      white: pureWhite,
      navy: {
        hex: '#041e42',
        rgb: [4, 30, 66],
      },
      gold: {
        hex: '#ffb81c',
        rgb: [255, 184, 28],
      },
    },
  },
  DAL: {
    fullName: 'Dallas Mavericks',
    mainColor: {
      hex: '#0050b5',
      rgb: [0, 80, 181],
    },
    colors: {
      blue: {
        hex: '#0050b5',
        rgb: [0, 80, 181],
      },
      silver: {
        hex: '#8d9093',
        rgb: [141, 144, 147],
      },
      navy: {
        hex: '#0c2340',
        rgb: [12, 35, 64],
      },
      black: pureBlack,
      white: pureWhite,
    },
  },
  DEN: {
    fullName: 'Denver Nuggets',
    mainColor: {
      hex: '#418fde',
      rgb: [65, 143, 222],
    },
    colors: {
      blue: {
        hex: '#418fde',
        rgb: [65, 143, 222],
      },
      gold: {
        hex: '#ffc72c',
        rgb: [255, 199, 44],
      },
      navy: {
        hex: '#0c2340',
        rgb: [12, 35, 64],
      },
      white: pureWhite,
    },
  },
  DET: {
    fullName: 'Detroit Pistons',
    mainColor: {
      hex: '#003da5',
      rgb: [0, 61, 165],
    },
    colors: {
      blue: {
        hex: '#003da5',
        rgb: [0, 61, 165],
      },
      red: {
        hex: '#d50032',
        rgb: [213, 0, 50],
      },
      navy: {
        hex: '#041e42',
        rgb: [4, 30, 66],
      },
      white: pureWhite,
    },
  },
  GSW: {
    fullName: 'Golden State Warriors',
    mainColor: {
      hex: '#ffc72d',
      rgb: [255, 199, 44],
    },
    colors: {
      gold: {
        hex: '#ffc72d',
        rgb: [255, 199, 44],
      },
      blue: {
        hex: '#003da5',
        rgb: [0, 61, 165],
      },
    },
  },
  HOU: {
    fullName: 'Houston Rockets',
    mainColor: {
      hex: '#ba0c2f',
      rgb: [186, 12, 47],
    },
    colors: {
      red: {
        hex: '#ba0c2f',
        rgb: [186, 12, 47],
      },
      silver: {
        hex: '#8d9093',
        rgb: [141, 144, 147],
      },
      yellow: {
        hex: '#fdb927',
        rgb: [253, 185, 39],
      },
      white: pureWhite,
      black: pureBlack,
    },
  },
  IND: {
    fullName: 'Indiana Pacers',
    mainColor: {
      hex: '#041e42',
      rgb: [4, 30, 66],
    },
    colors: {
      blue: {
        hex: '#041e42',
        rgb: [4, 30, 66],
      },
      gold: {
        hex: '#ffb81c',
        rgb: [255, 184, 28],
      },
      silver: {
        hex: '#b1b3b3',
        rgb: [177, 179, 179],
      },
      white: pureWhite,
    },
  },
  LAC: {
    fullName: 'Los Angeles Clippers',
    mainColor: {
      hex: '#d50032',
      rgb: [213, 0, 50],
    },
    colors: {
      red: {
        hex: '#d50032',
        rgb: [213, 0, 50],
      },
      blue: {
        hex: '#003da5',
        rgb: [0, 61, 165],
      },
      silver: {
        hex: '#b1b3b3',
        rgb: [177, 179, 179],
      },
      white: pureWhite,
    },
  },
  LAL: {
    fullName: 'Los Angeles Lakers',
    mainColor: {
      hex: '#702f8a',
      rgb: [112, 47, 138],
    },
    colors: {
      purple: {
        hex: '#702f8a',
        rgb: [112, 47, 138],
      },
      gold: {
        hex: '#ffc72c',
        rgb: [255, 199, 44],
      },
      white: pureWhite,
    },
  },
  MEM: {
    fullName: 'Memphis Grizzlies',
    mainColor: {
      hex: '#23375b',
      rgb: [35, 55, 91],
    },
    colors: {
      midnightBlue: {
        hex: '#23375b',
        rgb: [35, 55, 91],
      },
      bealeStreetBlue: {
        hex: '#6189b9',
        rgb: [97, 137, 185],
      },
      smokeBlue: {
        hex: '#bbd1e4',
        rgb: [187, 209, 228],
      },
      gold: {
        hex: '#ffd432',
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
        hex: '#ffa300',
        rgb: [255, 163, 0],
      },
      white: pureWhite,
      black: pureBlack,
    },
  },
  MIL: {
    fullName: 'Milwaukee Bucks',
    mainColor: {
      hex: '#2c5234',
      rgb: [44, 82, 52],
    },
    colors: {
      green: {
        hex: '#2c5234',
        rgb: [44, 82, 52],
      },
      cream: {
        hex: '#ddcba4',
        rgb: [221, 203, 164],
      },
      blue: {
        hex: '#0057b8',
        rgb: [0, 87, 184],
      },
      white: pureWhite,
      black: pureBlack,
    },
  },
  MIN: {
    fullName: 'Minnesota Timberwolves',
    mainColor: {
      hex: '#002b5c',
      rgb: [0, 42, 92],
    },
    colors: {
      blue: {
        hex: '#002b5c',
        rgb: [0, 42, 92],
      },
      grey: {
        hex: '#c6cfd4',
        rgb: [198, 208, 215],
      },
      green: {
        hex: '#7ac143',
        rgb: [122, 192, 67],
      },
      white: pureWhite,
    },
  },
  NOP: {
    fullName: 'New Orleans Pelicans',
    mainColor: {
      hex: '#002b5c',
      rgb: [0, 43, 92],
    },
    colors: {
      blue: {
        hex: '#002b5c',
        rgb: [0, 43, 92],
      },
      gold: {
        hex: '#b4975a',
        rgb: [180, 151, 90],
      },
      red: {
        hex: '#e31937',
        rgb: [227, 25, 55],
      },
      white: pureWhite,
    },
  },
  NYK: {
    fullName: 'New York Knicks',
    mainColor: {
      hex: '#003da5',
      rgb: [0, 61, 165],
    },
    colors: {
      blue: {
        hex: '#003da5',
        rgb: [0, 61, 165],
      },
      orange: {
        hex: '#ff671f',
        rgb: [255, 103, 31],
      },
      silver: {
        hex: '#b1b3b3',
        rgb: [177, 179, 179],
      },
      white: pureWhite,
    },
  },
  OKC: {
    fullName: 'Oklahoma City Thunder',
    mainColor: {
      hex: '#007dc3',
      rgb: [0, 125, 195],
    },
    colors: {
      blue: {
        hex: '#007dc3',
        rgb: [0, 125, 195],
      },
      orange: {
        hex: '#f05133',
        rgb: [240, 81, 51],
      },
      yellow: {
        hex: '#fdbb30',
        rgb: [253, 187, 48],
      },
      darkBlue: {
        hex: '#002d62',
        rgb: [0, 45, 98],
      },
    },
  },
  ORL: {
    fullName: 'Orlando Magic',
    mainColor: {
      hex: '#007dc5',
      rgb: [0, 125, 197],
    },
    colors: {
      blue: {
        hex: '#007dc5',
        rgb: [0, 125, 197],
      },
      silver: {
        hex: '#c4ced3',
        rgb: [196, 206, 211],
      },
      white: pureWhite,
      black: pureBlack,
    },
  },
  PHI: {
    fullName: 'Philadelphia 76ers',
    mainColor: {
      hex: '#006bb6',
      rgb: [0, 102, 182],
    },
    colors: {
      blue: {
        hex: '#006bb6',
        rgb: [0, 102, 182],
      },
      red: {
        hex: '#ed174c',
        rgb: [237, 23, 76],
      },
      white: pureWhite,
    },
  },
  PHX: {
    fullName: 'Phoenix Suns',
    mainColor: {
      hex: '#e56020',
      rgb: [229, 96, 32],
    },
    colors: {
      orange: {
        hex: '#e56020',
        rgb: [229, 96, 32],
      },
      purple: {
        hex: '#1d1160',
        rgb: [29, 17, 96],
      },
      gray: {
        hex: '#63717a',
        rgb: [99, 113, 122],
      },
      white: pureWhite,
      black: pureBlack,
    },
  },
  POR: {
    fullName: 'Portland Trailblazers',
    mainColor: {
      hex: '#f0163a',
      rgb: [240, 22, 58],
    },
    colors: {
      red: {
        hex: '#f0163a',
        rgb: [240, 22, 58],
      },
      silver: {
        hex: '#b6bfbf',
        rgb: [182, 191, 191],
      },
      white: pureWhite,
      black: pureBlack,
    },
  },
  SAC: {
    fullName: 'Sacramento Kings',
    mainColor: {
      hex: '#724c9f',
      rgb: [114, 76, 159],
    },
    colors: {
      purple: {
        hex: '#724c9f',
        rgb: [114, 76, 159],
      },
      silver: {
        hex: '#8e9090',
        rgb: [142, 144, 144],
      },
      white: pureWhite,
      black: pureBlack,
    },
  },
  SAS: {
    fullName: 'San Antonio Spurs',
    mainColor: {
      hex: '#b6bfbf',
      rgb: [182, 191, 191],
    },
    colors: {
      silver: {
        hex: '#b6bfbf',
        rgb: [182, 191, 191],
      },
      white: pureWhite,
      black: pureBlack,
    },
  },
  TOR: {
    fullName: 'Toronto Raptors',
    mainColor: {
      hex: '#ce1141',
      rgb: [206, 17, 65],
    },
    colors: {
      red: {
        hex: '#ce1141',
        rgb: [206, 17, 65],
      },
      silver: {
        hex: '#c4ced3',
        rgb: [196, 206, 211],
      },
      white: pureWhite,
      black: pureBlack,
    },
  },
  UTA: {
    fullName: 'Utah Jazz',
    mainColor: {
      hex: '#002b5c',
      rgb: [0, 43, 92],
    },
    colors: {
      navy: {
        hex: '#002b5c',
        rgb: [0, 43, 92],
      },
      yellow: {
        hex: '#f9a01b',
        rgb: [249, 160, 27],
      },
      green: {
        hex: '#00471b',
        rgb: [0, 71, 27],
      },
      gray: {
        hex: '#bec0c2',
        rgb: [190, 192, 194],
      },
    },
  },
  WAS: {
    fullName: 'Washington Wizards',
    mainColor: {
      hex: '#0c2340',
      rgb: [12, 35, 64],
    },
    colors: {
      navy: {
        hex: '#0c2340',
        rgb: [12, 35, 64],
      },
      red: {
        hex: '#c8102e',
        rgb: [200, 16, 46],
      },
      silver: {
        hex: '#8d9093',
        rgb: [141, 144, 147],
      },
      white: pureWhite,
    },
  },
};

export default colors;
