import type { Round, Program, Results } from "@/types/_race-program";
import type { Horse } from "@/types/_horse";

function shuffleArray<T>(array: T[]): T[] {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}

// Function to randomly select 10 items from an array of 20
function selectRandomItems<T>(array: T[], numItems: number): T[] {
    const shuffled = shuffleArray(array);  // Shuffle the array
    return shuffled.slice(0, numItems);  // Return the first `numItems` elements
}

function createRound(horses: Horse[]): Round {
    const shuffledHorses = shuffleArray(horses);  // Shuffle to randomize lane assignments
    return shuffledHorses.map((horse, index) => ({
        horseId: horse.id,
        lane: index + 1  // Assign lane numbers from 1 to 10 (or more if needed)
    }));
}

// Main function to build the program
export function buildProgram(horsePool: Horse[]): Program {
    const program: Program = {
        "1200m": createRound(selectRandomItems(horsePool, 10)),
        "1400m": createRound(selectRandomItems(horsePool, 10)),
        "1600m": createRound(selectRandomItems(horsePool, 10)),
        "1800m": createRound(selectRandomItems(horsePool, 10)),
        "2000m": createRound(selectRandomItems(horsePool, 10)),
        "2200m": createRound(selectRandomItems(horsePool, 10))
    };

    return program;
}

export function buildEmptyResults(): Results {
    return {
        "1200m": [],
        "1400m": [],
        "1600m": [],
        "1800m": [],
        "2000m": [],
        "2200m": []
    }
}