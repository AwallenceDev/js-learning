const isLongEnough = (userValue) => userValue.length >=3; 

const isShortEnough = (userValue) => userValue.length <= 10; 

const isCapitalized = (userValue) => userValue[0] === userValue[0].toUpperCase();

const rules = createValidator([
    isLongEnough,
    isShortEnough,
    isCapitalized,
]);



function main()
{
    
}

main();