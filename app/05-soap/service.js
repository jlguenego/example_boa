
module.exports = {
    CalculatorService: {
        CalculatorPort: {
            Add,
            Substract
        }
    }
};

function Add(args) {
    console.log('splitter_function');
    var splitter = args.splitter;
    var splitted_msg = args.message.split(splitter);
    var result = [];
    for (var i = 0; i < splitted_msg.length; i++) {
        result.push(splitted_msg[i]);
    }
    return {
        result: result
    }
}


function Substract(args) {
    console.log('hello_function');
    return {
        result: ['hello'],
    }
}
