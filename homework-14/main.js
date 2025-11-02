// შექმენი შენი სერვერი express-ის დახმარებით. ააწყე User-ის CRUD, რომელსაც ექნება:
// დამატება,წაშლა,აფდეითი,id-ის მიხედვით ინფორმაციის წამოღება,ფეჯინეიშენი,სექრეთ როუტი,
// age და name იყოს აუცილებელი ფილდი, ხოლო email და eyeColor ოფშენალი.
// ასევე არუნდა შეეძლოს 30 წელზე მეტის დარექვესტება და 10 წელზე ნაკლების.

import express from "express";
const app = express();

const PORT = 3030;

app.use(express.json());

const users = [
  { id: 1, name: "Kate", age: 23, eyeColor: "blue", email: "kate@test.com" },
  { id: 2, name: "Luka", age: 29, eyeColor: "green", email: "luka@test.com" },
  {
    id: 3,
    name: "Mariam",
    age: 26,
    eyeColor: "brown",
    email: "mariam@test.com",
  },
  { id: 4, name: "David", age: 31, eyeColor: "gray", email: "david@test.com" },
  { id: 5, name: "Nino", age: 22, eyeColor: "hazel", email: "nino@test.com" },
  {
    id: 6,
    name: "Sandro",
    age: 28,
    eyeColor: "blue",
    email: "sandro@test.com",
  },
  { id: 7, name: "Ana", age: 25, eyeColor: "green", email: "ana@test.com" },
  {
    id: 8,
    name: "Irakli",
    age: 34,
    eyeColor: "brown",
    email: "irakli@test.com",
  },
  {
    id: 9,
    name: "Salome",
    age: 27,
    eyeColor: "gray",
    email: "salome@test.com",
  },
  {
    id: 10,
    name: "Giorgi",
    age: 30,
    eyeColor: "blue",
    email: "giorgi@test.com",
  },
  {
    id: 11,
    name: "Tamar",
    age: 24,
    eyeColor: "hazel",
    email: "tamar@test.com",
  },
  { id: 12, name: "Beka", age: 32, eyeColor: "green", email: "beka@test.com" },
  {
    id: 13,
    name: "Elene",
    age: 21,
    eyeColor: "brown",
    email: "elene@test.com",
  },
  { id: 14, name: "Nika", age: 35, eyeColor: "gray", email: "nika@test.com" },
  { id: 15, name: "Sofia", age: 23, eyeColor: "blue", email: "sofia@test.com" },
];

app.get("/users", (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const take = parseInt(req.query.take) || 10;

  const paginate = (arr, page = 1, take = 10) => {
    const start = (page - 1) * take;
    return arr.slice(start, start + take);
  };

  const paginatedUsers = paginate(users, page, take);

  res.json({
    page,
    perPage: take,
    total: users.length,
    totalPages: Math.ceil(users.length / take),
    data: paginatedUsers,
  });
});

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  const findUser = users.find((el) => el.id === Number(id));
  if (!findUser) {
    return res.status(404).json({ message: "id is invalid" });
  }
  res.json({ message: "Success" });

  console.log(findUser);
});

app.post("/users", (req, res) => {
  const { name, age, eyeColor, email } = req.body;
  if (!name || !age) {
    return res.status(400).json({ message: "name and age are required" });
  } else if (age > 30 || age < 10) {
    return res.status(400).json({ message: "age must be between 10 to 30" });
  }
  const lastID = users[users.length - 1]?.id || 0;
  const newObj = {
    id: lastID + 1,
    name,
    age,
    eyeColor,
    email,
  };

  users.push(newObj);

  res.json({ message: "added", users });
});

app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  const findIndex = users.findIndex((el) => el.id === Number(id));
  if (findIndex === -1) {
    return res.status(404).json({ message: "id is invalid" });
  }

  const deleteUser = users.splice(findIndex, 1);

  res.json({ message: "deleted successfully", data: deleteUser });
});

app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { name, age, eyeColor, email } = req.body;
  const findIndex = users.findIndex((el) => el.id === Number(id));
  if (findIndex === -1) {
    return res.status(404).json({ message: "id is invalid" });
  }

  if (age > 30 || age < 10) {
    return res.status(400).json({ message: "age must be between 10 to 30" });
  }

  users[findIndex] = { ...users[findIndex], name, age, eyeColor, email };

  res.json({ message: "updated successfully", data: users[findIndex] });
});

app.get("/secret", (req, res) => {
  const secretKey = req.headers.secret;

  if (!secretKey || secretKey !== "123") {
    return res.status(403).json({ message: "anauth", data: "No info" });
  }
  res.json("You got info");
});

app.listen(PORT, () => {
  console.log(`server running on http:localhost${PORT}`);
});
