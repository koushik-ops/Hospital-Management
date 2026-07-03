// specific.js
// Execute specific SELECT queries and display the output using console.table().
// Usage: node specific.js

const connection = require('./dbhospital');

(async function main() {
  try {
    const promiseConn = connection.promise();

    // SELECT dname, age FROM doctor;
    const [doctors] = await promiseConn.query('SELECT dname, age FROM doctor');
    console.log('===== DOCTOR NAMES AND AGES =====');
    console.table(doctors);

    // SELECT pname, age, gender FROM patient;
    const [patients] = await promiseConn.query('SELECT pname, age, gender FROM patient');
    console.log('===== PATIENT NAMES, AGES, GENDER =====');
    console.table(patients);

    // SELECT ename, gender FROM staff;
    const [staff] = await promiseConn.query('SELECT ename, gender FROM staff');
    console.log('===== STAFF NAMES AND GENDER =====');
    console.table(staff);
  } catch (err) {
    console.error('Error executing specific queries:', err.message);
  } finally {
    connection.end((endErr) => {
      if (endErr) console.error('Error closing the DB connection:', endErr.message);
    });
  }
})();
