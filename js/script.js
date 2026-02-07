// ============================================
// LANGUAGE SWITCHER FUNCTIONALITY
// ============================================
const translations = {
    en: {
        home: 'Home',
        coaching: 'COACHING',
        ledercoaching: 'LEDERCOACHING',
        teamcoaching: 'TEAMCOACHING',
        successStories: 'Success Stories',
        oneToOne: '1:1 COACHING',
        booking: 'Booking',
        contact: 'Contact',
        headerTitle: 'GREAT DANE',
        homeTitle: 'GREAT DANE COACHING',
        homeText: 'A reminder for you: successful leadership begins with how you treat people. When you listen with intention, support with honesty, and inspire through your actions, others naturally follow. Lead with clarity and trust, and you\'ll create a space where everyone can grow.',
        coachingTitle: 'COACHING',
        coachingText: 'This section provides information about the website and its purpose. Scroll down to see more content and test the fixed header functionality.',
        ledercoachingTitle: 'LEDERCOACHING',
        ledercoachingText: 'Our leader coaching programs are designed to develop and enhance your leadership skills. The header remains fixed at the top as you scroll through this content.',
        teamcoachingTitle: 'TEAMCOACHING',
        teamcoachingText: 'Our team coaching programs are designed to strengthen collaboration, improve communication, and build high-performing teams. Unlock your team\'s full potential with our expert guidance.',
        successStoriesTitle: 'Success Stories',
        successStoriesText: 'Hear from our clients about their transformations and achievements.',
        oneToOneTitle: '1:1 COACHING',
        oneToOneText: 'Personalized one-on-one coaching tailored to your unique needs and goals. Work directly with our expert coaches to accelerate your professional growth and achieve breakthrough results.',
        bookingTitle: 'Book an Appointment',
        bookingText: 'Select a date from the calendar below to schedule your appointment.',
        contactTitle: 'Contact',
        cookieText: 'We use cookies to enhance your experience on our website. Cookies help us understand how you use our site and improve your browsing experience.',
        cookieAccept: 'Accept All',
        cookieReject: 'Reject',
        footer: '© 2026 GREAT DANE COACHING, Danmark',
    },
    da: {
        home: 'Forside',
        coaching: 'COACHING',
        ledercoaching: 'LEDERCOACHING',
        teamcoaching: 'TEAMCOACHING',
        successStories: 'Succes historier',
        oneToOne: '1:1 COACHING',
        booking: 'Booking',
        contact: 'Kontakt',
        headerTitle: 'GREAT DANE',
        homeTitle: 'GREAT DANE COACHING',
        homeText: 'En påmindelse til dig: Succesfuld ledelse begynder med, hvordan du behandler mennesker. Når du lytter med intention, støtter med ærlighed og inspirerer gennem dine handlinger, følger andre naturligt. Led med klarhed og tillid, og du skaber et rum, hvor alle kan vokse.',
        coachingTitle: 'COACHING',
        coachingText: 'Denne sektion giver information om hjemmesiden og dens formål. Scroll ned for at se mere indhold og test den faste header-funktion.',
        ledercoachingTitle: 'LEDERCOACHING',
        ledercoachingText: 'Vores ledercoaching-programmer er designet til at udvikle og styrke dine lederevner. Headeren forbliver fast øverst, mens du scroller gennem dette indhold.',
        teamcoachingTitle: 'TEAMCOACHING',
        teamcoachingText: 'Vores teamcoaching-programmer er designet til at styrke samarbejdet, forbedre kommunikationen og opbygge højtydende teams. Frigør dit teams fulde potentiale med vores ekspertvejledning.',
        successStoriesTitle: 'Succes historier',
        successStoriesText: 'Læs om vores klienters transformationer og resultater.',
        oneToOneTitle: '1:1 COACHING',
        oneToOneText: 'Personlig én-til-én coaching tilpasset dine unikke behov og mål. Arbejd direkte med vores eksperter for at accelerere din professionelle udvikling og opnå gennembrud.',
        bookingTitle: 'Book en tid',
        bookingText: 'Vælg en dato i kalenderen nedenfor for at booke din tid.',
        contactTitle: 'Kontakt',
        cookieText: 'Vi bruger cookies for at forbedre din oplevelse på vores hjemmeside. Cookies hjælper os med at forstå, hvordan du bruger vores side og forbedre din browsingoplevelse.',
        cookieAccept: 'Accepter alle',
        cookieReject: 'Afvis',
        footer: '© 2026 GREAT DANE COACHING, Danmark',
    }
};

