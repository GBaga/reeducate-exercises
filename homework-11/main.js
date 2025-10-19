//=================================================================================== დავალება 11

const fs = require("fs/promises");
const path = require("path");
const http = require("http");
const { type } = require("os");

// 1)შექმენი 2 ფოლდერი 3 ფაილი, წაშალე მარტო ფოლდერები. შეამომწე lstat-ის მეშვეობით

// async function main() {
//   await fs.mkdir("folder1", { recursive: true });
//   await fs.mkdir("folder2", { recursive: true });
//   await fs.writeFile("text1", "text1");
//   await fs.writeFile("text2", "text2");
//   await fs.writeFile("text3", "text3");
//   const info = await fs.readdir(__dirname);
//   console.log(info);
//   for (let item of info) {
//     const infoStat = await fs.lstat(item);
//     console.log(infoStat.isFile());
//     if (infoStat.isDirectory()) {
//       await fs.rm(item, { recursive: true, force: true });
//     }
//   }
//   const lastInfo = await fs.readdir(__dirname);
//   console.log(lastInfo);
// }

// main();

// 2)შექმენი  მთავარი ფოლდერი, ფოლდერში აიღე ერთი main.js ამ main.js ით შექმენი (mkdir) ფოლდერი და ამ ფოლდერში ჩაწერე index.js შემდეგ ამ index.js-ით ჩაწერე მთავარფოლდერში message.txt, ამ message.txt-ში რაც გექნება შეატრიალე ეგ სტრინგი და ისევ იგივეში ჩაწერე.

// async function main() {
//   await fs.mkdir("folder", { recursive: true });
//   const pathName = path.join(__dirname, "folder", "index.js");

//   await fs.writeFile(pathName, "index file");
//   console.log(pathName);
// }

// main();

//index.js კოდი, გადასატანი იქნება ინდექს.ჯს-ში მას შემდეგ რაც მეინი შექმნის ინდექს ჯს ფაილს:
// const fs = require("fs/promises");
// const path = require("path");

// async function index() {
//   const pathName = path.join(__dirname, "..", "message.txt");

//   await fs.writeFile(pathName, "Reverse");

//   const readFile = await fs.readFile(pathName, "utf-8");

//   const splitted = readFile.split("");

//   const reversed = [];

//   for (let i = splitted.length - 1; i >= 0; i--) {
//     reversed.push(splitted[i]);
//   }

//   await fs.writeFile(pathName, reversed);
//   const readFile2 = await fs.readFile(pathName, "utf-8");

//   console.log(readFile2);
// }

// index();

// 3) შექმენი ფოლდერი ამ ფოლდერში გქონდეს 6 ფაილი. 3 ფაილის გაფართოვება უნდა იყოს .txt. 3 ფაილის გაფართოვება უნდა იყოს .js. შენ უნდა იპოვო ,ისეთი ფაილები, რომლის გაფართოვებაცაა .txt და ისინი ჩწერო საერთო all.txt-ში
// async function main() {
//   await fs.mkdir("folder07", { recursive: true });
//   const folder = path.join(__dirname, "folder07");

//   for (let i = 1; i <= 3; i++) {
//     const txtPath = path.join(folder, `text${i}.txt`);
//     await fs.writeFile(txtPath, `text for file ${i}`);

//     const jsPath = path.join(folder, `text${i}.js`);
//     await fs.writeFile(jsPath, `js file ${i}`);
//   }

//   const info = await fs.readdir(folder);
//   let allTxtFiles = [];

//   for (let el of info) {
//     if (el.includes(".txt")) {
//       const filePath = path.join(folder, el);
//       let readFile = await fs.readFile(filePath, "utf-8");
//       allTxtFiles.push(readFile);
//     }
//   }

//   const allTextPath = path.join(folder, "all.txt");
//   await fs.writeFile(allTextPath, allTxtFiles.join("\n"));
// }
// main();

// 4) დაწერე http სერვერი და გამოდგი 3 ენდფოინითი (/animals,/cars,/motorcycle)

// const html = `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <title>Goga's Server</title>
// </head>
// <body style="margin:0; padding:0; font-family: Arial, sans-serif; display:flex; justify-content:center; align-items:center; height:100vh; background: linear-gradient(135deg, #6a11cb, #2575fc); color:white;">
//   <div style="text-align:center; padding: 40px; border-radius: 20px; background: rgba(0, 0, 0, 0.3); box-shadow: 0 10px 25px rgba(0,0,0,0.4);">
//     <h1 style="font-size: 3rem; margin: 0;">Hello from Goga's Server</h1>
//     <p style="margin-top: 10px; font-size: 1.2rem; color: #ffe;">Welcome to this awesome server!</p>
//   </div>
// </body>
// </html>

// `;

// const animals = [
//   {
//     name: "Leo",
//     type: "Lion",
//     age: 5,
//     color: "Golden",
//   },
//   {
//     name: "Molly",
//     type: "Cat",
//     age: 3,
//     color: "Gray",
//   },
//   {
//     name: "Buddy",
//     type: "Dog",
//     age: 4,
//     color: "Brown",
//   },
//   {
//     name: "Polly",
//     type: "Parrot",
//     age: 2,
//     color: "Green",
//   },
//   {
//     name: "Nemo",
//     type: "Fish",
//     age: 1,
//     color: "Orange",
//   },
// ];

// const cars = `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <title>Ferrari Cars</title>
// </head>
// <body style="margin:0; font-family: Arial, sans-serif; background-color: #f5f5f5; display:flex; flex-direction:column; align-items:center; padding:20px;">

