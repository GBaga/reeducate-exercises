#!/usr/bin/env node
//=================================================================================== დავალება 12

// const { read, write, reversedStr, sum } = require("./utils/helpers.js");
// 1) შექმენი utils/helper.js სადაც გექნება ფუქნციები read(უნდა პარსავდეს true-ს გადაწოდების შემდეგ) და write(ანალოგიურად stringify-უნდა გაუკეთოს).
// შექმენი ამ ფუქნციებით 2 ფაილი და ჩაწერე შიგნით ნებისმიერი რამ. ასევე ჰელფერებში დაამატე ჯამის დათვლა და სტრინგის შეტრიალების ფუქნცია.

// async function main() {
//    await read("./data.json", true);
// }

// async function main() {
//   await write("./writeText1.txt", "This is file 1");
//   await write("./writeText2.txt", "This is file 2");
// }

// main();

// 2)წამოიღე ინფორმაცია ამ ორი api-დან
// let api = https://jsonplaceholder.typicode.com/users
// let api2 = https://jsonplaceholder.typicode.com/posts
// 1)გამოიყენე axios და ერთდროულად გაუშვი 2 API.
// 2)გაუშვი ორივე ერთად და რომელიც პირველი მოვა ის დააკონსოლე.
// 3)გაუშვი ორივე ერთად და დააბრუნე ინფრომაცია რომელი დარესოლვდა დარეჯექთდა და ა.შ.
// const axios = require("axios");

// const usersApi = "https://jsonplaceholder.typicode.com/users";
// const postsApi = "https://jsonplaceholder.typicode.com/posts";

// async function fetchedUsers(API) {
//   const response = await axios.get(API);
//   return response.data;
// }

// async function fetchedposts(API) {
//   const response = await axios.get(API);
//   return response.data;
// }

// Promise.any([fetchedUsers(usersApi), fetchedposts(postsApi)])
//   .then((response) => console.log("წარმატებით შესრულდა: ", response))
//   .catch((error) => console.log("პრობლემა: ", error));

// Promise.allSettled([fetchedUsers(usersApi), fetchedposts(postsApi)]).then(
//   (response) => {
//     response.forEach((response, index) => {
//       if (response.status === "fulfilled") {
//         console.log(`API ${index + 1} წარმატებით შესრულდა:`);
//         console.log(response.value);
//       } else {
//         console.log(` API ${index + 1} წარუმატებლად დასრულდა:`);
//         console.error(response.reason.message);
//       }
//     });
//   }
// );

// 3)commander-ით შექმენი phone-cli, რომელსაც ექნება დამატება,წაშლა,id-ის მიხედვით კონკრეტული ობიექტის ამოღება,
// და option-ის მიხედვით(--america)- ამ ოფშენს თუ გადავცემთ ნომერს წინ უნდა დაუამტოს
// 011 (ანუ phone-cli add giorgi 574221355 --america)- ასე თუ გადავცემთ უნდა დაამტოს 011574221355

// const { Command } = require("commander");
// const fs = require("fs");
// const path = require("path");

// const DATA_FILE = path.join(__dirname, "contacts.json");

// function readContacts() {
//   if (!fs.existsSync(DATA_FILE)) return [];
//   return JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
// }

// function saveContacts(contacts) {
//   fs.writeFileSync(DATA_FILE, JSON.stringify(contacts, null, 2));
// }

// const program = new Command();

// program
//   .command("add")
//   .argument("name")
//   .argument("phone")
//   .option("--america")
//   .action((name, phone, options) => {
//     const contacts = readContacts();
//     if (options.america) phone = "011" + phone;
//     const id = contacts.length ? contacts[contacts.length - 1].id + 1 : 1;
//     contacts.push({ id, name, phone });
//     saveContacts(contacts);
//     console.log("Added:", { id, name, phone });
//   });

// program
//   .command("delete")
//   .argument("id")
//   .action((id) => {
//     const contacts = readContacts();
//     const index = contacts.findIndex((c) => c.id == id);
//     if (index === -1) {
//       console.log("Contact not found");
//       return;
//     }
//     const removed = contacts.splice(index, 1)[0];
//     saveContacts(contacts);
//     console.log("Deleted:", removed);
//   });

// program.parse();
