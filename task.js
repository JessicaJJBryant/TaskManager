// TASK MANAGER PROJECT

//Using a Template Literal because it recognizes line breaks.
const manager = `TASK MANAGER

What would you like to do (Please enter one of the options below):
"TASKS" - Display All Tasks
"NEW" - Add A New Task
"REMOVE" - Remove A Task
"CLOSE" - Close The Task Manager
`;
//Displays the menu/manager for the user to select an option. Also, sets the user's response to the userInput variable.
let userInput = prompt(manager);

// Loops and continues to display the menu/manager until the user ends/closes the TASK MANAGER (AKA until the user enters CLOSE). This loops while (true)--while userInput is anything other than `CLOSE`
while (userInput !== `CLOSE`){
    userInput = prompt(manager);
}
// if the user DOES enter CLOSE, then it will move on out of the loop to this:
// Alerts the user that they have closed the program:
alert(`Thank you for using Task Manager!`);



// // To restart Task Manager
// let restartManager = true;
// // These variables (like manager) will not change:
// const options = ["TASKS", "NEW", "REMOVE", "CLOSE"];
// const closeAlert = `Thank you for using Task Manager!`;
// const newTaskPrompt = `Please enter the new task:`;
// // These variables will change:
// // let userInput; moved up above during code along
// let newTaskAlert;
// let taskAdded;
// let taskNumberOne = 1;
// let taskNumberTwo = 2;
// let taskRemoved;
// let tasks = [ 
//     `Charge MacBook`,
//     `Master JavaScript`
// ];
// let removeTaskPrompt = `\nPlease enter a number to remove:
// ${taskNumberOne}: ${tasks[0]}
// ${taskNumberTwo}: ${tasks[1]}\n`;

// // These variables also will not change:
// const taskAddedAlert = `"${taskAdded}" has been added!`
// const taskRemovedAlert = `"${taskRemoved} has been removed`

// // Beginning prompt--this prompts the user to begin using the Task Manager and begins the code for this little Task Manager:

// while(true) {
//     userInput = prompt(manager);
//     if (userInput.toUpperCase() == "TASKS") {
//         alert(`${tasks[0]}\n${tasks[1]}`);
//         restartManager = true;
//     } else if (userInput.toUpperCase() == "NEW") {
//         prompt(newTaskPrompt);
//         restartManager = true;
//         break;
//     } else if (userInput.toUpperCase() == "REMOVE") {
//         prompt(removeTaskPrompt);
//         restartManager = true;
//         break;
//     } else if (userInput.toUpperCase() == "CLOSE") {
//         alert(closeAlert);
//         break;
//         restartManager = false;
//     } else {
//         break;
//     }
// }











