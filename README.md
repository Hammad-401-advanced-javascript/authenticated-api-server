# authenticated-api-server

## Author : Hammad Ali

## Resourcs 
* Heroku : https://authenticated.herokuapp.com/

## Models

### server.js
### 404.js
### 500.js

## Setup
* PORT - Port Number
* MONGODB_URI - mongoDB url
* SECRET - token secret
* CLIENT_ID - for github
* CLIENT_SECRET - for github
* EXPIRE - time for token to expire
* AUTH - t start/stop the autherization & athentication ('ON' or 'OFF)

* PORT = 4000

**How to initialize/run your application :**
* npm start
* sign up : http://localhost:3000/signup
* sign in : http://localhost:3000/signin

* post + get : http://localhost:3000/api/v1/categories
* post + get : http://localhost:3000/api/v1/products
* delete + put :http://localhost:3000/api/v1/categories/id
* delete + put :http://localhost:3000/api/v1/products/id


## UML
![image](./assets/authenticated-api-server.jpg)

