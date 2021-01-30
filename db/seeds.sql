use employee_DB; 


INSERT INTO department 
    (name)
VALUES
    ('Quality Assurance'),
    ('Production'),
    ('Developer');


INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Manager', 750000, 1),
    ('Tester', 500000, 1),
    ('Tester', 50000, 1),
    ('Manager', 1000000, 2),
    ('Designer', 1000000, 2),
    ('Designer', 60000, 2),
    ('Manager', 250000, 3),
    ('Engineer', 250000, 3),
    ('Engineer', 150000, 3);

INSERT INTO employee 
    (first_name, last_name, role_id, manager_id)
VALUES  
    ('Arjay', 'Caluag', 1, NULL),
    ('Farley', 'Cat', 2, 1),
    ('Chester', 'Mendoza', 3, 1),
    ('Julio', 'Morales', 4, NULL),
    ('Joanna', 'Lannister', 5, 4),
    ('Jamie', 'Lannister', 6, 4),
    ('Ed', 'Stark', 7, NULL),
    ('Sansa', 'Stark', 8, 7),
    ('Jon', 'Snow', 9, 7);
