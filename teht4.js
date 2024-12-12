// Array of Hogwarts houses
const houses = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"];

// Prompt for the student's name
const studentName = prompt("Enter your name, dear student:");

// Randomly assign a house
const assignedHouse = houses[Math.floor(Math.random() * houses.length)];

// Display the result in the HTML document
document.getElementById("result").innerText = `${studentName}, you are ${assignedHouse}.`;
