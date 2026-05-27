const createCounter = () => 
{
    let count = 0;

    const increment = () => 
    {
        count++;
        return count;
    }

    const decrement = () =>
    {
        count--;
        return count;
    }

    const getCount = () =>
    {
        return count;
    }
}

function main()
{
    const counter = createCounter();
    
    counter.increment();
    counter.increment();
    counter.getCount();
    counter.decrement();
    counter.getCount();
}

main();