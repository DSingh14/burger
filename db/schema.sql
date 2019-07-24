-- Create the database day_planner_db and specified it for use.
CREATE DATABASE burgers_db;

USE burgers_db;

-- Create the table plans.


CREATE TABLE burger
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(80),
	devoured BOOLEAN,
	PRIMARY KEY (id)
);



