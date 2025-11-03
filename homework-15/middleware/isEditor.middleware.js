export const isEditor = (req, res, next) => {
  const role = req.headers.role;
  if (role !== "admin" && role !== "editor") {
    return res
      .status(403)
      .json({ message: "Access denied: Editor or Admin required" });
  }
  next();
};
