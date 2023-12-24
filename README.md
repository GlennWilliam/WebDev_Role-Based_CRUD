Role-Based CRUD Web Application

A full-stack role-based web application using Node.js and React, featuring CRUD operations with different access levels for Admins and Users.
![image](https://github.com/GlennWilliam/WebDev_Role-Based_CRUD/assets/121201497/cd3d0878-360b-49b9-a24b-fb0d693a1cce)
![image](https://github.com/GlennWilliam/WebDev_Role-Based_CRUD/assets/121201497/ea6cd511-a678-4ebc-b6d5-c0fdbca0d748)
![image](https://github.com/GlennWilliam/WebDev_Role-Based_CRUD/assets/121201497/71e0efae-bf0a-43c5-bd5f-8810891ead8b)
![image](https://github.com/GlennWilliam/WebDev_Role-Based_CRUD/assets/121201497/bc354f04-ea1f-4dd5-a93e-fabfaf5b1a07)
![image](https://github.com/GlennWilliam/WebDev_Role-Based_CRUD/assets/121201497/db934d86-ec0c-4835-8cba-b3352886bc7d)


## Features
#### Admin Access

1. **User Management:**
   - View a list of all users.
   - Create a new user account.
   - Edit user details (e.g., username, email, role).
   - Delete user accounts.

2. **Product Management:**
   - View a list of all products created by any user.
   - Create new products.
   - Edit product details.
   - Delete products.
  
#### User Access

1. **Product Management:**
   - View a personalized list of products created by the user.
   - Create new products.
   - Edit and update their own products.
   - Delete their own products.
  
#### Security

1. **Authentication and Authorization:**
   - Authorization middleware to ensure proper access control.
   - Protection against unauthorized access to routes.

2. **Password Encryption:**
   - Secure storage of user passwords using hashing algorithms (argon2).
     
3. **Cookie-Based Authentication:**
   - User sessions are managed through secure, HTTP-only cookies.
   - Cookies store authentication tokens to maintain user sessions.
   - User sessions persist even when the server is restarted.
  
## Getting Started
1. https://github.com/GlennWilliam/WebDev_Role-Based_CRUD.git
   
### Backend
1. Navigate to the backend directory
2. Install dependencies: npm install
3. Set up the environment variables. You can use a `.env` file or set them directly.
4. Run your localhost database
5. Create a new database (In this code the database name is "auth_db")
6. Start the backend server: node index 

### Frontend
1. Navigate to the frontend directory:
2. Install dependencies: npm install
3. Start the React app: npm start

### Configuration
Configure the application by setting up environment variables. Create a `.env` file in the `backend` and `frontend` directories with the necessary configurations.
This web application operates on the following ports:
Backend: APP_PORT = 5000
React Frontend: APP_PORT = 3000

