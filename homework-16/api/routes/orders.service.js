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

export const pagination = (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const take = parseInt(req.query.take) || 3;

  const paginate = (arr, page = 1, take = 3) => {
    const start = (page - 1) * take;
    return arr.slice(start, start + take);
  };

  const paginatedOrders = paginate(orders, page, take);

  res.json({
    page,
    perPage: take,
    total: orders.length,
    totalPages: Math.ceil(orders.length / take),
    data: paginatedOrders,
  });
};

export const getOrderById = (req, res) => {
  const id = req.params.id;
  const order = orders.find((el) => el.id === Number(id));

  if (!order) {
    return res.status(404).json({ message: "order not found" });
  }
  res.json({ message: "Success", data: order });
};

export const addOrder = (req, res) => {
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
};

export const deleteOrderById = (req, res) => {
  const { id } = req.params;
  const findOrderIndex = orders.findIndex((el) => el.id === Number(id));
  const deletedOrders = orders.splice(findOrderIndex, 1);
  if (!findOrderIndex) {
    return res.status(404).json({ message: "order not found" });
  }

  res
    .status(200)
    .json({ message: "Order deleted successfully", data: deletedOrders });
};

export const updateOrderById = (req, res) => {
  const { id } = req.params;
  const findOrderIndex = orders.findIndex((el) => el.id === Number(id));

  const { productName, quantity, totalPrice, status } = req.body;

  orders[findOrderIndex] = {
    ...orders[findOrderIndex],
    productName,
    quantity,
    totalPrice,
    status,
  };

  res.json({ message: "updated successfully", data: orders[findOrderIndex] });
};
