Credit Card Generator — Interactive Card Details Form

Project Overview

This project is a React-based implementation of an interactive credit card details form based on the provided Figma reference design.

The main objective of the project is to create a functional and responsive form where users can enter their card details and see the information reflected on a digital card preview in real time.

Key Features

* Interactive Card Preview
    Displays the entered cardholder name, card number, expiry date, and CVC on the corresponding card sections.
* Card Number Formatting
    Automatically formats the card number into groups of four digits for better readability.
* Form Validation
    Validates the required fields when the user submits the form, including card number, expiry date, and CVC format.
* Inline Error Messages
    Displays relevant error messages below fields containing invalid or missing information.
* Confirmation State
    Shows a confirmation screen after all details are entered correctly.
* Success Notification
    Displays a brief success message after successful submission.
* Reset Functionality
    The Continue button resets the form and returns the card preview to its initial state.
* Responsive Design
    The layout adapts to different screen sizes while maintaining the overall structure of the reference design.

Technologies Used

* React
* JavaScript
* HTML
* CSS
* npm

Project Setup

Prerequisites

Make sure the following are installed on the system:

* Node.js
* npm

Installation

After cloning the repository, install the required dependencies:

npm install

Running the Project

Start the development server using:

npm start

The application will be available locally at:

http://localhost:3000

Testing

The project can be tested using:

npm test -- --watchAll=false

This verifies that the application runs correctly without requiring the interactive test mode.

Production Build

To create an optimized production build:

npm run build

The generated production files will be placed in the build directory.

Deployment

The project can be deployed using platforms such as Netlify or Render.

For Netlify:

* Build command: npm run build
* Publish directory: build

For Render:

* Service type: Static Site
* Build command: npm run build
* Publish directory: build

Project Objective

The project demonstrates the use of React for building an interactive web form, handling user input, performing client-side validation, updating UI components dynamically, and creating a responsive interface based on a given design reference.

The implementation focuses on meeting the specified functional requirements while maintaining a clean and straightforward academic project structure.

⸻

Created by

Sumukh Ravikumar
