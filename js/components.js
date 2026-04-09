// --- Testimonial Card Generator ---
function createTestimonialCard({ text, imgSrc, imgAlt, name }) {
    return `
        <div class="testimonial-card">
            <div class="testimonial-content">
                <p class="testimonial-text">${text}</p>
                <div class="testimonial-author">
                    <img src="${imgSrc}" alt="${imgAlt}" class="testimonial-photo">
                    <span class="testimonial-name">${name}</span>
                </div>
            </div>
        </div>
    `;
}

// --- Testimonial Carousel Generator ---
function createTestimonialCarousel(testimonials) {
    const loopTestimonials = [...testimonials, ...testimonials];
    return `
        <div class="testimonial-carousel">
            <div class="testimonial-track">
                ${loopTestimonials.map(createTestimonialCard).join('')}
            </div>
        </div>
    `;
}

// --- Contact Item Generator ---
function createContactItem({ iconSVG, label, link, text }) {
    return `
        <div class="contact-item">
            <h3 class="contact-icon" aria-label="${label}">
                ${iconSVG}
            </h3>
            <p><a href="${link}" target="_blank">${text}</a></p>
        </div>
    `;
}

// --- Contact Info Generator ---
function createContactInfo(items) {
    return `
        <div class="contact-info">
            ${items.map(createContactItem).join('')}
        </div>
    `;
}

// --- Render Components on DOMContentLoaded ---
document.addEventListener('DOMContentLoaded', function () {
    // Testimonials data
    const testimonials = [
        {
            text: '"Working with Great Dane Coaching transformed my leadership approach. I\'ve become a more confident and empathetic leader."',
            imgSrc: 'https://via.placeholder.com/60/3498db/ffffff?text=JM',
            imgAlt: 'John Martinez',
            name: '1'
        },
        {
            text: '"The coaching sessions helped me understand my team better. Our productivity increased by 30% in just three months."',
            imgSrc: 'https://via.placeholder.com/60/e74c3c/ffffff?text=SL',
            imgAlt: 'Sarah Lee',
            name: '2'
        },
        {
            text: '"I was skeptical at first, but the personalized approach really worked. Best investment I\'ve made in my career."',
            imgSrc: 'https://via.placeholder.com/60/2ecc71/ffffff?text=MK',
            imgAlt: 'Michael Kumar',
            name: '3'
        },
        {
            text: '"Great Dane Coaching helped me develop a stronger vision for my team. Communication is now more open and honest."',
            imgSrc: 'https://via.placeholder.com/60/9b59b6/ffffff?text=EC',
            imgAlt: 'Emma Chen',
            name: '4'
        },
        {
            text: '"The coach\'s insights about delegation transformed how I manage my workload. I\'m much less stressed now."',
            imgSrc: 'https://via.placeholder.com/60/f39c12/ffffff?text=RP',
            imgAlt: 'Robert Patterson',
            name: '5'
        },
        {
            text: '"Our team retention improved significantly. Employees feel heard and valued. This is a game-changer."',
            imgSrc: 'https://via.placeholder.com/60/1abc9c/ffffff?text=NA',
            imgAlt: 'Nina Adams',
            name: '6'
        },
        {
            text: '"The coaching helped me align my personal values with my leadership style. I feel more authentic at work."',
            imgSrc: 'https://via.placeholder.com/60/e67e22/ffffff?text=DM',
            imgAlt: 'David Mitchell',
            name: '7'
        },
        {
            text: '"I\'ve worked with many coaches, but Great Dane\'s approach is truly unique. Professional and deeply personal."',
            imgSrc: 'https://via.placeholder.com/60/c0392b/ffffff?text=JH',
            imgAlt: 'Jessica Harris',
            name: '8'
        },
        {
            text: '"Fantastic ROI. My decision-making is sharper, and I\'m building stronger relationships with my peers."',
            imgSrc: 'https://via.placeholder.com/60/16a085/ffffff?text=PW',
            imgAlt: 'Peter Wilson',
            name: '9'
        },
        {
            text: '"The coaching sessions gave me clarity on my leadership strengths. I\'m now promoting these strengths across my organization."',
            imgSrc: 'https://via.placeholder.com/60/2980b9/ffffff?text=LC',
            imgAlt: 'Lauren Carter',
            name: '10'
        },
        {
            text: '"Exceeded expectations in every way. The coach\'s feedback was actionable and transformative for my career."',
            imgSrc: 'https://via.placeholder.com/60/8e44ad/ffffff?text=TG',
            imgAlt: 'Thomas Garcia',
            name: '11'
        }
    ];

    // Render testimonial carousel
    const testimonialContainer = document.getElementById('testimonial-carousel-container');
    if (testimonialContainer) {
        testimonialContainer.innerHTML = createTestimonialCarousel(testimonials);
    }

    // Contact info data
    const contactItems = [
        {
            iconSVG: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" role="img"><circle cx="12" cy="12" r="10"></circle><path d="M2 12h20"></path><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
            label: 'Website',
            link: 'https://greatdanecoaching.net',
            text: 'greatdanecoaching.net'
        },
        {
            iconSVG: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" role="img"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.08 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.12.97.37 1.92.73 2.82a2 2 0 0 1-.45 2.11L8.91 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.36 1.85.61 2.82.73A2 2 0 0 1 22 16.92z"></path></svg>`,
            label: 'Phone',
            link: 'tel:+4577664455',
            text: '+45 77664455'
        },
        {
            iconSVG: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" role="img"><path d="M4 4h16v16H4z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`,
            label: 'Email',
            link: 'mailto:tb@greatdanecoaching.com',
            text: 'tb@greatdanecoaching.com'
        },
        {
            iconSVG: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" role="img"><path d="M18 2h-3a4 4 0 0 0-4 4v3H8v4h3v8h4v-8h3l1-4h-4V6a1 1 0 0 1 1-1h2z"></path></svg>`,
            label: 'Facebook',
            link: 'https://facebook.com/facebookside',
            text: '@facebookside'
        },
        {
            iconSVG: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" role="img"><path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`,
            label: 'Address',
            link: 'https://maps.google.com/?q=Kongens+Nytorv+34,+1050+København+K,+Danmark',
            text: 'Kongens Nytorv 34, 1050 København K, Danmark'
        }
    ];

    // Render contact info
    const contactContainer = document.getElementById('contact-info-container');
    if (contactContainer) {
        contactContainer.innerHTML = createContactInfo(contactItems);
    }
});