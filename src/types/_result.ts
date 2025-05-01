export type Result = {
  horseId: string;
  position: number;
};

export type ProgramResults = {
  "1200m": Result[];
  "1400m": Result[];
  "1600m": Result[];
  "1800m": Result[];
  "2000m": Result[];
  "2200m": Result[];
};
