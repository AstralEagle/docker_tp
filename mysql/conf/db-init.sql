CREATE DATABASE IF NOT EXISTS testdb;

USE testdb;

CREATE TABLE IF NOT EXISTS test_table (
                                          id INT AUTO_INCREMENT PRIMARY KEY,
                                          name VARCHAR(255) NOT NULL
    );

INSERT INTO test_table (name) VALUES
                                  ('Data 1'),
                                  ('Data 2'),
                                  ('Data 3');