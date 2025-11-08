import { Router } from "express";
import {
  addOrder,
  deleteOrderById,
  getOrderById,
  updateOrderById,
  pagination,
} from "./orders.service.js";
import isAdmin from "../../middleware/isAdmin.middleware.js";
import isEditor from "../../middleware/isEditor.middleware.js";

const ordersRouter = Router();

ordersRouter.get("/", pagination);

ordersRouter.get("/:id", getOrderById);

ordersRouter.post("", addOrder);

ordersRouter.delete("/:id", isAdmin, deleteOrderById);

ordersRouter.put("/:id", isEditor, updateOrderById);

export default ordersRouter;
