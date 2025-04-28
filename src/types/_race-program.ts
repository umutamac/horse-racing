
export type Round = {
    horseId: string;
    lane: number;
}[];

export type Program = {
    "1200m": Round;
    "1400m": Round;
    "1600m": Round;
    "1800m": Round;
    "2000m": Round;
    "2200m": Round;
}

export type RoundName = keyof Program

export type Result = {
    horseId: string;
    position: number;
}[];

export type Results = {
    "1200m": Result;
    "1400m": Result;
    "1600m": Result;
    "1800m": Result;
    "2000m": Result;
    "2200m": Result;
}