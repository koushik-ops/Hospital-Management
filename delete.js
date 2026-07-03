// delete.js
// Delete specific records from doctor, patient, and staff tables.
// Usage: node delete.js

const connection = require('./dbhospital');

(async function main() {
  try {
    const promiseConn = connection.promise();

    // Delete doctor with did = 202
    const [resDoc] = await promiseConn.query('DELETE FROM doctor WHERE did = ?', [202]);
    console.log(`Deleted doctors: ${resDoc.affectedRows}`);

    // Delete patient with pid = 4
    const [resPat] = await promiseConn.query('DELETE FROM patient WHERE pid = ?', [4]);
    console.log(`Deleted patients: ${resPat.affectedRows}`);

    // Delete staff with eid = 102
    const [resStaff] = await promiseConn.query('DELETE FROM staff WHERE eid = ?', [102]);
    console.log(`Deleted staff: ${resStaff.affectedRows}`);
  } catch (err) {
    console.error('Error deleting records:', err.message);
  } finally {
    connection.end((endErr) => {
      if (endErr) console.error('Error closing the DB connection:', endErr.message);
    });
  }
})();
