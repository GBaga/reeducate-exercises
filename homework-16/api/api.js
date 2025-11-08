import { Router } from "express";
import ordersRouter from "./routes/orders.routes.js";

const apiRouter = Router();

apiRouter.use("/orders", ordersRouter);

apiRouter.get("/", (req, res) => {
  res.send("Welcome to the API root router");
});

export default apiRouter;
