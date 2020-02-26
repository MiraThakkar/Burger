	### Schema

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers_d
(
    id int NOT NULL AUTO_INCREMENT,
    burger_name varchar(30) NOT NULL,
    devoured BOOLEAN DEFAULT false,

    PRIMARY KEY (ID)
);

UPDATE burgers SET devoured = true WHERE burger_name = "Vada Pav";

select * from burgers;
