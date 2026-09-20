/* ------------------------------
   LOADING SCREEN
------------------------------*/
window.addEventListener("load", () => {
    const loader = document.querySelector(".loading-screen");
    setTimeout(() => {
        loader.classList.add("hide");
    }, 1200); // 1.2 seconds
});



/* ------------------------------
   NAV SCROLLING
------------------------------*/
document.querySelectorAll('.nav-links li').forEach(link => {
    link.addEventListener('click', () => {
        const section = link.textContent.toLowerCase();
        document.getElementById(section).scrollIntoView({ behavior: "smooth" });
    });
});


/* ------------------------------
   MOBILE MENU TOGGLE
------------------------------*/
const navToggle = document.getElementById('mobile-menu');
const themeToggleBtn = document.getElementById('theme-toggle');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
});


/* ------------------------------
   THEME TOGGLE
------------------------------*/
themeToggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    document.body.classList.toggle('dark-rose');

    themeToggleBtn.textContent =
        document.body.classList.contains("dark-rose")
        ? "☀️ Light Mode"
        : "🌙 Dark Rose";
});


/* ------------------------------
   3D CARD HOVER EFFECT
------------------------------*/
const cards = document.querySelectorAll('.service-card');

cards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = -((y - centerY) / centerY) * 40;
        const rotateY = ((x - centerX) / centerX) * 40;

        card.style.transform =
            `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform =
            'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
});


/* ------------------------------
   BOOKING FORM SUBMIT
------------------------------*/
document.querySelector('.booking-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Your appointment request has been sent!");
});


/* ------------------------------
   INTERSECTION OBSERVER
------------------------------*/
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.2 });

/* Fade-up items */
const fadeUps = document.querySelectorAll('.fade-up');
fadeUps.forEach(el => observer.observe(el));

/* Slide-left + slide-right items */
const slideItems = document.querySelectorAll('.slide-left, .slide-right');
slideItems.forEach(item => observer.observe(item));
/* ------------------------------
   SCROLL INDICATOR
------------------------------*/
const scrollIndicator = document.querySelector('.scroll-indicator');

window.addEventListener('scroll', () => {
    if (window.scrollY > 150) {
        scrollIndicator.classList.add('show');
    } else {
        scrollIndicator.classList.remove('show');
    }
});




/* ------------------------------
   FLOATING SPARKLES
------------------------------*/
const sparkleContainer = document.querySelector('.sparkle-container');

function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.style.left = Math.random() * window.innerWidth + 'px';
    sparkle.style.top = (Math.random() * window.innerHeight) + 'px';
    sparkleContainer.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 3000);
}

setInterval(createSparkle, 600);



