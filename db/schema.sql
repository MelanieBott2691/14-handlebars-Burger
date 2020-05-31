   
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  burger_name varchar(150) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  date TIMESTAMP
);