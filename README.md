## POSTGRESQL 
- it is database base which is SQL  based. the one difference from the mongo is i has a strict schema. 

### creation of the tables 
- CREATE TABLE name_table (
    // define the content
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

### insertion in the table 
- INSERT INTO table_name (id, email, password)
- VALUES ("", "", "");

### gets from table 
- SELECT * FROM user WHERE (condition eg. user_Id = desired_userId)

### update the data
- UPDATE table_name SET value WHERE (condition)
- eg . UPDATE todos SET done = $1 WHERE user_id = $2;
const update_values = [true,3];
await client.query(query,update_values)


### delete query
- DELETE FROM table WHERE (condition)


### drop query 
- it delete table and schema all the things
- DROP TABLE IF EXISTS table;