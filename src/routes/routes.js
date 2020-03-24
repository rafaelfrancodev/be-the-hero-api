const express = require('express');
const routes  = express.Router();

routes.post('/users', (request, response) => {
    const params = request;
    console.log("Query", params.query);    
    console.log("Params", params.request);    
    console.log("Body", params.body);    
    return response.json({
        event: 'OmniStacl 11.0',
        student: "Rafael Franco"
    });
});

module.exports = routes;