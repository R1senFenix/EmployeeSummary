const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const teamArray = [];

runApp();
function runApp() {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter your Employee's name.",
            name: "name",
        },
        {
            type: "input",
            message: "Enter the Employee's ID Number.",
            name: "id",
        },
        {
            type: "input",
            message: "Enter your employee's email.",
            name: "email",
        },
        {
            type: "list",
            message: "Select the Employee's Proper Title",
            name: "role",
            choices: [
                "Manager",
                "Engineer",
                "Intern",
            ]
        },
    ]).then(function (data) {
        console.log(data);
        const name = data.name;
        const nameNoSpace = name.split(".").join(" ");
        const id = data.id;
        const email = data.email;
        const role = data.role;
        console.log(data.role);


        if (role === "Intern") {
            inquirer.prompt([
                {
                    type: "input",
                    message: "Enter the name of the School that the Intern Attends.",
                    name: "school",
                }]).then(function (data) {
                    school = data.school;
                    emp = new Intern(name, id, email, school);
                    console.log(emp);

                    //push to array
                    teamArray.push(emp);
                    addAnotherPerson();
                });
        }
        if (role === "Manager") {
            inquirer.prompt([
                {
                    type: "input",
                    message: "Enter the Manager's Office Number.",
                    name: "officeNum",
                }]).then(function (data) {
                    officeNum = data.officeNum;
                    emp = new Manager(name, id, email, officeNum);
                    console.log(emp);

                    //push to array
                    teamArray.push(emp);
                    addAnotherPerson();
                });
        }
        if (role === "Engineer") {
            inquirer.prompt([
                {
                    type: "input",
                    message: "Enter a the Engineer's GitHub UserName.",
                    name: "gitHubName",
                }]).then(function (data) {
                    gitHubName = data.gitHubName;
                    emp = new Engineer(name, id, email, gitHubName);
                    console.log(emp);

                    //push to array
                    teamArray.push(emp);
                    addAnotherPerson()
                });
        }
    });
}


function addAnotherPerson() {
    inquirer.prompt([{
        type: "confirm",
        message: "Would you like to add another employee to your team?",
        name: "addAnother",
    }]).then(function (res) {
        console.log(res);
        if (res.addAnother === true) {
            runApp();
        } else {
            const outputPath = render(teamArray);
            fs.writeFile('./output/team.html', outputPath, function (err) {

                if (err) {
                    return console.log(err);
                }

                console.log("Success!");
            });
        }
    });
}












// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.


// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```
