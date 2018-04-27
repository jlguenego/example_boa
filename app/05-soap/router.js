const express = require('express');
const fs = require('fs');
const path = require('path');

const wsdl = fs.readFileSync(path.resolve(__dirname, './interface.wsdl'), 'utf8').toString();
console.log('wsdl', wsdl);

const router = express.Router();

module.exports = router;

router.use((req, res, next) => {
    console.log('soap server', req.url);
    next();
});
