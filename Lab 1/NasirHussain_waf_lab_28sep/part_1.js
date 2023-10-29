const fs = require("fs");
const path = require("path");

// To create folder in directory
const myDirPath = path.join(__dirname, "part_1");
if (!fs.existsSync(myDirPath)) {
  fs.mkdirSync(myDirPath);
}

//To create and write in test.txt inside part_1 folder
fs.writeFileSync("./part_1/test.txt", "04072013040");
//To read from test.txt
const data1 = fs.readFileSync("./part_1/test.txt", "utf-8");
console.log(`Befor Overwrite : ${data1}`);

//to Overwrite file with last 4 digit
fs.writeFileSync("./part_1/test.txt", "3040");
//To read from test.txt
const data2 = fs.readFileSync("./part_1/test.txt", "utf-8");
console.log(`After Overwrite : ${data2}`);

//To erase data from test.txt
fs.writeFile("./part_1/test.txt", "", (err) => {
  console.log("Erase data from file");
});
//To read from test.txt
fs.readFile("./part_1/test.txt", "utf-8", (err, data) => {
  console.log("After Erase : ", data);
});
