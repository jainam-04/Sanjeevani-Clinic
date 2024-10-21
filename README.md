# Sanjeevani Clinic - Full Stack Website

Sanjeevani Clinic is a comprehensive full stack web application designed for managing doctor appointments, user testimonials, blog content, and admin/user dashboards. It streamlines the clinic management process and enhances user experience with a modern and responsive design.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation and Setup Instructions](#installation-and-setup-instructions)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup (React Vite)](#frontend-setup-react-vite)
  - [Firebase Configuration](#firebase-configuration)
- [Project Structure](#project-structure)
- [Screenshots](#screenshots)
- [Acknowledgements](#acknowledgements)

## Features

- **Doctor Appointment System**: Book appointments with doctors, view schedules, and manage bookings.
- **Testimonials**: Users can leave feedback which is displayed dynamically.
- **Blog System**: Manage and publish health-related blogs.
- **Admin Dashboard**: Admins can manage appointments, users, doctors, and blog content.
- **User Dashboard**: Users can view their appointment history, manage bookings, and update their profiles.

## Technologies Used

This project is built using the **FERN** stack and **Tailwind CSS**:

- **Firebase**: Used for authentication and database storage.
- **Express.js**: Backend framework for handling routes and API calls.
- **React.js (Vite)**: Frontend library for building the user interface using Vite for fast builds and development.
- **Node.js**: Server-side JavaScript environment.
- **Tailwind CSS**: Utility-first CSS framework for styling the frontend.

## Installation and Setup Instructions

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/sanjeevani-clinic.git
    cd sanjeevani-clinic
    ```

2. ### Backend Setup
    - Navigate to the `server` directory:
      ```bash
      cd server
      ```
    - Install server dependencies:
      ```bash
      npm install
      ```
    - Create a `.env` file in the `server` directory and add your environment variables for Firebase, database, etc.
    - Start the backend server:
      ```bash
      npm start
      ```

3. ### Frontend Setup (React Vite)
    - Navigate to the `client` directory:
      ```bash
      cd ../client
      ```
    - Install client dependencies:
      ```bash
      npm install
      ```
    - Start the frontend development server using Vite:
      ```bash
      npm run dev
      ```

4. ### Firebase Configuration
    - Set up Firebase project and configure authentication and Firestore database.
    - Add Firebase credentials to your `.env` file or directly in your Firebase config file on the frontend.

## Project Structure

- **/server**: Contains the Express backend code.
- **/client**: Contains the React frontend code using Vite.
- **/public**: Static assets and images.
- **/src**: Core frontend components, services, and utilities.

## Screenshots

1. **Sanjeevani Clinic Home Page**

![image](https://github.com/user-attachments/assets/2fee2ca1-4ced-4786-b4d9-e06bfc1e625c)

2. **Appointment Booking Page**

![image](https://github.com/user-attachments/assets/561cd673-0ca8-4bbc-93c9-c97f982b3976)

3. **Admin Dashboard**

![image](https://github.com/user-attachments/assets/f7e23c4a-fa98-495f-b9eb-55d8fed1cd2f)


## Acknowledgements

- [React.js (Vite)](https://vitejs.dev/)
- [Node.js](https://nodejs.org/)
- [Firebase](https://firebase.google.com/)
- [Express.js](https://expressjs.com/)
- [Tailwind CSS](https://tailwindcss.com/)
