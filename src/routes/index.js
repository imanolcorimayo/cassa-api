const { Router } = require("express");

const product = require("./product.js");
const sales = require("./sales.js");

const router = Router();

router.use("/product", product);
router.use("/sales", sales);

module.exports = router;
