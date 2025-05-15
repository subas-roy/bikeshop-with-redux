import { NewspaperIcon } from "@heroicons/react/24/solid";

const BlogSection = () => {
  return (
    <section className="py-8 bg-gradient-to-r from-gray-100 via-white to-gray-200">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Latest{" "}
          <span className="bg-gradient-to-r from-blue-500 to-teal-400 text-transparent bg-clip-text">
            Blog Posts
          </span>
        </h2>
        <p className="text-lg text-gray-600">
          Stay updated with our latest articles about bikes, trends, tips, and
          more.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        <div className="bg-white rounded-xl shadow-xl  overflow-hidden hover:scale-105 transform transition duration-300 ease-in-out">
          <img
            src="https://cdn.pixabay.com/photo/2016/04/07/06/53/bmw-1313343_1280.jpg"
            alt="blog1"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <div className="text-lg font-semibold text-blue-600 mb-2 flex items-center">
              <NewspaperIcon className="h-6 w-6 text-blue-600 mr-2" />
              10 Tips for Maintaining Your Bike
            </div>
            <p className="text-gray-500 mb-4">
              Discover the best ways to keep your bike in top condition and
              enjoy a smoother ride.
            </p>
            <a
              href="#"
              className="text-blue-500 hover:text-blue-700 font-medium"
            >
              Read More
            </a>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-xl overflow-hidden hover:scale-105 transform transition duration-300 ease-in-out">
          <img
            src="https://cdn.pixabay.com/photo/2019/02/27/22/43/scooter-4025114_1280.jpg"
            alt="blog2"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <div className="text-lg font-semibold text-blue-600 mb-2 flex items-center">
              <NewspaperIcon className="h-6 w-6 text-blue-600 mr-2" />
              The Best Bikes for Beginners
            </div>
            <p className="text-gray-500 mb-4">
              If you're new to biking, here's a list of the best bikes to get
              you started on your journey.
            </p>
            <a
              href="#"
              className="text-blue-500 hover:text-blue-700 font-medium"
            >
              Read More
            </a>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-xl overflow-hidden hover:scale-105 transform transition duration-300 ease-in-out">
          <img
            src="https://cdn.pixabay.com/photo/2017/09/27/18/47/scooter-2792992_1280.jpg"
            alt="blog3"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <div className="text-lg font-semibold text-blue-600 mb-2 flex items-center">
              <NewspaperIcon className="h-6 w-6 text-blue-600 mr-2" />
              Top 5 Bike Accessories You Should Own
            </div>
            <p className="text-gray-500 mb-4">
              Enhance your biking experience with these must-have accessories
              that improve safety and comfort.
            </p>
            <a
              href="#"
              className="text-blue-500 hover:text-blue-700 font-medium"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
