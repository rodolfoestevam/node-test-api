import express from 'express'
const router = express.Router();

app.get('/products', (req, res) => res.send(
    [{
        name: 'Default Product',
        description: 'A description for non product',
        price: 100
    }]
));
