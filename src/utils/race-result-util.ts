import type { Lane, ProgramResults, Result } from "@/types";
import { shuffleArray } from "./util";

export function buildEmptyResults(): ProgramResults {
  return {
    "1200m": [],
    "1400m": [],
    "1600m": [],
    "1800m": [],
    "2000m": [],
    "2200m": [],
  };
}

export function allLapsDone(program: ProgramResults): boolean {
  return Object.values(program).every(lap => lap.length == 10);
}

export function generateLapResult(lanes: Lane[]): Result[] {
  const shuffled = shuffleArray(lanes);
  return shuffled.map((h, i) => ({ horseId: h.horseId, position: i + 1 }));
}
