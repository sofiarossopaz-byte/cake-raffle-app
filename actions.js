
// Create an empty array to store participants
let participants = [];

// Get the registration form
const participantForm = document.getElementById("participant-form");

// Get the name input field
const nameInput = document.getElementById("participant-name");

// Get the participants list
const participantsList = document.getElementById("participants-list");

// Get the participant counter
const participantCount = document.getElementById("participant-count");

// Get the Draw button
const drawButton = document.getElementById("draw-button");

// Get the Reset button
const resetButton = document.getElementById("reset-button");

// Get the winner display area
const winnerDisplay = document.getElementById("winner-display");


// REGISTER A NEW PARTICIPANT
participantForm.addEventListener("submit", function(event) {

    // Prevent the page from refreshing
    event.preventDefault();

    // Get the participant's name
    const name = nameInput.value.trim();

    // Check that the name is not empty
    if (name === "") {
        alert("Please enter a participant name!");
        return;
    }

    // Add the name to the participants array
    participants.push(name);

    // Update the participants list
    displayParticipants();

    // Clear the input field
    nameInput.value = "";

    // Focus on the input field
    nameInput.focus();

    // Reset the winner display
    winnerDisplay.textContent = "Your winner will appear here!";

});


// DISPLAY ALL PARTICIPANTS
function displayParticipants() {

    // Clear the existing list
    participantsList.innerHTML = "";

    // Loop through the participants array
    participants.forEach(function(name, index) {

        // Create a new list item
        const listItem = document.createElement("li");

        // Display the participant number and name
        listItem.textContent = (index + 1) + ". " + name;

        // Add the name to the participants list
        participantsList.appendChild(listItem);

    });

    // Update the participant counter
    participantCount.textContent = participants.length;

    // Enable Draw button if participants exist
    drawButton.disabled = participants.length === 0;

}


// DRAW A RANDOM WINNER
drawButton.addEventListener("click", function() {

    // Check if there are participants
    if (participants.length === 0) {
        alert("Please add participants before drawing!");
        return;
    }

    // Generate a random index
    const randomIndex = Math.floor(Math.random() * participants.length);

    // Select the winner
    const winner = participants[randomIndex];

    // Clear the previous winner announcement
    winnerDisplay.innerHTML = "";

    // Create the congratulations message
    const winnerMessage = document.createElement("span");

    // Set the announcement text
    winnerMessage.textContent = "🎉 Congratulations! 🎉";

    // Create the winner name element
    const winnerName = document.createElement("span");

    // Display the winner's name with cake emojis
    winnerName.textContent = "🎂 " + winner + " 🎂";

    // Apply the winner CSS class
    winnerName.className = "winner-name";

    // Add the congratulations message
    winnerDisplay.appendChild(winnerMessage);

    // Add the winner's name
    winnerDisplay.appendChild(winnerName);

});


// RESET THE RAFFLE
resetButton.addEventListener("click", function() {

    // Ask for confirmation before resetting
    const confirmReset = confirm(
        "Are you sure you want to reset the raffle?"
    );

    // Stop if the user cancels
    if (!confirmReset) {
        return;
    }

    // Clear all participants
    participants = [];

    // Update the participants list and counter
    displayParticipants();

    // Clear the name input field
    nameInput.value = "";

    // Reset the winner announcement
    winnerDisplay.textContent = "Your winner will appear here!";

    // Disable the Draw button
    drawButton.disabled = true;

});
