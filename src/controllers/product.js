const { Product } = require("../db.js");

module.exports = {
    createProduct: async (req, res) => {
        const { name, category, buyPrice, sellPrice, quantity, buyUnit, sellUnit } = req.body;

        try {
            const newProduct = await Product.create({
                name,
                type: category,
                buy_price: buyPrice,
                sell_price: sellPrice,
                quantity,
                buy_unit: buyUnit,
                sell_unit: sellUnit,
            });

            if (newProduct) {
                res.status(200).send("Product was created!");
            } else {
                console.log(newProduct);
                res.status(501).send("Something wrong happens with db");
            }
        } catch (error) {
            console.error(error);
            res.status(501).send(error);
        }
    },
    getProducts: async (req, res) => {
        try {
            const products = await Product.findAll({});
            res.status(200).send(products);
        } catch (error) {
            console.log(error);
            res.status(404).send(error);
        }
    },
    deleteProduct: async (req, res) => {
        const { id } = req.headers;
        try {
            const response = await Product.destroy({
                where: { id },
            });
            if (response) {
                res.status(200).send("Product was deleted");
            } else {
                res.status(404).send("Product already deleted");
            }
        } catch (error) {
            res.status(501).send(error);
            console.error(error);
        }
    },
    updateProduct: async (req, res) => {
        const { id, name, category, buyPrice, sellPrice, quantity, buyUnit, sellUnit } = req.body;

        try {
            const product = await Product.findOne({
                where: { id },
            });
            if (product) {
                product.name = name ? name : product.name;
                product.type = category ? category : product.type;
                product.buy_price = buyPrice ? buyPrice : product.buy_price;
                product.sell_price = sellPrice ? sellPrice : product.sell_price;
                product.quantity = quantity ? quantity : product.quantity;
                product.buy_unit = buyUnit ? buyUnit : product.buy_unit;
                product.sell_unit = sellUnit ? sellUnit : product.sell_unit;
                product.save();
                res.status(200).send("Product was updated!");
            } else {
                console.log(product);
                res.status(501).send("Something wrong happens with db");
            }
        } catch (error) {
            console.error(error);
            res.status(501).send(error);
        }
    },
};
