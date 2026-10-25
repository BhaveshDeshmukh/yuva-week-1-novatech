// ================================================
// NovaTech - Week 3
// Integrating JavaScript for Interactive User Experience
// ================================================

document.addEventListener("DOMContentLoaded", function () {
    console.log("NovaTech JavaScript loaded successfully!");

    // ================================================
    // 1. MOBILE NAVIGATION
    // ================================================

    const navbar = document.querySelector(".navbar");
    const navLinks = document.querySelector(".nav-links");

    if (navbar && navLinks) {
        const menuButton = document.createElement("button");

        menuButton.type = "button";
        menuButton.className = "menu-toggle";
        menuButton.setAttribute("aria-label", "Open navigation menu");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.innerHTML = "<span></span><span></span><span></span>";

        navbar.insertBefore(menuButton, navLinks);

        function closeMenu() {
            navLinks.classList.remove("nav-open");
            menuButton.classList.remove("menu-active");
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.setAttribute("aria-label", "Open navigation menu");
        }

        menuButton.addEventListener("click", function () {
            const isOpen = navLinks.classList.toggle("nav-open");

            menuButton.classList.toggle("menu-active", isOpen);
            menuButton.setAttribute("aria-expanded", String(isOpen));
            menuButton.setAttribute(
                "aria-label",
                isOpen ? "Close navigation menu" : "Open navigation menu"
            );
        });

        navLinks.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", closeMenu);
        });

        document.addEventListener("click", function (event) {
            if (
                window.innerWidth <= 760 &&
                !navbar.contains(event.target)
            ) {
                closeMenu();
            }
        });

        window.addEventListener("resize", function () {
            if (window.innerWidth > 760) {
                closeMenu();
            }
        });
    }

    // ================================================
    // 2. CREATE CONTACT FORM
    // ================================================

    const contactContent = document.querySelector(".contact-content");

    if (contactContent) {
        const contactButton =
            contactContent.querySelector(".contact-button");

        if (contactButton) {
            const contactForm = document.createElement("form");

            contactForm.id = "contact-form";
            contactForm.className = "contact-form";
            contactForm.noValidate = true;

            // Template literal: HTML is inserted into the page using JavaScript.

            contactForm.innerHTML = `
                <div class="form-group">
                    <label for="contact-name">Your Name</label>
                    <input 
                        type="text"
                        id="contact-name"
                        name="name"
                        placeholder="Enter your name"
                        autocomplete="name"
                        required
                    >
                </div>

                <div class="form-group">
                    <label for="contact-email">Email Address</label>
                    <input
                        type="email"
                        id="contact-email"
                        name="email"
                        placeholder="you@example.com"
                        autocomplete="email"
                        required
                    >
                </div>

                <div class="form-group">
                    <label for="contact-message">Your Message</label>
                    <textarea
                        id="contact-message"
                        name="message"
                        rows="4"
                        placeholder="Tell us about your project"
                        required
                    ></textarea>
                </div>

                <button type="submit" class="button button-primary">
                    Send Message <span aria-hidden="true">↗</span>
                </button>

                <p
                    id="form-feedback"
                    class="form-feedback"
                    role="status"
                    aria-live="polite"
                ></p>
            `;

            contactButton.replaceWith(contactForm);

            const nameInput =
                contactForm.querySelector("#contact-name");

            const emailInput =
                contactForm.querySelector("#contact-email");

            const messageInput =
                contactForm.querySelector("#contact-message");

            const feedback =
                contactForm.querySelector("#form-feedback");

            // ================================================
            // 3. CONTACT FORM VALIDATION
            // ================================================

            contactForm.addEventListener("submit", function (event) {
                event.preventDefault();

                const name = nameInput.value.trim();
                const email = emailInput.value.trim();
                const message = messageInput.value.trim();

                feedback.textContent = "";
                feedback.className = "form-feedback";

                if (!name || !email || !message) {
                    feedback.textContent =
                        "Please complete all fields.";

                    feedback.classList.add("error");

                    if (!name) {
                        nameInput.focus();
                    } else if (!email) {
                        emailInput.focus();
                    } else {
                        messageInput.focus();
                    }

                    return;
                }

                const emailPattern =
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                if (!emailPattern.test(email)) {
                    feedback.textContent =
                        "Please enter a valid email address.";

                    feedback.classList.add("error");
                    emailInput.focus();

                    return;
                }

                feedback.textContent =
                    "Thank you, " +
                    name +
                    "! Your form has been validated successfully.";

                feedback.classList.add("success");

                contactForm.reset();
            });

            // Clear old feedback when the visitor edits a field.
            contactForm
                .querySelectorAll("input, textarea")
                .forEach(function (field) {
                    field.addEventListener("input", function () {
                        feedback.textContent = "";
                        feedback.className = "form-feedback";
                    });
                });
        }
    }

    // ================================================
    // 4. INTERACTIVE SERVICE CARDS
    // ================================================

    const serviceCards = document.querySelectorAll(".service-card");

    serviceCards.forEach(function (card) {
        card.addEventListener("mouseenter", function () {
            card.classList.add("card-highlight");
        });

        card.addEventListener("mouseleave", function () {
            card.classList.remove("card-highlight");
        });

        card.addEventListener("focusin", function () {
            card.classList.add("card-highlight");
        });

        card.addEventListener("focusout", function () {
            card.classList.remove("card-highlight");
        });
    });

    // ================================================
    // 5. BACK-TO-TOP BUTTON
    // ================================================

    const backToTop = document.querySelector(".back-to-top");

    if (backToTop) {
        backToTop.addEventListener("click", function (event) {
            event.preventDefault();

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // ================================================
    // 6. ACTIVE NAVIGATION LINK
    // ================================================

    const sections = document.querySelectorAll(
        "main section[id], header[id]"
    );

    const navigationLinks = document.querySelectorAll(
        '.nav-links a[href^="#"]'
    );

    if (
        "IntersectionObserver" in window &&
        sections.length > 0
    ) {
        const sectionObserver = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (!entry.isIntersecting) {
                        return;
                    }

                    const currentId = entry.target.id;

                    navigationLinks.forEach(function (link) {
                        const isActive =
                            link.getAttribute("href") ===
                            "#" + currentId;

                        link.classList.toggle("active", isActive);

                        if (isActive) {
                            link.setAttribute(
                                "aria-current",
                                "location"
                            );
                        } else {
                            link.removeAttribute("aria-current");
                        }
                    });
                });
            },
            {
                rootMargin: "-25% 0px -65% 0px"
            }
        );

        sections.forEach(function (section) {
            sectionObserver.observe(section);
        });
    }
});
