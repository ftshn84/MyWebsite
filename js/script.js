// ============================================
// JAVASCRIPT - INTERACTIVE FUNCTIONALITY
// ============================================

// Get all navigation buttons from the HTML
const navButtons = document.querySelectorAll('.nav-btn');

// ============================================
// EVENT LISTENERS FOR NAVIGATION BUTTONS
// ============================================

/**
 * Loop through each navigation button and add a click event listener
 * This allows each button to perform an action when clicked
 */
navButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        // Prevent default link behavior (we'll handle scrolling manually)
        event.preventDefault();

        // Get the section ID that the button links to (from the href attribute)
        const sectionId = button.getAttribute('href').substring(1); // Remove the '#' character
        const targetSection = document.getElementById(sectionId);

        // Log message to console when button is clicked
        console.log(`Navigating to: ${sectionId}`);

        // Smooth scroll to the target section
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth', // Smooth scrolling animation
                block: 'start' // Align section to the start of viewport
            });

            // Update active button styling
            removeActiveFromButtons();
            button.classList.add('active');
        }
    });

    // Add hover event listeners to deselect on hover
    button.addEventListener('mouseenter', () => {
        removeActiveFromButtons();
    });

    // Restore active state when mouse leaves if button was previously active
    button.addEventListener('mouseleave', () => {
        // Re-check which button should be active based on scroll position
        updateActiveButton();
    });
});

// ============================================
// HELPER FUNCTION - REMOVE ACTIVE CLASS
// ============================================

/**
 * Remove the 'active' class from all navigation buttons
 * This is used to reset the styling before applying it to a new button
 */
function removeActiveFromButtons() {
    navButtons.forEach((btn) => {
        btn.classList.remove('active');
    });
}

// ============================================
// UPDATE ACTIVE BUTTON BASED ON SCROLL
// ============================================

/**
 * This function determines which button should be active based on current scroll position
 * Used when mouse leaves a button to restore the correct active state
 */
function updateActiveButton() {
    // Get all section elements
    const sections = document.querySelectorAll('.section');
    let activeFound = false;

    // Loop backwards through sections to find the one currently in view
    for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const sectionTop = section.offsetTop;

        // Check if the section is currently visible (accounting for header height)
        if (window.scrollY >= sectionTop - 90) {
            // Remove active from all buttons first
            removeActiveFromButtons();

            // Get the section's ID
            const sectionId = section.getAttribute('id');

            // Find and highlight the corresponding navigation button
            const correspondingButton = document.querySelector(
                `.nav-btn[href="#${sectionId}"]`
            );

            // Add active class to the current section's button
            if (correspondingButton) {
                correspondingButton.classList.add('active');
            }
            activeFound = true;
            break;
        }
    }
}

// ============================================
// HIGHLIGHT ACTIVE SECTION ON SCROLL
// ============================================

/**
 * This function runs whenever the user scrolls the page
 * It automatically highlights the current section in the navigation
 */
window.addEventListener('scroll', () => {
    updateActiveButton();
});

// ============================================
// HIGHLIGHT HOME BUTTON ON PAGE LOAD
// ============================================

/**
 * When the page first loads, highlight the 'Home' button
 * This gives immediate visual feedback about which section is being viewed
 */
window.addEventListener('load', () => {
    // Find the home button (first button)
    const homeButton = document.querySelector('.nav-btn[href="#home"]');

    // Add active class to highlight it
    if (homeButton) {
        homeButton.classList.add('active');
        console.log('Page loaded - Home section highlighted');
    }
});

// ============================================
// EXAMPLE: CUSTOM FUNCTION FOR SPECIFIC ACTIONS
// ============================================

/**
 * Example function that could be called when a specific button is clicked
 * You can customize this to perform different actions for different buttons
 * For example: open modals, toggle settings, etc.
 */
function handleSpecialAction(actionName) {
    console.log(`Performing action: ${actionName}`);
    // Add your custom logic here
}

// Example: Add a special click handler to the 'Settings' button if needed
const settingsButton = document.querySelector('.nav-btn[href="#settings"]');
if (settingsButton) {
    settingsButton.addEventListener('click', () => {
        handleSpecialAction('Settings opened');
    });
}

// ============================================
// CALENDAR FUNCTIONALITY
// ============================================

/**
 * Initialize and display the calendar
 */
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();
let selectedDate = null;

/**
 * Generate and display the calendar for current month/year
 */
function generateCalendar() {
    // Get the first day of the month and number of days
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const daysInPrevMonth = new Date(currentYear, currentMonth, 0).getDate();

    // Update month/year display
    const monthYearElement = document.getElementById('monthYear');
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                        'July', 'August', 'September', 'October', 'November', 'December'];
    monthYearElement.textContent = `${monthNames[currentMonth]} ${currentYear}`;

    // Clear previous calendar days
    const calendarDaysElement = document.getElementById('calendarDays');
    calendarDaysElement.innerHTML = '';

    // Add previous month's days (grayed out)
    for (let i = firstDay - 1; i >= 0; i--) {
        const dayDiv = document.createElement('div');
        dayDiv.className = 'calendar-day empty';
        dayDiv.textContent = daysInPrevMonth - i;
        calendarDaysElement.appendChild(dayDiv);
    }

    // Add current month's days
    const today = new Date();
    for (let day = 1; day <= daysInMonth; day++) {
        const dayDiv = document.createElement('div');
        dayDiv.className = 'calendar-day';
        dayDiv.textContent = day;

        // Check if this is today
        if (day === today.getDate() && 
            currentMonth === today.getMonth() && 
            currentYear === today.getFullYear()) {
            dayDiv.classList.add('today');
        }

        // Add click event to select date
        dayDiv.addEventListener('click', () => {
            selectDate(day, currentMonth, currentYear);
        });

        calendarDaysElement.appendChild(dayDiv);
    }

    // Add next month's days (grayed out)
    const totalCells = calendarDaysElement.children.length + firstDay;
    const remainingCells = 42 - totalCells; // 6 rows × 7 days
    for (let day = 1; day <= remainingCells; day++) {
        const dayDiv = document.createElement('div');
        dayDiv.className = 'calendar-day empty';
        dayDiv.textContent = day;
        calendarDaysElement.appendChild(dayDiv);
    }
}

/**
 * Handle date selection
 */
function selectDate(day, month, year) {
    // Remove previously selected date highlight
    document.querySelectorAll('.calendar-day.selected').forEach(el => {
        el.classList.remove('selected');
    });

    // Find and highlight the selected date
    const dayElements = document.querySelectorAll('.calendar-day:not(.empty)');
    let dayCounter = 0;
    dayElements.forEach(el => {
        dayCounter++;
        if (dayCounter === day) {
            el.classList.add('selected');
        }
    });

    // Store selected date and display it
    selectedDate = new Date(year, month, day);
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                        'July', 'August', 'September', 'October', 'November', 'December'];
    const dateString = `${monthNames[month]} ${day}, ${year}`;
    document.getElementById('selectedDate').textContent = dateString;

    console.log(`Appointment booked for: ${dateString}`);
}

/**
 * Navigate to previous month
 */
document.getElementById('prevMonth').addEventListener('click', () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    generateCalendar();
});

/**
 * Navigate to next month
 */
document.getElementById('nextMonth').addEventListener('click', () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    generateCalendar();
});

/**
 * Initialize calendar on page load
 */
generateCalendar();

// ============================================
// LOG CONFIRMATION
// ============================================

// Log to console that the script has loaded successfully
console.log('✓ Navigation script loaded successfully!');
console.log('✓ Click any navigation button to scroll to that section');
