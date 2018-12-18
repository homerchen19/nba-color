export interface TeamColor {
  hex: string;
  tgb: [number, number, number];
}

export interface TeamColors {
  [colorName: string]: TeamColor;
}

export interface Colors {
  [teamAbbreviation: string]: {
    fullName: string;
    mainColor: string;
    colors: TeamColors;
  };
}

export function getAllColors(): Colors;
export function getMainColor(teamAbbreviation: string): TeamColor;
export function getColors(teamAbbreviation: string): TeamColors;
export function getFullName(teamAbbreviation: string): string;
export function getColorsList(teamAbbreviation: string): string[];
