const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const hmac = crypto.createHmac('sha256', 'jlg-secret');
const { Writable } = require('stream');

const myWritable = new Writable({
	write(chunk, encoding, callback) {
		const string = chunk.toString('hex');
		console.log(string);
	}
});


const input = fs.createReadStream(path.resolve(__dirname, './test.txt'));
input.pipe(hmac).pipe(myWritable);
