//redberry

// ოცემულია პაროლების მასივი:

// ```jsx
// const passwords = [
// "Hello123",
// "mypassword",
// "SecurePass!",
// "12345678",
// "Admin@2024",
// "weakpass",
// "Strong#Pass1",
// "password123",
// "Test$123",
// "simple"
// ];
// ```

// **1:** თითოეული პაროლისთვის შეამოწმე შეიცავს თუ არა ციფრს. დაბეჭდე კონსოლში პაროლი და "YES" ან "NO".

// const passwords = [
//   "Hello123",
//   "mypassword",
//   "SecurePass!",
//   "12345678",
//   "Admin@2024",
//   "weakpass",
//   "Strong#Pass1",
//   "password123",
//   "Test$123",
//   "simple",
// ];

// for (let el of passwords) {
//   const hasNumber = /\d/.test(el);
//   if (hasNumber) {
//     console.log(el, " Yes");
//   } else {
//     console.log(el, " NO");
//   }
// }

// **2:** დაითვალე რომელი სიმბოლოა (character) ყველაზე ხშირად გამოყენებული და დაბეჭდე კონსოლში.
// Messages addressed to "meeting group chat" will also appear in the meeting group chat in Team Chat
// let newArr = [];

// for (let el of passwords) {
//   newArr.push(el.split(""));
// }
// flattedArr = newArr.flat(Infinity);

// const counts = flattedArr.reduce((tot, curr) => {
//   tot[curr] = tot[curr] ? (tot[curr] += 1) : (tot[curr] = 1);
//   return tot;
// }, {});

// const sortedByValue = Object.entries(counts).sort((a, b) => a[1] - b[1]);

// console.log("Most used element", sortedByValue[sortedByValue.length - 1][0]);

// მოცემული გვაქვს ორი API:

// - Users: `https://jsonplaceholder.typicode.com/users`
// - Comments: `https://jsonplaceholder.typicode.com/comments`

// **1:** ორივე API-იდან წამოიღე ინფორმაცია და დაბეჭდე კონსოლში.

// **2**: HTML-ში შექმენი მომხმარებლების სია (პირველი 5 მომხმარებელი). თითოეულზე გამოაჩინე: სახელი, username, email, რამდენი კომენტარი აქვს დაწერილი.

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json()) // parse JSON
//   .then((data) => data.slice(0, 4).map((el) => console.log(el.name, el.email)))
//   .catch((error) => console.error("Error:", error));

//   async function fetchUsers() {
//   try {
//     let response = await fetch("https://jsonplaceholder.typicode.com/users");
//     let data = await response.json();
//     console.log((data) => data.slice(0, 4).map((el) => console.log(el.name, el.email);
//   } catch (error) {
//     console.log(error, "error");
//   }
// }

// async function getData() {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/comments"
//     );

//     // Always check if the response is OK (status 200–299)
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const data = await response.json(); // Parse JSON
//     console.log(data);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// }

// getData();

// Promise.allSettled([fetchPosts(), fetchUsers()]).then((response) =>
//   console.log(response)
// );
