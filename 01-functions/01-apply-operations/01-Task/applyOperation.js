function main()
{
    const applyOperation = (num_1, num_2, callback) => 
    {
        return callback(num_1, num_2);
    };

    console.log(`${applyOperation(3, 5, (num_1,num_2) => num_1 + num_2)};`);
    console.log(`${applyOperation(3, 5, (num_1,num_2) => num_1 - num_2)};`);
    console.log(`${applyOperation(3, 5, (num_1,num_2) => num_1 * num_2)};`);
    console.log(`${applyOperation(3, 5, (num_1,num_2) => num_1 / num_2)};`);

}

main();