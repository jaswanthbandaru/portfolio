window.addEventListener('load', function() {
    setTimeout(function() {
        document.querySelector('.loader').style.opacity = '0';
        setTimeout(function() {
            document.querySelector('.loader').style.display = 'none';
        }, 500);
        
        // Animate hero content after loader disappears
        gsap.to('.hero-title', { opacity: 1, y: 0, duration: 1, delay: 0.5 });
        gsap.to('.hero-subtitle', { opacity: 1, y: 0, duration: 1, delay: 0.7 });
        gsap.to('.hero-description', { opacity: 1, y: 0, duration: 1, delay: 0.9 });
        gsap.to('.btn', { opacity: 1, y: 0, duration: 1, delay: 1.1, stagger: 0.2 });
    }, 2000);
});

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.createElement('div');
    menuToggle.classList.add('menu-toggle');
    menuToggle.innerHTML = `
        <div></div>
        <div></div>
        <div></div>
    `;
    
    const nav = document.querySelector('nav');
    const navLinks = document.querySelector('.nav-links');
    
    nav.insertBefore(menuToggle, navLinks);
    
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('open');
    });
});

// Particles.js Configuration
particlesJS('particles-js', {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: '#6c63ff' },
        shape: { type: 'circle' },
        opacity: { value: 0.5, random: false },
        size: { value: 3, random: true },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#6c63ff',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: { enable: true, mode: 'grab' },
            onclick: { enable: true, mode: 'push' },
            resize: true
        },
        modes: {
            grab: { distance: 140, line_linked: { opacity: 1 } },
            push: { particles_nb: 4 }
        }
    },
    retina_detect: true
});

// Scroll Animation for Skill Cards
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.skill-card').forEach((card, i) => {
    ScrollTrigger.create({
        trigger: card,
        start: 'top 80%',
        end: 'bottom 20%',
        onEnter: () => {
            gsap.to(card, {
                y: 0,
                opacity: 1,
                duration: 0.6,
                delay: i * 0.1
            });
        }
    });
});

// Project Cards Animation

// Project Cards Animation
gsap.utils.toArray('.project-card').forEach((card, i) => {
ScrollTrigger.create({
trigger: card,
start: 'top 80%',
end: 'bottom 20%',
onEnter: () => {
    gsap.to(card, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        delay: i * 0.1
    });
}
});
});

// Custom cursor animation
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', e => {
gsap.to(cursor, {
x: e.clientX,
y: e.clientY,
duration: 0.1
});

gsap.to(cursorFollower, {
x: e.clientX,
y: e.clientY,
duration: 0.3
});
});

// Hover effect for links and buttons
const links = document.querySelectorAll('a, button');
links.forEach(link => {
link.addEventListener('mouseenter', () => {
cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
cursorFollower.style.transform = 'translate(-50%, -50%) scale(1.5)';
cursor.style.backgroundColor = 'var(--secondary)';
cursorFollower.style.borderColor = 'var(--secondary)';
});

link.addEventListener('mouseleave', () => {
cursor.style.transform = 'translate(-50%, -50%) scale(1)';
cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
cursor.style.backgroundColor = 'var(--primary)';
cursorFollower.style.borderColor = 'var(--primary)';
});
});

// Progress bar on scroll
window.onscroll = function() {
let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
let scrolled = (winScroll / height) * 100;
document.getElementById("progressBar").style.width = scrolled + "%";
};

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function(e) {
e.preventDefault();

const targetId = this.getAttribute('href');
const targetElement = document.querySelector(targetId);

window.scrollTo({
    top: targetElement.offsetTop - 100,
    behavior: 'smooth'
});
});
});

// Typing effect for hero title
const heroTitle = document.querySelector('.hero-title');
const text = heroTitle.textContent;
heroTitle.innerHTML = '';

let i = 0;
function typeWriter() {
if (i < text.length) {
heroTitle.innerHTML += text.charAt(i);
i++;
setTimeout(typeWriter, 100);
}
}

// This will be called after the loader animation completes
// Uncomment to enable typewriter effect (remove the gsap animation for hero-title if using this)
// setTimeout(typeWriter, 2500);

// Form submission animation
const contactForm = document.querySelector('.contact-form form');
contactForm.addEventListener('submit', function(e) {
e.preventDefault();

// Simulate form submission
const submitBtn = this.querySelector('button[type="submit"]');
const originalText = submitBtn.textContent;

submitBtn.textContent = 'Sending...';
submitBtn.disabled = true;

setTimeout(() => {
submitBtn.textContent = 'Message Sent!';
submitBtn.style.backgroundColor = '#4CAF50';

// Reset form
this.reset();

// Reset button after 3 seconds
setTimeout(() => {
    submitBtn.textContent = originalText;
    submitBtn.style.backgroundColor = 'var(--primary)';
    submitBtn.disabled = false;
}, 3000);
}, 2000);
});

// Add parallax effect to about image
window.addEventListener('scroll', function() {
const aboutImg = document.querySelector('.about-img');
const scrollPosition = window.pageYOffset;

if (aboutImg) {
aboutImg.style.transform = `translateY(${scrollPosition * 0.05}px)`;
}
});