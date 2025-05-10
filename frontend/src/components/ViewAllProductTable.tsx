/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// ViewAllProductTable.tsx
import { useState } from "react";
import { toast } from "sonner";
import {
  useDeletedProductMutation,
  useGetAllSemestersQuery,
} from "../redux/features/Products/productApi";
import ProductEditForm from "../components/ProductEditForm";

const ViewAllProductTable = () => {
  const { data: response, isLoading } = useGetAllSemestersQuery(undefined);
  const products = response?.data || [];
  const [deleteProduct] = useDeletedProductMutation();

  const [editingProduct, setEditingProduct] = useState<any>(null);

  const handleDeleteItem = async (_id: string) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await deleteProduct(_id).unwrap();
        toast.success("Product deleted successfully");
      } catch (err) {
        toast.error("Failed to delete product");
      }
    }
  };

  if (isLoading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  return (
    <div className="overflow-x-auto">
      {editingProduct && (
        <ProductEditForm
          product={editingProduct}
          onClose={() => setEditingProduct(null)}
        />
      )}
      <table className="table w-full">
        <thead>
          <tr>
           
            <th> Photo</th>
            <th>Name</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Model</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product: any, index: number) => (
            <tr key={product._id || index}>
              <td>
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={product.photo} alt={product.name} />
                  </div>
                </div>
              </td>
              <td>{product.name}</td>
              <td>{product.brand}</td>
              <td>${product.price}</td>
              <td>{product.model}</td>
              <td>{product.stock}</td>
              <td>
                <div className="dropdown dropdown-end">
                  <button tabIndex={0} className="btn btn-ghost btn-xs">
                    ⋯
                  </button>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-32"
                  >
                    <li>
                      <button onClick={() => setEditingProduct(product)}>
                        Edit
                      </button>
                    </li>
                    <li>
                      <button
                        className="text-red-500"
                        onClick={() => handleDeleteItem(product._id)}
                      >
                        Delete
                      </button>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewAllProductTable;
