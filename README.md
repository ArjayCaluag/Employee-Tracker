# Employee Tracker



This project consists of utilizing the use of SQL and inquirer to create a work place Employee Tracker. This employee tracker must be able to add departments, role and employees, view them, and update employe roles if necessary. We were to create a database containing values and create specific search queries to provid the application's
functionality.
<br><br>

![templateengine](https://user-images.githubusercontent.com/52800632/106349204-f0c96b00-6280-11eb-900e-81d785713513.gif)


# **Installation**
Install required dependencies
```html
npm install express
npm install mysql
npm install inquirer
```

Track changes and push onto your own Github Repository.

```html
git add .
```
```bash
git commit -m "message"
```
```bash
git push origin main
```

# **Built With**

<ul>
    <li> Node.js - Open-source back-end javascript runetime environment that executes Javascript code out a web broswer</li>
    <li> inquirer.js - Promise based npm package to create CLI tools for query-based task</li>
    <li> Javascript - text based programming languages used both on client-side and server-side</li>
    <li> mySQL - Fully managed database service to deploy cloud-native applications
</ul>

# **Code Snippet**

```sql

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
    CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES employee (id) ON DELETE SET NULL
);
```

```js
async function addRole(){
    // This function proceeds once the viewAllDepartments query has been ran
    const departments = await db.viewAllDepartments();
    console.log(departments)
    // Populating our inquirer list choices with the departments in our sql database by calling .map on our array of sql objects
    const departmentChoices = departments.map(({ id, name }) => ({
        name: name,
        value: id
      }));
    
    const role = await inquirer.prompt([
        {
            type: 'input',
            name : 'title',
            message: "What role would you like to add?"
        },
        {
            type: 'input',
            name : 'salary',
            message: "What is the yearly salary?"
        },
        {
            type: 'list',
            name : 'department_id',
            message: "What department?",
            choices: departmentChoices
        },
    ]);
    await db.addRole(role)
    console.log('New role has been added')
    mainMenu()
}

```
# **Demo Video Link**
https://drive.google.com/file/d/1o6iNyXyQJ-Mx8qAzskzo2xW3OkKEDfuJ/view

# **Author**

Ron-Arjay Caluag

[Linkedin](https://www.linkedin.com/in/ron-arjay-caluag-00b29b182/)
<br>
[Github](https://github.com/ArjayCaluag)

# **License**

The MIT License (MIT)

Copyright (c) 2011-2020 Twitter, Inc.

Copyright (c) 2011-2020 The Bootstrap Authors

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
