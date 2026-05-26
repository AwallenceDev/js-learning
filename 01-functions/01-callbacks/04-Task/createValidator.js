const isLongEnough = (userValue) => userValue.length >=2; 

const isShortEnough = (userValue) => userValue.length <= 10; 

const isCapitalized = (userValue) => userValue[0] === userValue[0].toUpperCase();

const rules = [
    isLongEnough,
    isShortEnough,
    isCapitalized,
];

const createValidator = (rules) =>
{
    const validate = (userValue) =>
        {
            for (let i = 0; i < rules.length; i++)
            {
                if (rules[i](userValue) === false) { return false; }
            }
        
            return true;
        }

        return validate;
}

const validator = createValidator(rules);

function main()
{
    const result = validator("Oleh");   
    console.log(result); 
}

main();