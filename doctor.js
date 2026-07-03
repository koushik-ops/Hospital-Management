// doctor.js
// Insert sample doctors into the `doctor` table.
// Usage: node doctor.js

const connection = require('./dbhospital');

// Doctors to insert
const doctors = [
  [201, 'Dr. Gregory House', 45, 'Male'],
  [202, 'Dr. Meredith Grey', 39, 'Female'],
  [203, 'Dr. Stephen Strange', 42, 'Male']
];

// Use bulk insert with parameterized values
const sql = 'INSERT INTO doctor (did, dname, age, gender) VALUES ?';

connection.query(sql, [doctors], (err, result) => {
  if (err) {
    console.error('Error inserting doctors:', err.message);
  } else {
    console.log('Doctors inserted successfully. Rows inserted:', result.affectedRows);
  }

  // Close the connection after operation
  connection.end((endErr) => {
    if (endErr) console.error('Error closing the DB connection:', endErr.message);
  });
});
