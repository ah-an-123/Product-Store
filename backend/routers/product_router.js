import express from "express";
const productRouter = express.Router();
// Import controller
import productController from "../controllers/product_controller.js";

// Creating a product
productRouter.route("/product").post(productController.addProduct)
productRouter.route("/products").get(productController.getProduct)
productRouter.route("/product/:id").delete(productController.deleteProduct)
productRouter.route("/product/:id").put(productController.updateProduct)

export default productRouter;
