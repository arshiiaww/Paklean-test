# Paklean's Test Profile Application

This is a React application that provides a user profile page and an edit profile page. It uses local storage to persist user data, and includes features such as a calendar component for selecting birth dates, a dropdown component for selecting gender, and multi-language support using i18n.

**IMPORTANT**
*In the instructions for this technical interview test, there was no mention or UI representation of a login page. As a result, I focused my efforts on the tasks and UI structure outlined in the provided materials.
The instructions specified that the Profile Page should display the user's Full Name, Email Address, Gender (using a dropdown), and Birth Date (using a calendar). While the provided UI only showed the user's Full Name and Email Address, I decided to follow the instructions closely to ensure I addressed all the required elements.
Regarding the multi-language support, the instructions did not specify any requirements in this area. Therefore, I chose to prioritize the core functionality and UI elements outlined in the test, rather than adding additional features that were not explicitly requested.
I understand that the lack of a login page and the discrepancy between the instructions and the provided UI may have been intentional tests or tricks. However, given the time constraints, I felt it was best to adhere closely to the information provided in the instructions and the UI representation, rather than making assumptions or introducing additional functionality.
My goal was to deliver a solution that closely matched the requirements outlined in the test, while maintaining a positive and respectful approach. I'm happy to discuss any additional feedback or clarification you may have regarding the scope and expectations of this technical interview test.*

## Features

- User profile page displaying personal information
- Edit profile page with form validation
- Calendar component for selecting birth date
- Dropdown component for selecting gender
- Multi-language support with English and Spanish translations
- Local storage or cookie-based data persistence
- Logout functionality with bottom sheet component

## Prerequisites

- Node.js (version 14 or later)
- npm (version 6 or later)

## Installation

1. Clone the repository: git clone https://github.com/arshiiaww/Paklean-test.git
2. Navigate to the project directory: 'cd Paklean-test'
3. Install dependencies: `npm install`

## Running the Application

1. Start the development server: `npm run dev`
2. Open your browser and visit `http://localhost:5173` to see the application.

## Building for Production

To create a production build, run:
`npm run build`

This will create an optimized build in the `dist` directory.

## Configuration

The application uses `react-i18next` for multi-language support. The translation files are located in the `src/i18n/locales` directory. You can modify or add new translations as needed.

For data persistence, the application uses local storage or cookies (depending on your implementation). You can adjust the storage mechanism by modifying the relevant code in the `ProfilePage` and `EditProfilePage` components.

## Dependencies

The main dependencies used in this project are:

- React
- React Router Dom
- react-i18next (for internationalization)
- js-cookie (if using cookies for data persistence)

Refer to the `package.json` file for the complete list of dependencies and their versions.
