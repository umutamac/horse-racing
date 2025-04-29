import type { Lane, Program, Horse } from "@/types";
import { shuffleArray } from "./util"

// Function to randomly select 10 items from an array of 20
function selectRandomItems<T>(array: T[], numItems: number): T[] {
    const shuffled = shuffleArray(array);  // Shuffle the array
    return shuffled.slice(0, numItems);  // Return the first `numItems` elements
}

function createRound(horses: Horse[]): Lane[] {
    const shuffledHorses = shuffleArray(horses);  // Shuffle to randomize lane assignments
    return shuffledHorses.map((horse, index) => ({
        horseId: horse.id,
        laneNo: index + 1  // Assign lane numbers from 1 to 10 (or more if needed)
    }));
}

// Main function to build the program
export function buildProgram(horsePool: Horse[]): Program {
    const round = createRound(selectRandomItems(horsePool, 10));
    // use the same set of horses for all rounds
    const program: Program = {
        "1200m": round,
        "1400m": round,
        "1600m": round,
        "1800m": round,
        "2000m": round,
        "2200m": round
    };
    return program;
}


export function isProgramEmpty(program: Program): boolean {
    return !Object.values(program).every(lap => lap.length == 10);
}

