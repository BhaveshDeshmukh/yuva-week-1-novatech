/* =====================================================
   NOVATECH SPA — WEEK 5
   Client-side routing, dynamic rendering and state
   ===================================================== */

"use strict";

// -----------------------------------------------------
// 1. DOM ELEMENTS
// -----------------------------------------------------

const pageContent = document.getElementById("page-content");
const navigation = document.getElementById("primary-navigation");
const menuToggle = document.getElementById("menu-toggle");
const currentYear = document.getElementById("current-year");

// -----------------------------------------------------
// 2. APPLICATION STATE
// -----------------------------------------------------

const appState = {
    currentRoute: "home",
    navigationCount: 0
};

// -----------------------------------------------------
// 3. PAGE CONTENT
// -----------------------------------------------------

const pages = {
    home: {
        title: "Home | NovaTech",
        render: () => `
            <section class="hero">
                <div class="container hero-content">
                    <span class="eyebrow">Digital Design & Development</span>

                    <h1>
                        Digital experiences that
                        <span class="gradient-text">move businesses forward.</span>
                    </h1>

                    <p class="hero-description">
                        We combine thoughtful design and modern technology
                        to create websites and digital experiences that help
                        businesses stand out.
                    </p>

                    <div class="hero-actions">
                        <a class="button button-primary" href="#projects"
                           data-route="projects">
                            Explore Our Work <span aria-hidden="true">↗</span>
                        </a>

                        <a class="button button-secondary" href="#services"
                           data-route="services">
                            What We Do <span aria-hidden="true">→</span>
                        </a>
                    </div>

                    <div class="hero-note">
                        <span>Creative Thinking</span>
                        <span>Built for the Future</span>
                        <span>Purposeful Technology</span>
                    </div>
                </div>
            </section>

            <section class="section">
                <div class="container">
                    <div class="section-heading">
                        <span class="eyebrow">What We Do</span>
                        <h2>Good ideas deserve <span class="gradient-text">great execution.</span></h2>
                        <p>
                            From the first concept to the final product,
                            we build useful and engaging digital experiences.
                        </p>
                    </div>

                    <div class="card-grid">
                        ${serviceCard(
                            "01",
                            "Web Development",
                            "Responsive websites built with modern technologies and maintainable code."
                        )}

                        ${serviceCard(
                            "02",
                            "UI/UX Design",
                            "Clear, intuitive interfaces designed around real user needs."
                        )}

                        ${serviceCard(
                            "03",
                            "Digital Solutions",
                            "Practical digital experiences that help businesses work smarter."
                        )}
                    </div>

                    <div class="hero-actions">
                        <a class="button button-secondary" href="#services"
                           data-route="services">
                            View All Services →
                        </a>
                    </div>
                </div>
            </section>
        `
    },

    services: {
        title: "Services | NovaTech",
        render: () => `
            <section class="section">
                <div class="container">
                    <div class="section-heading">
                        <span class="eyebrow">Our Services</span>
                        <h1>Technology with <span class="gradient-text">purpose.</span></h1>
                        <p>
                            We bring design, development, and problem-solving
                            together to create effective digital products.
                        </p>
                    </div>

                    <div class="card-grid">
                        ${serviceCard(
                            "01",
                            "Web Development",
                            "Fast, responsive, and maintainable websites designed for different devices."
                        )}

                        ${serviceCard(
                            "02",
                            "Frontend Engineering",
                            "Interactive user interfaces built with HTML, CSS, JavaScript, and modern tools."
                        )}

                        ${serviceCard(
                            "03",
                            "UI/UX Design",
                            "User-focused layouts, clear navigation, and consistent visual design."
                        )}

                        ${serviceCard(
                            "04",
                            "Responsive Design",
                            "Layouts that adapt to mobile phones, tablets, laptops, and desktops."
                        )}

                        ${serviceCard(
                            "05",
                            "Website Optimization",
                            "Improved code organization, accessibility, and loading efficiency."
                        )}

                        ${serviceCard(
                            "06",
                            "Digital Strategy",
                            "Structured planning that connects business goals with useful technology."
                        )}
                    </div>
                </div>
            </section>
        `
    },

    projects: {
        title: "Projects | NovaTech",
        render: () => `
            <section class="section">
                <div class="container">
                    <div class="section-heading">
                        <span class="eyebrow">Selected Work</span>
                        <h1>Ideas turned into <span class="gradient-text">experiences.</span></h1>
                        <p>
                            Explore a sample portfolio of digital concepts
                            focused on usability, design, and functionality.
                        </p>
                    </div>

                    <div class="card-grid">
                        ${projectCard(
                            "01",
                            "Business Website",
                            "A responsive business website with clear navigation and service information.",
                            "Web Development"
                        )}

                        ${projectCard(
                            "02",
                            "Digital Storefront",
                            "A product-focused storefront concept with structured content and a clean interface.",
                            "E-commerce"
                        )}

                        ${projectCard(
                            "03",
                            "Interactive Dashboard",
                            "A dashboard concept that organizes information into readable and useful sections.",
                            "UI/UX Design"
                        )}
                    </div>

                    <p class="muted" style="margin-top: 24px;">
                        These are illustrative portfolio concepts created for this demonstration.
                    </p>
                </div>
            </section>
        `
    },

    about: {
        title: "About | NovaTech",
        render: () => `
            <section class="section">
                <div class="container">
                    <div class="section-heading">
                        <span class="eyebrow">About NovaTech</span>
                        <h1>Built on thoughtful design and <span class="gradient-text">useful technology.</span></h1>
                        <p>
                            Our approach combines clear planning, user-focused
                            design, and reliable frontend development.
                        </p>
                    </div>

                    <div class="about-panel">
                        <div>
                            <span class="eyebrow">Our Approach</span>
                            <h2>Design with purpose. Develop with precision.</h2>
                            <p>
                                A good digital experience should be easy to
                                understand, simple to navigate, and accessible
                                across different devices.
                            </p>

                            <div class="hero-actions">
                                <a class="button button-primary" href="#contact"
                                   data-route="contact">
                                    Start a Conversation →
                                </a>
                            </div>
                        </div>

                        <div class="approach-list">
                            <div class="approach-item">
                                <strong>01. Strategy First</strong>
                                <span>Understand the objective before choosing a solution.</span>
                            </div>

                            <div class="approach-item">
                                <strong>02. Design with Purpose</strong>
                                <span>Create clear interfaces with consistent visual hierarchy.</span>
                            </div>

                            <div class="approach-item">
                                <strong>03. Technology That Works</strong>
                                <span>Build responsive and maintainable frontend experiences.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `
    },

    contact: {
        title: "Contact | NovaTech",
        render: () => `
            <section class="section">
                <div class="container">
                    <div class="section-heading">
                        <span class="eyebrow">Let's Talk</span>
                        <h1>Have an idea? <span class="gradient-text">Let's connect.</span></h1>
                        <p>
                            Tell us a little about your project using the form.
                            This demonstration validates the form locally.
                        </p>
                    </div>

                    <div class="contact-layout">
                        <div>
                            <h2>Start a conversation.</h2>
                            <p class="muted" style="margin-top: 12px;">
                                Share your goals, project requirements, or
                                questions. Complete the form to see its
                                client-side validation in action.
                            </p>
                        </div>

                        <form class="contact-form" id="contact-form">
                            <div class="form-group">
                                <label for="contact-name">Your name</label>
                                <input
                                    id="contact-name"
                                    name="name"
                                    type="text"
                                    autocomplete="name"
                                    placeholder="Enter your name"
                                    required
                                    minlength="2"
                                >
                            </div>

                            <div class="form-group">
                                <label for="contact-email">Email address</label>
                                <input
                                    id="contact-email"
                                    name="email"
                                    type="email"
                                    autocomplete="email"
                                    placeholder="you@example.com"
                                    required
                                >
                            </div>

                            <div class="form-group">
                                <label for="contact-message">Project details</label>
                                <textarea
                                    id="contact-message"
                                    name="message"
                                    placeholder="Tell us about your idea..."
                                    required
                                    minlength="10"
                                ></textarea>
                            </div>

                            <button class="button button-primary" type="submit">
                                Validate Message →
                            </button>

                            <p
                                class="form-status"
                                id="form-status"
                                role="status"
                                aria-live="polite"
                            ></p>
                        </form>
                    </div>
                </div>
            </section>
        `
    },

    notFound: {
        title: "Page Not Found | NovaTech",
        render: () => `
            <section class="error-state">
                <div>
                    <span class="eyebrow">404 Error</span>
                    <h1>Page not found.</h1>
                    <p class="muted">
                        The page you requested doesn't exist.
                        Choose a valid section to continue.
                    </p>

                    <div class="hero-actions" style="justify-content: center;">
                        <a class="button button-primary" href="#home"
                           data-route="home">
                            Return Home →
                        </a>
                    </div>
                </div>
            </section>
        `
    }
};

