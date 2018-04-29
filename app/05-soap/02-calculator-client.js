var soap = require('soap');
var url = 'http://localhost:8000/wsdl?wsdl';

// Create client
soap.createClient(url, function (err, client) {
    if (err) {
        throw err;
    }
    /* 
    * Parameters of the service call: they need to be called as specified
    * in the WSDL file
    */
    var args = {
        a: "3",
        b: "5"
    };
    // call the service
    client.Substract(args, function (err, res, rawResponse, soapHeader, rawRequest) {
        if (err)
            throw err;
        // print the service returned result
        console.log(res);
        client.Add(args, function (err, res, rawResponse, soapHeader, rawRequest) {
            if (err)
                throw err;
            // print the service returned result
            console.log(res);
    
        });
    });
});