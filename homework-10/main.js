//=================================================================================== დავალება 10
const { read } = require("fs");
const fs = require("fs/promises");
const { text, json } = require("stream/consumers");

// 1)წაიკითხე ყველა რიცხვი ფაილიდან, გამოთვალე მათი ჯამი და ჩაწერე სხვა ფაილში

// async function main() {
//   let arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
//   fs.writeFile("data.json", JSON.stringify(arr));
//   let readFile = await fs.readFile("data.json", "utf-8");
//   let numToArr = JSON.parse(readFile);
//   numToArr.reduce((tot, curr) => tot + curr, 0);
//   console.log(numToArr.reduce((tot, curr) => tot + curr, 0));
// }
// main();

// 2)ერთი ფაილიდან წაიკითხე ტექსტი, გადაატრიალე (reverse) და ჩაწერე სხვა ფაილში

// async function main() {
//   fs.writeFile("text.txt", "my first file");
//   const read = await fs.readFile("text.txt", "utf-8");
//   let reversedText = read.split("").reverse().join("");
//   fs.writeFile("reversedText.txt", reversedText);
// }

// main();

// 3)შექმენი მომხმარებლების მასივი შემდეგი თვისებებით: name, age, email — შემდეგ ეს მონაცემები ჩაწერე data.json ფაილში

// async function main() {
//   const users = [
//     { name: "John", age: 24, email: "example1@mail.com" },
//     { name: "Gio", age: 40, email: "example2@mail.com" },
//     { name: "Elle", age: 34, email: "example3@mail.com" },
//   ];

//   fs.writeFile("data.json", JSON.stringify(users));
// }
// main();

// 4)წაიკითხე მონაცემები ორ სხვადასხვა ფაილიდან და ჩაწერე ერთ ფაილში

// async function main() {
//   let data = await fs.readFile("data.json", "utf-8");
//   let data2 = await fs.readFile("data2.json", "utf-8");
//   let parsedData = JSON.parse(data);
//   let parsedData2 = JSON.parse(data2);
//   let data3 = [...parsedData, ...parsedData2];
//   fs.writeFile("data3.json", JSON.stringify(data3));
// }

// main();

// 5)ჩაწერე ფაილში ტექსტი, შემდეგ წაიკითხე ეს მონაცემები და დათვალე რამდენი სიტყვაა

// async function main() {
//   fs.writeFile("text.txt", "How many words are here");
//   let text = await fs.readFile("text.txt", "utf-8");
//   let splitedText = text.split(" ");
//   console.log("There is ", splitedText.length, " words in this text.");
// }
// main();

// 6)წაიკითხე მომხმარებლების JSON მონაცემები, გაფილტრე ისინი (ის ვინც 18 წელზე უფროსია) და თავიდან ჩაწერე

// async function main() {
//   const users = [
//     { name: "John", age: 16 },
//     { name: "Gio", age: 17 },
//     { name: "Elle", age: 20 },
//     { name: "Nia", age: 21 },
//   ];

//   fs.writeFile("users.json", JSON.stringify(users));

//   const users2 = await fs.readFile("users.json", "utf-8");
//   const parsedUsers2 = JSON.parse(users2);
//   const moreThan18 = parsedUsers2.filter((el) => el.age > 18);
//   fs.writeFile("users.json", JSON.stringify(moreThan18));

//   console.log(moreThan18);
// }

// main();

// 7)შექმენი სტუდენტების მასივი (name, score, passed), ჩაწერე students.json-ში.
// შემდეგ წაიკითხე და გაფილტრე ისინი, ვისი score 50-ზე მეტია, და ჩაწერე ახალ "passed.json" - ში

// async function main() {
//   const students = [
//     { name: "John", age: 16, score: 79, passed: true },
//     { name: "Gio", age: 17, score: 39, passed: false },
//     { name: "Elle", age: 20, score: 89, passed: true },
//     { name: "Nia", age: 21, score: 49, passed: false },
//   ];

//   fs.writeFile("students.json", JSON.stringify(students));
//   const studentsData = await fs.readFile("students.json", "utf-8");
//   const studentsArr = JSON.parse(studentsData);
//   const passedStudents = studentsArr.filter((el) => el.score > 50);

//   fs.writeFile("passed.json", JSON.stringify(passedStudents));
// }
// main();

// 8)წაიკითხე "users.json", და ყველას, ვისაც არ აქვს "@" ელფოსტაში, წაშალე

async function main() {
  const users = [
    { name: "Gio", email: "gio@gmail.com" },
    { name: "Nika", email: "nikaexample.com" },
    { name: "Mariam", email: "mariam@reeducate.ge" },
    { name: "Lasha", email: "lashareeducate.ge" },
    { name: "Ana", email: "ana@mail.com" },
  ];

  fs.writeFile("users.json", JSON.stringify(users));
  const usersData = await fs.readFile("users.json", "utf-8");
  const parsedUsersData = JSON.parse(usersData);
  const userWithMail = parsedUsersData.filter((el) => el.email.includes("@"));
  fs.writeFile("users.json", JSON.stringify(userWithMail));
}
main();
