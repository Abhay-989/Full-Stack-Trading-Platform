
const { model } = require("mongoose");

const { OrdersSchema } = require("./OrdersSchema");
const OrdersModel = new model("order", OrdersSchema);

module.exports = { OrdersModel };
