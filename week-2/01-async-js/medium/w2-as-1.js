const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "sample.txt");

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  let cleanedData = data.replace(/\s+/g, " ");
  console.log(cleanedData);
});
