const fs = require("fs");
const path = require("path");

let IPs = null;

// To create folder in directory
const myDirPath = path.join(__dirname, "part_2");
if (!fs.existsSync(myDirPath)) {
  fs.mkdirSync(myDirPath);
}

const data = fs.readFileSync("./part_2/IPs.txt", "utf-8")
console.log(`IP addresses:\n${data}`);
IPs = data.split("\n");
for (const keys in IPs) {
    const portion = parseInt(IPs[keys].split(".")[0]);
    if (portion > 0 && portion < 127) {
      fs.appendFileSync("./part_2/A.txt", IPs[keys]);
      fs.appendFileSync("./part_2/A.txt", "\n");
    }
    if (portion > 127 && portion < 192) {
      fs.appendFileSync("./part_2/B.txt", IPs[keys]);
      fs.appendFileSync("./part_2/B.txt", "\n");
    }
    if (portion > 191 && portion < 224) {
      fs.appendFileSync("./part_2/C.txt", IPs[keys]);
      fs.appendFileSync("./part_2/C.txt", "\n");
    }
}


fs.readFile("./part_2/A.txt","utf-8",(err,data)=>{
    console.log('Class A IP Addresses:');
    console.log(data)
})

fs.readFile("./part_2/B.txt","utf-8",(err,data)=>{
    console.log('Class B IP Addresses:');
    console.log(data)
})

fs.readFile("./part_2/C.txt","utf-8",(err,data)=>{
    console.log('Class C IP Addresses:');
    console.log(data)
})

