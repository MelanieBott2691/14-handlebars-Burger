# 14-handlebars-Burger
# Node Express Handlebars

### Overview

#### Packages Used:
* npm packages
* MySQL
* Node
* Express
* Handlebars
* ORM 

### Set Up
Followed the MVC design pattern; using Node and MySQL to query and route data in the app, and Handlebars to generate the HTML.

Using an ORM the app uses 3 basic CRUD functions;
1. READ the entries from the MySQL database and display them to the DOM using Handlebars.
2. UPDATE the selected burger by clicking "Order" and "Devour", changing the status in the MySQL database.
3. CREATE a new burger using route in Express

### Deployment

* **[This app is deployed in Heroku]** (https://handlebarsburger.herokuapp.com/)

### How the app works!

* Eat Da Burger! is a restaurant app that lets users select from already provided options or input the names of burgers they'd like to eat.

* Whenever a user submits a burger's name, the app will display the burger on the left side of the page -- waiting to be devoured.

* Each burger in the waiting area also has a `$ Order!` button. When the user clicks it, the burger will move to the right side of the page where the burger is ready for pickup and to be devoured, `Devour!`

* The app will store every burger in a database, whether devoured or not.

#### App Setup

1. GitHub repo called `burger` and clone it to your computer.

2. Make a package.json file by running `npm init` from the command line.

3. Install the Express npm package: `npm install express`.

4. Create a server.js file.

5. Install the Handlebars npm package: `npm install express-handlebars`.

6. Install MySQL npm package: `npm install mysql`.

7. Require the following npm packages inside of the server.js file:
   * express

#### DB Setup

1. Inside your `burger` directory, create a folder named `db`.

2. In the `db` folder, create a file named `schema.sql`. Write SQL queries this file that do the following:

   * Create the `burgers_db`.
   * Switch to or use the `burgers_db`.
   * Create a `burgers` table with these fields:
     * **id**: an auto incrementing int that serves as the primary key.
     * **burger_name**: a string.
     * **devoured**: a boolean.

- - -
## Screenshots
* Desktop View
* ![Full Size](../assets/img/desktopview.png)

* Mobile View
* ![Mobile Size](../assets/img/mobile.png)

* Terminal View
* ![Terminal View](../assets/img/burgerterminal.png)

* MySQL
* ![Database](../assets/img/mysql.png)
- - -
