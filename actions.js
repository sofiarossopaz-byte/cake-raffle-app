
/* Create an empty array to store participant names */
let participants = [];

/* Get the registration form from the HTML */
const participantForm = document.getElementById("participant-form");

/* Get the name input field */
const nameInput = document.getElementById("participant-name");

/* Get the participants list */
const participantsList = document.getElementById("participants-list");

/* Get the participant counter */
const participantCount = document.getElementById("participant-count");

/* Get the Draw button */
const drawButton = document.getElementById("draw-button");

/* Get the winner display area */
const winnerDisplay = document.getElementById("winner-display");


/* Listen for the registration form submission */
participantForm.addEventListener("submit", function(event) {

    /* Prevent the browser from refreshing the page */
    event.preventDefault();

    /* Get the name entered by the participant */
    const name = nameInput.value.trim();

    /* Check that the name is not empty */
    if (name === "") {

        /* Display a warning if no name was entered */
        alert("Please enter a participant name!");

        /* Stop the registration process */
        return;
    }

    /* Add the participant name to the array */
    participants.push(name);

    /* Update the visible participants list */
    displayParticipants();

    /* Clear the input field */
    nameInput.value = "";

    /* Return the cursor to the input field */
    nameInput.focus();

    /* Clear the previous winner announcement */
    winnerDisplay.textContent = "Your winner will appear here!";

});


/* Create a function to display all participants */
function displayParticipants() {

    /* Clear the existing list before updating it */
    participantsList.innerHTML = "";

    /* Loop through every participant */
    participants.forEach(function(name, index) {

        /* Create a new list item */
        const listItem = document.createElement("li");

        /* Add the participant number and name */
        listItem.textContent = (index + 1) + ". " + name;

        /* Insert the list item into the HTML list */
        participantsList.appendChild(listItem);

    });

    /* Update the total participant counter */
    participantCount.textContent = participants.length;

    /* Enable the Draw button when participants exist */
    drawButton.disabled = participants.length === 0;

}


/* Listen for a click on the Draw button */
drawButton.addEventListener("click", function() {

    /* Check that there is at least one participant */
    if (participants.length === 0) {

        /* Display a warning if the list is empty */
        alert("Please add participants before drawing!");

        /* Stop the drawing process */
        return;
    }

    /* Generate a random participant index */
    const randomIndex = Math.floor(Math.random() * participants.length);

    /* Select the winner from the participants array */
    const winner = participants[randomIndex];

    /* Display the winner's name with festive emojis */
    winnerDisplay.innerHTML = "";

    /* Create a heading for the winner announcement */
    const winnerMessage = document.createElement("span");

    /* Add the winner announcement text */
    winnerMessage.textContent = "🎉 Congratulations! 🎉";

    /* Create an element for the winner's name */
    const winnerName = document.createElement("span");

    /* Add the selected participant's name */
    winnerName.textContent = "🎂 " + winner + " 🎂";

    /* Apply the winner name CSS class */
    winnerName.className = "winner-name";

    /* Add the announcement to the winner display */
    winnerDisplay.appendChild(winnerMessage);

    /* Add the winner's name to the winner display */
    winnerDisplay.appendChild(winnerName);

});
