const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'biz'
});

connection.connect(err => {
    if (err) {
      return console.error('error: ' + err.message);
    }
  
    console.log('MySQL server connected!');
});

viewDepartments = () => {
    const sql = 'SELECT * FROM department';
    connection.promise().query(sql)
    .then( ([rows, field]) => {
        console.table(rows);
        choices();
    });
};

viewRoles = () => {
    const sql = 
        `SELECT role.id, title, name AS department, salary 
        FROM department 
        LEFT JOIN role ON department.id = role.department_id`;
    connection.promise().query(sql)
    .then( ([rows, field]) => {
        console.table(rows);
        choices();
    });
};

viewEmployees = () => {
    const sql = `SELECT employee.id, first_name, last_name, title, name AS department, salary 
    FROM employee 
    LEFT JOIN role ON employee.role_id = role.id 
    LEFT JOIN department ON role.department_id = department.id`;
    connection.promise().query(sql)
    .then( ([rows, field]) => {
        console.table(rows);
        choices();
    });
};

const choices = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'choices',
            message: 'What would you like to do?',
            choices: 
            ['View all departments',
            'View all roles',
            'View all employees',
            'Add a department',
            'Add a role',
            'Add an employee',
            'Update an employee role',
            'Quit']
        }
    ])
    .then(data => {
        if (data.choices === 'View all departments') {
            viewDepartments();
        } else if (data.choices === 'View all roles') {
            viewRoles();
        } else if (data.choices === 'View all employees') {
            viewEmployees();
        } else if (data.choices === 'Add a department') {
            console.log('Add department');
            addDepartment();
        } else if (data.choices === 'Add a role') {
            console.log('Add role');
            addRole();
        } else if (data.choices === 'Add an employee') {
            console.log('Add employee');
            addEmployee();
        } else if (data.choices === 'Update an employee role') {
            console.log('Update role');
        } else {
            console.log('Quit');
            connection.end();
        }
    });
};

const addDepartment = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'departmentName',
            message: "What's the name of the department?",
            validate: departmentNameInput => {
                if (departmentNameInput) {
                    return true;
                } else {
                    console.log('Please give a name!');
                    return false;
                }
            }
        }
    ]).then(data => {
        const sql = `INSERT INTO department (name)
        VALUES (?)`;
        connection.query(sql)
        .then( ([rows, field]) => {
        console.table(rows);
        });
        console.log(data);
        choices();
    });
}

const addRole = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'roleTitle',
            message: "What's the title of the new role?",
            validate: roleTitleInput => {
                if (roleTitleInput) {
                    return true;
                } else {
                    console.log('Please give a title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'roleSalary',
            message: "What's the new role salary?",
            validate: roleSalaryInput => {
                if (roleSalaryInput) {
                    return true;
                } else {
                    console.log('Salary please!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'roleDepartment',
            message: 'What department is the the new role in?',
            validate: roleDepartmentInput => {
                if (roleDepartmentInput) {
                    return true;
                } else {
                    console.log('Department please!');
                    return false;
                }
            }
        }
    ]).then(data => {
        console.log(data);
        choices();
    });
}

const addEmployee = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'firstName',
            message: "What's the first name of the new employee?",
            validate: firstNameInput => {
                if (firstNameInput) {
                    return true;
                } else {
                    console.log('Please give a first name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'lastName',
            message: "What's the last name?",
            validate: lastNameInput => {
                if (lastNameInput) {
                    return true;
                } else {
                    console.log('Please give a last name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeRole',
            message: "What's the role of the employee?",
            validate: employeeRoleInput => {
                if (employeeRoleInput) {
                    return true;
                } else {
                    console.log('Role please!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeManager',
            message: "Who is the manager for this employee?",
            validate: employeeManagerInput => {
                if (employeeManagerInput) {
                    return true;
                } else {
                    console.log('Please assign a manager!');
                    return false;
                }
            }
        }
    ]).then(data => {
        console.log(data);
        choices();
    });
};

choices();

