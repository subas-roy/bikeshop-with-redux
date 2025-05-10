import { Schema, model } from 'mongoose';
import { IProduct } from './product.interface';

const productSchema = new Schema<IProduct>(
  {
    name: {
      type: String,
      required: [true, 'Product name is required'],
      trim: true,
    },
    brand: {
      type: String,
      required: [true, 'Brand is required'],
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
      min: [0, 'Price must be greater than 0'],
    },
    model: {
      type: String,
      required: [true, 'Model is required'],
    },
    stock: {
      type: Number,
      required: [true, 'Stock is required'],
      min: [0, 'Stock cannot be negative'],
    },
    photo: {
      type: String,
      
    },
    photo1: {
      type: String,
      
    },
    photo2: {
      type: String,
      
    },
  },
  {
    timestamps: true,
  }
);

const ProductModel = model<IProduct>('Product', productSchema);

export default ProductModel;
