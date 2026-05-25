const validate = createValidator([
    (value) => value.length >= 3,
    (value) => value.length <= 10,
    (value) => value[0] === value[0].toUpperCase(),
]);

function main()
{
    validate("Alex"); 
    validate("Al");  
    validate("Alexander the Great"); 
}

main();