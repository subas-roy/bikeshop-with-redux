import {
  ShoppingBagIcon,
  WrenchScrewdriverIcon,
  ShieldCheckIcon,
  TruckIcon,
} from "@heroicons/react/24/solid";

const categories = [
  {
    icon: <ShoppingBagIcon className="h-8 w-8" />,
    label: "Bikes",
  },
  {
    icon: <WrenchScrewdriverIcon className="h-8 w-8" />,
    label: "Services",
  },
  {
    icon: <ShieldCheckIcon className="h-8 w-8" />,
    label: "Insurance",
  },
  {
    icon: <TruckIcon className="h-8 w-8" />,
    label: "Delivery",
  },
];

const CategoryIcons = () => {
  return (
    <div className="py-8 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
        Explore Our <span className="bg-gradient-to-r from-yellow-500 to-teal-400 text-transparent bg-clip-text">
          Categories
        </span>
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="group my-5 bg-white hover:bg-indigo-600 hover:text-white text-gray-700 rounded-2xl p-6 shadow-md flex flex-col items-center transition duration-300 ease-in-out relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-20 h-20 bg-indigo-100 opacity-30 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
            <div className="mb-3 bg-indigo-100 group-hover:bg-white text-indigo-600 group-hover:text-indigo-800 p-3 rounded-full shadow-lg transition-all duration-300">
              {category.icon}
            </div>
            <span className="text-lg font-medium z-10">{category.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryIcons;
