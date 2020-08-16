const inquirer = require('inquirer');

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
    ]).then(data => {
        if (data.choices === 'View all departments') {
            console.log('All departments');
        } else if (data.choices === 'View all roles') {
            console.log('All roles');
        } else if (data.choices === 'View all employees') {
            console.log('All employees');
        } else if (data.choices === 'Add a department') {
            console.log('Add department');
        } else if (data.choices === 'Add a role') {
            console.log('Add role');
        } else if (data.choices === 'Add an employee') {
            console.log('Add employee');
        } else if (data.choices === 'Update an employee role') {
            console.log('Update role');
        } else if (data.choices === 'Quit') {
            console.log('Quit');
        }
    });
};

choices();