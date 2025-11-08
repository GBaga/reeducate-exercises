import { Router } from "express";

const secretRouter = Router();

secretRouter.get("/", (req, res) => {
  const secret = req.headers.secret;

  if (secret === "123") {
    res.send("You got the secret route");
  } else {
    res.send("Secret is not for you");
  }
});

export default secretRouter;
