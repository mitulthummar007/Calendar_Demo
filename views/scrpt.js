// Function to calculate the calendar data for a given year
function calcTable(year) {
    const calendarData = new Array(12).fill(null).map(() => new Array(6).fill(null).map(() => new Array(7).fill(null)));

    for (let month = 0; month < calendarData.length; month++) {
        const startDayInWeek = new Date(year, month, 1).getDay(); // Get the starting day of the month (0 = Sunday, 1 = Monday, etc.)
        const monthLong = new Date(year, month + 1, 0).getDate(); // Get the number of days in the month
        let row = 0;
        let col = startDayInWeek;

        for (let day = 1; day <= monthLong; day++) {
            calendarData[month][row][col] = day;
            col++;

            if (col === 7) {
                col = 0;
                row++;
            }
        }
    }
    return calendarData;
}

// Function to generate the HTML for the calendar based on the data
function generateCalendarHTML(calendarData, selectedYear) {
    const months = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];

    const calendarContainer = document.getElementById("calendarContainer");
    calendarContainer.innerHTML = ''; // Clear previous calendar

    for (let month = 0; month < calendarData.length; month++) {
        const monthContainer = document.createElement("div");
        monthContainer.classList.add("month-container");
        monthContainer.id = months[month];

        const monthHeader = document.createElement("h3");
        monthHeader.style.textAlign = "center";
        monthHeader.textContent = `${months[month]} - ${selectedYear}`;

        const dayOfWeek = document.createElement("div");
        dayOfWeek.classList.add("day-of-week");
        dayOfWeek.innerHTML = "<span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span>";

        monthContainer.appendChild(monthHeader);
        monthContainer.appendChild(dayOfWeek);

        for (let row = 0; row < calendarData[month].length; row++) {
            const daysContainer = document.createElement("div");
            daysContainer.classList.add("days");

            for (let col = 0; col < calendarData[month][row].length; col++) {
                const date = calendarData[month][row][col];
                const dateContainer = document.createElement("div");
                dateContainer.classList.add("date");

                if (date !== null) {
                    const dateText = document.createElement("div");
                    dateText.classList.add("date-text");
                    dateText.innerHTML = `<b>${date}</b>`;
                    dateContainer.appendChild(dateText);

                    const noteText = document.createElement("div");
                    noteText.classList.add("note-text");
                    const noteInput = document.createElement("textarea");
                    noteInput.classList.add("note-input");
                    noteInput.placeholder = "";
                    noteText.appendChild(noteInput);
                    dateContainer.appendChild(noteText);
                }

                daysContainer.appendChild(dateContainer);
            }

            monthContainer.appendChild(daysContainer);
        }

        calendarContainer.appendChild(monthContainer);
    }
}

// Handle form submission
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting

    // Get the selected year and month
    const yearInput = document.querySelector('.y-text');
    const selectedYear = parseInt(yearInput.value, 10);
    const monthSelect = document.querySelector('.monthSelect');
    const selectedMonth = parseInt(monthSelect.value, 10);

    // Calculate the calendar data for the selected year
    const calendarData = calcTable(selectedYear);

    // Generate the HTML for the calendar
    generateCalendarHTML(calendarData, selectedYear);

    // Set the selected year in the header
    document.getElementById("selectedYear").textContent = selectedYear;
    const months = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];
    // Calculate the position to scroll to
    const monthContainer = document.getElementById(months[selectedMonth]);
    console.log(selectedMonth, '-------------')
    if (monthContainer) {
        const scrollToY = monthContainer.offsetTop;

        // Use smooth scrolling to scroll to the selected month's page
        window.scrollTo({
            top: scrollToY,
            behavior: 'smooth'
        });
    }
});

// Initialize the calendar for the current year and month
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();

// Calculate the calendar data for the current year
const initialCalendarData = calcTable(currentYear);

// Generate the HTML for the initial calendar
generateCalendarHTML(initialCalendarData, currentYear);

// Set the selected year in the header
document.getElementById("selectedYear").textContent = currentYear;
document.addEventListener("DOMContentLoaded", function () {
    const scrollDownButton = document.getElementById("scrollDownButton");

    scrollDownButton.addEventListener("click", function () {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth"
        });
    });
});
const scrollUpButton = document.getElementById("scrollUpButton");
document.addEventListener("DOMContentLoaded", function () {
    const scrollUpButton = document.getElementById("scrollUpButton");

    scrollUpButton.addEventListener("click", function () {
        window.scrollTo({
            top: document.body.scrollTop,
            behavior: "smooth"
        });
    });
});