// Selecting elements
const welcomeText = document.getElementById("welcomeText");
const addButton = document.getElementById("addButton");
const date = document.getElementById("date");
const taskNumber = document.getElementById("taskNumber");
const numberOfCompleteTask = document.getElementById("numberOfCompleteTask");

// Display current date and time
const now = new Date();
const currentDateTime = now.toLocaleString();
date.innerText = currentDateTime;

// Counting tasks and completed tasks
let numberOfTask = 0;
let completeTask = 0;
const tasks = document.querySelectorAll(".task");

tasks.forEach(task => {
    numberOfTask++;
    if (task.querySelector(".finshButton")) {
        completeTask++;
    }
});

// Update task statistics
taskNumber.innerHTML = numberOfTask;
numberOfCompleteTask.innerHTML = completeTask;

// Adding an event listener to the addButton
addButton.addEventListener("click", addTask);

// Text to be typed out in the welcomeText element
const wordsToType = "Welcome Nathan To Your Task Management Application";

// Call the function to type out the welcome message
typeWords(wordsToType, "welcomeText");

// Function to type out words (typewriter effect)
function typeWords(text, containerId) {
    const container = document.getElementById(containerId);
    let index = 0;

    function typeNextLetter() {
        if (text[index] === " ") {
            container.innerHTML += "&nbsp;"; // Add non-breaking space for spaces
        } else {
            container.textContent += text[index];
        }
        index++;

        if (index < text.length) {
            setTimeout(typeNextLetter, 100); // Adjust typing speed here
        }
    }

    typeNextLetter();
}

// Function to add a task
function addTask() {
    const userInput = document.getElementById("userInput").value;
    const taskElement = document.createElement("li");
    taskElement.textContent = userInput;

    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    completeButton.classList.add("finshButton");
    completeButton.addEventListener("click", finshTask);

    taskElement.appendChild(completeButton);
    taskElement.classList.add("task");
    
    const taskContainer = document.getElementById("taskContainer");
    taskContainer.appendChild(taskElement);

    // Update task statistics after adding a new task
    numberOfTask++;
    taskNumber.innerHTML = numberOfTask;
}

// Function to finish a task
function finshTask(event) {
    const taskItem = event.target.closest('li');
    taskItem.remove();

    // Update completed task count after finishing a task
    completeTask++;
    numberOfCompleteTask.innerHTML = completeTask;
}