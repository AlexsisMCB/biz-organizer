INSERT INTO department (name)
VALUES
 ('HR'),
 ('Management'),
 ('Finance'),
 ('Sales');

INSERT INTO role (title, salary, department_id)
VALUES
 ('Staffing coordinator', 40000, 1),
 ('Benefits Administrator', 45000, 1),
 ('Safety Specialist', 70000, 1),
 ('HR Manager', 75000, 2),
 ('Finance Manager', 75000, 2),
 ('Accountant', 70000, 3),
 ('Sales Manager', 60000, 2),
 ('Lead Salesperson', 35000, 4),
 ('Sales Associate', 30000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
 ('Jasmine', 'Bell', 1, 4),
 ('Jerome', 'Jackson', 2, 4),
 ('Christopher', 'Robin', 3, 4),
 ('Ashley', 'Nichols', 4, null),
 ('Richard', 'Robin', 5, null),
 ('Carmen', 'Conley', 6, 5),
 ('Kareem', 'Collins', 7, null),
 ('Alexsis', 'Brown', 8, 7),
 ('Candace', 'Love', 9, 7),
 ('Jamall', 'Austin', 9, 7);