import mongoose from "mongoose";
import Product from "../Models/product.model.js";

// Adding a new product
const addProduct = async (req, res) => {
    const product = req.body;
    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({
            success: false,
            message: "Please provide all fields"
        })
    }
    const newProduct = new Product(product);
    try {
        await newProduct.save();
        res.status(200).json({
            success: true,
            message: "Product Created Successfully"
        })
    } catch (error) {
        console.error("Error in creating product")
        res.status(500).json({
            success: false,
            message: "Server Error"
        })
    }

}
// Get product
const getProduct = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({
            success: true,
            data: products
        })
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error"
        })
    }
}
// Delete a product
const deleteProduct = async (req, res) => {
    const id = req.params.id
    // console.log(mongoose.ObjectId.isValid(id))
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({
            success: false,
            message: "Invalid Product Id"
        })
    }
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({
            success: true,
            message: "Product Deleted"
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error"
        })
    }

}

// Update a product
const updateProduct = async (req, res) => {
    const id = req.params.id
    const product = req.body
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({
            success: false,
            message: "Invalid Product Id"
        })
    }
    try {

        const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true });

        res.status(200).json({
            success: true,
            message:"Product Updated Successfully",
             data: updatedProduct
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error"
        })
    }

}



export default { addProduct, getProduct, deleteProduct, updateProduct }