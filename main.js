let welcomeText = document.getElementById("welcomeText");
let addButton = document.getElementById("addButton")
 addButton.addEventListener("click", addTask);
const wordsToType = "Welcome Nathan To Your Task Management Application";

// Function to type out words
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

// Call the function with the words to type and container ID
typeWords(wordsToType, "welcomeText");

function addTask() {
    let userInput = document.getElementById("userInput").value;
    let taskElement = document.createElement("div");
    taskElement.textContent = userInput;
    taskElement.classList.add("task");
    let taskContainer = document.getElementById("taskContainer");
    taskContainer.appendChild(taskElement);

}