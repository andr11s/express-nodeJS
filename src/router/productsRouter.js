
const express = require('express');
const router = express.Router();
const productsController = require("./../controller/products/productsController");
const { validateCheckApiKey } = require('../middleware/auth/auth');

router.get("/", validateCheckApiKey, productsController.getProducts);
router.get("/:id", productsController.getProductId);
router.post("/", productsController.saveProduct);
router.put("/:id", productsController.update);

module.exports = router;
