interface teamColor {
  hex: string;
  tgb: [number, number, number];
}

interface teamColors {
  [colorName: string]: teamColor;
}

interface colors {
  [teamAbbreviation: string]: {
    fullName: string;
    mainColor: string;
    colors: teamColors;
  };
}

export function getAllColors(): colors;
export function getMainColor(teamAbbreviation: string): teamColor;
export function getColors(teamAbbreviation: string): teamColors;
export function getFullName(teamAbbreviation: string): string;
export function getColorsList(teamAbbreviation: string): string[];