//   <h1 style="color:#c30000; text-align:center;">Top 5 Ferrari Cars</h1>

//   <div style="display:flex; flex-wrap:wrap; justify-content:center; gap:20px; margin-top:30px;">

//     <div style="background:white; border-radius:15px; box-shadow:0 5px 15px rgba(0,0,0,0.2); padding:15px; text-align:center; width:200px;">
//       <img src="https://cdn.shopify.com/s/files/1/0035/9877/8435/files/Ferrari_F8_Spider_2_2048x2048.jpg?v=1584612835" alt="Ferrari F8 Spider" style="width:100%; border-radius:10px;">
//       <h2 style="color:#c30000; font-size:1.2rem;">F8 Spider</h2>
//       <p style="margin:5px 0;">710 hp | 0-100 km/h: 2.9s</p>
//       <p style="margin:5px 0;">Top Speed: 340 km/h</p>
//     </div>

//     <div style="background:white; border-radius:15px; box-shadow:0 5px 15px rgba(0,0,0,0.2); padding:15px; text-align:center; width:200px;">
//       <img src="https://cdn.shopify.com/s/files/1/2784/4966/files/F40_1.18_2048x2048.jpg?v=1700216709" alt="Ferrari F40" style="width:100%; border-radius:10px;">
//       <h2 style="color:#c30000; font-size:1.2rem;">F40</h2>
//       <p style="margin:5px 0;">471 hp | 0-100 km/h: 4.1s</p>
//       <p style="margin:5px 0;">Top Speed: 324 km/h</p>
//     </div>

//     <div style="background:white; border-radius:15px; box-shadow:0 5px 15px rgba(0,0,0,0.2); padding:15px; text-align:center; width:200px;">
//       <img src="https://143587181.fs1.hubspotusercontent-eu1.net/hub/143587181/hubfs/The%20Best%20Luxury%20Ferraris%20Of%20All%20Time-jpg.jpeg?width=1600&height=900&name=The%20Best%20Luxury%20Ferraris%20Of%20All%20Time-jpg.jpeg" alt="Ferrari Collection" style="width:100%; border-radius:10px;">
//       <h2 style="color:#c30000; font-size:1.2rem;">Classic Collection</h2>
//       <p style="margin:5px 0;">Legendary Ferraris</p>
//       <p style="margin:5px 0;">Through the Ages</p>
//     </div>

//     <div style="background:white; border-radius:15px; box-shadow:0 5px 15px rgba(0,0,0,0.2); padding:15px; text-align:center; width:200px;">
//       <img src="https://di-uploads-pod31.dealerinspire.com/ferrarioffortlauderdale/uploads/2021/01/ferrari-model-f8-tributo-720-1024x576.jpg" alt="Ferrari F8 Tributo" style="width:100%; border-radius:10px;">
//       <h2 style="color:#c30000; font-size:1.2rem;">F8 Tributo</h2>
//       <p style="margin:5px 0;">710 hp | 0-100 km/h: 2.9s</p>
//       <p style="margin:5px 0;">Top Speed: 340 km/h</p>
//     </div>

//     <div style="background:white; border-radius:15px; box-shadow:0 5px 15px rgba(0,0,0,0.2); padding:15px; text-align:center; width:200px;">
//       <img src="https://di-uploads-pod31.dealerinspire.com/ferrarioffortlauderdale/uploads/2021/01/ferrari-model-488-pista-spider-720-1024x576.jpg" alt="Ferrari 488 Pista Spider" style="width:100%; border-radius:10px;">
//       <h2 style="color:#c30000; font-size:1.2rem;">488 Pista Spider</h2>
//       <p style="margin:5px 0;">720 hp | 0-100 km/h: 2.85s</p>
//       <p style="margin:5px 0;">Top Speed: 340 km/h</p>
//     </div>

//   </div>
// </body>
// </html>
// `;

// const motorcycle = [
//   {
//     name: "Ninja ZX-10R",
//     brand: "Kawasaki",
//     engine: "998cc",
//     topSpeed: "299 km/h",
//     color: "Green",
//   },
//   {
//     name: "CBR1000RR-R Fireblade",
//     brand: "Honda",
//     engine: "999cc",
//     topSpeed: "306 km/h",
//     color: "Red",
//   },
//   {
//     name: "Panigale V4",
//     brand: "Ducati",
//     engine: "1103cc",
//     topSpeed: "299 km/h",
//     color: "Red",
//   },
//   {
//     name: "YZF-R1",
//     brand: "Yamaha",
//     engine: "998cc",
//     topSpeed: "299 km/h",
//     color: "Blue",
//   },
//   {
//     name: "GSX-R1000",
//     brand: "Suzuki",
//     engine: "999cc",
//     topSpeed: "299 km/h",
//     color: "Blue",
//   },
// ];

// const server = http.createServer((request, response) => {
//   if (request.url === "/") {
//     response.writeHead(200, { "content-type": "text/html" });
//     response.write(html);
//     response.end();
//   }

//   if (request.url === "/animals") {
//     response.writeHead(200, { "Content-Type": "application/json" });
//     response.write(JSON.stringify(animals));
//     response.end();
//   }

//   if (request.url === "/cars") {
//     response.writeHead(200, { "content-type": "text/html" });
//     response.write(cars);
//     response.end();
//   }

//   if (request.url === "/motorcycle") {
//     response.writeHead(200, { "Content-Type": "application/json" });
//     response.write(JSON.stringify(motorcycle, null, 2));

//     response.end();
//   }
// });

// server.listen(8080, () => {
//   console.log("server runs on localhost:8080");
// });
