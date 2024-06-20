# Kiwi

Kiwi is a highly interactive and responsive e-commerce web application designed with a user-friendly interface. This project leverages modern web development technologies to provide a seamless user experience, state management, authentication, and secure payment processing.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- Users can browse and interact with various components.
- Responsive design with a modern user interface.
- State management using Redux and Context API.
- Secure authentication and database management with Firebase.
- Seamless payment processing with Razorpay.
- Deployment on Vercel for high availability and scalability.

## Tech Stack

- **Frontend**: React, Vite, TailwindCSS, Material UI
- **State Management**: Redux, Context API
- **Backend**: Firebase (Authentication, Firestore, Functions)
- **Payment Processing**: Razorpay
- **Deployment**: Vercel

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js and npm installed on your local machine.
- A Firebase project setup for authentication and database management.
- Razorpay account for payment processing.

### Installation

1. Clone the repository
    ```sh
    git clone https://github.com/debghs/kiwi.git
    cd kiwi
    ```

2. Install dependencies
    ```sh
    npm install
    ```

3. Set up Firebase
    - Create a Firebase project.
    - Enable Firestore and Authentication in the Firebase console.
    - Create a `.env` file in the root of the project and add your Firebase configuration:
        ```plaintext
        VITE_FIREBASE_API_KEY=your-api-key
        VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
        VITE_FIREBASE_PROJECT_ID=your-project-id
        VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
        VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
        VITE_FIREBASE_APP_ID=your-app-id
        ```

4. Set up Razorpay
    - Sign up for a Razorpay account.
    - Create a `.env` file in the root of the project and add your Razorpay configuration:
        ```plaintext
        VITE_RAZORPAY_KEY_ID=your-key-id
        VITE_RAZORPAY_KEY_SECRET=your-key-secret
        ```

### Usage

1. Start the development server
    ```sh
    npm run dev
    ```

2. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.
