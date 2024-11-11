# todoApp
backend using express nodejs

start a express project
-----------------------------------------------------------

1.npm init -y //start nodejs app

2.npm i express //install express

3.node index.js //run index.js file in node or express

4.npm i nodemon //install nodemon package for continuously running the server

5.to run project using nodemon
nodemon index.js or
write script in package.json

  "scripts": {
    "start": "node index.js",
    "dev" :"nodemon index.js"
  }

and command npm run dev

create folder structure
------------------------------------------------------

1.create 4 folders 1.config,2.controllers,3.models,4.routes and .env file

2.in env file give port and link to db
3.npm i mongoose //to make db connection
4.in database.js write function to connect to database using url given in env file
run command npm i dotenv //install dotenv 

env file
-------------------
PORT=3000;
DATABASE_URL=mongodb://127.0.0.1:27017/mydbName
