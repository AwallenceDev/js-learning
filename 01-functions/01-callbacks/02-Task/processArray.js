const processArray = (array, callback) => 
{
    let result = [];

    for (let i = 0; i < array.length; i++)
    {
        result.push(callback(array[i]));
    }

    return result;
};

function main()
{
    const array = [1, 2, 3, 4, 5];

    console.log(`Doubling: ${processArray(array, (element) =>  element * 2)}`);
    console.log(`Squaring: ${processArray(array, (element) => element ** 2)}`);
    console.log(`Filter: ${processArray(array, (element) => element > 3 ? element : "null")}`);
}

main();