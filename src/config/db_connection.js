const knex = require('knex');
const configuration = require('../../knexfile');

let config = configuration.development;

if (process.env.NODE_ENV == configuration.test) {
    config = configuration.test;
} else if (process.env.NODE_ENV == configuration.production) {
    config = configuration.production;

} else {
    config = configuration.development;
}

const connection = knex(config);

module.exports = connection;