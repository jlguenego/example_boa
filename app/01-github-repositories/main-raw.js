const https = require('https');

const options = {
    host: 'api.github.com',
    port: 443,
    path: '/users/jlguenego/starred?per_page=100',
    headers: {
        'User-Agent': 'Node',
    },
    agent: false,
};

const req = https.get(options, function (res) {
    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', (chunk) => {
        rawData += chunk;
    });
    res.on('end', () => {
        try {
            const body = JSON.parse(rawData);
            console.log('Here is the list of all the repos I have starred:');
            body.forEach(r => console.log('name: ' + r.full_name));
        } catch (e) {
            console.error(e.message);
        }
    });
});
