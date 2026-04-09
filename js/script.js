// Hamburger menu functionality
const hamburger = document.getElementById('nav-hamburger');
const dropdown = document.getElementById('nav-dropdown');
const dropdownModeToggle = document.getElementById('dropdown-mode-toggle');
const dropdownLanguageSelect = document.getElementById('dropdown-language-select');

if (hamburger && dropdown) {
    hamburger.addEventListener('click', function () {
        dropdown.classList.toggle('active');
    });
    // Close dropdown when clicking outside
    document.addEventListener('click', function (e) {
        if (!dropdown.contains(e.target) && !hamburger.contains(e.target)) {
            dropdown.classList.remove('active');
        }
    });
}

// Sync mode toggle in dropdown
if (dropdownModeToggle) {
    dropdownModeToggle.addEventListener('click', function () {
        const current = localStorage.getItem('themeMode') || 'dark';
        const next = getNextMode(current);
        setMode(next);
        dropdownModeToggle.textContent = modeLabels[next];
        if (modeToggleBtn) modeToggleBtn.textContent = modeLabels[next];
    });
}

// Sync language select in dropdown
if (dropdownLanguageSelect) {
    dropdownLanguageSelect.addEventListener('change', function (e) {
        setLanguage(e.target.value);
        document.getElementById('language-select').value = e.target.value;
    });
}
if (document.getElementById('language-select')) {
    document.getElementById('language-select').addEventListener('change', function (e) {
        setLanguage(e.target.value);
        if (dropdownLanguageSelect) dropdownLanguageSelect.value = e.target.value;
    });
}
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
    function setText(selector, value) {
        const element = document.querySelector(selector);
        if (element) {
            element.textContent = value;
        }
    }

    // Helper to escape IDs for querySelector
    function esc(id) {
        return id.match(/^\d/)
            ? `#\\3${id.charAt(0)} ${id.slice(1)}`
            : `#${id}`;
    }
    // Navigation buttons (force uppercase)
    setText('.nav-btn[href="#home"]', translations[lang].home.toUpperCase());
    setText('.nav-btn[href="#coaching"]', translations[lang].coaching.toUpperCase());
    setText('.nav-btn[href="#ledercoaching"]', translations[lang].ledercoaching.toUpperCase());
    setText('.nav-btn[href="#teamcoaching"]', translations[lang].teamcoaching.toUpperCase());
    setText('.nav-btn[href="#success-stories"]', translations[lang].successStories.toUpperCase());
    setText('.nav-btn[href="#1-1-coaching"]', translations[lang].oneToOne.toUpperCase());
    setText('.nav-btn[href="#booking"]', translations[lang].booking.toUpperCase());
    setText('.nav-btn[href="#contact"]', translations[lang].contact.toUpperCase());

    // Section titles and texts
    setText('.logo-text', translations[lang].headerTitle);
    setText('#home h1', translations[lang].homeTitle);
    setText('#home .home-right p', translations[lang].homeText);
    setText('#coaching h2', translations[lang].coachingTitle);
    setText('#coaching p', translations[lang].coachingText);
    setText('#ledercoaching h2', translations[lang].ledercoachingTitle);
    setText('#ledercoaching p', translations[lang].ledercoachingText);
    setText('#teamcoaching h2', translations[lang].teamcoachingTitle);
    setText('#teamcoaching p', translations[lang].teamcoachingText);
    setText('#success-stories h2', translations[lang].successStoriesTitle);
    setText('#success-stories p', translations[lang].successStoriesText);
    setText(esc('1-1-coaching') + ' h2', translations[lang].oneToOneTitle);
    setText(esc('1-1-coaching') + ' p', translations[lang].oneToOneText);
    setText('#booking h2', translations[lang].bookingTitle);
    setText('#booking p', translations[lang].bookingText);
    setText('#contact h2', translations[lang].contactTitle);

    // Cookie banner
    setText('.cookie-text p', translations[lang].cookieText);
    setText('#accept-cookies', translations[lang].cookieAccept);
    setText('#reject-cookies', translations[lang].cookieReject);

    // Footer
    setText('.footer p', translations[lang].footer);
}

