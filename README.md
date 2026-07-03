# Hospital_Project

Node.js MySQL example project (CommonJS) demonstrating simple CRUD-style operations against a MySQL database named `hospital_db` using the `mysql2` package.

**Project Structure**

- Hospital_Project/
- node_modules/ (created after `npm install`)
- package.json
- package-lock.json
- dbhospital.js        - creates and exports the DB connection
- doctor.js            - inserts sample doctors
- patient.js           - inserts sample patients
- staff.js             - inserts sample staff members
- display.js           - retrieves and displays all records (console.table)
- delete.js            - deletes specified records and prints counts
- specific.js          - runs specific SELECT queries and displays results
- README.md

Note: The project assumes that the `hospital_db` database and the tables `doctor`, `patient`, and `staff` already exist with appropriate columns.

Installation
------------

1. Open a terminal in the `Hospital_Project` folder.
2. Install dependencies:

```bash
npm install
```

This will install `mysql2` per `package.json`. Alternatively you can run:

```bash
npm install mysql2
```

Configuration
-------------

Edit `dbhospital.js` and replace `YOUR_PASSWORD` with your MySQL `root` password if needed. The connection settings are:

- Host: `localhost`
- User: `root`
- Password: `YOUR_PASSWORD` (update before running)
- Database: `hospital_db`

Running the scripts
-------------------

Each file is independently executable. From the project folder run:

```bash
node doctor.js    # inserts doctors
node patient.js   # inserts patients
node staff.js     # inserts staff members
node display.js   # displays all records using console.table
node delete.js    # deletes the specified rows and prints counts
node specific.js  # runs and displays the specific SELECT queries
```

Alternatively use the npm scripts:

```bash
npm run doctor
npm run patient
npm run staff
npm run display
npm run delete
npm run specific
```

Expected output
---------------

- On successful DB connection: `Database Connected Successfully`.
- `doctor.js`, `patient.js`, `staff.js` print messages indicating number of rows inserted.
- `display.js` prints three sections with headings and tables: `===== DOCTORS =====`, `===== PATIENTS =====`, `===== STAFF =====` using `console.table()`.
- `delete.js` prints how many rows were deleted for each table (e.g. `Deleted doctors: 1`).
- `specific.js` prints the requested columns in table format with headings.

Notes and error handling
------------------------

- Each script implements basic error handling: SQL errors print an error message.
- Each script closes the DB connection with `connection.end()` after finishing.
- If the connection fails, the scripts exit with a non-zero code.

If you want help creating the `hospital_db` schema or the tables, tell me and I can provide example CREATE TABLE statements.
