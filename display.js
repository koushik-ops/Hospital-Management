// display.js
// Retrieve and display all records from doctor, patient, and staff tables.
// Uses console.table() for nicer formatting.
// Usage: node display.js

const connection = require('./dbhospital');

(async function main() {
  try {
    const promiseConn = connection.promise();

    // Fetch doctors
    const [doctors] = await promiseConn.query('SELECT * FROM doctor');
    console.log('===== DOCTORS =====');
    console.table(doctors);

    // Fetch patients
    const [patients] = await promiseConn.query('SELECT * FROM patient');
    console.log('===== PATIENTS =====');
    console.table(patients);

    // Fetch staff
    const [staff] = await promiseConn.query('SELECT * FROM staff');
    console.log('===== STAFF =====');
    console.table(staff);
  } catch (err) {
    console.error('Error fetching records:', err.message);
  } finally {
    // Close the connection after all operations
    connection.end((endErr) => {
      if (endErr) console.error('Error closing the DB connection:', endErr.message);
    });
  }
})();
