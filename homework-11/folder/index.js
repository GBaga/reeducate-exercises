const fs = require("fs/promises");
const path = require("path");

async function index() {
  const pathName = path.join(__dirname, "..", "message.txt");

  await fs.writeFile(pathName, "Reverse");

  const readFile = await fs.readFile(pathName, "utf-8");

  const splitted = readFile.split("");

  const reversed = [];

  for (let i = splitted.length - 1; i >= 0; i--) {
    reversed.push(splitted[i]);
  }

  await fs.writeFile(pathName, reversed);
  const readFile2 = await fs.readFile(pathName, "utf-8");

  console.log(readFile2);
}

index();
