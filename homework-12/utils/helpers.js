const fs = require("fs/promises");

function reversedStr(str) {
  return str.split("").reverse().join("");
}

function sum(a, b) {
  return a + b;
}

async function write(filePath, data) {
  await fs.writeFile(filePath, data);
}

async function read(filePath, parse) {
  const readParse = await fs.readFile(filePath, "utf-8");
  console.log(parse ? JSON.parse(readParse) : readParse);
}

module.exports = { read, write, reversedStr, sum };
