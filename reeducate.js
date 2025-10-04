//=================================================================================== დავალება 1
//  1) გაქვს ლეპტოპების მასივი, იპოვე ყველაზე ძვირი და გამოიტანე კონსოლში
// const laptops = [
//   { model: "Dell XPS 13", price: 1800 },
//   { model: "MacBook Pro 14", price: 2499 },
//   { model: "Lenovo ThinkPad X1", price: 2100 },
//   { model: "Asus Zephyrus G14", price: 1999 },
// ];
// let expensive = laptops.reduce((tot, current) => {
//   return tot.price > current.price ? tot : current;
// }, laptops[0]);
// console.log(expensive);

// 2)შექმენი ობიექტი, რომელსაც ექნება width, height და getArea() მეთოდი, რომელიც დააბრუნებს ფართობს.
// let obj = {
//   width: 10,
//   height: 2,
//   getArea: function () {
//     return this.width * this.height;
//   },
// };
// console.log(obj.getArea());

// 3)დაბეჭდე მხოლოდ იმ სტუდენტების სახელები, რომელთაც passed === true.
// const students = [
//   { name: "Giorgi", score: 85, passed: true },
//   { name: "Nika", score: 50, passed: false },
//   { name: "Mariam", score: 92, passed: true },
//   { name: "Luka", score: 60, passed: false },
// ];
// students.forEach((el) => {
//   if (el.passed) {
//     console.log(el.name);
//   }
// });

// 4)გაფილტრე ისეთი პროდუქტები, რომლებიც 10$-ზე იაფია და დააბრუნე მხოლოდ მათი სათაურების მასივი.
// const products = [
//   { title: "Pencil", price: 2 },
//   { title: "Notebook", price: 5 },
//   { title: "Backpack", price: 35 },
//   { title: "Ruler", price: 3 },
//   { title: "Calculator", price: 40 },
// ];
// lessTen = [];
// products.forEach((el) => {
//   if (el.price < 10) {
//     lessTen.push(el.title);
//   }
// });
// console.log(lessTen);

// 5)დაალაგე ზრდადობით rating-ის მიხედვით
// const movies = [
//   { title: "Inception", rating: 9 },
//   { title: "Avatar", rating: 7.5 },
//   { title: "Joker", rating: 8.2 },
//   { title: "Tenet", rating: 6.9 },
// ];
// const sortedRating = movies.sort((a, b) => a.rating - b.rating);
// console.log(sortedRating);

// 6)იპოვე ყველაზე იაფი ტელეფონი და გამოიტანე მხოლოდ მისი model
// const phones = [
//   { model: "iPhone 15", price: 1200 },
//   { model: "Samsung Galaxy S24", price: 950 },
//   { model: "Xiaomi Redmi 13", price: 250 },
//   { model: "Pixel 8", price: 800 },
// ];
// const cheapest = phones.sort((a, b) => a.price - b.price);
// console.log(cheapest[0].model);

// 7)დაბეჭდე 300- გვერდიანზე მეტი
// const books = [
//   { title: "Harry Potter", pages: 500 },
//   { title: "The Little Prince", pages: 120 },
//   { title: "Lord of the Rings", pages: 700 },
//   { title: "Animal Farm", pages: 250 },
// ];
// books.forEach((el) => {
//   if (el.pages > 300) {
//     console.log(el.title);
//   }
// });

// 8)დაალაგე ზრდადობით და შეკრიბე ფასი
// const phones = [
//   { model: "iPhone 15", price: 1200 },
//   { model: "Samsung Galaxy S24", price: 950 },
//   { model: "Xiaomi Redmi 13", price: 250 },
//   { model: "Pixel 8", price: 800 },
// ];
// const sortedPhones = phones.sort((a, b) => a.price - b.price);
// let allPrice = 0;
// sortedPhones.forEach((el) => {
//   return (allPrice += el.price);
// });
// console.log(allPrice);

//=================================================================================== დავალება 2

// 1) შექმენი ცარიელი მასივი და შეავსე მასში რიცხვები 5-დან 15-მდე
// let arr = [];
// for (let i = 0; i <= 10; i++) {
//   arr.push(i);
// }
// console.log(arr);

