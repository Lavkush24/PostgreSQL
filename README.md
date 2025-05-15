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


## SOME ADVANCED THINGS
#### JOINS
- it is use to define a better query for search
--------------------- !Type of joins ----------------
- FULL JOIN ( should be present in the either tables )
- INNER JOIN ( shoud be present in the both the tables )
- LEFT JOIN ( should have all the entries in the left tables )
- RIGHT JOIN ( opposite of left table )
- by default JOIN is the inner join