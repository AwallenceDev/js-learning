const pipe = (callbacks) => 
    {
        return (value) => 
            {
            for (let i = 0; i < callbacks.length; i++)
            {
                value = callbacks[i](value);
            } 

            return value
            };
    };

const transform = pipe([
    (element) => element * 2,
    (element) => element + 10,
    (element) => element ** 2,
]);

function main()
{
    console.log(transform(5));
}

main();