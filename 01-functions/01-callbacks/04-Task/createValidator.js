const isLongEnough = (userValue) => userValue.length >=2; 

const isShortEnough = (userValue) => userValue.length <= 10; 

const isCapitalized = (userValue) => userValue[0] === userValue[0].toUpperCase();

const passwordRules = [
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
                if (!rules[i](userValue)) { return false; }
            }
        
            return true;
        }

        return validate;
}

const validator = createValidator(passwordRules);

function main()
{
    console.log(validator("Oleh"));
    console.log(validator("O"));
    console.log(validator("oleh"));
    console.log(validator("OlehOlehOlehOleh"));
}

main();