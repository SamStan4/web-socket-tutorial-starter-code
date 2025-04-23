const sqlite3 = require("sqlite3");

//*********************************************************************************************************************************//

const db = new sqlite3.Database("./data/signatures.db", (err) => {
    if (err) {
        throw new Error("FATAL ERROR: could not connect to database inside signature method module")
    } else {
      console.log("admin secure method module connected to database");
    }
  });

//*********************************************************************************************************************************//

async function getSignatures() {
  const sqlString = "SELECT * FROM SignatureTable ORDER BY signatureName ASC;";
  return new Promise((resolve, reject) => {
    db.all(sqlString, [], function (err, rows) {
      if (err) {
        return reject(err);
      } else if (!rows) {
        return reject(new Error("rows undefined"));
      }
      return resolve(rows);
    });
  });
}

async function addSignature(name, email, city, state) {
  const sqlString = "INSERT INTO SignatureTable (signatureName, signatureEmail, signatureCity, signatureState) VALUES (?, ?, ?, ?)";
  return new Promise((resolve, reject) => {
    db.run(sqlString, [name, email, city, state], function (err) {
      if (err) {
        return reject(err);
      }
      return resolve(true);
    });
  });
}

//*********************************************************************************************************************************//

module.exports = {
  getSignatures,
  addSignature
};