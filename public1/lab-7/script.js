// Handle form submission
document.getElementById("submitBtn").addEventListener("click", function () {
    // Get user inputs
    const noun1 = document.getElementById("noun1").value;
    const adjective1 = document.getElementById("adjective1").value;
    const verb1 = document.getElementById("verb1").value;
    const place1 = document.getElementById("place1").value;

    // Validate inputs
    if (!noun1 || !adjective1 || !verb1 || !place1) {
        alert("Please fill out all fields!");
        return;
    }

    // Create the story
    const story = `
        Once upon a time, there was a ${adjective1} ${noun1}.
        It loved to ${verb1} at ${place1}. Everyone admired the ${adjective1} ${noun1},
        and it became the hero of the town!
    `;

    // Hide the form and show the story
    document.getElementById("form-container").style.display = "none";
    document.getElementById("story-container").style.display = "block";
    document.getElementById("storyText").textContent = story;
});

// Handle restarting the story
document.getElementById("restartBtn").addEventListener("click", function () {
    // Reset the form
    document.getElementById("madLibForm").reset();

    // Show the form and hide the story
    document.getElementById("form-container").style.display = "block";
    document.getElementById("story-container").style.display = "none";
});
