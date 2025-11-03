//api/secret/secret.route.js

import { Router } from "express";

const secretRoute = Router();

secretRoute.get("/", (req, res) => {
  const secretKey = req.headers.secret;

  if (!secretKey || secretKey !== "123") {
    return res.status(403).json({ message: "unauthorized", data: "No info" });
  }
  res.json("You got info");
});

export default secretRoute;
