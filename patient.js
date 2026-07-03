// patient.js
// Insert sample patients into the `patient` table.
// Usage: node patient.js

const connection = require('./dbhospital');

const patients = [
  [1, 'Shah Rukh Khan', 58, 'Male'],
  [2, 'Deepika Padukone', 39, 'Female'],
  [3, 'Virat Kohli', 37, 'Male'],
  [4, 'Alia Bhatt', 33, 'Female']
];

const sql = 'INSERT INTO patient (pid, pname, age, gender) VALUES ?';

connection.query(sql, [patients], (err, result) => {
  if (err) {
    console.error('Error inserting patients:', err.message);
  } else {
    console.log('Patients inserted successfully. Rows inserted:', result.affectedRows);
  }

  // Close the connection after operation
  connection.end((endErr) => {
    if (endErr) console.error('Error closing the DB connection:', endErr.message);
  });
});