document.getElementById('language-select').addEventListener('change', function (e) {
    setLanguage(e.target.value);
});

// THEME MODE SWITCHER
const modeToggleBtn = document.getElementById('mode-toggle');
// Make dark mode the first choice
const modeOrder = ['dark', 'light', 'dork'];
const modeLabels = {
    dark: '🌙 Dark',
    light: '☀️ Light',
    dork: '🤓 Dork'
};
function setMode(mode) {
    document.body.classList.remove('light-mode', 'dork-mode');
    if (mode === 'light') {
        document.body.classList.add('light-mode');
    } else if (mode === 'dork') {
        document.body.classList.add('dork-mode');
    }
    // Save mode in localStorage
    localStorage.setItem('themeMode', mode);
    // Update button label
    if (modeToggleBtn) modeToggleBtn.textContent = modeLabels[mode];
    // Switch logo image
    const logoImg = document.querySelector('.logo-img');
    if (logoImg) {
        if (mode === 'light') {
            logoImg.src = 'logo/Great Dane 04 transparent for white background.png';
        } else {
            logoImg.src = 'logo/Great Dane 04 transparent for black background.png';
        }
    }
}
function getNextMode(current) {
    const idx = modeOrder.indexOf(current);
    return modeOrder[(idx + 1) % modeOrder.length];
}
if (modeToggleBtn) {
    modeToggleBtn.addEventListener('click', function () {
        const current = localStorage.getItem('themeMode') || 'dark';
        const next = getNextMode(current);
        setMode(next);
    });
}
// Set default mode on load
window.addEventListener('DOMContentLoaded', function () {
    setLanguage(document.getElementById('language-select').value);
    // Always default to dark mode if no preference is set
    let savedMode = localStorage.getItem('themeMode');
    if (!savedMode || !modeOrder.includes(savedMode)) {
        savedMode = 'dark';
        localStorage.setItem('themeMode', 'dark');
    }
    setMode(savedMode);
    // Sync dropdown toggle button label if present
    const dropdownModeToggle = document.getElementById('dropdown-mode-toggle');
    if (dropdownModeToggle) dropdownModeToggle.textContent = modeLabels[savedMode];
    initializeCookieBanner();
});

// Cookie Consent Banner Logic
function initializeCookieBanner() {
    const banner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('accept-cookies');
    const rejectBtn = document.getElementById('reject-cookies');
    if (!banner || !acceptBtn || !rejectBtn) return;

    // Hide banner if already set
    if (localStorage.getItem('cookieConsent')) {
        banner.classList.add('hidden');
        return;
    } else {
        banner.classList.remove('hidden');
    }

    acceptBtn.onclick = function () {
        localStorage.setItem('cookieConsent', 'accepted');
        banner.classList.add('hidden');
    };
    rejectBtn.onclick = function () {
        localStorage.setItem('cookieConsent', 'rejected');
        banner.classList.add('hidden');
    };
}
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
        const href = button.getAttribute('href');
        if (!href || !href.startsWith('#')) {
            return;
        }

        // Prevent default link behavior (we'll handle scrolling manually)
        event.preventDefault();

        // Get the section ID that the button links to (from the href attribute)
        const sectionId = href.substring(1); // Remove the '#' character
        const targetSection = document.getElementById(sectionId);

        // Log message to console when button is clicked
        console.log(`Navigating to: ${sectionId}`);

        // Smooth scroll to the target section
        if (targetSection) {
            // Calculate offset for fixed header and scroll-margin-top
            const header = document.querySelector('.header');
            const headerHeight = header ? header.offsetHeight : 0;
            // Get computed scroll-margin-top of the section
            const sectionStyles = window.getComputedStyle(targetSection);
            let scrollMarginTop = parseInt(sectionStyles.scrollMarginTop) || 0;
            // Final offset: section top minus header height plus scroll-margin-top
            const sectionTop = targetSection.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: sectionTop - headerHeight + scrollMarginTop,
                behavior: 'smooth'
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

function initializeCompaniesCarousel() {
    const carousel = document.querySelector('.companies-carousel');
    const track = document.querySelector('.companies-track');
    const dots = Array.from(document.querySelectorAll('.companies-dot'));
    const slides = track ? Array.from(track.children) : [];
    const infoName = document.querySelector('.companies-info-name');
    const infoDescription = document.querySelector('.companies-info-description');

    if (!carousel || !track || slides.length === 0 || dots.length === 0) {
        return;
    }

    let currentIndex = 0;
    let timer = null;

    function render(index) {
        currentIndex = index;
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots.forEach((dot, i) => {
            dot.classList.toggle('is-active', i === currentIndex);
        });

        const activeSlide = slides[currentIndex];
        if (activeSlide && infoName && infoDescription) {
            infoName.textContent = activeSlide.dataset.company || `Company ${currentIndex + 1}`;
            infoDescription.textContent = activeSlide.dataset.description || 'Company description not available yet.';
        }
    }

    function startAutoPlay() {
        timer = setInterval(() => {
            const next = (currentIndex + 1) % slides.length;
            render(next);
        }, 2800);
    }

    function resetAutoPlay() {
        if (timer) {
            clearInterval(timer);
        }
        startAutoPlay();
    }

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            render(i);
            resetAutoPlay();
        });
    });

    carousel.addEventListener('mouseenter', () => {
        if (timer) {
            clearInterval(timer);
            timer = null;
        }
    });

    carousel.addEventListener('mouseleave', () => {
        if (!timer) {
            startAutoPlay();
        }
    });

    render(0);
    startAutoPlay();
}