// -----------------------------------------------------
// 4. REUSABLE CARD FUNCTIONS
// -----------------------------------------------------

function serviceCard(number, title, description) {
    return `
        <article class="card">
            <div class="card-icon" aria-hidden="true">${number}</div>
            <h2>${title}</h2>
            <p>${description}</p>

            <a class="card-link" href="#contact" data-route="contact">
                Discuss a Project →
            </a>
        </article>
    `;
}

function projectCard(number, title, description, category) {
    return `
        <article class="card project-card">
            <div class="project-visual" aria-hidden="true">
                <span class="project-symbol">${number}</span>
            </div>

            <div class="project-info">
                <span class="project-category">${category}</span>
                <h2>${title}</h2>
                <p>${description}</p>

                <a class="card-link" href="#contact" data-route="contact">
                    Learn More →
                </a>
            </div>
        </article>
    `;
}

// -----------------------------------------------------
// 5. ROUTE VALIDATION
// -----------------------------------------------------

function getRouteFromURL() {
    const rawRoute = window.location.hash.slice(1).trim();

    if (!rawRoute) {
        return "home";
    }

    const normalizedRoute = rawRoute.toLowerCase();

    const allowedRoutes = [
        "home",
        "services",
        "projects",
        "about",
        "contact"
    ];

    return allowedRoutes.includes(normalizedRoute)
        ? normalizedRoute
        : "notFound";
}

