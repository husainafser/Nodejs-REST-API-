# Node.js CRUD Project with EJS and REST API

This project is a simple demonstration of CRUD operations using Node.js, EJS (Embedded JavaScript), and a RESTful API. It allows users to create, update, read, and delete posts.

## Features

- **Create:** Users can create new posts.
- **Read:** Users can view existing posts.
- **Update:** Users can edit and update posts.
- **Delete:** Users can delete posts.

## Technologies Used

- **Node.js:** Used for the server-side logic.
- **EJS:** Used for templating and rendering views.
- **REST API:** Used for handling CRUD operations.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/husainafser/Nodejs-REST-API-.git
   ```

2. Install dependencies:

   ```bash
   cd your-project
   npm install
   ```

3. Run the application:

   ```bash
   nodemon index.js
   ```

4. Access the application in your browser:

   ```bash
   http://localhost:8080
   ```

## API Endpoints

- **GET /posts:** Get all posts.
- **GET /posts/:id:** Get a specific post by ID.
- **POST /posts/new:** Create a new post.
- **PATCH /posts/:id/edit:** Update a post by ID.
- **DELETE /posts/:id/delete:** Delete a post by ID.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