// Call the carousel initialization after testimonials are rendered
document.addEventListener('DOMContentLoaded', function () {
    // Wait for testimonials to be rendered (by components.js)
    setTimeout(() => {
        initializeTestimonialCarousel();
        initializeCompaniesCarousel();
    }, 0);
});

// ============================================
// BOOKING MODAL FUNCTIONALITY
// ============================================

// Example available times (could be fetched from backend)
const availableTimes = [
    '09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00'
];

const bookingModal = document.getElementById('booking-modal');
const bookingModalClose = document.getElementById('booking-modal-close');
const bookingForm = document.getElementById('booking-form');
const bookingDateInput = document.getElementById('booking-date');
const bookingTimeSelect = document.getElementById('booking-time');
const bookingSuccess = document.getElementById('booking-success');

function showBookingModal(year, month, day) {
    if (!bookingModal) return;
    // Format date as YYYY-MM-DD
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    bookingDateInput.value = dateStr;
    // Populate available times
    bookingTimeSelect.innerHTML = '';
    availableTimes.forEach(time => {
        const opt = document.createElement('option');
        opt.value = time;
        opt.textContent = time;
        bookingTimeSelect.appendChild(opt);
    });
    bookingSuccess.style.display = 'none';
    bookingSuccess.style.color = 'green';
    bookingSuccess.textContent = 'Booking successful! We will contact you soon.';
    bookingModal.style.display = 'flex';
}

function hideBookingModal() {
    if (bookingModal) bookingModal.style.display = 'none';
}

if (bookingModalClose) {
    bookingModalClose.addEventListener('click', hideBookingModal);
}
window.addEventListener('click', function (e) {
    if (e.target === bookingModal) hideBookingModal();
});

if (bookingForm) {
    bookingForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const data = {
            date: bookingDateInput.value,
            time: bookingTimeSelect.value,
            name: document.getElementById('booking-name').value,
            email: document.getElementById('booking-email').value
        };
        // Send booking to backend (implement /api/book endpoint)
        fetch('/api/book', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.ok ? res.json() : Promise.reject(res))
            .then(() => {
                bookingSuccess.style.display = 'block';
                bookingSuccess.style.color = 'green';
                bookingSuccess.textContent = 'Booking successful! We will contact you soon.';
                setTimeout(hideBookingModal, 2000);
            })
            .catch(() => {
                bookingSuccess.style.display = 'block';
                bookingSuccess.style.color = 'red';
                bookingSuccess.textContent = 'Booking failed. Please try again.';
            });
    });
}

// Override selectDate to show modal
const origSelectDate = selectDate;
selectDate = function (day, month, year) {
    origSelectDate(day, month, year);
    showBookingModal(year, month, day);
};
