import express from 'express';


const router = express.Router();
const productsController = new productsController();

router.get('/', (req, res) => productsController.get(req, res));

export default router;