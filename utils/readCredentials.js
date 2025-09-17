// utils/csv-lite.js
const fs = require('fs');
const path = require('path');
const relPath = path.resolve(__dirname, '../tests/test-files/credentials.csv');

function readCsvLite(filePath = relPath) {
  console.log('Reading CSV from:', filePath);
  const csvContent = fs.readFileSync(filePath, 'utf8');
  const [header, ...rows] = csvContent.trim().split('\n');
  const keys = header.split(',');
  return rows.map(row => {
    const values = row.split(',');
    return keys.reduce((obj, key, index) => {
      obj[key.trim()] = values[index].trim();
      return obj;
    }, {});
  });
}
module.exports = readCsvLite;