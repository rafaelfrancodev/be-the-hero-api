const app = require('./app');
const configuration = require('../knexfile');

 if (process.env.NODE_ENV === configuration.production) {
    app.listen(80);
} else {
    app.listen(3333);
}

