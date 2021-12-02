create database IF NOT EXISTS test_db;

CREATE TABLE IF NOT EXISTS user
(
    id   VARCHAR(100) PRIMARY KEY,
    name VARCHAR(100),
    age  INT
);

CREATE TABLE IF NOT EXISTS diet_history
(
    id       bigint(20) NOT NULL,
    date     date,
    username varchar(255),
    food_id  bigint(20),
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS exercise
(
    id   bigint(20) NOT NULL,
    name varchar(255),
    part varchar(255),
    PRIMARY KEY (id)
);

insert into exercise(id, name, part)
values (1, 'push-up', 'chest');

insert into exercise(id, name, part)
values (1, 'push-up', 'chest');