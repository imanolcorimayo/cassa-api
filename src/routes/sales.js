const { Router } = require("express");
const router = Router();
const functions = require("../controllers/sales");

// ROUTE: /sales

// POST
router.post("/", functions.createSale);

// GET
router.get("/", functions.getSales);
router.get("/trusted", functions.getTrusted);

// UPDATE
router.put("/", functions.updateSale);

// DELETE
router.delete("/", functions.deleteSale);

module.exports = router;
