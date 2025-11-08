function logger(req, res, next) {
  const now = new Date();
  const time = now.toLocaleString();
  console.log(`[${time}] ${req.method} ${req.url}`);
  next();
}

export default logger;
