CREATE DATABASE burgers_db;

DROP DATABASE IF EXISTS burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INT (10) NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR (50),
    devoured BOOLEAN
);