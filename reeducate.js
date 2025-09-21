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
