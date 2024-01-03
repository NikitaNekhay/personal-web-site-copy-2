// Helper function to capitalize the first letter of a word
function capitalize(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

// Main function to process the input string
export function processColorsString(input: string | string[]): string[] {

    // If input is an array, join it into a string
    if (Array.isArray(input)) {
        input = input.join(" ");
    }

    // Remove special characters and split the string into words
    const words = input.replace(/[^a-zA-Z ]/g, "").split(/\s+/);

    // Capitalize each word and filter out empty strings
    return words.map(capitalize).filter(Boolean);
}


