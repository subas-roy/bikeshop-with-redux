/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import ShopSlider from "../components/ShopSlider";
import { useGetAllSemestersQuery } from "../redux/features/Products/productApi";
import { useAppSelector } from "../redux/hook";
import AllProductSidebar from "../components/AllProductsidebar";

const AllProduct = () => {
  const { data: response, isLoading } = useGetAllSemestersQuery(undefined);
  const query = useAppSelector((state) => state.search.query.toLowerCase());

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  if (isLoading) {
    return (
      <div className="text-center py-10 text-xl font-semibold text-primary dark:text-primary-content">
        Loading products...
      </div>
    );
  }

  const products = response?.data || [];

  const filtered = products.filter((product: any) => {
    const nameMatch = product.name.toLowerCase().includes(query);
    const brandMatch = product.brand.toLowerCase().includes(query);
    const categoryMatch = product.category?.toLowerCase().includes(query);
    return nameMatch || brandMatch || categoryMatch;
  });

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filtered.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(filtered.length / productsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" }); // Optional: scroll to top on page change
  };

  return (
    <div className="relative bg-gray-100 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      {/* Hero slider */}
      <div className="relative">
        <ShopSlider />

        {/* Overlay title + searchbar */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black/40 dark:bg-black/60">
          <h2 className="lg:text-4xl md:text-2xl sm:text-2xl font-bold text-white drop-shadow-lg">
            Discover Our Bike Collection
          </h2>
          <p className="text-gray-200 dark:text-gray-300 mt-2 lg:text-lg md:text-xl sm:text-sm max-w-md mx-auto">
            Find the perfect ride for your next adventure
          </p>
          <div className="w-full max-w-md mt-6">
            <SearchBar />
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-[280px_1fr] gap-10 mt-10">
        {/* Sidebar */}
        <AllProductSidebar
          onApplyFilters={function (): void {
            throw new Error("Function not implemented.");
          }}
        />

        {/* Products grid */}
        <div>
          <div className="max-w-7xl mx-auto flex items-center justify-between mb-4">
            <p className="text-gray-700 dark:text-gray-300 font-medium">
              {filtered.length} Products Found
            </p>
            <select className="select select-sm w-40 border-gray-300 text-gray-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200">
              <option>Sort by: Default</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4">
            {currentProducts.length > 0 ? (
              currentProducts.map((product: any) => (
                <div
                  key={product._id}
                  className="transform hover:-translate-y-1 hover:shadow-2xl transition duration-300 ease-in-out"
                >
                  <ProductCard product={product} />
                </div>
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500 dark:text-gray-400 text-lg">
                No products found.
              </p>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="my-5 flex justify-end">
              <div className="join">
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handlePageChange(index + 1)}
                    className={`join-item btn btn-sm ${
                      currentPage === index + 1 ? "btn-primary" : "btn-ghost"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
