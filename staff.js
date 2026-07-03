// staff.js
// Insert sample staff members into the `staff` table.
// Usage: node staff.js

const connection = require('./dbhospital');

const staff = [
  [101, 'John Carter', 30, 'Male'],
  [102, 'Sarah Wilson', 28, 'Female'],
  [103, 'David Miller', 40, 'Male']
];

const sql = 'INSERT INTO staff (eid, ename, age, gender) VALUES ?';

connection.query(sql, [staff], (err, result) => {
  if (err) {
    console.error('Error inserting staff members:', err.message);
  } else {
    console.log('Staff members inserted successfully. Rows inserted:', result.affectedRows);
  }

  // Close the connection after operation
  connection.end((endErr) => {
    if (endErr) console.error('Error closing the DB connection:', endErr.message);
  });
});
