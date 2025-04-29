import type { Lane, Result, AnimatedHorse, Horse } from "@/types";

const horseNames = [
    "Thunder", "Blaze", "Storm", "Shadow", "Comet", "Spirit", "Champion", "Zephyr", "Echo", "Bolt",
    "Rusty", "Phantom", "Flame", "Copper", "Jet", "Tornado", "Twilight", "Lightning", "Maverick", "Cinnamon"
];
const colorNames = [
    "red", "green", "blue", "orange", "purple", "teal", "pink", "brown", "yellow", "cyan",
    "magenta", "lime", "navy", "maroon", "olive", "aqua", "coral", "indigo", "gold", "white"
];

// Function to generate a unique ID based on a seed
function generateUniqueId(seed: number): string {
    return `horse-${seed}`;
}

export function generateHorses(): Horse[] {
    //const horseSet = new Set<string>();
    const horses: Horse[] = [];

    if (horseNames.length < 20 || colorNames.length < 20) {
        throw new Error("Need at least 20 horse names and 20 color names.");
    }

    // Shuffle colorNames so each run is different
    const shuffledColors = [...colorNames].sort(() => Math.random() - 0.5);

    for (let i = 0; i < 20; i++) {
        const name = horseNames[i];
        const color = shuffledColors[i];
        const seed = Math.random();
        const id = generateUniqueId(seed);
        const condition = Math.floor(Math.random() * 100) + 1;

        horses.push({
            id,
            name,
            condition,
            color,
        });
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