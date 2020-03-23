// receive library express
const express = require('express');

// init application
const app = express();

// route get
app.get('/', (request, response) => {
    return response.json({
        event: 'OmniStacl 11.0'
    });
});

// listen application in port 3333
app.listen(3333);