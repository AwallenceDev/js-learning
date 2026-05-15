const applyOperation = (num_1, num_2, callback) => callback(num_1, num_2);

function main()
{
    console.log(`Addition: ${applyOperation(3, 5, (a, b) => a + b)}`);
    console.log(`Subtraction: ${applyOperation(3, 5, (a, b) => a - b)}`);
    console.log(`Multiplication: ${applyOperation(3, 5, (a, b) => a * b)}`);
    console.log(`Division: ${applyOperation(3, 5, (a, b) => a / b)}`);
}

main();