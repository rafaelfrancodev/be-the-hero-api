const app = require('./app');
const configuration = require('../knexfile');

 if (process.env.NODE_ENV === configuration.production) {
    app.listen();
} else {
    app.listen(3333);
}

