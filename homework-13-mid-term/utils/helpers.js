export function toUpper(str) {
  return str.toUpperCase();
}

export function palindrom(str) {
  if (str === str.split("").reverse().join("")) {
    console.log("String is palindrom");
  } else {
    console.log("String is not palindrom");
  }
}

export function findLongestWord(str) {
  const newArr = str.split(" ");
  const sortedArr = newArr.sort((a, b) => a.length - b.length);
  const longestWord = sortedArr[sortedArr.length - 1];
  return longestWord;
}

export const paginate = (arr, page = 1, take = 10) => {
  const start = (page - 1) * take;
  return arr.slice(start, start + take);
};

export function filterUsers(users, id, name) {
  if (id) {
    return users.filter((u) => u.id === parseInt(id));
  } else if (name) {
    return users.filter((u) =>
      u.name.toLowerCase().includes(name.toLowerCase())
    );
  }
  return users;
}
