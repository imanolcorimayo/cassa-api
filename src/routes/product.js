const { Router } = require("express");
const router = Router();
const functions = require('../controllers/product')

// ROUTE: /product

// POST
router.post('/', functions.createProduct)

// GET
router.get('/', functions.getProducts)

// UPDATE
router.put('/', functions.updateProduct)

// DELETE
router.delete('/', functions.deleteProduct)

module.exports= router;