# Steps involved

## Prerequisites

* [NodeJS](https://nodejs.org/en) must be installed in the system
* [VSCode](https://code.visualstudio.com/) must be installed 
* Install [ThunderClient Extension](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client) in VSCode for API Testing

## Clone the repository 

> Move to the particular directory

```
cd <directory>
```
> Install all the packages

```
npm install
```
> Start the project

```
npm start
```
## API testing

> There are three routes to check for using Thunderclient
>* auth/register - post method to register a user with username and password
>* auth/login - post method to login a user with username and password and generate jwt tokens
>* /protected - get method to access a protected route with the use of token

### 1.Testing /auth/register route

1. Click on the thunder client extension icon in the VScode,Go to the "Env" tab ,add a new environment using the hamburger menu as shown in the figure,set the environment variable name "url" with value as http://localhost:3000 and save it

1. Click on New Request button ,change the method to "POST",Enter the url as "{{url}}/auth/register",Then Click on Body tab,paste the following and send the request

```
{"username":"Sree",
"password":"1234"}

```
You will get a response like this :

```
{
  "message": "User registered successfully"
}

```
Repeat the 2 step ans you will get a response like this :

```
{
  "error": "Registration failed"
}

```
**with this the auth/register API is tested succesfully**

### 2.Testing /auth/login route

1. Click on New Request button ,change the method to "POST",Enter the url as "{{url}}/auth/login",Then Click on Body tab,paste the following and send the request

```
{"username":"Sree",
"password":"1234"}

```
You will get a response **similar** to this :

```
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWIxNGQwNzEwMjA0NmM0MTUyN2Y1NmMiLCJpYXQiOjE3MDYxMTkwODksImV4cCI6MTcwNjEyMjY4OX0.Gy50Hxm-6G6ykiM_22NE4BJj5TNaI6U9ivEw9BEgMUc"
}

```
**This is the jwt token generated after a userLogin to the website**
**Copy this token and keep it aside**
**with this the auth/login API is tested succesfully**

### 3.Testing /protected route

1. Click on New Request button ,change the method to "GET",Enter the url as "{{url}}/protected",Then Click on Headers tab,add a new header "Authorization" with value as the **token copied previously**

```
Authorization  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWIxNGQwNzEwMjA0NmM0MTUyN2Y1NmMiLCJpYXQiOjE3MDYxMTkwODksImV4cCI6MTcwNjEyMjY4OX0.Gy50Hxm-6G6ykiM_22NE4BJj5TNaI6U9ivEw9BEgMUc

```

You will get a response like  this :

```
{
  "message": "Protected route accessed"
}

```

2.Now send the same request without "Authorization" header,You will get a response like  this :

```
{
  "error": "Access denied"
}

```

**with this the /protected API is tested succesfully that the protected route is accesible only with a valid JWT**
