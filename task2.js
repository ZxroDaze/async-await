// Task 2: Fetching random cat GIF using async/await
// Cats are pretty neat, but I confess I love dogs more
console.log("TASK 2: CAT GIF API WITH ASYNC/AWAIT");
console.log("Fetching a random cat GIF using async/await...");

async function fetchCatGif() {
    try {
        console.log("Making API request to The Cat API...");
        console.log("Using async/await for cleaner code structure 🐱");
        
        // Fetch the cat GIF from the API (updated to use HTTPS and reliable endpoint)
        const response = await fetch("https://api.thecatapi.com/v1/images/search?mime_types=gif");
        
        // Check if the response is successful (good practice from Task 1)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        console.log("API response received successfully!");
        
        // Parse the JSON response to get the image data
        const catData = await response.json();
        
        // Extract the image URL from the response array
        const imageUrl = catData[0].url;
        
        console.log("\n=== CAT GIF URL ===");
        console.log(imageUrl);
        console.log("=== END OF CAT GIF DATA ===\n");
        
        // Additional student-like verification and learning notes
        console.log("✅ Successfully retrieved cat GIF URL!");
        console.log("📝 Note: Updated to use HTTPS Cat API endpoint for security compliance");
        console.log("🔍 Parsed JSON response to extract image URL from data array");
        console.log("🌐 You can copy and paste this URL in your browser to view the GIF");
        console.log("🎯 Task completed using async/await pattern");
        
    } catch (error) {
        // Error handling with try/catch as mentioned in the lesson
        console.error("❌ Error fetching cat GIF:", error);
        console.log("Please check your internet connection and try again.");
        console.log("💡 This error was caught by our try/catch block in the async function");
    }
}

// Call the async function
fetchCatGif();

// Demonstrating that code continues to run (asynchronous behavior)
console.log("⚡ This runs immediately while waiting for the API response!");
console.log("🚀 Async/await makes the code look synchronous but still runs asynchronously");

// Additional learning note (student-like reflection)
console.log("\n💭 Personal reflection: The async/await syntax is much more readable than promise chains!");
console.log("🎓 Both approaches work, but async/await feels more natural to write and debug\n");