const inquirer = require("inquirer");

class Employee {
    constructor(name, id, email, employeeQuestions) {
        this.name = name;
        this.id = id;
        this.email = email

        employeeQuestions = employeeQuestions;
    }
    getName() {
        return this.name;
    }

    getId() {
        return this.name;
    }
    getEmail() {
        return this.getEmail;
    }
    getRole() { }
}

class Manager extends Employee {
    constructor() {
        const questions = [{
            type: "input",
            message: "Enter a GitHub UserName.",
            name: "name",
        }]
        super(name, id, email, questions);
        this.gitHubName = gitHubName;
        this.
    }
}

class Engineer extends Employee {
    constructor(gitHubName, name, id, email) {
        const questions = [{
            type: "input",
            message: "Enter a GitHub UserName.",
            name: "GitHubName",
        }]
        super(name, id, email, questions);
        this.gitHubName = gitHubName;
    }
}

class Intern extends Employee {
    constructor(school, name, id, email) {
        const questions = [{
            type: "input",
            message: "Enter a GitHub UserName.",
            name: "name",
        }]
        super(name, id, email, questions);
        this.school = school;
    }
    setSchool(school) {
        this.school = school;
    }
}

if role is Intern
emp = new Intern
if role is Manager
emp = new Manager

inquirer.prompt(Employee.employeeQuestions)
emp.setSchool(Response.school)