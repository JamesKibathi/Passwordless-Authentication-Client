# Password-less Authenctication with OTP and JWT

I was given this project as part of a  Practical Assessment for a Software Development role

- This is the Frontend, built with React and CSS

# Description

- Implementing a Password-less Authentication using JWT with React for the front-end and Django for the back-end

- I used TWILIO for OTP messaging

### How it works

After a successful launch, the user is redirected to a home page

From the homepage, a user will be prompted to login:

-When a user enters their email or phone number the system detects if a user exists or not.

- If the user exists with that email it sends them both an OTP and a magic link with the URL having both a OTP and the user email

- For an existing user, after the user enters their email or phone number, it redirects them to enter the OTP

- For a new user, it prompts the user to confirm their new account creation details then send out the same, OTP for phone number registration and both OTP and magic link for an email account registration

- For users using their phone number it sends only the OTP.

# Link to the repository

- https://github.com/JamesKibathi/Passwordless-Authentication-Client
- https://github.com/JamesKibathi/Password-less-Authentication-Backend

# Setup / Installation Requirements

* Backend server : https://github.com/JamesKibathi/Password-less-Authentication-Backend

* Web Browser preferrably Google Chrome

### Installation steps

* You can run this app locally, fork and clone the repository to your local machine, then run `npm install` to add dependencies.

* Fork and clone the backend API (https://github.com/JamesKibathi/Password-less-Authentication-Backend) and follow the installation steps as outlined on the README of the repo.

* Run and start the server.

* Upon successfully starting the server, Run `npm start` and the app will launch on the browser.

## Support and contact details

njenga.consulting@gmail.com






