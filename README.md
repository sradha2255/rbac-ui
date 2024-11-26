# User Management Portal (RBAC UI)

This is a **Role-Based Access Control (RBAC)** User Interface for managing users, roles, permissions, and access controls. The project includes a React-based front end and a JSON server for backend API simulation.

## Features

- Add, edit, and delete users.
- Assign roles and permissions (e.g., Read, Write, Delete).
- Responsive and user-friendly interface.
- Permissions management for each user.
- Login functionality for admins.

## Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or later)
- [Git](https://git-scm.com/)

## Getting Started

Follow the steps below to set up and run the project locally.

### Clone the Repository

```bash
git clone https://github.com/sradha2255/rbac-ui.git
cd rbac-ui


Install Dependencies
Install the required packages:

1.React: To create the frontend.

Installed automatically when creating the React app using npx create-react-app.
2.Axios: For making HTTP requests to the backend (JSON Server in this case).

3.npm install axios
JSON Server: To mock a backend API for managing users, roles, and permissions.

4.npm install -g json-server

5.Material-UI
npm install @mui/material @emotion/react @emotion/styled

6.React Router DOM: For navigation between pages (e.g., Login, Users Page, etc.).
npm install react-router-dom

7.npm install

Start the JSON Server
Start the mock backend server:
npx json-server --watch db.json --port 3001

Run the React App
Start the React development server:

npm start
Access the Application
Open your browser and navigate to:
http://localhost:3000

Project Structure

rbac-ui/
├── public/          # Public files (e.g., index.html, icons)
├── src/
│   ├── components/  # Reusable components
│   ├── pages/       # Main pages (LoginPage, UsersPage, etc.)
│   ├── services/    # API request handlers
│   ├── App.js       # App configuration
│   └── index.js     # Entry point
├── db.json          # Mock backend data
├── package.json     # Project dependencies
├── README.md        # Project documentation
└── .gitignore       # Ignored files

Usage
Add a User
1.Enter the name, email, role, and permissions in the form.
2.Click the Add User button.

Edit a User
1.Click the Edit icon in the Actions column.
2.Modify the user's details and save.

Delete a User
1.Click the Delete button in the Actions column.
2.Confirm the deletion.

Technologies Used
1.React.js: Frontend framework.
2.Material-UI: For UI components.
3.JSON Server: Mock backend server.
4.Axios: For API requests.

Admin Login
Username : admin
Password : password

Author
Name: Sradha
Email: your-email@example.com
GitHub: sradha2255