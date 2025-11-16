// შექმენი პროდუქტის CRUD სისტემა MongoDB-ის დახმარებით (npm i mongoose). უნდა არსებობდეს შემდეგი endpoint-ები:
// GET (ყველა პროდუქტი), GET/:id (ID-ით პოვნა), POST (შექმნა), PUT (განახლება), DELETE (წაშლა) + pagination (/products?page=1&limit=5).
// მოდელის ველები უნდა იყოს: name, price, category, description - მხოლოდ description უნდა იყოს optional.
// დაამატე check  - minprice(2) და maxprice(4000).
// Update-ის დროს (PUT) body ველები უნდა იყოს სავალდებულო.
// პროექტის root დონის დირექტორიაში შექმენი .env ფაილი, სადაც განთავსებული იქნება MONGO_URI=<შენი MongoDB ბმული>.
// შემდეგ გამოიყენე mongoose.connect(process.env.MONGO_URI) მონაცემთა ბაზასთან დასაკავშირებლად.
// თუ კავშირისას პრობლემა შეგექმნება, მოძებნე გადაჭრა (მინიშნება: CLI tool-ის მეშვეობით)

import express from "express";
import connectDB from "./config/connectToMongoDB.js";
import productRouter from "./routes/product.route.js";
import dotenv from "dotenv";

const app = express();
app.use(express.json());
const PORT = 3030;
dotenv.config();

connectDB();

app.get("/", (req, res) => {
  res.send("this is route");
});

app.use("/products", productRouter);

app.listen(PORT, () => {
  console.log(`Server running on localhost${PORT} `);
});
