import type { Horse } from "@/types/_horse";

// Pre-determined list of horse names (adjust as necessary)
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

        // Create the horse object
        const horse: Horse = {
            id,
            name,
            condition,
            color
        };

        horses.push(horse);  // Add to the result array
    }

    return horses;
}