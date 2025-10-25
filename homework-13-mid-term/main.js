#!/usr/bin/env node
//=================================================================================== შუალედური

// 1)შექმენი utils/helepr.js. შექმენი ფუნქცია რომელსაც მიიღებს სტრინგს და გადააქცევს capital letter-ად.
// აუცილებელია გამოიყენო module(package-დან შეცვალე)
// import { toUpper } from "./utils/helpers.js";

// const name = "goga";

// console.log(toUpper(name));

// 2)დაწერე ფუქნცია რომელიც შეამოწმებს გადმოცემული სტრინგი პალინდრომია თუ არა (ანუ ორივე მხრიდან თუ ერთნაირად იკითხება).
// აუცილებელია module(package-დან შეცვალე) გამოიყენო
// import { palindrom } from "./utils/helpers.js";

// const word1 = "Hello";
// const word2 = "madam";

// palindrom(word1);
// palindrom(word2);

// 3)დაწერე ფუქნცია რომელიც იპოვის ყველაზე გრძელ სიტყვას როცა გადავცემ (I love JavaScript very much) - უნდა დააბრუნოს JavaScript.
// აუცილებელია გამოიყენო module.
// import { findLongestWord } from "./utils/helpers.js";

// const str = "I love JavaScript very much";
// console.log(findLongestWord(str));

// 4)შექმენი სერვერი სადაც გექნება როუტები,"/","/users","/posts".
// აუცილებელია გაუკეთო ორივეს pagination,id-ის მეშვეობით ძებნა და /users ასევე დაამატე name-ით ძებნა
import http from "http";
import { URL } from "url";
import fs from "fs/promises";
import { paginate, filterUsers } from "./utils/helpers.js";

const PORT = 8080;

const server = http.createServer(async (req, res) => {
  const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
  const pathname = parsedUrl.pathname;

  if (pathname === "/") {
    const html = await fs.readFile("./index.html", "utf-8");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html);
  }

  if (pathname === "/users") {
    const usersData = await fs.readFile("./users.json", "utf-8");
    let users = JSON.parse(usersData);

    const page = parseInt(parsedUrl.searchParams.get("page")) || 1;
    const take = parseInt(parsedUrl.searchParams.get("take")) || 10;
    const id = parsedUrl.searchParams.get("id");
    const name = parsedUrl.searchParams.get("name")?.toLowerCase() || "";

    users = filterUsers(users, id, name);
    const paginated = paginate(users, page, take);

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(paginated, null, 2));
  }

  if (pathname === "/posts") {
    const postsData = await fs.readFile("./posts.json", "utf-8");
    let posts = JSON.parse(postsData);

    const page = parseInt(parsedUrl.searchParams.get("page")) || 1;
    const take = parseInt(parsedUrl.searchParams.get("take")) || 10;
    const id = parsedUrl.searchParams.get("id");

    if (id) {
      posts = posts.filter((p) => p.id === parseInt(id));
    }

    const paginated = paginate(posts, page, take);

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(paginated, null, 2));
  }
});

server.listen(PORT, () => {
  console.log(`Server runs on http://localhost:${PORT}`);
});

// 5) შექმენი products-cli,რომელსაც ექნება დამატება,წაკითხვა,id-ის მიხედვით წაკითხვა, წაშლა და აფდეითი.fields(name,description,date,category)
// + მე თუ გავატან option ის მიხედვით --isexpire. უნდა შეამოწმოს თარიღი და დაამატოს ვადა აქვს გასული თუ არა

// const { Command } = require("commander");
// const fs = require("fs");
// const path = require("path");

// const DATA_FILE = path.join(__dirname, "products.json");

// function readProducts() {
//   if (!fs.existsSync(DATA_FILE)) return [];
//   return JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
// }

// function saveProducts(products) {
//   fs.writeFileSync(DATA_FILE, JSON.stringify(products, null, 2));
// }

// const program = new Command();

// program
//   .command("add")
//   .argument("name")
//   .argument("description")
//   .argument("date")
//   .argument("category")
//   .option("--isexpire")
//   .action((name, description, date, category, options) => {
//     const products = readProducts();
//     const id = products.length ? products[products.length - 1].id + 1 : 1;

//     let expired = false;
//     if (options.isexpire) {
//       const today = new Date();
//       const productDate = new Date(date);
//       expired = productDate < today;
//     }

//     products.push({ id, name, description, date, category, expired });
//     saveProducts(products);
//     console.log("Added:", { id, name, description, date, category, expired });
//   });

// program
//   .command("delete")
//   .argument("id")
//   .action((id) => {
//     const products = readProducts();
//     const index = products.findIndex((p) => p.id == id);
//     if (index === -1) {
//       console.log("Product not found");
//       return;
//     }
//     const removed = products.splice(index, 1)[0];
//     saveProducts(products);
//     console.log("Deleted:", removed);
//   });

// program
//   .command("get")
//   .argument("id")
//   .action((id) => {
//     const products = readProducts();
//     const product = products.find((p) => p.id == id);
//     if (!product) {
//       console.log("Product not found");
//       return;
//     }
//     console.log(product);
//   });

// program
//   .command("list")
//   .description("List all products")
//   .action(() => {
//     const products = readProducts();
//     console.log(products);
//   });

// program
//   .command("update")
//   .argument("id")
//   .option("--name <name>")
//   .option("--description <description>")
//   .option("--date <date>")
//   .option("--category <category>")
//   .option("--isexpire")
//   .action((id, options) => {
//     const products = readProducts();
//     const product = products.find((p) => p.id == id);
//     if (!product) {
//       console.log("Product not found");
//       return;
//     }

//     if (options.name) product.name = options.name;
//     if (options.description) product.description = options.description;
//     if (options.date) product.date = options.date;
//     if (options.category) product.category = options.category;

//     if (options.isexpire) {
//       const today = new Date();
//       const productDate = new Date(product.date);
//       product.expired = productDate < today;
//     }

//     saveProducts(products);
//     console.log("Updated:", product);
//   });

// program.parse();
