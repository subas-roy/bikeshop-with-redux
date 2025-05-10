import { useNavigate, useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../redux/features/Products/productApi";
import { useState } from "react";
import { addToCart } from "../redux/features/cart/cartSlice";
import { useDispatch } from "react-redux";
import RecommendedProducts from "../components/RecommendedProduct";

const ProductDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleProductQuery(id as string, {
    refetchOnMountOrArgChange: true,
  });

  const [activeTab, setActiveTab] = useState<"description" | "review">(
    "description"
  );
  const [quantity, setQuantity] = useState<number>(1);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const product = data?.data;

  const [mainImage, setMainImage] = useState<string>(product?.photo || "");

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        productId: product._id,
        name: product.name,
        brand: product.brand,
        price: product.price,
        quantity: quantity,
        stock: product.stock,
        imageUrl: product.photo,
      })
    );
    navigate("/cart");
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 1) {
      setQuantity(value);
    } else {
      setQuantity(1);
    }
  };

  const totalPrice = product ? product.price * quantity : 0;

  if (isLoading) return <div className="text-center py-10">Loading...</div>;

  return (
    <div className="w-full bg-gray-100 py-10 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 border-gray-200">
        <div className="grid md:grid-cols-2 gap-10 items-start justify-end">
          {/* Image Section */}
          <div className="relative group">
            <img
              src={mainImage || product.photo}
              alt={product.name}
              className="w-full h-[280px] bg-gray-100 object-cover transition-transform duration-500 group-hover:scale-105 rounded-lg"
            />

            <div className="flex gap-4 mt-4 justify-start">
              {[product.photo, product.photo1, product.photo2].map(
                (imgSrc, index) => (
                  <img
                    key={index}
                    src={imgSrc}
                    alt={`preview-${index}`}
                    className="w-20 h-20 object-cover rounded border border-gray-300 cursor-pointer hover:scale-105 transition"
                    onClick={() => setMainImage(imgSrc)}
                  />
                )
              )}
            </div>
          </div>

          {/* Product Content */}
          <div className="mr-2 md:mr-4 mx-10">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {product.name}
            </h1>

            <div className="space-y-2 mb-4 text-lg">
              <p className="text-gray-600">
                <span className="font-semibold text-gray-800">Brand:</span>{" "}
                {product.brand}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold text-gray-800">Model:</span>{" "}
                {product.model}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold text-gray-800">Category:</span>{" "}
                {product.category}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold text-gray-800">
                  Stock:
                </span>{" "}
                {product.stock > 1 ? (
                  <span className="text-green-600">Available</span>
                ) : (
                  <span className="font-semibold bg-gradient-to-r from-rose-500 via-orange-400 to-yellow-500 text-white rounded-xl px-2">sold out</span>
                )}
              </p>
            </div>

            <p className="text-xl font-bold bg-gradient-to-r from-rose-700 via-orange-400 to-yellow-500 text-transparent bg-clip-text mb-4">
              Price : ${product.price}
            </p>

            {/* Quantity and total price */}
            <div className="flex items-center gap-4 mb-4">
              <button
                onClick={decreaseQuantity}
                className="px-3 py-1 bg-gray-300 rounded-full text-gray-700 text-xl font-bold hover:bg-gray-400"
              >
                -
              </button>
              <input
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                className="w-16 text-center border border-gray-300 text-gray-700 rounded py-1 text-lg"
                min={1}
              />
              <button
                onClick={increaseQuantity}
                className="px-3 py-1 bg-gray-300 rounded-full text-gray-700 text-xl font-bold hover:bg-gray-400"
              >
                +
              </button>
            </div>

            {/* Total Price */}
            <p className="text-xl font-semibold text-gray-800 mb-6">
              Total Price:{" "}
              <span className="text-green-600">${totalPrice.toFixed(2)}</span>
            </p>

            <div className="mt-6">
              <button
                onClick={handleAddToCart}
                className="px-6 py-2 text-white bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full shadow-md hover:shadow-lg transition duration-300"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* --- buttons to toggle tab --- */}
        <div className="flex gap-4 mt-12">
          <button
            onClick={() => setActiveTab("description")}
            className={`px-4 py-2 rounded ${
              activeTab === "description"
                ? "px-6 py-2 text-white bg-gradient-to-r from-indigo-500 to-purple-500"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            } transition`}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab("review")}
            className={`px-4 py-2 rounded ${
              activeTab === "review"
                ? "bg-pink-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            } transition`}
          >
            Review
          </button>
        </div>

        {/* --- tab content --- */}
        {activeTab === "description" && (
          <div className="mt-4 px-4 py-6 bg-gray-50 rounded-lg shadow-inner">
            <p className="text-gray-800">
              Overview :: The TVS Ronin is a unique neo-retro motorcycle that
              combines the design attributes and riding characteristics of both
              cruisers and roadsters. Creating a niche of its own, the TVS Ronin
              is a good choice of motorcycle for those who want something
              different from the usual sporty commuters in the 150-250cc
              category.
            </p>
          </div>
        )}

        {activeTab === "review" && (
          <div className="mt-4 px-4 py-6 bg-gray-50 rounded-lg shadow-inner">
            <p className="text-gray-700">⭐️⭐️⭐️⭐️☆ (4.5/5)</p>
            <p className="text-gray-800 italic">
              “Amazing product! Highly recommended.”
            </p>
          </div>
        )}
      </div>
      <RecommendedProducts></RecommendedProducts>
    </div>
  );
};

export default ProductDetails;
