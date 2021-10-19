// TASK MANAGER PROJECT

//Using a Template Literal because it recognizes line breaks.
const manager = `TASK MANAGER

What would you like to do (Please enter one of the options below):
"TASKS" - Display All Tasks
"NEW" - Add A New Task
"REMOVE" - Remove A Task
"CLOSE" - Close The Task Manager
`;

// We could set this as a let variable, but since we will not be redeclaring (only pushing or popping array items), we can make this a const. This is for storing the tasks.
const tasks = [ 
    `Charge MacBook`,
    `Master JavaScript`
];
// For displaying tasks to the user:
let showTasks = ``;
// For storing the value of a new task:
let newTasks;

// For storing the number of the task to remove:
let num;
// For storing the value of the removed task:
let removed;

//Displays the menu/manager for the user to select an option. Also, sets the user's response to the userInput variable. The .toUpperCase() method will also change their responses to all UPPERCASE. We could put the toUpperCase at each userInput, but this is easier (less places).
let userInput = prompt(manager).toUpperCase();

// Loops and continues to display the menu/manager until the user ends/closes the TASK MANAGER (AKA until the user enters CLOSE (UPPERCASE or lowercase)). This loops while (true)--while userInput is anything other than `CLOSE`
while (userInput !== `CLOSE`){
    // Checks if user entered TASKS (UPPERCASE or lowercase)
    if (userInput === `TASKS`) {
        // alert(`Charge MacBook\nMaster JavaScript`); Using the array and a for of loop so it can be changed and each will display as new tasks are added and removed. A for of loop will iterate through each item of the array and concatenates each to the showTasks string variable. Matt said we could have also used the join method instead of the for of loop that follows:
        for (task of tasks){
            // alert(task); this would alert us with each one after another
            // showTasks = showTasks + `${task}\n` this would alert us with the first task and then the second task. But we have a shorthand:
            showTasks += `${task}\n`;
        }
        // displays the current tasks to the user:
        alert(showTasks);
        // Sets the value of the showTasks string variable BACK to an empty string so it's ready for the next time we go into this loop:
        showTasks = "";
    }
    // Checks if user entered NEW (UPPERCASE or lowercase):
    if (userInput === `NEW`){
        // Prompts the user to enter a new task and stores their response:
        newTask = prompt(`Please enter the new task:`);
        // This while loop will continue to loop and prompt until they enter at least something. (NOTE: if the user does not type anything and just clicks OK, then the value returned is an empty string)
        while(newTask === ``){
            newTask = prompt(`Please enter the new task:`);
        }
    // Alerts the user that their new task has been added:
    alert(`"${newTask}" has been added!`);
     // Adds the user's entry as a new item at the end of the tasks array (we won't see this happening, but it runs in the background and adds whatever is added in the newTask prompt to the tasks array):
    tasks.push(newTask);
    }

    // Checks if user entered REMOVE (UPPERCASE or lowercase):
    if (userInput === `REMOVE`) {
        // Using a for loop to concatenate each task/item in the current tasks array to the showTasks string variable. Also, sets/displays a number for each task. i=0 because the first index is 0 and what's inside will be run once to store whatever is at the first index; then i++ incremented to add on the next index and if i < tasks.length it will display both and loop again to run again the i++ and if i < tasks.length it will keep looping:
        for(i = 0; i < tasks.length; i++) {
            // This will display the i (which starts at 0 because it's the first index) plus 1 to make it a numbered list starting at 1. Then :. Then each task based on it's index starting at 0. \n puts a line break between each item
            showTasks += `${i + 1}: ${tasks[i]}\n`;
        }
        // Prompts the user to enter a number of the task to be removed and stores their response to the num variable. Remember though that the numbers that they put in are not the actual numbers of the array because those start at the index of 0. Therefore we need to decrement to subtract 1 from the number they enter (we could do num-- on the line under num = prompt, but it's easier to do the -1 on the same line). Just like with ParseInt, JavaScript will attempt to convert a string into a number when you try to subtract from it. So ParseInt is not necessary here. This will also take care of anything entered that isn't a number, so it will end up with a NaN (Not a Number):
        num = prompt(`Please enter a number to remove:\n${showTasks}`) - 1;

        // This while loop is error handling to confirm that the user has entered a valid response. The first is for decimals, the second is for negatives, the third is for anything greater than the number of tasks there are, and the last is if num is not a number. If any of them are true, the whole thing is true and the alert error message will run that they've not entered a valid entry. Then when they click ok, the remove prompt will run again.  
        while(Math.floor(num) !== num || num < 0 || num >= tasks.length || !num) {
            alert(`Not a valid entry`);
            num = prompt(`Please enter a number to remove:\n${showTasks}`) - 1;
        }

        // we use splice here to remove whatever the user wanted removed (num) and the 1 stands for the only one they can remove each time (splice allows for more than one, but this Task Manager does not). We set this to the removed variable to store it (in an array) so we can put it in the following alert:
        removed = tasks.splice(num, 1);
        // This alert must have removed[0] because the splice method returns the value to an array (removed array in this case). So we need to do the index 0 to have the removed item to be displayed instead of the array with brackets.
        alert(`"${removed[0]}" has been removed`)
        // Sets the value of the showTasks string variable back to an empty string:
        showTasks = ``;
    }
    // Displays the menu again (and also changes it to UPPERCASE):
    userInput = prompt(manager).toUpperCase();
}
// if the user DOES enter CLOSE (UPPERCASE or lowercase), then it will move on out of the loop to this:
// Alerts the user that they have closed the program:
alert(`Thank you for using Task Manager!`);







// I was on the right track in some areas down here; not so much in other areas:

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
