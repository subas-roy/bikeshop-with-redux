/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import { useGetAllSemestersQuery } from "../../redux/features/Products/productApi";

const HomeProducts = () => {
  const { data, isLoading } = useGetAllSemestersQuery(undefined);
  const products = data?.data?.slice(0, 6); 

  if (isLoading) return <div className="text-center py-10">Loading...</div>

  return (
    <div className="py-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Featured{" "}
        <span className="bg-gradient-to-r from-yellow-500 to-teal-400 text-transparent bg-clip-text">
          Bikes
        </span>
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {products?.map((product: any) => (
          <div
            key={product._id}
            className="bg-white rounded-xl shadow-lg p-4 hover:shadow-2xl transition duration-300"
          >
            <img
              src={product.photo}
              alt={product.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-1">
              {product.name}
            </h3>
            <p className="text-gray-600 mb-2">{product.brand}</p>
            <p className="text-indigo-600 font-bold text-lg">
              ${product.price}
            </p>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-8">
        <Link to="/all-product">
          <button className="px-6 py-2 text-white bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full shadow-md hover:shadow-lg transition duration-300">
            View All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeProducts;
