const { Sales } = require("../db.js");

module.exports = {
    createSale: async (req, res) => {
        const { products, client, total, status, details, paidWay, date } = req.body;

        // validations

        if (!products || !total || !status || !date) {
            return res.status(400).send("Error, faltan datos importantes en la compra");
        }

        // TODO reduce the stock depending the products and quantity
        try {
            const newSale = await Sales.create({
                products: JSON.stringify(products),
                client,
                total,
                status,
                details,
                date,
                paid_way: paidWay,
            });

            if (newSale) {
                res.status(200).send("Sale was created!");
            } else {
                console.log(newSale);
                res.status(501).send("Something wrong happens with db");
            }
        } catch (error) {
            console.error(error);
            res.status(404).send(error);
        }
    },
    getSales: async (req, res) => {
        try {
            const sales = await Sales.findAll({
                where: {
                    status: "paid out",
                },
            });
            res.status(200).send(sales);
        } catch (error) {
            console.log(error);
            res.status(404).send(error);
        }
    },
    getTrusted: async (req, res) => {
        try {
            const sales = await Sales.findAll({
                where: {
                    status: "trusted",
                },
            });
            res.status(200).send(sales);
        } catch (error) {
            console.log(error);
            res.status(404).send(error);
        }
    },
    deleteSale: async (req, res) => {
        const { id } = req.headers;
        try {
            const response = await Sales.destroy({
                where: { id },
            });
            if (response) {
                res.status(200).send("Sales was deleted");
            } else {
                res.status(404).send("Sales already deleted");
            }
        } catch (error) {
            res.status(501).send(error);
            console.error(error);
        }
    },
    updateSale: async (req, res) => {
        const { id, products, client, total, status, details, paidWay } = req.body;

        try {
            const sale = await Sales.findOne({
                where: { id },
            });
            if (sale) {
                sale.products = products ? products : sale.products;
                sale.client = client ? client : sale.client;
                sale.total = total ? total : sale.total;
                sale.status = status ? status : sale.status;
                sale.details = details ? details : sale.details;
                sale.paid_way = paidWay ? paidWay : sale.paid_way;
                sale.save();
                res.status(200).send("Product was updated!");
            } else {
                console.log(sale);
                res.status(404).send("The product that you trying to update is not in db or id is wrong");
            }
        } catch (error) {
            console.error(error);
            res.status(501).send(error);
        }
    },
};
