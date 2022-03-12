const { Router } = require("express");

const product = require('./product.js')

const router = Router();

router.use("/product", product)

module.exports = router;
