console.log("PART 3\n");

import chalk from "chalk";
import prompt from "prompt";
import validator from "validator";

function validateIPv4(ip) {
  const total_octet = ip.split(".");
  if (total_octet.length !== 4) {
    return false;
  } else {
    for (let i = 0; i < total_octet.length; i++) {
      const octet = parseInt(total_octet[i], 10);
      if(octet < 0 || octet > 255){
        return false;
      }
    }
  }
  return true;
}
prompt.start();
prompt.get(["userEmail"], (err, output) => {
  if (err) {
    console.error("Error:", err);
    return;
  }

  const email = output.userEmail;

  if (!validator.isEmail(email)) {
    console.log(
      chalk.red.bold.underline(`Your email address is incorrect. : ${email}`)
    );
  } else {
    console.log(
      chalk.green.bold.underline(`Your email address is correct. : ${email}`)
    );
  }

  prompt.get(["IPv4"], (err, output) => {
    if (err) {
      console.error("Error:", err);
      return;
    }

    const myIP = output.IPv4;
    validateIPv4(myIP);
        if (validateIPv4(myIP)) {
          console.log(
            chalk.green.bold.underline(`Your IP address is correct. : ${myIP}`)
          );
        } else {
          console.log(
            chalk.red.bold.underline(`Your IP address is incorrect: ${myIP}`)
          );
        }
  });
});
