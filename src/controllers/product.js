const {
    Product,
} = require("../db.js");

module.exports = {
    createProduct: async (req, res) => {
        const {
            name,
            category,
            buyPrice,
            sellPrice,
            quantity,
            buyUnit,
            sellUnit,
        }=req.body;

        try {
            const newProduct = await Product.create({
                name,
                type: category,
                buy_price: buyPrice,
                sell_price: sellPrice,
                quantity,
                buy_unit: buyUnit,
                sell_unit: sellUnit, 
            })

            if (newProduct) {
                res.status(200).send('Product was created!')
            } else {
                console.log(newProduct)
                res.status(501).send("Something wrong happens with db")
            }
        } catch (error) {
            console.error(error)
            res.status(501).send(error)
        }
    },
    getProducts: async (req, res) => {
        try {
            const products = await Product.findAll({});
            res.status(200).send(products)
        } catch (error) {
            console.log(error)
            res.status(404).send(error)
        }
    },
    deleteProduct: async (req, res) => {
    },
    updateProduct: async (req, res) => {
    },
}