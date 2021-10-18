// TASK MANAGER PROJECT

const manager = `\nWhat would you like to do (Please enter one of the options below):
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
let removeTaskPrompt;
let taskRemoved;
let tasks = [ 
    `Charge MacBook`,
    `Master JavaScript`
];
let removeTask = `\nPlease enter a number to remove:
${taskNumberOne}: ${tasks[0]}
${taskNumberTwo}: ${tasks[1]}\n`
console.log(removeTask);
// These variables also will not change:
const taskAddedAlert = `"${taskAdded}" has been added!`
const taskRemovedAlert = `"${taskRemoved} has been removed`

// Beginning prompt--this prompts the user to begin using the Task Manager and begins the code for this little Task Manager:
userInput = prompt(manager);
if (userInput == "TASKS") {
    alert(`${tasks[0]}\n${tasks[1]}`);
} else if (userInput == "NEW") {
    prompt(newTaskPrompt);
} else if (userInput == "REMOVE") {
    prompt(removeTask);
} else if (userInput == "CLOSE") {
    alert(closeAlert);
} else {
    prompt(manager);
}











