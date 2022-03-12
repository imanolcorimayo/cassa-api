const {
    Product,
} = require("../db.js");

module.exports = {
    createProduct: async (req, res) => {
        const {
            name,
            type,
            price,
            quantity,
            buy_unit,
            sell_unit,
        }=req.body;

        try {
            const newProduct = await Product.create({
                name,
                type,
                price,
                quantity,
                buy_unit,
                sell_unit
            })

            if (newProduct) {
                res.status(200).send('Product was created!')
            } else {
                console.log(newProduct)
                res.status(501)
            }
        } catch (error) {
            console.error(error)
            res.status(501).send(error)
        }
    },
    getProducts: async (req, res) => {
        try {
            const products = await Product.findAll({});
            console.log(products)
            res.send(products)
        } catch (error) {
            console.log(error)
        }
    },
    deleteProduct: async (req, res) => {
    },
    updateProduct: async (req, res) => {
    },
}