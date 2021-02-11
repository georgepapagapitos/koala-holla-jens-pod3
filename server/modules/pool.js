const pg = require('pg');


const pool = new pg.Pool({
  database: 'koala_holla',

const config = {
  database: 'koala_holla',
  host: 'localhost',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 30000,
};

const pool = new pg.Pool(config);

pool.on('connect', () => {
  console.log('connected to postgres');
});

pool.on('error', (err) => {
  console.log('error connecting to postgres', err);

});

module.exports = pool;