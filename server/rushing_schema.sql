DROP DATABASE IF EXISTS the_score;
CREATE DATABASE the_score;

\c the_score;

CREATE TABLE nfl_rushing (
    id SERIAL PRIMARY KEY,
    player TEXT,
    team VARCHAR(3), 
    position VARCHAR(2), 
    rushing_attempts INT,
    rushing_attempts_per_game REAL, 
    total_rushing_yards INT,
    average_rushing_yards REAL,
    yards_per_game REAL,
    total_rushing_touchdowns INT,
    longest_rush INT,
    longest_rush_is_touchdown BOOLEAN,
    rushing_first_downs INT,
    rushing_first_downs_percentage REAL,
    rushes_more_than_20 INT,
    rushes_more_than_40 INT,
    rushing_fumbles INT
);