/* eslint-disable @typescript-eslint/no-unused-vars */
// components/ProductEditForm.tsx
import { useState } from "react";
import { useUpdateProductMutation } from "../redux/features/Products/productApi";
import { toast } from "sonner";

type TProduct = {
  _id: string;
  name: string;
  brand: string;
  price: number;
  model: string;
  stock: number;
  photo: string;
  photo1: string;
  photo2: string;
};

type Props = {
  product: TProduct;
  onClose: () => void;
};

const ProductEditForm = ({ product, onClose }: Props) => {
  const [formData, setFormData] = useState({ ...product });
  const [updateProduct] = useUpdateProductMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateProduct({ id: product._id, data: formData }).unwrap();
      toast.success("Product updated successfully");
      
      onClose();
    } catch (err) {
      toast.error("Failed to update product");
    }
  };

  return (
    <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded w-[400px]">
        <h2 className="text-xl font-semibold mb-4">Edit Product</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input className="input input-bordered w-full" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
          <input className="input input-bordered w-full" name="brand" value={formData.brand} onChange={handleChange} placeholder="Brand" />
          <input className="input input-bordered w-full" name="price" type="number" value={formData.price} onChange={handleChange} placeholder="Price" />
          <input className="input input-bordered w-full" name="model" value={formData.model} onChange={handleChange} placeholder="Model" />
          <input className="input input-bordered w-full" name="stock" type="number" value={formData.stock} onChange={handleChange} placeholder="Stock" />
          <input className="input input-bordered w-full" name="photo" value={formData.photo} onChange={handleChange} placeholder="Photo URL" />
          <input className="input input-bordered w-full" name="photo1" value={formData.photo1} onChange={handleChange} placeholder="Photo URL" />
          <input className="input input-bordered w-full" name="photo2" value={formData.photo2} onChange={handleChange} placeholder="Photo URL" />
          <div className="flex justify-end space-x-2">
            <button type="button" onClick={onClose} className="btn btn-secondary">Cancel</button>
            <button type="submit" className="btn btn-primary">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductEditForm;
