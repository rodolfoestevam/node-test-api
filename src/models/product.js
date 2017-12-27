import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: false },
    price: { type: Number, required: true },
});

const Product = mongoose.model('Product', schema);

export default Product;