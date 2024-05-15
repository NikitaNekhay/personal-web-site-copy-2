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

export function validateFullName(fullName) {
    // Now allows for Cyrillic characters, and names can have parts separated by spaces or hyphens
    const regex = /^[a-zA-Zа-яА-ЯёЁ]+(?:[\s-][a-zA-Zа-яА-ЯёЁ]+)+$/;
    return regex.test(fullName.trim());
  }

  export function validatePhoneNumber(phoneNumber, userCountry,countries) {
    // Find the country object that matches the userCountry
    const country = countries.find((obj) => obj.code === userCountry);
    //console.log(phoneNumber, userCountry, country);
    //if (!country) return false;

    // Build the regex dynamically based on the country's dial code and allow for a flexible length of the phone number
    const regex = new RegExp(`^\\${country.dial_code}\\d{7,15}$`);
    //console.log();
    return regex.test(phoneNumber);
  }

  export function validateEmail(email) {
    // The email regex does not need to change for Cyrillic as email standards are international
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

 export  function validateUsername(username) {
    // Username can now include Cyrillic characters, underscores, and periods
    const regex = /^[a-zA-Z0-9а-яА-ЯёЁ._]+$/;
    return regex.test(username);
  }

  export function validateAddress(address) {
    // Address validation now includes Cyrillic characters and a more lenient structure
    const regex = /^[a-zA-Z0-9а-яА-ЯёЁ\s,.]+$/;
    return regex.test(address);
  }

  export function validateCity(city, userCountry, countries) {
    // Assuming that the city validation is just to check it's not empty
    // For real-world application, it would require an API call to validate against known cities in the country
    return city.length > 0; // Replace with real API check
  }

  export function validateDiscount(discount) {
    if (discount.length > 0) {
      if (discount === "RIMSKYKORSAKOV") {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  }

  
  export function generateSecurePassword(): string {
    const length = 6;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let password = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
        password += charset.charAt(Math.floor(Math.random() * n));
    }
    return password;
}



