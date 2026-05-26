const isLongEnough = (userValue) => userValue.length >=3; 

const isShortEnough = (userValue) => userValue.length <= 10; 

const isCapitalized = (userValue) => userValue[0] === userValue[0].toUpperCase();

const rules = [
    isLongEnough,
    isShortEnough,
    isCapitalized,
];

const validator = createValidator(rules);

const validate = (userValue) =>
{
    for (let i = 0; i < rules.length; i++)
    {
        if (rules[i](userValue) === false) { return false; }
    }

    return true;
}

function main()
{
    
}

main();