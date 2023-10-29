import fs from "fs";
import prompt from "prompt";
import chalk from "chalk";

console.log("PART 3 TASK 2 TO 6");

function validateIPv4(ip) {
  const total_octet = ip.split(".");
  if (total_octet.length !== 4) {
    return false;
  } else {
    for (let i = 0; i < total_octet.length; i++) {
      const octet = parseInt(total_octet[i], 10);
      if (octet < 0 || octet > 255) {
        return false;
      }
    }
  }
  return true;
}

prompt.start();
prompt.get(["userIP"], (err, output) => {
  if (err) {
    console.error("Error:", err);
    return;
  }
  const IP = output.userIP;
  if (validateIPv4(IP)) {
    const data = fs.readFileSync("Black.txt", "utf-8");
    const blackIPs = data.split("\r\n");
    if (blackIPs.includes(IP)) {
      console.log(chalk.red.bold.underline(`IP is blocked: ${IP}`));
    } else {
      const data1 = fs.readFileSync("White.txt", "utf-8");
      const whiteIPs = data1.split("\r\n");
      if (whiteIPs.includes(IP)) {
        const data2 = fs.readFileSync("Network.txt", "utf-8");
        const networkIPs = data2.split("\r\n");
        const usertrimIP = IP.split(".").slice(0, 3).join(".");
        if (networkIPs.includes(usertrimIP)) {
          console.log(
            chalk.yellowBright.italic.underline(
              `IP address belongs to a network whose IP has been authorized.The user should contact the administrator regarding this matter.: ${IP}`
            )
          );
        } else {
          console.log(chalk.green.bold.underline(`IP is White Listed: ${IP}`));
        }
      } else {
        console.log(
          chalk.red.bold.underline(
            `System is unable to authenticate the IP.: ${IP}`
          )
        );
        fs.appendFileSync("Pending.txt", IP);
      }
    }
  } else {
    console.log(chalk.red.bold("Invalid IPv4 Address"));
  }
});
