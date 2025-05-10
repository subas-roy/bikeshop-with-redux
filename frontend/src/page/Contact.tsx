import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaMotorcycle,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner */}
      <div
        className="relative py-24 px-6 text-center text-white overflow-hidden"
        style={{
          backgroundImage:
            "url('https://i.ibb.co/LXM2VkSJ/wmremove-transformed-2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60" />
        <div className="relative max-w-2xl mx-auto">
          <FaMotorcycle className="mx-auto mb-6 text-6xl opacity-90" />
          <h1 className="text-5xl font-extrabold tracking-tight">
            Get in Touch with Bike Shop
          </h1>
          <p className="mt-4 text-xl opacity-80">
            Your ride starts with a conversation!
          </p>
        </div>
      </div>

      {/* Two-column layout: Left = Map + Contact Info, Right = Form */}
      <div className="max-w-5xl mx-auto py-16 px-6 grid gap-12 md:grid-cols-2">
        {/* Left Column */}

        <div className="space-y-6 text-gray-800">
          <h2 className="text-2xl font-semibold">Send Us a Message</h2>
          <form className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                rows={4}
                placeholder="Type your message here..."
                className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Column: Contact Form */}
        <div className="space-y-5">
          <h2 className="text-2xl font-semibold">Visit Our Shop</h2>
          {/* Map */}
          <div className="aspect-w-16 aspect-h-9 h-75 rounded-xl overflow-hidden border border-gray-300 shadow-lg">
            <iframe
              title="Bike Shop Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.892312572779!2d90.38723291536402!3d23.750873393455767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b85bb0e9830f%3A0x23b69e015f0f1acf!2sDhaka%20City!5e0!3m2!1sen!2sbd!4v1617732512345!5m2!1sen!2sbd"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
            />
          </div>

          {/* Contact Info */}
          <div className="space-y-6 text-gray-800">
            <div className="flex items-center gap-4">
              <FaPhone className="text-2xl text-blue-600" />
              <div>
                <p className="font-medium">Phone</p>
                <p>+880 1234 567890</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-2xl text-blue-600" />
              <div>
                <p className="font-medium">Email</p>
                <p>support@bikeshop.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-2xl text-blue-600" />
              <div>
                <p className="font-medium">Address</p>
                <p>Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
