const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    product_name: {
        type: String,
        // required: true,
        required: [true, "Must Provide name"],
        trim: true,
        maxlength: [20, 'Name more than 20 characters not allowed']
    },
    product_category: {
        type: String,
        required: [true, "Must Provide name"],
        trim: true,
        maxlength: [20, 'Name more than 20 characters not allowed']
    },
    product_price:{
        type: Number,
        required: [true,'Must Provide name'],
        trim: true,
        
    }


});

module.exports = mongoose.model('Item', ItemSchema);