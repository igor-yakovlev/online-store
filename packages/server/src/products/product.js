const mongoose = require("mongoose")

const schema = mongoose.Schema({
    name: String,
    description: String,
    params: {
        price: Number,
        cpu: String,
    },
})

module.exports = mongoose.model("Product", schema)