function setLanguage(lang) {
    // Navigation buttons
    document.querySelector('.nav-btn[href="#home"]').textContent = translations[lang].home;
    document.querySelector('.nav-btn[href="#coaching"]').textContent = translations[lang].coaching;
    document.querySelector('.nav-btn[href="#ledercoaching"]').textContent = translations[lang].ledercoaching;
    document.querySelector('.nav-btn[href="#teamcoaching"]').textContent = translations[lang].teamcoaching;
    document.querySelector('.nav-btn[href="#success-stories"]').textContent = translations[lang].successStories;
    document.querySelector('.nav-btn[href="#1-1-coaching"]').textContent = translations[lang].oneToOne;
    document.querySelector('.nav-btn[href="#booking"]').textContent = translations[lang].booking;
    document.querySelector('.nav-btn[href="#contact"]').textContent = translations[lang].contact;

    // Section titles and texts
    document.querySelector('.logo-text').textContent = translations[lang].headerTitle;
    document.querySelector('#home h1').textContent = translations[lang].homeTitle;
    document.querySelector('#home .home-right p').textContent = translations[lang].homeText;
    document.querySelector('#coaching h2').textContent = translations[lang].coachingTitle;
    document.querySelector('#coaching p').textContent = translations[lang].coachingText;
    document.querySelector('#ledercoaching h2').textContent = translations[lang].ledercoachingTitle;
    document.querySelector('#ledercoaching p').textContent = translations[lang].ledercoachingText;
    document.querySelector('#teamcoaching h2').textContent = translations[lang].teamcoachingTitle;
    document.querySelector('#teamcoaching p').textContent = translations[lang].teamcoachingText;
    document.querySelector('#success-stories h2').textContent = translations[lang].successStoriesTitle;
    document.querySelector('#success-stories p').textContent = translations[lang].successStoriesText;
    document.querySelector('#1-1-coaching h2').textContent = translations[lang].oneToOneTitle;
    document.querySelector('#1-1-coaching p').textContent = translations[lang].oneToOneText;
    document.querySelector('#booking h2').textContent = translations[lang].bookingTitle;
    document.querySelector('#booking p').textContent = translations[lang].bookingText;
    document.querySelector('#contact h2').textContent = translations[lang].contactTitle;

    // Cookie banner
    document.querySelector('.cookie-text p').textContent = translations[lang].cookieText;
    document.getElementById('accept-cookies').textContent = translations[lang].cookieAccept;
    document.getElementById('reject-cookies').textContent = translations[lang].cookieReject;

    // Footer
    document.querySelector('.footer p').textContent = translations[lang].footer;
}

document.getElementById('language-select').addEventListener('change', function (e) {
    setLanguage(e.target.value);
});

// Set default language on load
window.addEventListener('DOMContentLoaded', function () {
    setLanguage(document.getElementById('language-select').value);
});
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
// ============================================
// TESTIMONIAL CAROUSEL INITIALIZATION
// ============================================

/**
 * Testimonial Carousel Auto-Scroll Setup
 * This function initializes the carousel and ensures it auto-scrolls smoothly
 * The carousel uses CSS animation for continuous looping
 */
