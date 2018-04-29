
module.exports = {
    CalculatorService: {
        CalculatorPort: {
            Add,
            Substract
        }
    }
};

function Add(args) {
    console.log('Add', args);
    return {
        result: [+args.a + (+args.b)]
    }
}


function Substract(args) {
    console.log('Substract', args);
    
    return {
        result: [+args.a - (+args.b)]
    }
}
