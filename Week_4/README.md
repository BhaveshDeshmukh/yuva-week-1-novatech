# NovaTech – JavaScript Integration

## Project Overview

NovaTech is a modern agency landing page enhanced with JavaScript to provide interactive user experiences. This project builds on the responsive website developed in the previous week.

## Technologies Used

* HTML5
* CSS3
* JavaScript
* DOM Manipulation
* Event Listeners
* Form Validation
* Intersection Observer API

## Features

* Responsive website layout
* Interactive mobile navigation menu
* Dynamically generated contact form
* Client-side form validation
* Validation and confirmation messages
* Interactive service cards
* Active navigation link highlighting
* Smooth back-to-top scrolling, when the corresponding button is present

## Project Structure

```text
Week_3/
├── index.html
├── style.css
├── script.js
├── README.md
└── Week_3_Report.docx
```

## JavaScript Implementation

The JavaScript file waits for the DOM to load before attaching event listeners and modifying webpage elements.

The mobile navigation feature creates a menu button and toggles the navigation menu on smaller screens.

The contact form is generated dynamically and validates the visitor's name, email address, and message. Feedback is displayed without reloading the page.

Service cards receive a highlight class during mouse and keyboard interaction. The Intersection Observer API is used to update active navigation links when corresponding sections enter the observed viewport.

## Testing

Test the website at desktop and mobile viewport sizes. Verify navigation, form validation, feedback messages, service-card interactions, and browser console output.

## Limitations

The contact form performs client-side validation only. It does not send messages to a server or email inbox.

## Conclusion

This project demonstrates how JavaScript can enhance a static webpage through DOM manipulation, event handling, client-side validation, and interactive navigation.
