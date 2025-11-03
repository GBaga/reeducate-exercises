//api/api.js
import { Router } from "express";
import productsRoute from "./products/products.route.js";

const apiRouter = Router();

apiRouter.use("/products", productsRoute);

apiRouter.get("/", (req, res) => {
  res.send("Welcome to the API root route");
});

export default apiRouter;
