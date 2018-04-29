var soap = require('soap');
var url = 'http://localhost:8000/wsdl?wsdl';

// Create client
soap.createClient(url, async function (err, client) {
    if (err) {
        throw err;
    }

    const [add] = await client.AddAsync({ a: "3", b: "5" });
    console.log(add.result);
    const [substract] = await client.SubstractAsync({ a: "3", b: "5" });
    console.log(substract.result);
});