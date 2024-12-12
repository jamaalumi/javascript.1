// Prompt the user for three integers
const num1 = parseInt(prompt("Enter the first integer"), 10);
const num2 = parseInt(prompt("Enter the second integer"), 10);
const num3 = parseInt(prompt("Enter the third integer"), 10);

// Calculate sum, product, and average
const sum = num1 + num2 + num3;
const product = num1 * num2 * num3;
const average = sum / 3;

// Display the results in the HTML document
document.getElementById("output").innerHTML = `
    <strong>Results:</strong><br>
    Sum: ${sum}<br>
    Product: ${product}<br>
    Average: ${average.toFixed(2)}
`;

