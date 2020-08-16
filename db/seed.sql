INSERT INTO department (id, name)
VALUES
 (1, 'HR'),
 (2, 'Management'),
 (3, 'Finance'),
 (4, 'Sales');

INSERT INTO role (id, title, salary, department_id)
VALUES
 (1, 'Staffing coordinator', 40000, 1),
 (2, 'Benefits Administrator', 45000, 1),
 (3, 'Safety Specialist', 70000, 1),
 (4, 'HR Manager', 75000, 2),
 (5, 'Finance Manager', 75000, 2),
 (6, 'Accountant', 70000, 3),
 (7, 'Sales Manager', 60000, 2),
 (8, 'Lead Salesperson', 35000, 4),
 (9, 'Sales Associate', 30000, 4);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES
 (1, 'Jasmine', 'Bell', 1, 4),
 (2, 'Jerome', 'Jackson', 2, 4),
 (3, 'Christopher', 'Robin', 3, 4),
 (4, 'Ashley', 'Nichols', 4, null),
 (5, 'Richard', 'Robin', 5, null),
 (6, 'Carmen', 'Conley', 6, 5),
 (7, 'Kareem', 'Collins', 7, null),
 (8, 'Alexsis', 'Brown', 8, 7),
 (9, 'Candace', 'Love', 9, 7),
 (10, 'Jamall', 'Austin', 9, 7);