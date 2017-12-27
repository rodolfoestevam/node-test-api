import express from 'express';


const router = express.Router();

router.get('/', (req, res) => res.send(
    [{
        name: 'Default Product',
        description: 'A description for non product',
        price: 100
    }]
));

export default router;