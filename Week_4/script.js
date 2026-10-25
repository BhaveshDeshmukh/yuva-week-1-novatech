/* ==========================================
   NOVATECH - WEEK 4
   Accessible JavaScript interactions
   ========================================== */

"use strict";

document.addEventListener("DOMContentLoaded", function () {

    // 1. MOBILE NAVIGATION

    const navbar = document.querySelector(".navbar");
    const menuButton = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (navbar && menuButton && navLinks) {

        function closeMenu() {
            navLinks.classList.remove("nav-open");
            menuButton.classList.remove("menu-active");

            menuButton.setAttribute("aria-expanded", "false");
            menuButton.setAttribute("aria-label", "Open navigation menu");
        }

        function openMenu() {
            navLinks.classList.add("nav-open");
            menuButton.classList.add("menu-active");

            menuButton.setAttribute("aria-expanded", "true");
            menuButton.setAttribute("aria-label", "Close navigation menu");
        }

        menuButton.addEventListener("click", function () {

            const isOpen =
                menuButton.getAttribute("aria-expanded") === "true";

            if (isOpen) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        navLinks.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", closeMenu);
        });

        document.addEventListener("keydown", function (event) {

            if (event.key === "Escape") {
                closeMenu();
                menuButton.focus();
            }
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


    // 2. ACTIVE NAVIGATION LINKS

    const sections = document.querySelectorAll(
        "main section[id]"
    );

    const navigationLinks = document.querySelectorAll(
        ".nav-links a"
    );

    if ("IntersectionObserver" in window && sections.length > 0) {

        const sectionObserver = new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (!entry.isIntersecting) {
                        return;
                    }

                    const sectionId = entry.target.id;

                    navigationLinks.forEach(function (link) {

                        const isCurrent =
                            link.getAttribute("href") === "#" + sectionId;

                        if (isCurrent) {
                            link.classList.add("active");
                            link.setAttribute("aria-current", "location");
                        } else {
                            link.classList.remove("active");
                            link.removeAttribute("aria-current");
                        }
                    });
                });
            },
            {
                rootMargin: "-25% 0px -60% 0px",
                threshold: 0
            }
        );

        sections.forEach(function (section) {
            sectionObserver.observe(section);
        });
    }


    // 3. SERVICE CARD INTERACTION

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

        card.addEventListener("focusout", function (event) {

            if (!card.contains(event.relatedTarget)) {
                card.classList.remove("card-highlight");
            }
        });
    });


    // 4. BACK-TO-TOP FUNCTIONALITY

    const backToTop = document.querySelector(".back-to-top");

    if (backToTop) {

        backToTop.addEventListener("click", function (event) {

            event.preventDefault();

            window.scrollTo({
                top: 0,
                behavior: window.matchMedia(
                    "(prefers-reduced-motion: reduce)"
                ).matches ? "auto" : "smooth"
            });

            history.replaceState(null, "", "#home");
        });
    }


    // 5. CONTACT FORM

    // The original contact link remains functional.
    // This form is created when the user clicks "Get in Touch".

    const contactButton = document.querySelector(".contact-button");
    const contactContent = document.querySelector(".contact-content");

    if (contactButton && contactContent) {

        contactButton.addEventListener("click", function (event) {

            if (document.querySelector("#contact-form")) {
                return;
            }

            event.preventDefault();

            const contactForm = document.createElement("form");

            contactForm.id = "contact-form";
            contactForm.className = "contact-form";

            contactForm.innerHTML = `
                <div class="form-group">
                    <label for="contact-name">Your Name</label>
                    <input
                        type="text"
                        id="contact-name"
                        name="name"
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
                        required
                    ></textarea>
                </div>

                <button type="submit" class="button button-primary">
                    Prepare Email
                </button>

                <p id="form-feedback"
                   class="form-feedback"
                   role="status"
                   aria-live="polite"></p>
            `;

            contactContent.appendChild(contactForm);

            contactForm.querySelector("input").focus();

            contactForm.addEventListener("submit", function (submitEvent) {

                submitEvent.preventDefault();

                const name =
                    document.querySelector("#contact-name").value.trim();

                const email =
                    document.querySelector("#contact-email").value.trim();

                const message =
                    document.querySelector("#contact-message").value.trim();

                const feedback =
                    document.querySelector("#form-feedback");

                if (!name || !email || !message) {

                    feedback.textContent =
                        "Please complete all fields before continuing.";

                    return;
                }

                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                if (!emailPattern.test(email)) {

                    feedback.textContent =
                        "Please enter a valid email address.";

                    document.querySelector("#contact-email").focus();

                    return;
                }

                feedback.textContent =
                    "Your email application will open with your message.";

                const recipient = "YOUR_EMAIL@example.com";

                const subject = encodeURIComponent(
                    "NovaTech Website Enquiry"
                );

                const body = encodeURIComponent(
                    "Name: " + name +
                    "\nEmail: " + email +
                    "\n\nMessage:\n" + message
                );

                window.location.href =
                    "mailto:" + recipient +
                    "?subject=" + subject +
                    "&body=" + body;
            });
        });
    }

    console.log("NovaTech Week 4 JavaScript loaded successfully.");
});