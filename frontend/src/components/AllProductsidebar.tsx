/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { HiAdjustments } from "react-icons/hi"; // for filter icon

const AllProductSidebar = ({
  onApplyFilters,
}: {
  onApplyFilters: (filters: { price: number; brand: string; rating: number }) => void;
}) => {
  const [selectedRating, setSelectedRating] = useState(0);
  const [selectedBrand, setSelectedBrand] = useState("All Brands");
  const [selectedPrice, setSelectedPrice] = useState(10000);
  const [isMobileOpen, setIsMobileOpen] = useState(false); // 👉 mobile drawer state

  const handleApplyFilters = () => {
    onApplyFilters({
      price: selectedPrice,
      brand: selectedBrand,
      rating: selectedRating,
    });
    setIsMobileOpen(false); // close drawer on apply
  };

  return (
    <>
      {/* Mobile filter button */}
      <button
        className="md:hidden btn btn-primary fixed bottom-4 right-4 z-50 rounded-full shadow-lg"
        onClick={() => setIsMobileOpen(true)}
      >
        <HiAdjustments className="w-6 h-6" />
      </button>

      {/* Mobile drawer */}
      {isMobileOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-end">
          <div className="bg-white w-72 h-full p-6 space-y-8 shadow-lg overflow-y-auto">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-gray-800">Filter Products</h3>
              <button
                onClick={() => setIsMobileOpen(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                &times;
              </button>
            </div>
            {/* -- Filter content below -- */}
            <FilterContent
              selectedPrice={selectedPrice}
              setSelectedPrice={setSelectedPrice}
              selectedBrand={selectedBrand}
              setSelectedBrand={setSelectedBrand}
              selectedRating={selectedRating}
              setSelectedRating={setSelectedRating}
              handleApplyFilters={handleApplyFilters}
            />
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <aside className="hidden md:block bg-white rounded-2xl shadow-xl p-6 space-y-8 sticky top-24 h-fit">
        <FilterContent
          selectedPrice={selectedPrice}
          setSelectedPrice={setSelectedPrice}
          selectedBrand={selectedBrand}
          setSelectedBrand={setSelectedBrand}
          selectedRating={selectedRating}
          setSelectedRating={setSelectedRating}
          handleApplyFilters={handleApplyFilters}
        />
      </aside>
    </>
  );
};

// ✅ Extracted filter content so it can be reused in both drawer & sidebar
const FilterContent = ({
  selectedPrice,
  setSelectedPrice,
  selectedBrand,
  setSelectedBrand,
  selectedRating,
  setSelectedRating,
  handleApplyFilters,
}: any) => (
  <>
    {/* Price */}
    <div>
      <label className="block text-gray-600 mb-1 font-medium">Price Range</label>
      <input
        type="range"
        min="0"
        max="10000"
        value={selectedPrice}
        onChange={(e) => setSelectedPrice(parseInt(e.target.value))}
        className="range range-primary"
      />
      <div className="flex justify-between text-sm text-gray-500">
        <span>$0</span>
        <span>${selectedPrice}+</span>
      </div>
    </div>

    {/* Brand */}
    <div>
      <label className="block text-gray-600 mb-1 font-medium">Brand</label>
      <select
        className="select select-bordered w-full"
        value={selectedBrand}
        onChange={(e) => setSelectedBrand(e.target.value)}
      >
        <option>All Brands</option>
        <option>BrandX</option>
        <option>BrandY</option>
      </select>
    </div>

    {/* Rating */}
    <div>
      <label className="block text-gray-600 mb-1 font-medium">Rating</label>
      <div className="space-y-1">
        {[5, 4, 3, 2, 1].map((star) => (
          <div
            key={star}
            onClick={() => setSelectedRating(star)}
            className={`flex items-center gap-1 cursor-pointer ${
              selectedRating === star ? "text-yellow-500" : "text-gray-500"
            }`}
          >
            {Array.from({ length: star }).map((_, idx) => (
              <FaStar key={idx} className="text-yellow-400" />
            ))}
            <span className="text-sm ml-1">& Up</span>
          </div>
        ))}
      </div>
    </div>

    <button onClick={handleApplyFilters} className="btn btn-primary w-full mt-4">
      Apply Filters
    </button>
  </>
);

export default AllProductSidebar;
