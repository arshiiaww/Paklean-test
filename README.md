# Paklean's Test Profile Application

This is a React application that provides a user profile page and an edit profile page. It uses local storage to persist user data, and includes features such as a calendar component for selecting birth dates, a dropdown component for selecting gender, and multi-language support using i18n.

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
2. Navigate to the project directory: cd Paklean-test
3. Install dependencies: npm install

## Running the Application

1. Start the development server: npm run dev
2. Open your browser and visit `http://localhost:5173` to see the application.

## Building for Production

To create a production build, run:
npm run build

This will create an optimized build in the `dist` directory.

## Configuration

The application uses `react-i18next` for multi-language support. The translation files are located in the `src/i18n/locales` directory. You can modify or add new translations as needed.

For data persistence, the application uses local storage or cookies (depending on your implementation). You can adjust the storage mechanism by modifying the relevant code in the `ProfilePage` and `EditProfilePage` components.

## Dependencies

The main dependencies used in this project are:

- React
- React Router
- react-i18next (for internationalization)
- js-cookie (if using cookies for data persistence)

Refer to the `package.json` file for the complete list of dependencies and their versions.
