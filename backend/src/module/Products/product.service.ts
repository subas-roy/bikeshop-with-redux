import { IProduct } from './product.interface';
import ProductModel from './product.model';

const createProductToDB = async (payload: IProduct) => {
  const data = new ProductModel(payload);
  const result = await data.save();
  return result;
};

const getProductToDB = async (filters: any) => {
  const { search, brand, category, model, minPrice, maxPrice, available } =
    filters;

  const query: any = {};

  if (search) {
    query.$or = [
      { name: { $regex: search, $options: 'i' } },
      { brand: { $regex: search, $options: 'i' } },
      { category: { $regex: search, $options: 'i' } },
    ];
  }

  if (brand) query.brand = brand;
  if (category) query.category = category;
  if (model) query.model = model;
  if (available !== undefined) query.available = available === 'true';

  if (minPrice || maxPrice) {
    query.price = {};
    if (minPrice) query.price.$gte = Number(minPrice);
    if (maxPrice) query.price.$lte = Number(maxPrice);
  }

  const result = await ProductModel.find(query);
  return result;
};

const getSingleProductToDB = async (id: string) => {
  console.log("Searching for id:", id);
  const result = await ProductModel.findById(id);
  console.log("Result:", result);
  return result;
};


const updateProductToDB = async (id: string, payload: Partial<IProduct>) => {
  const result = await ProductModel.findByIdAndUpdate( id , payload);
  return result;
};

const deleteProductToDB = async (id: string) => {
  const result = await ProductModel.findByIdAndDelete(id);
  return result;
};

export const ProductService = {
  createProductToDB,
  getProductToDB,
  getSingleProductToDB,
  updateProductToDB,
  deleteProductToDB,
};
