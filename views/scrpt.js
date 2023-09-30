
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting

    // Get the selected year and month
    const yearInput = document.getElementsByClassName('y-text');
    const monthSelect = document.querySelector('.monthSelect');
    const selectedYear = parseInt(yearInput.innerHTML, 10); // Parse the year as an integer
    const selectedMonth = parseInt(monthSelect.value, 10);
    const months = ["January", "February", "March", "April", "May", "June", "July",
            "August", "September", "October", "November", "December"];
    // Calculate the position to scroll to
    const monthContainer = document.getElementById(months[selectedMonth]);
    const scrollToY = monthContainer.offsetTop;

    // Use smooth scrolling to scroll to the selected month's page
    window.scrollTo({
        top: scrollToY,
        behavior: 'smooth'
    });
});
const monthSelect = document.getElementsByClassName('monthSelect');

document.addEventListener("DOMContentLoaded", function() {
    const scrollDownButton = document.getElementById("scrollDownButton");
    
    scrollDownButton.addEventListener("click", function() {
        window.scrollTo({
            top: document.body.scrollHeight,
        behavior: "smooth" 
      });
    });
});
const scrollUpButton = document.getElementById("scrollUpButton");
  document.addEventListener("DOMContentLoaded", function() {
    const scrollUpButton = document.getElementById("scrollUpButton");
  
    scrollUpButton.addEventListener("click", function() {
      window.scrollTo({
        top: document.body.scrollTop,
        behavior: "smooth" 
      });
    });
  });

const notes = [] // Array to store notes
const dateElements = document.querySelectorAll(".date");
// Add a click event listener to each date element
dateElements.forEach((dateElement) => {
    const dateId = dateElement.querySelector('.date-text').textContent;
    const noteContainer = dateElement.querySelector('.note-text');
    const noteInput = noteContainer.querySelector('.note-input');
    const saveButton = noteContainer.querySelector('.save-button');

    // Add a click event listener to show the note input box
    dateElement.addEventListener('click', (event) => {
        noteInput.style.display = 'block';
        saveButton.style.display = 'block';
        noteInput.focus();
    });

    // Add a click event listener to the "Save" button
    saveButton.addEventListener('click', (event) => {
        const noteText = noteInput.value;

        // Update the note text and save it
        let note = notes.find((note) => note.dateId === dateId);

        if (!note) {
            // If no note exists, create a new one
            note = {
                dateId: dateId,
                text: '',
            };
            notes.push(note);
        }

        note.text = noteText;

        // Update the UI to display the note without removing the date
        noteInput.style.display = 'none';
        saveButton.style.display = 'none';
        const noteDisplay = noteContainer.querySelector('.note-display');
        noteDisplay.textContent = noteText;
    });
});



// const notes = [];


// // Get all the date elements
// const dateElements = document.querySelectorAll('.date');

// // Add a click event listener to each date element
// dateElements.forEach((dateElement) => {
//     dateElement.addEventListener('click', (event) => {
//         const dateId = dateElement.querySelector('div').id;
        
//         // Check if there's already a note for this date
//         let note = notes.find((note) => note.dateId === dateId);

//         if (!note) {
//             // If no note exists, create a new one
//             note = {
//                 // dateId: dateId,
//                 text: '',
//             };
//             notes.push(note);
//         }

//         // Display a prompt to edit the note text
//         const noteText = prompt(`Enter a note for ${dateId}:`, note.text);

//         if (noteText !== null) {
//             // Update the note text and save it
//             note.text = noteText;

//             // You can save the note in a database or localStorage if needed

//             // Update the UI to display the note
//             dateElement.querySelector('div').textContent = noteText;
//         }
//     });
// });

