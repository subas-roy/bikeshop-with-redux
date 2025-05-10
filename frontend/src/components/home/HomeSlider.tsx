import { motion } from "framer-motion";

const HomeSlider = () => {
  return (
    <div className="w-full max-w-6xl mx-auto relative">
      

      <div className="carousel w-full shadow-2xl overflow-hidden relative">
        {/* Slide 1 */}
        <div id="item1" className="carousel-item w-full relative group">
          <img
            className="w-full h-[400px] md:h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
            src="https://i.ibb.co.com/j9MFLft7/wmremove-transformed.jpg"
            alt="bike-Banner-1"
          />


          {/* Gradient + Content */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
            <div className="ml-10 space-y-2">
              <motion.h2
                className="text-white text-3xl md:text-5xl font-bold"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                🚴‍♂️ 15% OFF on All Bikes!
              </motion.h2>
              <p className="text-white/80 hidden md:block max-w-md">
                Discover powerful rides with comfort and speed – available now at discounted rates!
              </p>
              <button className="btn mt-4 btn-secondary shadow-lg">Shop Now</button>
            </div>
          </div>

          {/* Shape Decoration */}
          <div className="absolute -top-8 -left-8 w-52 h-52 bg-pink-500 opacity-20 rounded-full blur-3xl z-0"></div>

          {/* Navigation Buttons */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
            <a href="#item1" className="btn btn-xs btn-neutral opacity-80 hover:opacity-100">1</a>
            <a href="#item2" className="btn btn-xs btn-neutral opacity-80 hover:opacity-100">2</a>
            <a href="#item3" className="btn btn-xs btn-neutral opacity-80 hover:opacity-100">3</a>
          </div>
        </div>

        {/* Slide 2 */}
        <div id="item2" className="carousel-item w-full relative group">
          <img
            className="w-full h-[400px] md:h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
            src="https://i.ibb.co.com/vC9QCs5d/pexels-danbee-29701226.jpg"
            alt="pexels-danbee-29701226"
          />

          <div className="absolute inset-0 bg-gradient-to-l from-black/50 to-transparent flex items-center justify-end">
            <div className="mr-10 text-right space-y-2">
              <motion.h2
                className="text-white text-3xl md:text-5xl font-bold"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                🛵 Speed Meets Style
              </motion.h2>
              <p className="text-white/80 hidden md:block max-w-md ml-auto">
                Browse our newest range of bikes perfect for urban & adventure riders.
              </p>
              <button className="btn mt-4 btn-accent shadow-lg">Explore Collection</button>
            </div>
          </div>

          <div className="absolute bottom-[-30px] right-[-30px] w-52 h-52 bg-blue-400 opacity-25 rounded-full blur-3xl z-0"></div>

          {/* Navigation Buttons */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
            <a href="#item1" className="btn btn-xs btn-neutral opacity-80 hover:opacity-100">1</a>
            <a href="#item2" className="btn btn-xs btn-neutral opacity-80 hover:opacity-100">2</a>
            <a href="#item3" className="btn btn-xs btn-neutral opacity-80 hover:opacity-100">3</a>
          </div>
        </div>

        {/* Slide 3 */}
        <div id="item3" className="carousel-item w-full relative group">
          <img
            className="w-full h-[400px] md:h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
            src="https://i.ibb.co.com/zW1CHQdN/De-Watermark-ai-1746456788555.png"
            alt="pexels-cottonbro-5803142"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-10">
            <motion.h2
              className="text-white text-2xl md:text-4xl font-bold"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              🔥 Exclusive Summer Deals
            </motion.h2>
          </div>

          <div className="absolute top-[20%] left-[40%] w-72 h-72 bg-yellow-500 opacity-15 rotate-45 rounded-full blur-2xl z-0"></div>

          {/* Navigation Buttons */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
            <a href="#item1" className="btn btn-xs btn-neutral opacity-80 hover:opacity-100">1</a>
            <a href="#item2" className="btn btn-xs btn-neutral opacity-80 hover:opacity-100">2</a>
            <a href="#item3" className="btn btn-xs btn-neutral opacity-80 hover:opacity-100">3</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;
