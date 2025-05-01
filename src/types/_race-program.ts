export type Lane = {
  horseId: string;
  laneNo: number;
};

export type Program = {
  "1200m": Lane[];
  "1400m": Lane[];
  "1600m": Lane[];
  "1800m": Lane[];
  "2000m": Lane[];
  "2200m": Lane[];
};

export type LapName = keyof Program;
