import express from "express";
import {
  getProductById,
  getProducts,
} from "../controllers/productController.js";

const router = express.Router();

// @desc Fetch all Products
//@route GET /api/products
//@access Public Route

router.route("/").get(getProducts);

// @desc Fetch Single Products
//@route GET /api/products/:id
//@access Public Route
router.route("/:id").get(getProductById);
export default router;
