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
</script>
