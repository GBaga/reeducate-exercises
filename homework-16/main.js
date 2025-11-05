// შექმენი შენი სერვერი express-ის დახმარებით. ააწყე Orders-ის CRUD,
// რომელსაც ექნება: დამატება, წაშლა, აფდეითი, id-ის მიხედვით ინფორმაციის წამოღება,
// ფეჯინეიშენი, სექრეთ როუტი, და შემდეგი ფილდები: productName, quantity, totalPrice, status.
// productName უნდა იყოს აუცილებელი ფილდი.
// ასევე არ უნდა შეეძლოს შეკვეთის დამატება, თუ quantity > 10 ან totalPrice > 500.
// დაამატე Routes, Services და Middleware ფოლდერები.
// [isAdmin-ს უნდა შეეძლოს წაშლა და აფდეითი, ხოლო isEditor-ს მხოლოდ status-ის შეცვლა.
// ასევე დაამატე გლობალური logger middleware, რომელიც ლოგავს ყველა მოთხოვნას (method + url + დრო)]

import express from "express";

const app = express();
app.use(express.json());

const PORT = 3030;

const orders = [
  {
    id: 1,
    productName: "Laptop",
    quantity: 1,
    totalPrice: 1200,
    status: "Delivered",
  },
  {
    id: 2,
    productName: "Wireless Mouse",
    quantity: 2,
    totalPrice: 50,
    status: "Shipped",
  },
  {
    id: 3,
    productName: "Bluetooth Headphones",
    quantity: 1,
    totalPrice: 80,
    status: "Processing",
  },
  {
    id: 4,
    productName: "Smartphone",
    quantity: 1,
    totalPrice: 900,
    status: "Delivered",
  },
  {
    id: 5,
    productName: "USB-C Cable",
    quantity: 3,
    totalPrice: 30,
    status: "Pending",
  },
  {
    id: 6,
    productName: "Office Chair",
    quantity: 1,
    totalPrice: 150,
    status: "Delivered",
  },
  {
    id: 7,
    productName: "Gaming Keyboard",
    quantity: 1,
    totalPrice: 100,
    status: "Cancelled",
  },
  {
    id: 8,
    productName: "Monitor 24-inch",
    quantity: 2,
    totalPrice: 400,
    status: "Shipped",
  },
  {
    id: 9,
    productName: "External Hard Drive",
    quantity: 1,
    totalPrice: 120,
    status: "Processing",
  },
  {
    id: 10,
    productName: "Desk Lamp",
    quantity: 2,
    totalPrice: 60,
    status: "Delivered",
  },
];

app.get("/orders", (req, res) => {
  res.json(orders);
});

app.get("/orders/:id", (req, res) => {
  const id = req.params.id;
  const order = orders.find((el) => el.id === Number(id));

  if (!order) {
    return res.status(404).json({ message: "order not found" });
  }
  res.json({ message: "Success", data: order });
});

app.post("/orders", (req, res) => {
  const { productName, quantity, totalPrice, status } = req.body;
  const lastID = orders[orders.length - 1]?.id || 0;

  if (!productName) {
    return res.json({ message: "productName is required" });
  } else if (quantity > 10 || totalPrice > 500) {
    return res.json({
      message: " quantity has to be under 10 and totalPrice under 500",
    });
  }

  const newOrder = {
    id: lastID + 1,
    productName,
    quantity,
    totalPrice,
    status,
  };

  orders.push(newOrder);

  res.json({ message: "New order added", data: newOrder });
});

app.delete("/orders/:id", (req, res) => {
  const { id } = req.params;
  const findOrderIndex = orders.findIndex((el) => el.id === Number(id));
  const deletedOrders = orders.splice(findOrderIndex, 1);
  if (!findOrderIndex) {
    return res.status(404).json({ message: "order not found" });
  }

  res
    .status(200)
    .json({ message: "Order deleted successfully", data: deletedOrders });
});

app.listen(PORT, () => {
  console.log(`servers running on the http//localhost:${PORT}`);
});
