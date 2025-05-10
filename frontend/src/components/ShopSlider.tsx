import { motion } from "framer-motion";
import { HomeIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom"; 

const ShopSlider = () => {
  return (
    <div id="item3" className="carousel-item w-full relative bg-white group">
      <img
        className="w-full sm:h-[350px] md:h-[350px] lg:h-[340px] xl:h-[350px] object-cover transition-transform duration-700 md:object-center shadow-xl"
        src="https://i.ibb.co.com/8g85GK5G/AMW-Web-Graphics-Hero.png"
        alt="AMW-Web-Graphics-Hero"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/68 flex flex-col justify-center p-5 md:p-10">
        <div className="flex items-center justify-between">
          <motion.h2
            className="text-white text-lg sm:text-2xl md:text-2xl lg:text-2xl sm:flex hidden font-bold"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            SHOP
          </motion.h2>

          <motion.div
            className="lg:flex md:flex sm:flex hidden items-center space-x-2 text-white text-sm sm:text-base"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <Link to="/" className="flex items-center hover:underline">
              <HomeIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-1" />
              <span>Home</span>
            </Link>
            <span>&gt;</span>
            <span className="text-red-600  font-semibold">Shop</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ShopSlider;
