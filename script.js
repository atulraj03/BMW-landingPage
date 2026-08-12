// Get navigation elements
const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");

// Open and close mobile menu
menuButton.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});

// CLOSE MENU AFTER CLICKING A LINK

const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


// CONTACT FORM

const contactForm = document.querySelector("#contact-form");

contactForm.addEventListener("submit", function (event) {

    // Prevent page reload
    event.preventDefault();

    alert("Thank you for contacting AURORA X5!");

    // Clear the form
    contactForm.reset();

});

// Always open the page from the top when refreshed
window.addEventListener("load", function () {
    window.scrollTo(0, 0);
});


// SCROLL ANIMATION

const sections = document.querySelectorAll(
    ".features-container, .about-container, .contact-container"
);

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);


// Observe each section
sections.forEach(function (section) {

    observer.observe(section);

});

