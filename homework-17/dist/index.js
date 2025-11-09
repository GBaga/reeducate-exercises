// 1)გაიარეთ რეგისტრაცია mongoDB-ზე დააგენერირეთ connect link და დაქონექთდით ბაზასთან.(npm i mongoose express)
// mongodb+srv://admin:admin@reeducate-homework17.opi9pao.mongodb.net/?appName=reeducate-homework17
import express from "express";
import mongoose from "mongoose";
const app = express();
const PORT = 3030;
app.get("/", (req, res) => {
    res.send("Hello TypeScript + Node + ESM!");
});
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
const uri = "mongodb+srv://admin:admin@reeducate-homework17.opi9pao.mongodb.net/?appName=reeducate-homework17";
async function connectDB() {
    try {
        await mongoose.connect(uri);
        console.log("Connected to MongoDB!");
    }
    catch (error) {
        console.error("Failed to connect to MongoDB:", error);
    }
}
connectDB();
// 2)შექმენი პროგრამა, რომელიც ამატებს მომხმარებლის სახელს და ასაკს და აბრუნებს ტექსტს User Nika is 22 years old.
function userName(user, age) {
    console.log(`User ${user} is ${age} years old`);
}
userName("Nika", 22);
const products = [
    { name: "Laptop", price: 50, quantity: 2 },
    { name: "Mouse", price: 15, quantity: 3 },
    { name: "Keyboard", price: 25, quantity: 1 },
];
const totalPrice = products.reduce((sum, product) => {
    return sum + product.price * product.quantity;
}, 0);
console.log(`Total Price: ${totalPrice}`);
if (totalPrice > 100) {
    console.log("Discount available!");
}
const hero1 = {
    name: "Batman",
    age: 15,
    power: "Stealth",
};
function levelUp(hero) {
    if (hero.age > 30) {
        hero.level = "Pro";
    }
    else {
        hero.level = "Newbie";
    }
    console.log(`${hero.name} is now level: ${hero.level}`);
}
levelUp(hero1);
// 5)დაწერე generic ფუნქცია, რომელიც აბრუნებს მასივის პირველ ელემენტს.
const productsArr = [
    { name: "Laptop", price: 50, quantity: 2 },
    { name: "Mouse", price: 15, quantity: 3 },
    { name: "Keyboard", price: 25, quantity: 1 },
];
function getFirstElement(arr) {
    return arr[0];
}
console.log("პირველი ელემენტი: ", getFirstElement(productsArr));
//# sourceMappingURL=index.js.map