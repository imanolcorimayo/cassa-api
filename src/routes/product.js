const { Router } = require("express");
const router = Router();
const functions = require('../controllers/product')

// POST
router.post('/', functions.createProduct)

// GET
router.get('/succes', functions.getProducts)

// UPDATE
router.put('/', functions.updateProduct)

// DELETE
router.delete('/succes', functions.deleteProduct)

module.exports= router;