// 2) დაბეჭდე მასივის ელემენტები უკუღმა let arr = [1,2,3,4,5]
// let arr = [1, 2, 3, 4, 5];
// for (let i = arr.length - 1; i >= 0; i--) {
//   console.log(arr[i]);
// }

// 3) იპოვე მასივში მინიმალური რიცხვი let arr = [100,2,3,9]
// let arr = [100, 2, 3, 9];
// let minNum = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] < minNum) {
//     minNum = arr[i];
//   }
// }
// console.log(minNum);

// 4) ამოიღე შუა 3 ელემენტი slice-ით.let arr = [1,2,3,4,5,6,7]
// let arr = [1, 2, 3, 4, 5, 6, 7];
// let slicedArr = arr.slice(2, 5);
// console.log(slicedArr);

// 5) გააერთიანე ორი მასივი let arr1 = [1,2] let arr2=[3,4]
// let arr1 = [1, 2];
// let arr2 = [3, 4];
// let arr3 = [...arr1, ...arr2];
// console.log(arr3);

// 6) წაშალე დუბლირებული ელემენტები let arr = [1,2,3,4,5,6,6,7,7]
// let arr = [1, 2, 3, 4, 5, 6, 6, 7, 7];
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] !== arr[i + 1]) {
//     newArr.push(arr[i]);
//   }
// }
// console.log(newArr);

// 7) გაყავი მასივი ორ ცალკე მასივად (ლუწი და კენტი). მინიშნება: გამოიყენე % 2 === 0  let arr = [1,2,3,4,5,6,7]
// let arr = [1, 2, 3, 4, 5, 6, 7];
// let evenArr = [];
// let oddArr = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     evenArr.push(arr[i]);
//   } else {
//     oddArr.push(arr[i]);
//   }
// }
// console.log("წყვილების მასივი: ", evenArr, "კენტების მასივი: ", oddArr);

// 8) დაითვალე დადებითი რიცხვების რაოდენობა და უარყოფითი რიცხვების ჯამი.
// let arr = [1, 2, 3, 4, 5, 6, 7, -1, -2, -3, -4];
// let positiveNum = 0;
// let negativeNum = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 0) {
//     positiveNum++;
//   } else {
//     negativeNum++;
//   }
// }
// console.log(
//   "პოზიტიური ციფრების რაოდენობაა: ",
//   positiveNum,
//   "ნეგატიური ციფრების რაოდენობაა: ",
//   negativeNum
// );

// 9) დააბრუნე მასივის თითოეული ელემენტის ინვერსი (ანუ [1,-2] მაგივრად [-1,2]). მინიშნება: გამოიყენე push(-arr[i])
// let arr = [1, 2, 3, 4, 5, 6, 7, -1, -2, -3, -4];
// let reversedArr = [];
// for (let i = 0; i < arr.length; i++) {
//   reversedArr.push(-arr[i]);
// }
// console.log(reversedArr);

// 10) let arr = [1,[2,[3]],[4] შენი მიზანია მიიღო [1,2,3,4]
// let arr = [1, [2, [3]], [4]];
// let newArr = arr.flat(Infinity);
// console.log(newArr);

//=================================================================================== დავალება 3

// 1) გაამრავლე თითოეული ელემენტი 3-ზე.
// Input: [1,2,3] - Output: [3,6,9]
// let arr = [1, 2, 3];
// let newArr = arr.map((el) => el * 3);
// console.log(newArr);

// 2)გაფილტრე ისეთი რიცხვები რომლებიც იყოფა უნაშთოდ 3-ზე
// let arr = [2, 3, 3, 4, 5, 6, 7, 8, 9, 23, 24, 25, 26, 27, 33];
// let filteredArr = arr.filter((el) => el % 3 === 0);
// console.log(filteredArr);

// 3)დააბრუნე ყველა დადებითი რიცხვის ჯამი
// let arr = [-2, -40, -31, 0, 22, 2, -12, 0.5, 0.001, -1, 23];
// let positiveNum = arr.filter((el) => el > 0);
// console.log(positiveNum);

// 4)მოცემული სტრინგების მასივიდან წაშალე თითოეული სტრინგის ბოლო სიმბოლო
// let namesArr = ["giorgi", "nika", "mariami"];
// let deletedLastSymbol = namesArr.map((el) => el.slice(0, -1));
// console.log(deletedLastSymbol);

// 5)გაამრავლე ყველა ელემენტი მასივში 2-ზე და შემდეგ ამოიღე რიცხვები, რომლებიც იყოფა 3-ზე
// let arr = [-2, -40, -31, 0, 22, 2, -12, 0.5, 0.001, -1, 23, 3, 9];
// let newArr = arr.map((el) => el * 2).filter((el) => el % 3 === 0);
// console.log(newArr);

// 6)გაქვთ მასივი -
// let arr = [
//   {
//     category: "pizza",
//     price: 20,
//   },
//   {
//     category: "pizza",
//     price: 20,
//   },
//   {
//     category: "sushi",
//     price: 30,
//   },
//   {
//     category: "sushi",
//     price: 30,
//   },
// ];

// თქვენი მიზანია  დააჯგუფოთ შემდეგნაირად - {
//   '20': [
//     { category: 'pizza', price: 20 },
//     { category: 'pizza', price: 20 }
//   ],
//   '30': [
//     { category: 'sushi', price: 30 },
//     { category: 'sushi', price: 30 }
//   ]
// }

// let newCategory = arr.reduce((tot, current) => {
//   let price = current.price;
//   if (!tot[price]) {
//     tot[price] = [];
//   }
//   tot[price].push(current);
//   return tot;
// }, {});
// console.log(newCategory);

// 7) დაალაგე რიცხვები ზრდადობით
// let numsArr = [1, -1, -2, -10, 111, 3, 2, 5];
// let sortedNumsdArr = numsArr.sort((x, y) => x - y);
// console.log(sortedNumsdArr);

// 8)გაამრავლე ყველა ელემენტი 2-ზე და დატოვე მხოლოდ ისინი, რომლებიც 5-ზე მეტია.
// let arr = [-2, -40, -31, 0, 22, 2, -12, 0.5, 0.001, -1, 23, 3, 9];
// let moreThanFice = arr.map((el) => el * 2).filter((el) => el > 5);
// console.log(moreThanFice);

// 9)let arr = [1,1,1,1,2,2,3,3,3] დააბრუნე let unque = [1,2,3]
// let arr = [1, 1, 1, 1, 2, 2, 3, 3, 3];
// let unique = [...new Set(arr)];
// console.log(unique);

// 10), დააბრუნეთ ორი ყველაზე მცირე რიცხვის ჯამს
// let arr = [-1, 20, 90, 4, 5, 111];
// let newArr = arr
//   .sort((a, b) => a - b)
//   .splice(0, 2)
//   .reduce((total, current) => total + current, 0);
// console.log(newArr);

//=================================================================================== დავალება 4

//  1) გაქვს ლეპტოპების მასივი, იპოვე ყველაზე ძვირი და გამოიტანე კონსოლში
// const laptops = [
//   { model: "Dell XPS 13", price: 1800 },
//   { model: "MacBook Pro 14", price: 2499 },
//   { model: "Lenovo ThinkPad X1", price: 2100 },
//   { model: "Asus Zephyrus G14", price: 1999 },
// ];
// let expensive = laptops.reduce((tot, current) => {
//   return tot.price > current.price ? tot : current;
// }, laptops[0]);
// console.log(expensive);

// 2)შექმენი ობიექტი, რომელსაც ექნება width, height და getArea() მეთოდი, რომელიც დააბრუნებს ფართობს.
// let obj = {
//   width: 10,
//   height: 2,
//   getArea: function () {
//     return this.width * this.height;
//   },
// };
// console.log(obj.getArea());

// 3)დაბეჭდე მხოლოდ იმ სტუდენტების სახელები, რომელთაც passed === true.
// const students = [
//   { name: "Giorgi", score: 85, passed: true },
//   { name: "Nika", score: 50, passed: false },
//   { name: "Mariam", score: 92, passed: true },
//   { name: "Luka", score: 60, passed: false },
// ];
// students.forEach((el) => {
//   if (el.passed) {
//     console.log(el.name);
//   }
// });

// 4)გაფილტრე ისეთი პროდუქტები, რომლებიც 10$-ზე იაფია და დააბრუნე მხოლოდ მათი სათაურების მასივი.
// const products = [
//   { title: "Pencil", price: 2 },
//   { title: "Notebook", price: 5 },
//   { title: "Backpack", price: 35 },
//   { title: "Ruler", price: 3 },
//   { title: "Calculator", price: 40 },
// ];
// lessTen = [];
// products.forEach((el) => {
//   if (el.price < 10) {
//     lessTen.push(el.title);
//   }
// });
// console.log(lessTen);

// 5)დაალაგე ზრდადობით rating-ის მიხედვით
// const movies = [
//   { title: "Inception", rating: 9 },
//   { title: "Avatar", rating: 7.5 },
//   { title: "Joker", rating: 8.2 },
//   { title: "Tenet", rating: 6.9 },
// ];
// const sortedRating = movies.sort((a, b) => a.rating - b.rating);
// console.log(sortedRating);

// 6)იპოვე ყველაზე იაფი ტელეფონი და გამოიტანე მხოლოდ მისი model
// const phones = [
//   { model: "iPhone 15", price: 1200 },
//   { model: "Samsung Galaxy S24", price: 950 },
//   { model: "Xiaomi Redmi 13", price: 250 },
//   { model: "Pixel 8", price: 800 },
// ];
// const cheapest = phones.sort((a, b) => a.price - b.price);
// console.log(cheapest[0].model);

// 7)დაბეჭდე 300- გვერდიანზე მეტი
// const books = [
//   { title: "Harry Potter", pages: 500 },
//   { title: "The Little Prince", pages: 120 },
//   { title: "Lord of the Rings", pages: 700 },
//   { title: "Animal Farm", pages: 250 },
// ];
// books.forEach((el) => {
//   if (el.pages > 300) {
//     console.log(el.title);
//   }
// });

// 8)დაალაგე ზრდადობით და შეკრიბე ფასი
// const phones = [
//   { model: "iPhone 15", price: 1200 },
//   { model: "Samsung Galaxy S24", price: 950 },
//   { model: "Xiaomi Redmi 13", price: 250 },
//   { model: "Pixel 8", price: 800 },
// ];
// const sortedPhones = phones.sort((a, b) => a.price - b.price);
// let allPrice = 0;
// sortedPhones.forEach((el) => {
//   return (allPrice += el.price);
// });
// console.log(allPrice);

//=================================================================================== დავალება 5

// 1. დაწერე ფუნქცია , რომელიც არგუმენტად იღებს sec-ს და ითვლის უკუსვლით იქმადე სანამ 0-მდე არ მივა
// function timer(sec) {
//   let initialValue = sec;
//   const interval = setInterval(() => {
//     console.log(initialValue);
//     initialValue--;

//     if (initialValue < 0) {
//       clearInterval(interval);
//     }
//   }, 1000);
// }
// timer(4);

// 2. დაწერე ფუქნცია ფუქნციას გადააწოდე რიცხვი  და ასევე ლოგე რენდომული რიცხვი იქამდე სანამ ეს გადაცემული და რენდომ რიცხვი არ. დაემთხვევა ერთმამენთს
// function compare(num) {
//   const interval = setInterval(() => {
//     let randomNum = Math.floor(Math.random() * 10);
//     console.log(randomNum);
//     if (num == randomNum) {
//       clearInterval(interval);
//     }
//   }, 500);
// }
// compare(4);

// 3. დაწერე ფუქნცია რომელიც მიიღებს n და callback-ს როცა n > 27-ზე გაუშვი ეს callback-ი რომელიც დააკონსოლებს რომ ეს ნამდვილად მეტია 27-ზე სხვა შემთხვევაში დააკონსოლე რომ n ნაკლებია
// function callback() {
//   console.log("N is more than 27");
// }
// function func(n, callback) {
//   if (n > 27) {
//     return callback();
//   } else {
//     console.log("N is less than 27");
//   }
// }
// func(29, callback);

// 4.დაწერე ფუქნცია რომელიც პარამეტრად მიიღებს API და დააბრუნებს ამ API-ში მყოფ  4 - users. https://jsonplaceholder.typicode.com/users დაწერე ორივენაირად than/catch & async/await
// function getUsersThen() {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => res.json())
//     .then((userData) => {
//       userData
//         .slice(0, 4)
//         .forEach((userData) => console.log(userData.username));
//     })
//     .catch((error) => {
//       console.error("Error fetching user data:", error);
//     });
// }
// getUsersThen();

// async function getUser() {
//   try {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
//     const userData = await response.json();
//     userData.slice(0, 4).forEach((userData) => console.log(userData.username));
//   } catch (error) {
//     console.error("Error fetching user data:", error);
//   }
// }
// getUser();

// 5) დააწყვილე reduce-თი ცალკე ვისი ასაკიც მეტია 10 ზე და ვისი ასაკიც ნაკლებია 20
// let people = [
//   { name: "Giorgi", age: 25 },
//   { name: "Nika", age: 15 },
//   { name: "Mariam", age: 30 },
//   { name: "Luka", age: 18 },
// ];
// let newCategory = people.reduce(
//   (tot, current) => {
//     let age = current.age;
//     if (age < 20) {
//       tot.under20.push(current);
//     }
//     if (age > 10) {
//       tot.over10.push(current);
//     }
//     return tot;
//   },
//   { under20: [], over10: [] }
// );
// console.log(newCategory);

// 6. დაწერე ფუნქცია რომელიც მიიღებს ორ რიცხვს და callback-ს. თუ პირველი მეტია მეორეზე გაუშვი callback და დაუბეჭდე "მეტია", სხვა შემთხვევაში "ნაკლები ან ტოლია".
// function callback() {
//   console.log("More");
// }
// function compare(a, b, callback) {
//   if (a > b) {
//     callback();
//   } else {
//     console.log("less or equal");
//   }
// }
// compare(20, 2, callback);

// 7.დაწერე reduce, რომელიც დააჯგუფებს - ცალკე 20-ზე მეტ ფასიან რიცხვებს და
// ცალკე 20-ზე ნაკლები ან ტოლი ფასიანი ნივთები
// let products = [
//   { name: "Mouse", price: 15 },
//   { name: "Keyboard", price: 45 },
//   { name: "USB Cable", price: 7 },
//   { name: "Headphones", price: 29.9 },
//   { name: "Webcam", price: 52 },
// ];
// let newCategory = products.reduce(
//   (tot, current) => {
//     if (current.price < 20) {
//       tot.under20.push(current);
//     }
//     if (current.price < 20) {
//       tot.over20.push(current);
//     }
//     return tot;
//   },
//   { under20: [], over20: [] }
// );
// console.log(newCategory);

//=================================================================================== დავალება 6

// 1) function block(){
//     for(let i = 1 ;i <10000000000;i++){}
// }

// console.log("one")
// block()
// console.log("two")
// იპოვე გამოსავალი როგორ შეიძლება გაეშვას ჯერ  console.log("one") console.log("two") შემდეგ ფუნქცია
// აუცილებელია გამოიყენო ფრომისი

// function block() {
//   for (let i = 1; i < 10000000; i++) {}
// }
// console.log("one");
// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     block(), resolve("Block is finished");
//   }, 0);
// });
// console.log("two");
// promise.then((message) => console.log(message));

// 2)ორი პრომისი შექმენი (ერთმა დაარესოლვოს, ერთმა დაარეჯექთოს) და ორივე შემთხვევა დაამუშავე then/catch-ით  ცალცალკეც და “ჯგუფურადაც”  - ჯგუფურად Allsetteld გამოიყენე.
// let promise1 = new Promise((resolve, reject) => {
//   resolve("Promise1 works");
// });

// let promise2 = new Promise((resolve, reject) => {
//   reject("Promise2 doesnt work");
// });
// promise1.then((resolve) => console.log(resolve));
// promise2
//   .then((resolve) => console.log(resolve))
//   .catch((error) => console.log(error, "Promise 2 Error"));

// Promise.allSettled([promise1, promise2]).then(([one, two]) =>
//   console.log(one, two)
// );

// 3)შექენი 4 პრომისი (ზოგი resolve, ზოგი reject). დააბრუნე მარტო პირველი დარესოლვებული

// let promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Promise1 works"), 300);
// });

// let promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => reject("Promise2 doesnt work"), 100);
// });

// let promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Promise3 works"), 200);
// });

// let promise4 = new Promise((resolve, reject) => {
//   setTimeout(() => reject("Promise4 doesnt work"), 50);
// });

// Promise.any([promise1, promise2, promise3, promise4]).then((response) =>
//   console.log(response)
// );

// 4)შექმენი 4 ფრომისი  და რედიუსით დაითვალე რამდენია წარმატებული და რამდენი წარუმატებელი

// let promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Promise1 works"), 300);
// });

// let promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => reject("Promise2 doesnt work"), 100);
// });

// let promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Promise3 works"), 200);
// });

// let promise4 = new Promise((resolve, reject) => {
//   setTimeout(() => reject("Promise4 doesnt work"), 50);
// });

// Promise.allSettled([promise1, promise2, promise3, promise4]).then(
//   (response) => {
//     const results = response.reduce(
//       (tot, curr) => {
//         if (curr.status === "fulfilled") {
//           tot.resolved++;
//         } else {
//           tot.rejected++;
//         }
//         return tot;
//       },
//       { resolved: 0, rejected: 0 }
//     );
//     console.log(results);
//   }
// );

// 5) შექმენი 5 ფრომისი და გაფილტრე ეს ფრომისები დააბრუნე ამრტო წარუმატებლები

// let promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Promise1 works"), 300);
// });

// let promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => reject("Promise2 doesnt work"), 100);
// });

// let promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Promise3 works"), 200);
// });

// let promise4 = new Promise((resolve, reject) => {
//   setTimeout(() => reject("Promise4 doesnt work"), 50);
// });

// let promise5 = new Promise((resolve, reject) => {
//   setTimeout(() => reject("Promise5 doesnt work"), 150);
// });

// Promise.allSettled([promise1, promise2, promise3, promise4, promise5]).then(
//   (response) => console.log(response.filter((el) => el.status === "rejected"))
// );

// 6)api1 = https://jsonplaceholder.typicode.com/users
// api2 = https://jsonplaceholder.typicode.com/posts
// გაუშვი ეს ორი API ერთდროულად

// async function fetchUsers() {
//   try {
//     let response = await fetch("https://jsonplaceholder.typicode.com/users");
//     let data = await response.json();
//     console.log("UserApi", data);
//   } catch (error) {
//     console.log(error, "error");
//   }
// }

// async function fetchPosts() {
//   try {
//     let response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     let data = await response.json();
//     console.log("PostsApi", data);
//   } catch (error) {
//     console.log(error, "error");
//   }
// }

// // fetchUsers();
// // fetchPosts();
// Promise.allSettled([fetchPosts(), fetchUsers()]).then((response) =>
//   console.log(response)
// );

//=================================================================================== დავალება 7

// 1) შექმენი Triangle (სამკუთხედი) კლასი, რომელიც იღებს სამ გვერდს (a, b, c) და დაამატე მეთოდები: getPerimeter(), getArea() , isRightTriangle().

// class Triangle {
//   constructor(a, b, c) {
//     this.a = a;
//     this.b = b;
//     this.c = c;
//   }
//   getPerimeter() {
//     return this.a + this.b + this.c;
//   }
//   getArea() {
//     let s = this.getPerimeter() / 2;
//     return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
//   }
//   isRightTriangle() {
//     const sides = [this.a, this.b, this.c].sort((x, y) => x - y);
//     const [x, y, z] = sides;
//     return Math.abs(x ** 2 + y ** 2 - z ** 2) < 1e-10;
//   }
// }

// let triangle1 = new Triangle(3, 4, 5);
// console.log(triangle1.getArea());

// 2) შექმენი Smartphone (სმარტფონი) კლასი property-ებით: brand, model, releaseYear. გააკეთე ექსტენშენი GamingPhone, რომელსაც დაემატება gpuScore და batteryCapacity, და დაამატე მეთოდი performanceIndex().
// class Smartphone {
//   constructor(brand, model, year) {
//     this.brand = brand;
//     this.model = model;
//     this.year = year;
//   }
// }

// class GamingPhone extends Smartphone {
//   constructor(brand, model, year, gpuScore, batteryCapacity) {
//     super(brand, model, year);
//     this.gpuScore = gpuScore;
//     this.batteryCapacity = batteryCapacity;
//   }

//   performanceIndex() {
//     return this.gpuScore * this.batteryCapacity;
//   }
// }

// const newPhone = new GamingPhone("Nokia", "N73", 2013, 3, 5000);
// console.log(newPhone);
// console.log(newPhone.performanceIndex());

// 3)შექმენი CryptoWallet (კრიპტო საფულე) კლასი, მეთოდებით: deposit(), withdraw(), transfer(), getHistory(),

// class CryptoWallet {
//   constructor(initialMoney) {
//     this.balance = initialMoney;
//     this.history = [];
//   }

//   deposit(amount) {
//     this.balance += amount;
//     this.history.push({ type: "deposit", amount, balance: this.balance });
//     return this.balance;
//   }
//   withdrow(amount) {
//     this.balance -= amount;
//     this.history.push({ type: "withdraw", amount, balance: this.balance });
//     return this.balance;
//   }

//   transfer(amount) {
//     this.balance -= amount;
//     this.history.push({ type: "transfer", amount, balance: this.balance });
//     return this.balance;
//   }
//   getHistory() {
//     return this.history;
//   }
// }

// let newWallet = new CryptoWallet(100);
// console.log(newWallet.withdrow(20));
// console.log(newWallet.getHistory());

// 4)შექმენი Wishlist (სურვილების სია) კლასი, რომელიც ინახავს ნივთებს. მეთოდები: addItem(), deleteItem(id), updateItem()

// class Wishlist {
//   constructor() {
//     this.wishList = [];
//   }

//   addItem(wish) {
//     let lastId = this.wishList[this.wishList.length - 1]?.id || 0;
//     const newObj = { id: lastId + 1, wish };
//     this.wishList.push(newObj);
//   }

//   deleteItem(id) {
//     this.wishList = this.wishList.filter((el) => el.id !== id);
//   }

//   updateItem(id, newWish) {
//     this.wishList = this.wishList.map((el) => {
//       if (el.id === id) {
//         return { ...el, wish: newWish };
//       } else {
//         return el;
//       }
//     });
//   }
// }

// let newList = new Wishlist();
// newList.addItem("ferrari");
// newList.addItem("house");
// newList.addItem("mind");
// newList.deleteItem(2);
// newList.updateItem(3, "health");

// console.log(newList);

// 5)შექმენი Freelancer (ფრილანსერი) კლასი მეთოდით calculateEarnings(), რომელიც დათვლის შემოსავალს შესრულებული საათებისა და საათობრივი ტარიფის მიხედვით, დამატებით optional bonus-ს გადამეტებულ საათებზე (მაგ >160 სთ).
// class Freelancer {
//   constructor(name, hourRate, hourWork) {
//     this.name = name;
//     this.hourRate = hourRate;
//     this.hourWork = hourWork;
//   }

//   calculateEarnings() {
//     let bonus = null;
//     if (this.hourWork > 160) {
//       bonus = (this.hourWork - 160) * 10;
//     }
//     const salary = this.hourRate * this.hourWork + bonus;
//     console.log("Salary of", this.name, "is $", salary);
//   }
// }

// let junior = new Freelancer("Ia", 60, 161);
// junior.calculateEarnings();

//=================================================================================== დავალება 8

// ArrayTasks

// 1)let arr = [1, [2, 3, [4, 5]], 5, [2, [3, 6]]] დაალაგე ზრდადობით და ამოიღე უნიკალურები გამოიყენე ForLoop
// let arr = [1, [2, 3, [4, 5]], 5, [2, [3, 6]]];
// let sorted = arr.flat(Infinity).sort((a, b) => a - b);
// const uniqueArr = [];

// for (let i = 0; i < sorted.length; i++) {
//   if (!uniqueArr.includes(sorted[i])) {
//     uniqueArr.push(sorted[i]);
//   }
// }
// console.log(sorted);
// console.log(uniqueArr);

// 2)let products = [
//   { name:"Phone", price:1200, rating:4.5 },
//   { name:"Laptop", price:2500, rating:4.8 },
//   { name:"Book", price:30, rating:4.9 },
//   { name:"TV", price:800, rating:4.0 }
// ]
// იპოვე ყველაზე მაღალი rating-ის მქონე პროდუქტი, მაგრამ ისეთი, რომლის ფასიც < 1000.

// let products = [
//   { name: "Phone", price: 1200, rating: 4.5 },
//   { name: "Laptop", price: 2500, rating: 4.8 },
//   { name: "Book", price: 30, rating: 4.9 },
//   { name: "TV", price: 800, rating: 4.0 },
// ];

// const result = products
//   .filter((el) => el.price < 1000)
//   .reduce((tot, curr) => (curr.rating > tot.rating ? curr : tot));

// console.log(result);

// 3)let sentence = "dog cat dog bird cat dog fish bird"
// რედიუსის დახმარებით დათვალე რომელი რამდენჯერ მეორდება და for ლუპის დახმარებით იპოვე მეტჯერგამეორებული
// let sentence = "dog cat dog bird cat dog fish bird";
// let splitedSentence = sentence.split(" ");
// let grouped = splitedSentence.reduce((tot, curr) => {
//   if (tot[curr]) {
//     tot[curr] += 1;
//   } else {
//     tot[curr] = 1;
//   }

//   return tot;
// }, {});
// console.log(grouped);

// let mostRepeatedWord = "";
// let maxCount = 0;

// for (let word in grouped) {
//   if (grouped[word] > maxCount) {
//     maxCount = grouped[word];
//     mostRepeatedWord = word;
//   }
// }
// console.log(mostRepeatedWord, maxCount);

// ForLoop tasks

// 1)დაწერე ფუნქცია for loop-ის გამოყენებით, რომელიც დაითვლის რამდენჯერ გვხვდება კონკრეტული ასო მოცემულ სტრინგში.
// function countLetter(str, letter) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === letter) {
//       count++;
//     }
//   }
//   return count;
// }

// let sentence = "verylongsentence";
// console.log(countLetter(sentence, "e"));

// 2) დაწერე ფუნქცია, რომელიც შეამოწმებს არის თუ არა სტრინგი პალინდრომი (ეს სიტყვა თუ იკითხება ერთნაირად ესე იგი პალინდრომია.მაგალითად ana, abba,gig)

// function isPalindrome(str) {
//   let reversed = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return str === reversed;
// }

// console.log(isPalindrome("ana"));
// console.log(isPalindrome("abba"));
// console.log(isPalindrome("gig"));
// console.log(isPalindrome("hello"));

// 3)შექმენი ფუნქცია, რომელიც მიიღებს ორ რიცხვების მასივს, გააერთიანებს მათ, წაშლის დუბლიკატებს და დაითვლის ჯამს. გამოიყენე მასივის მეთოდები და ლოგიკური ოპერატორები საჭიროებისამებრ.

// function mergeUniqueSum(arr1, arr2) {
//   let merged = [...arr1, ...arr2];
//   let unique = [];

//   for (let i = 0; i < merged.length; i++) {
//     if (!unique.includes(merged[i])) {
//       unique.push(merged[i]);
//     }
//   }

//   let sum = 0;
//   for (let i = 0; i < unique.length; i++) {
//     sum += unique[i];
//   }

//   return { unique, sum };
// }

// console.log(mergeUniqueSum([1, 2, 3], [2, 3, 4, 5]));

//  4)შექმენი ფუნქცია ფაქტორიალის დასათვლელად.

// function factorial(n) {
//   let result = 1;
//   for (let i = 1; i <= n; i++) {
//     result *= i;
//   }
//   return result;
// }

// console.log(factorial(5));

// 5)Two Sum - მოძებნე მასივში ის წყვილები, რომელთა ჯამიც უდრის მოცემულ რიცხვს ანუ [1,2,3,4,5,6,-7,-8] ამ მასივს და -15 თუ გადავცემთ მან უნდა დააბრუნოს [6,7]
// function twoSum(arr, target) {
//   let pairs = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === target) {
//         pairs.push([arr[i], arr[j]]);
//       }
//     }
//   }
//   return pairs;
// }

// console.log(twoSum([1, 2, 3, 4, 5, 6, -7, -8], -15));
