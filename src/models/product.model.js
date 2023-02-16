const { Schema, model} = require('mongoose');
productSchema = new Schema({
    title: String,
    price: Number,
    image: String,
    description: String,
    quantity: Number,
},
{
    timestamps: true, 
    versionKeys: false
});

module.exports = model('product', productSchema);