// dbhospital.js
// Create and export a MySQL connection to hospital_db using mysql2 (CommonJS)

const mysql = require('mysql2');

// Update the password value below before running if needed.
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'SPD460',
  database: 'hospital_db'
});

// Connect to the database and log status
connection.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.message);
    // exit with non-zero code to indicate failure
    process.exit(1);
  }
  console.log('Database Connected Successfully');
});

// Export the connection for other modules to use
module.exports = connection;
