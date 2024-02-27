# Study Stack 
Studystack is a platform featuring a comprehensive collection of recorded lectures, conveniently organized into modules for easy access and playback.
## Learning Management System
### For Backend Technology Use :
- Node Js
- Express Js
- MongoDB

## Dependencies
- **axios :** HTTP client for making requests.
- **bcryptjs:** Library for hashing and salting passwords.
- **cors:** Middleware for enabling CORS in Express.js.
- **dotenv :** Load environment variables from a `.env` file.
- **express :** Web application framework for Node.js.
- **jsonwebtoken:** Library for generating and verifying JSON Web Tokens.
- **mongoose:** ODM library for MongoDB and Node.js.
- **nodemon:** Utility for monitoring changes and restarting the server.

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB installed and running

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/node-express-mongodb-auth.git
2. Install dependencies:
    ``` bash
    npm install
3. Set up your MongoDB database and update the connection string in config.js:

     ``` 
        .env File
        module.exports = {
         mongoURI: "your-mongodb-connection-string",
        jwtSecret: "your-secret-key",
        }; 
    ```

#  API Endpoints 

###  Register a new user
```
    POST /api/register
```
### Login
```
    POST /api/login
```
### Update User Profile (Protected Route)
```
PUT /api/user/:id
```
### Delete User (Protected Route)
```
DELETE /api/user/:id
```

- do one thing before going to start project you have to do first `npm i`
- then add .env file to the your main directory
- Inside the .env you have to add below code

```
MONGO_URL =mongodb+srv://Tejas_2001:Tejas_2001@cluster0.yh6oemv.mongodb.net/LMS?retryWrites=true&w=majority

PORT_NUM =3000
SECRET_KEY='secretkey'
```

- then `npm start` your code run smoothly.
