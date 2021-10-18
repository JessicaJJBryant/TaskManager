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
const close = `Thank you for using Task Manager!`;
const newTaskPrompt = `Please enter the new task:`;
// These variables will change:
let userInput;
let newTaskAlert;
let taskAdded;
let removeTaskPrompt;
let taskRemoved;
let tasks = [`Charge MacBook`, `Master JavaScript`];
let taskNumber = 1;
let removeTask = `\nPlease enter a number to remove:
$(taskNumber): $(taskOne)
$(taskNumber): $(taskTwo\n`;
console.log(removeTask);
// These variables also will not change:
const taskAddedAlert = `"$(taskAdded)" has been added!`
const taskRemovedAlert = `"$(taskRemoved) has been removed`
// To make the task number displayed to be one less than the previous (and nothing if there are no tasks/task numbers)
// taskNumber--

// Beginning prompt--this prompts the user to begin using the Task Manager
prompt(manager);

// This begins the code for this little Task Manager:
userInput = prompt(manager);
if (userInput.toUpperCase == "TASKS") {
    alert(tasks);
} else if (userInput.toUpperCase == "NEW") {
    prompt(newTaskPrompt);
} else if (userInput.toUpperCase == "REMOVE") {
    prompt(removeTask);
} else if (userInput.toUpperCase == "CLOSE") {
    alert(close);
} else {
    prompt(manager);
}











