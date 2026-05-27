const createMultiplier = (factor) => 
    {
        const multiplier = (value) => value * factor;

        return multiplier;
    } 

function main() 
{
    const multiplyBy2 = createMultiplier(2);
    console.log(multiplyBy2(10));
    
    const multiplyBy3 = createMultiplier(3);
    console.log(multiplyBy3(10));

    const multiplyBy10 = createMultiplier(10);
    console.log(multiplyBy10(10));
}

main();