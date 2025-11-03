// შექმენი შენი სერვერი express-ის დახმარებით. ააწყე Products-ის CRUD,
// რომელსაც ექნება:დამატება,წაშლა,აფდეითი,id-ის მიხედვით ინფორმაციის წამოღება,
// ფეჯინეიშენი,სექრეთ როუტი,price, category ,isExpire  და name უნდა იყოს აუცილებელი ფილდი.
// ასევე არუნდა შეეძლოს price > 200 მეტის დარექვესტება.დაამტე Routes,Services და
// middleWare[isadmin-ს უნდა შეეძლოს წაშლა და აფეითი. isEditor-ს მარტო აფდეითი.
//     ასევე გლობალური logger მიდლვეარიც დაამატე].

//main.js

import express from "express";
import apiRouter from "./api/api.js";
import secretRoute from "./api/secret/secret.route.js";
import logger from "./middleware/logger.middleware.js";

const app = express();

const PORT = 3030;

app.use(express.json());
app.use(logger);

app.use("/api", apiRouter);

app.use("/secret", secretRoute);

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
