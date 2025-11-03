//api/products/products.service.js

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 100,
    category: "Electronics",
    isExpire: false,
  },
  { id: 2, name: "Milk", price: 3.5, category: "Dairy", isExpire: true },
  {
    id: 3,
    name: "Headphones",
    price: 85,
    category: "Electronics",
    isExpire: false,
  },
  { id: 4, name: "Bread", price: 2.2, category: "Bakery", isExpire: true },
  { id: 5, name: "T-Shirt", price: 25, category: "Clothing", isExpire: false },
  { id: 6, name: "Apples", price: 4.5, category: "Fruits", isExpire: true },
  { id: 7, name: "Desk Lamp", price: 40, category: "Home", isExpire: false },
  { id: 8, name: "Toothpaste", price: 5.2, category: "Health", isExpire: true },
  { id: 9, name: "Book", price: 18, category: "Stationery", isExpire: false },
  { id: 10, name: "Yogurt", price: 2.8, category: "Dairy", isExpire: true },
];

const pagination = (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const take = parseInt(req.query.take) || 10;

  const paginate = (arr, page = 1, take = 10) => {
    const start = (page - 1) * take;
    return arr.slice(start, start + take);
  };

  const paginatedProducts = paginate(products, page, take);

  res.json({
    page,
    perPage: take,
    total: products.length,
    totalPages: Math.ceil(products.length / take),
    data: paginatedProducts,
  });
};

const getById = (req, res) => {
  const { id } = req.params;
  const product = products.find((el) => el.id === Number(id));

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.json({ message: "Success", data: product });
};

const addProduct = (req, res) => {
  const { name, price, category, isExpire } = req.body;
  if (!name || price == null || !category || isExpire == null) {
    return res.status(400).json({
      message: "name, price, category and expiration date are required",
    });
  } else if (price > 200) {
    return res.status(400).json({ message: "price must be under 200" });
  }
  const lastID = products[products.length - 1]?.id || 0;
  const newProduct = {
    id: lastID + 1,
    name,
    price,
    category,
    isExpire,
  };

  products.push(newProduct);

  res.json({ message: "added", newProduct });
};

const deleteProduct = (req, res) => {
  const { id } = req.params;

  const findIndex = products.findIndex((el) => el.id === Number(id));
  if (findIndex === -1) {
    return res.status(404).json({ message: "id is invalid" });
  }

  const deletedProduct = products.splice(findIndex, 1);

  res.json({ message: "deleted successfully", data: deletedProduct });
};

const updateProduct = (req, res) => {
  const { id } = req.params;
  const { name, price, category, isExpire } = req.body;
  const findIndex = products.findIndex((el) => el.id === Number(id));
  if (findIndex === -1) {
    return res.status(404).json({ message: "id is invalid" });
  }

  if (price > 200) {
    return res.status(400).json({ message: "price must be below 200" });
  }

  products[findIndex] = {
    ...products[findIndex],
    name,
    price,
    category,
    isExpire,
  };

  res.json({ message: "updated successfully", data: products[findIndex] });
};

export {
  products,
  getById,
  pagination,
  addProduct,
  deleteProduct,
  updateProduct,
};
