# NovaTech — Single Page Application (SPA)

## 1. Project Overview

NovaTech is a Single Page Application (SPA) developed as part of Week 5 of the YUVA Frontend Web Developer Internship. The project demonstrates how a website can dynamically update its content without reloading the entire page.

The application is built using HTML, CSS, and JavaScript. It implements client-side routing, browser history navigation, dynamic content rendering, application state management, and error handling for invalid routes.

## 2. Objectives

* Understand the fundamental concepts of Single Page Applications.
* Create a structured and responsive web interface.
* Implement dynamic content rendering using JavaScript.
* Enable client-side routing without full-page reloads.
* Use the browser History API to manage navigation.
* Support browser Back and Forward buttons.
* Manage application state using JavaScript.
* Handle invalid routes with a custom error page.
* Implement smooth CSS transitions between views.
* Validate contact form inputs on the client side.

## 3. Technologies Used

* **HTML5:** Provides the structure of the application.
* **CSS3:** Provides styling, responsive layouts, animations, and transitions.
* **JavaScript:** Handles routing, dynamic rendering, application state, and form validation.
* **Browser History API:** Manages client-side navigation history.
* **Visual Studio Code:** Used for development.
* **Live Server:** Used to run and test the application locally.

## 4. Project Structure

```text
Week_5/
├── index.html
├── style.css
├── script.js
└── README.md
```

### File Description

| File         | Description                                                                           |
| ------------ | ------------------------------------------------------------------------------------- |
| `index.html` | Contains the main HTML structure and application container.                           |
| `style.css`  | Contains the visual design, responsive styles, and transitions.                       |
| `script.js`  | Implements routing, dynamic content rendering, state management, and form validation. |
| `README.md`  | Documents the project, its features, and instructions for running it.                 |

## 5. Features

### 5.1 Single Page Application

The application updates its main content dynamically without requiring a complete page reload when users navigate between sections.

### 5.2 Dynamic Content Rendering

JavaScript renders the appropriate content inside a shared application container according to the selected route.

### 5.3 Client-Side Routing

The application includes the following views:

* Home
* Services
* Projects
* About
* Contact

Navigation uses URL hash identifiers to represent the current view.

### 5.4 Browser History Navigation

The browser History API is used to manage navigation entries. Users can navigate between views and use the browser Back and Forward buttons.

### 5.5 Application State Management

JavaScript maintains application state, including the current route and navigation count.

### 5.6 Invalid Route Handling

If a user navigates to an unsupported route, the application displays a custom 404 page instead of leaving the content area empty.

### 5.7 Responsive Design

The interface adapts to different screen sizes using CSS media queries and a mobile navigation menu.

### 5.8 Smooth Transitions

CSS animations provide visual transitions when application views are rendered.

### 5.9 Contact Form Validation

The Contact view includes client-side validation and displays a status message after successful validation.

**Note:** The contact form is a frontend demonstration. It does not send messages to a server or store submissions.

### 5.10 Accessibility

The application includes keyboard focus indicators, a skip-to-content link, accessible navigation attributes, and support for reduced-motion preferences.

## 6. How to Run the Project

Follow these steps to run the application locally.

1. Open the `Week_5` folder in Visual Studio Code.
2. Ensure that all four project files are present.
3. Install the Live Server extension if it is not already installed.
4. Right-click `index.html`.
5. Select **Open with Live Server**.
6. The application will open in your default browser.

You can then navigate between the available sections and test the application's functionality.

## 7. Testing

The following functionality should be tested before submission:

* The Home view loads correctly.
* Navigation links display the appropriate content.
* The URL updates when navigating between views.
* Browser Back and Forward buttons work correctly.
* Invalid routes display the custom 404 view.
* The mobile navigation menu opens and closes.
* The contact form validates user input.
* CSS transitions work as expected.
* The application remains usable at different screen sizes.
* No unexpected JavaScript errors appear in the browser console.

## 8. Limitations

This project is a frontend SPA simulation. It does not include a backend server, database, user authentication, or server-side form submission. The contact form only demonstrates client-side validation and feedback.

## 9. Conclusion

The NovaTech SPA demonstrates important frontend development concepts, including dynamic rendering, client-side routing, browser history management, JavaScript state management, responsive design, accessibility, and form validation.

The project provides practical experience in building interactive web applications using standard web technologies without relying on a frontend framework.

## 10. Internship Information

**Program:** YUVA Frontend Web Developer Internship
**Task:** Week 5 — Single Page Application Simulation
**Project:** NovaTech SPA
**Technologies:** HTML5, CSS3, JavaScript
