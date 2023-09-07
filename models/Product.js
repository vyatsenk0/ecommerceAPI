const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    //id: { type: Number, required: true },
    title: {type: String, required: true},
    desc: {type: String, required: false},
    img: {type: String, required: false},
    category: {type: Array},
    brand: {type: Array},
    price: {type: Number},
    
}, {timestamps: true}
)

module.exports = mongoose.model('Product', ProductSchema)