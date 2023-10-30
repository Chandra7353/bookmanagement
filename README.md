# bookmanagement

# installation Process :-  
install node modules using this command:  npm install

# User Authentication API     
This is a Node.js application for user authentication. It provides endpoints for user registration and login using JSON Web Tokens (JWT). This application uses the Mongoose library to interact with a MongoDB database and JWT for secure user authentication.


# Clone the repository:      
git clone https://github.com/your-username/user-authentication-api.git
cd user-authentication-API

The API will be available at Running PORT 4200 by default. You can change the port in the .env file if needed.

# signup & Login
first user has to signup and login after that he has to Add the book details 

1. Register a User
URL: /signup
Method: POST
Description: Register a new user by providing a name, email, and password.
Request Body:
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "password123"
}

2. User Login
URL: /login
Method: POST
Description: Authenticate a user by providing their email and password. This endpoint returns a JWT token upon successful login.
Request Body:
{
  "email": "johndoe@example.com",
  "password": "password123"
}



# Endpoints
1. Add a Book
URL: /addBook
Method: POST
Description: Add a new book to the database by providing a title, author, and summary. The userid is automatically associated with the currently authenticated user.
Request Body:
{
  "title": "Sample Book",
  "author": "Sample Author",
  "summary": "A brief summary of the book."
}

2. View All Books
URL: /viewallbooks
Method: GET
Description: Retrieve all books from the database.

3. View a Single Book
URL: /singlebook/:id
Method: GET
Description: Retrieve details of a specific book by providing its id.

4. Update a Book
URL: /updatebook/:id
Method: PUT
Description: Update the details of a book by providing its id and the new data in the request body.
Request Body:
{
  "title": "Updated Book Title",
  "author": "Updated Author",
  "summary": "Updated summary of the book."
}

5. Delete a Book
URL: /deletebook/:id
Method: DELETE
Description: Delete a book from the database by providing its id.


 
