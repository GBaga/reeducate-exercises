//api/products/products.route.js

import { Router } from "express";
import {
  getById,
  pagination,
  products,
  addProduct,
  deleteProduct,
  updateProduct,
} from "./products.service.js";
import { isAdmin } from "../../middleware/isAdmin.middleware.js";
import { isEditor } from "../../middleware/isEditor.middleware.js";

const productsRoute = Router();

productsRoute.get("/", pagination);

productsRoute.get("/:id", getById);

productsRoute.post("/", addProduct);

productsRoute.delete("/:id", isAdmin, deleteProduct);

productsRoute.put("/:id", isEditor, updateProduct);

export default productsRoute;
