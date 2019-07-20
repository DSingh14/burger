*/

-- Create the database day_planner_db and specified it for use.
CREATE DATABASE burgers_db;

USE burgers_db;

-- Create the table plans.


CREATE TABLE burger
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name STRING,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

select burgers_db;

