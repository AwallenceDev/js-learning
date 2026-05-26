const isLongEnough = (userValue) => userValue.Length >=3; 

const isShortEnough = (userValue) => userValue.Length <= 10; 

const isCapitalized = (userValue) => value[0] === value[0].toUpperCase();

const rules = createValidator([
    isLongEnough,
    isShortEnough,
    isCapitalized,
]);



function main()
{
    
}

main();