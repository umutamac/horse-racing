import type { Lane, Result, AnimatedHorse, Horse } from "@/types";

const horseNames = [
    "Thunder", "Blaze", "Storm", "Shadow", "Comet", "Spirit", "Champion", "Zephyr", "Echo", "Bolt",
    "Rusty", "Phantom", "Flame", "Copper", "Jet", "Tornado", "Twilight", "Lightning", "Maverick", "Cinnamon"
];

function getHexColorFromSeed(seed: number): string {
    const hex = (seed & 0xFFFFFF).toString(16);  // Mask with 0xFFFFFF to get a 6-digit hex color
    return `#${hex.padStart(6, '0')}`;  // Ensure it's 6 characters long
}

// Function to generate a unique ID based on a seed
function generateUniqueId(seed: number): string {
    return `horse-${seed}`;
}

// Function to generate 20 unique horses
export function generateHorses(): Horse[] {
    const horseSet = new Set<string>();  // To store used horse names
    const horses: Horse[] = [];

    // Ensure there are at least 20 unique names available
    if (horseNames.length < 20) {
        throw new Error("Not enough unique horse names available.");
    }

    for (let i = 0; i < 20; i++) {
        // Generate a random unique name from the list
        const name = horseNames[i];  // Select name based on the index
        if (horseSet.has(name)) {
            continue; // Skip if name already used (but this won't happen with sequential access)
        }
        horseSet.add(name);

        // Use the index to derive the seed for uniqueness
        const seed = i + Math.random();  // Make the seed based on index + random number for diversity

        // Generate the ID and color based on the same seed
        const id = generateUniqueId(seed);
        const color = getHexColorFromSeed(seed);

        // Generate a random condition value between 1 and 100
        const condition = Math.floor(Math.random() * 100) + 1;

        const horse: Horse = {
            id,
            name,
            condition,
            color
        };

        horses.push(horse);
    }

    return horses;
}


export function createAnimatedHorses(lanes: Lane[], results: Result[]): AnimatedHorse[] {
    const baseSpeed = 0.5 // % per frame
    const decrement = 0.04

    const horseById = new Map(results.map((r, i) => [r.horseId, baseSpeed - i * decrement]))

    return lanes
        .map((lane) => ({
            horseId: lane.horseId,
            lane: lane.laneNo,
            speed: horseById.get(lane.horseId) ?? 1,
            positionPercent: 0,
        }))
        .sort((a, b) => a.lane - b.lane)
}

export function bPlaceholderAnimatedHorses(): AnimatedHorse[] {
    return Array.from(Array(10).keys()).map(i => ({
        lane: i,
        horseId: "",
        speed: 0,
        positionPercent: 0
    }))
}