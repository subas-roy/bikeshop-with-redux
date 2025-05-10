import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../redux/features/cart/cartSlice";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

interface ProductCardProps {
  photo: string | undefined;
  _id: string;
  name: string;
  brand: string;
  price: number;
  description: string;
  stock: number;
  imageUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export function ProductCard({ product }: { product: ProductCardProps }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        productId: product._id,
        name: product.name,
        brand: product.brand,
        price: product.price,
        quantity: 1,
        stock: product.stock,
        imageUrl: product.imageUrl as string,
      })
    );
    navigate("/cart");
  };

  return (
    <div className="card w-full bg-base-100 shadow-xl group relative overflow-hidden">
      {/* Image + hover overlay */}
      <figure className="relative">
        <img
          src={product.photo}
          alt={product?.name}
          className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex justify-center items-center gap-2 transition-opacity duration-300">
          <button onClick={handleAddToCart} className="btn btn-primary btn-sm">
            Add to Cart
          </button>
          <button
            onClick={() => navigate(`/products/${product._id}`)}
            className="btn btn-secondary btn-sm"
          >
            Quick View
          </button>
        </div>
      </figure>

      {/* card body */}
      <div className="card-body">
        <div className="flex items-center gap-1 text-yellow-400 mt-1">
          <AiFillStar className="w-4 h-4" />
          <AiFillStar className="w-4 h-4" />
          <AiFillStar className="w-4 h-4" />
          <AiFillStar className="w-4 h-4" />
          <AiOutlineStar className="w-5 h-5 text-gray-300" />
        </div>
        <h2 className="card-title">{product.name}</h2>
        <p className="text-lg font-semibold text-primary">${product.price}</p>
        <p className="text-sm text-gray-500">{product.brand}</p>
      </div>
    </div>
  );
}

export default ProductCard;
