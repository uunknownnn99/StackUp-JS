document.addEventListener("DOMContentLoaded", function () {
    const addBtn = document.getElementById("add");
    const subtractBtn = document.getElementById("subtract");
    const divideBtn = document.getElementById("divide");
    const multiplyBtn = document.getElementById("multiply");
    const resultDiv = document.getElementById("result");

    addBtn.addEventListener("click", function () {
        performOperation("add");
    });

    subtractBtn.addEventListener("click", function () {
        performOperation("subtract");
    });

    divideBtn.addEventListener("click", function () {
        performOperation("divide");
    });

    multiplyBtn.addEventListener("click", function () {
        performOperation("multiply");
    });

    function performOperation(operation) {
        try {
            const num1 = parseFloat(prompt("Enter the first number:"));
            const num2 = parseFloat(prompt("Enter the second number:"));
            let result;

            switch (operation) {
                case "add":
                    result = num1 + num2;
                    break;
                case "subtract":
                    result = num1 - num2;
                    break;
                case "divide":
                    if (num2 === 0) {
                        throw new Error("Division by zero is not allowed.");
                    }
                    result = num1 / num2;
                    break;
                case "multiply":
                    result = num1 * num2;
                    break;
                default:
                    throw new Error("Invalid operation.");
            }

            resultDiv.textContent = `Result: ${result}`;
        } catch (error) {
            resultDiv.textContent = `Error: ${error.message}`;
        } finally {
            console.log("Operation complete.");
        }
    }
});
