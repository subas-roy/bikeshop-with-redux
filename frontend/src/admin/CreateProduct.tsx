/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldValues, useForm } from "react-hook-form";
import { useAddProductMutation } from "../redux/features/Products/productApi";
import { toast } from "sonner";

const CreateProduct = () => {
  const [addProduct] = useAddProductMutation();

  const { register: product, handleSubmit, reset } = useForm({
    defaultValues: {
      name: "",
      brand: "",
      price: "",
      model: "",
      stock: "",
      photo: "",
      photo1: "",
      photo2: "",
    },
  });

  const onSubmit = async (data: FieldValues) => {
    try {
      const productData = {
        name: data.name,
        brand: data.brand,
        price: data.price,
        model: data.model,
        stock: data.stock,
        photo: data.photo,  
        photo1: data.photo1, 
        photo2: data.photo2, 
      };

      const result = await addProduct(productData).unwrap();
      toast.success("Product added successfully!");
      reset();  // Reset the form after submission
      console.log(result);
    } catch (error: any) {
      toast.error(error?.data?.message || "Something went wrong!");
    }
  };

  return (
    <div className="p-6 rounded-xl shadow-md w-full max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6">Add New Bike</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            placeholder="AVS SF"
            {...product("name")}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Brand</label>
          <input
            type="text"
            placeholder="Suzuki"
            {...product("brand")}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Price</label>
          <input
            type="number"
            placeholder="10020"
            {...product("price")}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Model</label>
          <input
            type="text"
            placeholder="2023"
            {...product("model")}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Stock</label>
          <input
            type="number"
            placeholder="12"
            {...product("stock")}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>

        {/* Main Photo URL */}
        <div>
          <label className="block mb-1 font-medium">Photo URL 1</label>
          <input
            type="text"
            placeholder="https://example.com/image.jpg"
            {...product("photo")}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>

        {/* Secondary Photo URL */}
        <div>
          <label className="block mb-1 font-medium">Photo URL 2</label>
          <input
            type="text"
            placeholder="https://example.com/image.jpg"
            {...product("photo1")}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>

        {/* Tertiary Photo URL */}
        <div>
          <label className="block mb-1 font-medium">Photo URL 3</label>
          <input
            type="text"
            placeholder="https://example.com/image.jpg"
            {...product("photo2")}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>

        <div className="md:col-span-2 my-2">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            Submit Bike
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateProduct;