function initializeTestimonialCarousel() {
    // Get the testimonial track element that contains all the cards
    const testimonialTrack = document.querySelector('.testimonial-track');
    if (!testimonialTrack) {
        console.log('Testimonial carousel not found on this page');
        return;
    }

    // Duplicate testimonial cards for seamless looping
    const cards = Array.from(testimonialTrack.children);
    cards.forEach(card => {
        testimonialTrack.appendChild(card.cloneNode(true));
    });

    // Set up variables for scrolling
    let scrollAmount = 0;
    const cardWidth = cards[0].offsetWidth + 20; // card width + gap
    const totalWidth = cardWidth * cards.length;

    // Lower scroll speed for longer card visibility
    const scrollSpeed = 1.2; // px per frame (4x faster than previous)

    function scrollLoop() {
        scrollAmount += scrollSpeed;
        if (scrollAmount >= totalWidth) {
            scrollAmount = 0;
        }
        testimonialTrack.style.transform = `translateX(-${scrollAmount}px)`;
        requestAnimationFrame(scrollLoop);
    }

    scrollLoop();

    // Optional: Pause on hover
    let paused = false;
    testimonialTrack.addEventListener('mouseenter', () => { paused = true; });
    testimonialTrack.addEventListener('mouseleave', () => { paused = false; });
    function scrollLoopPauseable() {
        if (!paused) {
            scrollAmount += 1;
            if (scrollAmount >= totalWidth) {
                scrollAmount = 0;
            }
            testimonialTrack.style.transform = `translateX(-${scrollAmount}px)`;
        }
        requestAnimationFrame(scrollLoopPauseable);
    }
    // Uncomment below to enable pause on hover
    // scrollLoopPauseable();
}

// Call the carousel initialization after testimonials are rendered
document.addEventListener('DOMContentLoaded', function () {
    // Wait for testimonials to be rendered (by components.js)
    setTimeout(() => {
        initializeTestimonialCarousel();
    }, 0);
});

// ============================================
// COOKIE CONSENT BANNER FUNCTIONALITY
// ============================================

/**
 * Cookie Consent Manager
 * Handles displaying the cookie consent banner and storing user preferences
 * The preference is saved in localStorage so it persists across page reloads
 */
function initializeCookieBanner() {
    // Get the cookie banner and button elements from the HTML
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptButton = document.getElementById('accept-cookies');
    const rejectButton = document.getElementById('reject-cookies');

    // Check if the user has already made a cookie decision
    // localStorage stores persistent data in the browser
    const cookieConsent = localStorage.getItem('cookieConsent');

    if (!cookieBanner || !acceptButton || !rejectButton) {
        console.log('Cookie banner elements not found');
        return;
    }

    // If the user has already chosen, hide the banner immediately
    if (cookieConsent) {
        console.log(`✓ Cookie preference found: ${cookieConsent}`);
        cookieBanner.classList.add('hidden'); // Hide the banner with animation
    } else {
        console.log('✓ Cookie banner displayed - awaiting user decision');
    }

    // Accept All button - user agrees to cookies
    acceptButton.addEventListener('click', () => {
        // Store the acceptance decision in localStorage with timestamp
        localStorage.setItem('cookieConsent', 'accepted');
        localStorage.setItem('cookieConsentDate', new Date().toISOString());

        // Log to console for debugging
        console.log('✓ User accepted cookies');

        // Hide the banner with smooth animation
        cookieBanner.classList.add('hidden');

        // Optionally: Load analytics or tracking scripts here
        // loadAnalyticsScripts();
    });

    // Reject button - user declines non-essential cookies
    rejectButton.addEventListener('click', () => {
        // Store the rejection decision
        localStorage.setItem('cookieConsent', 'rejected');
        localStorage.setItem('cookieConsentDate', new Date().toISOString());

        // Log to console
        console.log('✓ User rejected cookies');

        // Hide the banner
        cookieBanner.classList.add('hidden');

        // Optional: Only essential cookies are used; tracking cookies are not loaded
    });
}

// Initialize the cookie banner when the page loads
initializeCookieBanner();
