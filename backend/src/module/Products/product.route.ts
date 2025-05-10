import express from 'express';
import { ProductController } from './product.controller';
import auth from '../../app/middlewares/auth';

const router = express.Router();

router.post('/create-product', ProductController.createProduct);
router.get('/:product', ProductController.getSingleProduct);
router.delete('/:product', ProductController.deleteProduct);
router.put('/:product', ProductController.updateProduct);
 router.get('/', ProductController.getProduct);
 // router.get('/', auth(), ProductController.getProduct);


export const ProductRouters = router;
