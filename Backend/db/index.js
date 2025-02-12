const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Internship Projects',
  password: 'Priti@123',
  port: 5432,
});

// Test the connection
pool.connect((err, client, release) => {
  if (err) {
    console.error('Error acquiring client', err.stack);
  } else {
    console.log('Connected to PostgreSQL');
    release();
  }
});

pool.query('SELECT * FROM museum_exhibit.artifacts', (err, res)=>{
  if(err){
    console.log(err);
  }else{
    console.log(res.rows);
  }
})

module.exports = {
  query: (text, params) => pool.query(text, params),
};
