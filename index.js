// receive library express
const express = require('express');

// init application
const app = express();

// before all requests, express convert json in object in bode request
app.use(express.json());

/**  
 * Route / Resource
 * https://insomnia.rest/download/ - Test API / or POSTMAN
 */

 /**
  * Parameters Types
  * Query: parameter inner url / ?name=tanana
  * Route Param: /:id
  * Request Body: Body Reqeust
  */


/**
 * HTTP / Methods
 */

// route get
app.post('/users', (request, response) => {
    const params = request;
    console.log("Query", params.query);    
    console.log("Params", params.request);    
    console.log("Body", params.body);    
    return response.json({
        event: 'OmniStacl 11.0',
        student: "Rafael Franco"
    });
});

// listen application in port 3333
app.listen(3333);