//=================================================================================== დავალება 9

// 1)დაწერე ფუქნცია რომელიც გაფილტრავს ლუწებზე და იპოვი მათ საშუალოს [1,2,3,4,5,6]
// let arr1 = [1, 2, 3, 4, 5, 6];
// function calculateAverage(arr) {
//   const filtered = arr.filter((el) => el % 2 === 0);
//   const sum = filtered.reduce((tot, curr) => {
//     return (tot += curr);
//   }, 0);
//   const average = sum / filtered.length;
//   return average;
// }
// console.log(calculateAverage(arr1));

// 2)დაწერე ფუნქცია, რომელიც დათვლის სიტყვების რაოდენობას წინადადებაში.
// let sentence = "I love JavaScript";

// function calculateWords(sentence) {
//   const splittedSentence = sentence.split(" ");
//   console.log(splittedSentence.length);
// }

// calculateWords(sentence);

// 3) დაწერე ფუნქიცა რომელიც დააბრუნებს true თუ რიცხვი მარტივია თუ არადა false.
// let num = 4;

// function numCategory(num) {
//   if (num <= 1) {
//     return false;
//   }
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(numCategory(4));
// console.log(numCategory(1));
// console.log(numCategory(2));
// console.log(numCategory(6));
// console.log(numCategory(13));

// 4) let words = ["dog", "elephant", "cat", "hippopotamus"] იპოვე ყველაზე გრძელი ისტყვა
// let words = ["dog", "elephant", "cat", "hippopotamus"];
// let sorted = words.sort((a, b) => a.length - b.length);
// console.log(sorted[sorted.length - 1]);

// 5)let arr = [3, 5, 3, 2, 5, 5, 3, 5] დააბრუნე ისეთი რიცხვი რომელიც მეორდება უფრო მეტჯერ
// let arr = [3, 5, 3, 2, 5, 5, 3, 5];
// let grouped = arr.reduce((tot, curr) => {
//   if (tot[curr]) {
//     tot[curr] += 1;
//   } else {
//     tot[curr] = 1;
//   }

//   return tot;
// }, {});
// // console.log(grouped);

// let mostRepeatedNum = "";
// let maxCount = 0;

// for (let num in grouped) {
//   if (grouped[num] > maxCount) {
//     maxCount = grouped[num];
//     mostRepeatedNum = num;
//   }
// }
// console.log(mostRepeatedNum);
// 6)let nums = [1, 2, 3, 4, 5, 6, 7, 8] დაწერე ფუქნცია რომელიც დაითვლის რამდენი ლუწი და რამდენი კენტი რიცხვია
// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9];

// function evenOddNum(num) {
//   let even = 0;
//   let odd = 0;

//   for (let i = 1; i <= num.length; i++) {
//     if (num === 0) {
//       console.log("number is zero");
//     } else if (num[i] % 2 === 0) {
//       even++;
//     } else {
//       odd++;
//     }
//   }
//   console.log("even: ", even, " odd: ", odd);
// }
// evenOddNum(nums);

// 7)let nums = [10, 2, 33, 5, 7] დაწერე ფუქნცია როემლიც დააბრუენბს ყველაზე პატარა რიცხვს
// let nums = [10, 2, 33, 5, 7];

// function smallest(num) {
//   console.log(num.sort((a, b) => a - b)[0]);
// }

// smallest(nums);
