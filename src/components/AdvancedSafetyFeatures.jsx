export default function AdvancedSafetyFeatures() {
  const features = [
    {
      title: "User Verification System",
      description:
        "All drivers and couriers undergo thorough background checks and identity verification before joining our platform.",
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Real-time Trip Tracking",
      description:
        "Track your ride or delivery in real-time with GPS monitoring and share your trip details with trusted contacts.",
      img: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "In-App Emergency Button",
      description:
        "Quick access to emergency services and panic buttons for immediate assistance when needed.",
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Public Reviews & Rating System",
      description:
        "Transparent rating and review system helps maintain high service standards and builds trust.",
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-red-600 text-center mb-2">
          Advanced Safety Features
        </h2>
        <p className="text-gray-700 text-center mb-10">
          Continuously evolving safety technologies to protect our community.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-red-200 flex flex-col shadow-md hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={feature.img}
                alt={feature.title}
                className="h-48 w-full object-cover"
              />
              <div className="flex-1 flex flex-col p-5">
                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  {feature.description}
                </p>
                <div className="mt-auto">
                  <button className="w-full border border-red-600 text-red-600 font-semibold py-2 rounded hover:bg-red-600 hover:text-white transition">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
