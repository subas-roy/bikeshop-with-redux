/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetAllSemestersQuery } from "../redux/features/Products/productApi";

const RecommendedProducts = () => {
  const { data, isLoading } = useGetAllSemestersQuery(undefined);

  const products = data?.data?.slice(0, 3); // Top 3 products

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="mt-8">
      <h2 className="text-2xl text-gray-700 text-center font-bold mb-4">
        Recommended Products
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products?.map((product: any) => (
          <div
            key={product._id}
            className="border p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 relative"
          >
            <div className="relative group">
              <img
                src={product.photo}
                alt={product.name}
                className="w-full h-40 object-cover rounded-md transition-transform duration-500 group-hover:scale-105"
              />
              {/* <div className="absolute top-2 left-2 bg-indigo-600 text-white text-sm px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Best Seller
              </div> */}
              <div className="absolute top-2 right-2 bg-red-500 text-white text-sm px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                10% OFF
              </div>
            </div>

            <h3 className="text-lg text-gray-700 font-semibold mt-2">
              {product.name}
            </h3>
            {/* <p className="text-gray-600 text-sm">{product.brand}</p> */}

            {/* Show discounted price */}
            <p className="text-primary font-bold mt-2">
              ${product.price * 0.9}{" "}
              <span className="line-through text-gray-500">
                ${product.price}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedProducts;
