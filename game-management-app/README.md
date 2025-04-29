# Game Management App

## Overview
The Game Management App is a web application that allows users to manage games, including creating, reading, editing, and deleting game entries. It also includes user authentication features, enabling users to register, log in, and log out.

## Features
- User authentication with registration, login, and logout functionalities.
- CRUD operations for managing games.
- Client-side validation using Bootstrap.
- Responsive design with a clean user interface.

## Project Structure
```
game-management-app
├── public
│   └── styles
│       └── style.css
├── src
│   ├── models
│   │   ├── gameSchema.js
│   │   └── userSchema.js
│   ├── routes
│   │   ├── authRoutes.js
│   │   ├── gameRoutes.js
│   │   └── index.js
│   ├── views
│   │   ├── auth
│   │   │   ├── login.ejs
│   │   │   ├── register.ejs
│   │   │   └── logout.ejs
│   │   ├── games
│   │   │   ├── edit.ejs
│   │   │   ├── index.ejs
│   │   │   ├── new.ejs
│   │   │   └── show.ejs
│   │   └── partials
│   │       ├── footer.ejs
│   │       └── header.ejs
│   ├── app.js
│   └── config
│       └── passportConfig.js
├── package.json
├── .env
└── README.md
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd game-management-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add your environment variables, such as database connection strings and session secrets.

## Running the Application
1. Start the server:
   ```
   npm start
   ```

2. Open your browser and navigate to `http://localhost:3000` to access the application.

## Usage
- **Register**: Navigate to `/register` to create a new user account.
- **Login**: Navigate to `/login` to log in to your account.
- **Manage Games**: After logging in, you can create, view, edit, and delete games through the `/games` route.

## Contributing
Feel free to fork the repository and submit pull requests for any improvements or bug fixes.

## License
This project is licensed under the MIT License.