// -----------------------------------------------------
// 6. UPDATE ACTIVE NAVIGATION
// -----------------------------------------------------

function updateNavigation(route) {
    const navLinks = navigation.querySelectorAll("[data-route]");

    navLinks.forEach((link) => {
        const isActive = link.dataset.route === route;

        if (isActive) {
            link.setAttribute("aria-current", "page");
        } else {
            link.removeAttribute("aria-current");
        }
    });
}

// -----------------------------------------------------
// 7. CLOSE MOBILE MENU
// -----------------------------------------------------

function closeMobileMenu() {
    navigation.classList.remove("is-open");

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
}

// -----------------------------------------------------
// 8. RENDER THE CURRENT PAGE
// -----------------------------------------------------

function renderRoute() {
    const route = getRouteFromURL();
    const page = pages[route] || pages.notFound;

    appState.currentRoute = route;
    appState.navigationCount += 1;

    document.title = page.title;

    pageContent.innerHTML = page.render();

    // Restart the entrance animation for the new page.
    pageContent.classList.remove("page-enter");
    void pageContent.offsetWidth;
    pageContent.classList.add("page-enter");

    updateNavigation(route);
    closeMobileMenu();

    // Attach behavior to any form created during rendering.
    if (route === "contact") {
        setupContactForm();
    }

    console.info(
        `SPA navigation: ${route} | Navigation count: ${appState.navigationCount}`
    );
}

// -----------------------------------------------------
// 9. NAVIGATION WITHOUT FULL PAGE RELOAD
// -----------------------------------------------------

function navigateTo(route) {
    const allowedRoutes = [
        "home",
        "services",
        "projects",
        "about",
        "contact"
    ];

    if (!allowedRoutes.includes(route)) {
        route = "notFound";
    }

    const targetHash = route === "notFound" ? "#404" : `#${route}`;

    if (window.location.hash === targetHash) {
        renderRoute();
        return;
    }

    // pushState adds an entry to browser history without reloading.
    window.history.pushState(
        { route: route },
        "",
        targetHash
    );

    renderRoute();
}

// -----------------------------------------------------
// 10. HANDLE NAVIGATION LINK CLICKS
// -----------------------------------------------------

document.addEventListener("click", (event) => {
    const link = event.target.closest("a[data-route]");

    if (!link) {
        return;
    }

    // Keep normal browser behavior for modified clicks.
    if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
    ) {
        return;
    }

    event.preventDefault();

    const route = link.dataset.route;

    navigateTo(route);
});

// -----------------------------------------------------
// 11. BROWSER BACK/FORWARD SUPPORT
// -----------------------------------------------------

window.addEventListener("popstate", () => {
    renderRoute();
});

// Handle direct hash changes, including manually edited hashes.
window.addEventListener("hashchange", () => {
    renderRoute();
});

// -----------------------------------------------------
// 12. MOBILE NAVIGATION
// -----------------------------------------------------

menuToggle.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("is-open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeMobileMenu();
    }
});

// Close the mobile menu when a navigation item is selected.
navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
        closeMobileMenu();
    }
});

// -----------------------------------------------------
// 13. CONTACT FORM VALIDATION
// -----------------------------------------------------

function setupContactForm() {
    const form = document.getElementById("contact-form");
    const status = document.getElementById("form-status");

    if (!form || !status) {
        return;
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        status.classList.remove("error");

        if (!form.checkValidity()) {
            form.reportValidity();
            status.textContent = "Please complete all fields correctly.";
            status.classList.add("error");
            return;
        }

        const name = form.elements.name.value.trim();

        status.textContent =
            `Thank you, ${name}! The form passed validation. ` +
            "This demonstration does not send data to a server.";

        form.reset();
    });
}

// -----------------------------------------------------
// 14. INITIALIZE APPLICATION
// -----------------------------------------------------

function initializeApp() {
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    renderRoute();
}

initializeApp();
