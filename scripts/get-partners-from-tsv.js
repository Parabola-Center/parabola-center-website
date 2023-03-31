const fs = require("fs");

// Read the TSV data from a file
const tsvData = fs.readFileSync("./scripts/partners.tsv", "utf8");

// Split the TSV data into lines
const lines = tsvData.split("\n");

// Split the first line into headers
const headers = lines[0].split("\t");

// Create an empty array to hold the parsed data
const data = [];

// Loop through the remaining lines and parse the data into objects
for (let i = 1; i < lines.length; i++) {
  const obj = {};
  const currentLine = lines[i].split("\t");

  for (let j = 0; j < headers.length; j++) {
    obj[headers[j]] = currentLine[j];
  }

  data.push(obj);
}

// Map the data to objects that match our format with
// partnerName, partnerDescription, partnerImage, and partnerWebsite,
// and background = true
const partners = data.map((partnerData) => {
  return {
    partnerName: partnerData["Organization Name"],
    partnerDescription: partnerData["Organization description"],
    partnerImage: partnerData["Image (square aspect ratio preferred)"],
    partnerWebsite: partnerData["Organization Website URL"],
    background: "true",
  };
});

console.log(JSON.stringify(partners));
