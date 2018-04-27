const https = require('https');

// Please provide a token for Authorization.
// Replace the xxxxx by the token with read user access.
const options = {
    host: 'api.github.com',
    port: 443,
    path: '/graphql',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'User-Agent': 'Node',
        'Authorization': 'bearer xxxxxxxxxxxxx',
    },
    agent: false,
    method: 'POST',
};

const reqBody = JSON.stringify({
    query: `query {
        viewer {
          login
          name
        }
      }`
});

const req = https.request(options, function (res) {
    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', (chunk) => {
        console.log('data', chunk);
        rawData += chunk;
    });
    res.on('end', () => {
        try {
            const body = JSON.parse(rawData);
            console.log('Here is the list of all the repos I have starred:');
            console.log('body', body.data.viewer.name);
            console.log('exit');
        } catch (e) {
            console.error(e.message);
        }
    });
});

req.write(reqBody);
req.end();
