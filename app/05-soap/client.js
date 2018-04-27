const soap = require('soap');
const url = 'http://localhost:8000/soap?wsdl';
var args = { a: 12, b: 34 };
soap.createClient(url, function (err, client) {
    // console.log('client', client.Add);
    client.Add(args, function (err, result) {
        console.log('err', err);
        console.log('result', result);
    });
});