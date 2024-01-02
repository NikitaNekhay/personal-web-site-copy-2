// Helper function to capitalize the first letter of a word
function capitalize(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

// Main function to process the input string
export function processColorsString(input: string | string[]): string[] {
    
    if(typeof(input) === "object"){
        input = input.join(" ");
    }
   // Remove punctuation and split the string by spaces
   const words = input.replace(/[.,/;]+/g, '').split(` `);

   // Capitalize each word
   const capitalizedWords = words.map(word => capitalize(word));

   // Optionally, you can bold some words based on a condition
   // For demonstration, let's bold every third word
   const processedWords = capitalizedWords.map((word, index) => 
       (index + 1) % 3 === 0 ? ` ${word} ` : word);

   return processedWords;
}


