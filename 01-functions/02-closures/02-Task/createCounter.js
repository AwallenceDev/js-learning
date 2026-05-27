const createCounter = () => 
{
    let count = 0;

    const increment = () => 
    {
        count++;
    }

    const decrement = () =>
    {
        count--;
    }

    const getCount = () =>
    {
        return count;
    }

    return {
        increment,
        decrement,
        getCount,
    };
}

function main()
{
    const counter = createCounter();
    
    counter.increment();
    counter.increment();
    console.log(counter.getCount());
    counter.decrement();
    console.log(counter.getCount());
}

main();