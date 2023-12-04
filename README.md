# Nimbus Note Server

This is the README file for the Server side of Nimbus Note, which allows the creation of tickets to represent projects and track the progress in them.


## Getting started

Follow these steps to run the Nimbus Note server:
    1. Clone the repository into your local machine by running git clone https://github.com/claudiaalmeidavs/nimbus-note-backend.git
    2. Navigate to the project directory by entering the command "cd your-project-folder"
    3. Run "npm install" in the project directory to install all the necessary packages and dependencies.
    4. Create a .env file based on the provided .env.sample file. Complete the necessary environment variables in the .env file, such as database credentials and app port.
    5. Run "npm run migrate" to create or reset the database required for Nimbus Note to run dynamically.
    6. Run the command "npm run dev" to start the development server

## Technologies used

The server for Nimbus Note is developed using the following technologies:

    1. JavaScript: The programming language used for both frontend and backend development in Nimbus Note.
    2. Node.js: A JavaScript runtime environment that allows executing JavaScript code outside of a web browser. It runs the backend server for Nimbus Note.
    3. Express: Express handles routing, middleware, and request handling for the Nimbus Note server.
    4. SQL: Structured Query Language (SQL) is used for managing and manipulating relational databases, allowing data creation, modification, and retrieval.
    5. MySQL: An open-source relational database management system (RDBMS) that uses SQL. MySQL is utilized as the database for storing and retrieving project data in Nimbus Note.

## Main features

These are the main features: 

### Register project
Allows users to create a new project. Users can provide detailed information about the activity, such as its title, user name, deadline, priority and category.

### Project List
Users can view all projects, sorted by deadline.

### Edit project
Users can edit all project information.

### Delete project
Enables users to delete a specific project from the project list page.

## Authors

This project was developed by:
- [@Cláudia Almeida](https://github.com/claudiaalmeidavs)