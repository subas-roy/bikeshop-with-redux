const About = () => {
  const teamMembers = [
    {
      name: "Alamin Hossain",
      role: "Founder & CEO",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Sadia Rahman",
      role: "Sales Manager",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Rafiul Islam",
      role: "Lead Mechanic",
      image: "https://randomuser.me/api/portraits/men/65.jpg",
    },
    {
      name: "Nusrat Jahan",
      role: "Marketing Specialist",
      image: "https://randomuser.me/api/portraits/women/55.jpg",
    },
    {
      name: "Tanvir Ahmed",
      role: "Customer Support",
      image: "https://randomuser.me/api/portraits/men/78.jpg",
    },
    {
      name: "Mim Chowdhury",
      role: "Product Designer",
      image: "https://randomuser.me/api/portraits/women/23.jpg",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Banner with Dual-Sided Overlay */}
      <div
        className="relative h-[60vh] md:h-[50vh] w-full flex items-center justify-center text-center text-white overflow-hidden"
        style={{
          backgroundImage: "url('https://i.ibb.co/b5JjQv7q/about-us.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-60" />
      </div>
      {/* Our Team Section */}
      <div className="py-16 bg-white text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-10">
          Meet Our Team
        </h2>
        <div className="max-w-7xl mx-auto grid gap-8 px-4 md:px-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-gray-50 rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-blue-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-16 bg-gray-50 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-10">
          Why Choose Us?
        </h2>
        <div className="max-w-7xl mx-auto grid gap-8 px-4 md:px-16 grid-cols-1 md:grid-cols-3">
          {[
            {
              title: "Top Brands",
              desc: "Authentic bikes from Trek, Giant, Specialized and more.",
            },
            {
              title: "Expert Mechanics",
              desc: "Certified technicians for tune-ups, repairs, and builds.",
            },
            {
              title: "Easy Booking",
              desc: "Reserve rentals or services online in just a few clicks.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform"
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
