// Task 1: Fetching Pokemon data using Promises
// I chose Lucario as my favorite Pokemon - such a cool fighting/steel type!
console.log("Starting Pokemon API call using promises...");

// Using fetch with promises to get Pokemon data
fetch("https://pokeapi.co/api/v2/pokemon/lucario/")
    .then((response) => {
        // Check if the response is successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then((pokemonData) => {
        // Extract and display the required information
        console.log("\n=== Pokemon Information ===");
        console.log(`Name: ${pokemonData.name}`);
        console.log(`Weight: ${pokemonData.weight}`);
        
        // Get the first ability from the abilities array
        const firstAbility = pokemonData.abilities[0].ability.name;
        console.log(`Ability: ${firstAbility}`);
        
        console.log("=== End of Pokemon Data ===\n");
        
        // Additional logging for verification (student-like curiosity)
        console.log(`Successfully fetched data for ${pokemonData.name}!`);
    })
    .catch((error) => {
        // Error handling as taught in the lesson
        console.error("Error fetching Pokemon data:", error);
        console.log("Make sure you have internet connection and the API is accessible.");
    });

// This demonstrates asynchronous behavior - this will run immediately
console.log("This message appears while the API call is being processed (asynchronous behavior)");