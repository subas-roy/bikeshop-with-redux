import { UserCircleIcon, StarIcon } from "@heroicons/react/24/solid";

const testimonials = [
  {
    name: "Alamin",
    feedback:
      "Absolutely love the bikes! Smooth service and premium quality. Highly recommend this shop to any biking enthusiast.",
    rating: 5,
  },
  {
    name: "Sadia",
    feedback:
      "The customer support was amazing and the variety of bikes is just stunning. I found exactly what I needed!",
    rating: 4,
  },
  {
    name: "Rahim",
    feedback:
      "From order to delivery, everything was perfect. This is now my go-to bike shop!",
    rating: 5,
  },
];

const TestimonialSection = () => {
  return (
    <section className="bg-gradient-to-br from-gray-100 to-white py-8">
      <div className="max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
      What Our <span className="bg-gradient-to-r from-yellow-500 to-teal-400 text-transparent bg-clip-text">
      Customers Say
        </span>
      </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="p-6 my-5 bg-white shadow-xl rounded-2xl hover:scale-[1.03] transition-transform duration-300"
            >
              <UserCircleIcon className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <p className="text-gray-700 italic mb-4">"{testimonial.feedback}"</p>
              <div className="flex justify-center mb-2">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>
              <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
