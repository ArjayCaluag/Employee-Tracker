DROP DATABASE IF EXISTS employee_DB;
CREATE DATABASE employee_DB;

USE employee_DB;

CREATE TABLE department (
    id INT PRIMARY KEY AUTO_INCREMENT ,
    -- UNIQUE added so that no duplicate names can be added
    name VARCHAR(30) UNIQUE,
    
);

CREATE TABLE role (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    -- Create foreign key that references department id
    -- ON delete added because if a deparment get deleted, the role no longer exist.
    CONSTRAINT fk_department FOREIGN KEY (deparment_id) REFERENCES department (id) ON DELETE CASCADE
)

CREATE TABLE employee (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    -- Foreign key that references role id
    CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES role (id) ON DELETE CASCADE,
    
    -- Foreign key that references employee id
    -- Set to NULL because an employee can exist without a manager.
    manager_id INT,
    CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES employee (id) ON DELETE SET NULL,

)
