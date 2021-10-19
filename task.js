// TASK MANAGER PROJECT

const manager = `TASK MANAGER
\nWhat would you like to do (Please enter one of the options below):
"TASKS" - Display All Tasks
"NEW" - Add A New Task
"REMOVE" - Remove A Task
"CLOSE" - Close The Task Manager\n`;
// To restart Task Manager
let restartManager = true;
// These variables (like manager) will not change:
const options = ["TASKS", "NEW", "REMOVE", "CLOSE"];
const closeAlert = `Thank you for using Task Manager!`;
const newTaskPrompt = `Please enter the new task:`;
// These variables will change:
let userInput;
let newTaskAlert;
let taskAdded;
let taskNumberOne = 1;
let taskNumberTwo = 2;
let taskRemoved;
let tasks = [ 
    `Charge MacBook`,
    `Master JavaScript`
];
let removeTaskPrompt = `\nPlease enter a number to remove:
${taskNumberOne}: ${tasks[0]}
${taskNumberTwo}: ${tasks[1]}\n`;

// These variables also will not change:
const taskAddedAlert = `"${taskAdded}" has been added!`
const taskRemovedAlert = `"${taskRemoved} has been removed`

// Beginning prompt--this prompts the user to begin using the Task Manager and begins the code for this little Task Manager:

while(true) {
    userInput = prompt(manager);
    if (userInput.toUpperCase() == "TASKS") {
        alert(`${tasks[0]}\n${tasks[1]}`);
        restartManager = true;
    } else if (userInput.toUpperCase() == "NEW") {
        prompt(newTaskPrompt);
        restartManager = true;
        break;
    } else if (userInput.toUpperCase() == "REMOVE") {
        prompt(removeTaskPrompt);
        restartManager = true;
        break;
    } else if (userInput.toUpperCase() == "CLOSE") {
        alert(closeAlert);
        break;
        restartManager = false;
    } else {
        break;
    }
}











