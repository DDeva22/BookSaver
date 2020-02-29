const router = require("express").Router();
const bookRoutes = require("./booksAPIRoute.js");

// Book routes
router.use("/books", bookRoutes);

module.exports = router;
