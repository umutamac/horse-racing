export type Horse = {
  id: string;
  name: string;
  condition: number;
  color: string;
};

export type AnimatedHorse = {
  lane: number;
  horseId: string;
  speed: number; // percent per frame
  positionPercent: number;
};
