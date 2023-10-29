import os from 'os'

console.log("Part 1\n");
console.log("My Computer System has been up for : ", os.uptime(), "second");

import path from 'path';

const myFilePath = path.parse(" E:/WAF - CS457/NasirHussain_waf_lab_task2_part1_part2/index.js");

console.log("\nINFORMATION ABOUT WORKING FILE ");

console.log("My Directory of working file :", myFilePath.dir);
console.log("Working File Name :", myFilePath.base);
console.log("Working File Extension", myFilePath.ext);
console.log("Working File Root Dir :", myFilePath.root);

console.log("\nPart 2\n");

import chalk from "chalk";
import prompt from "prompt";
import validator from "validator";

function capitalName(name) {
    return /^[A-Z][a-zA-Z\s]*$/.test(name);
  }

prompt.start()
prompt.get(['userName'], (err, output) => {
    if (err) {
      console.error('Error:', err);
      return;
    }
    const name = output.userName;
    if (capitalName(name)) {
        console.log(chalk.whiteBright.green.bold.underline(`Your Name is Correct: ${name}`));
      } else {
        console.log(chalk.bgRedBright.blue.bold.underline(`Your Name is Wrong: ${name}`)); 
      }
  });



  
  
  
