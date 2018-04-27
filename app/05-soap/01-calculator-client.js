const soap = require('soap');
const url = 'http://www.dneonline.com/calculator.asmx?WSDL';
const args = { intA: 2, intB: 1 };

(async () => {
    try {
        const client = await soap.createClientAsync(url);
        const [result] = await client.AddAsync(args);
        console.log(result);
    } catch (e) {
        console.log('error', e);
    }
})();
