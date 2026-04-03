import { create } from "zustand";

export const useProductStore = create((set) => ({
    products: [],
    setProducts: (products) => set({ products }),

    // Create Product Function
    createProduct: async (newProduct) => {
        if (!newProduct.name || !newProduct.price || !newProduct.image) {
            return { success: false, message: "Please Provide All Fields" }
        }
        const res = await fetch("http://localhost:5000/api/product", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newProduct)
        });
        const data = await res.json();
        // ✅ Guard against undefined data.data
        if (data.data) {
            set((state) => ({ products: [...state.products, data.data] }));
        }
        return { success: data.success, message: data.message };
    },

    // Get All Products Function
    fetchProducts: async () => {
        const res = await fetch("http://localhost:5000/api/products");
        const data = await res.json();
        // ✅ Fallback to empty array if data.data is missing
        set({ products: data.data ?? [] });
    },

    // Delete Product Function
    deleteProduct: async (id) => {
        const res = await fetch(`http://localhost:5000/api/product/${id}`, {
            method: "DELETE"
        });
        const data = await res.json();
        if (!data.success) {
            return { success: false, message: data.message };
        }
        set((state) => ({
            products: state.products.filter((product) => product._id !== id)
        }));
        return { success: true, message: data.message };
    },


    // Update Product Function
updateProduct: async (pid, updatedProduct) => {
    try {
        const res = await fetch(`http://localhost:5000/api/product/${pid}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedProduct),
        });

        const data = await res.json();
        console.log(data)
        if (!data.success || !data.data) {
            return { success: false, message: data.message || "Update failed" };
        }
        set((state) => ({
            products: state.products.map((product) =>
                product._id === pid ? data.data : product
            ),
        }));

        return { success: true, message: data.message };
    } catch (error) {
        console.error("updateProduct error:", error);
        return { success: false, message: "Network or server error" };
    }
},
}));