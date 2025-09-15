import React from "react";

export default function ServiceClassesSection() {
  const services = [
    {
      title: "Boleia Standard",
      description: "Affordable and reliable rides for everyday commuting. Perfect for quick trips around the city.",
      capacity: "4 passengers",
      type: "Travel",
      image: "https://static.wixstatic.com/media/330c98_2076a86c5e724e0a86140bbf6ac1680e~mv2.png/v1/fill/w_339,h_191,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/330c98_2076a86c5e724e0a86140bbf6ac1680e~mv2.png",
      highlight: false
    },
    {
      title: "Boleia Executive",
      description: "Experience comfort and style with our premium vehicles. Ideal for business travel or special occasions.",
      capacity: "3 passengers",
      type: "Travel",
      image: "https://static.wixstatic.com/media/330c98_2076a86c5e724e0a86140bbf6ac1680e~mv2.png/v1/fill/w_339,h_191,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/330c98_2076a86c5e724e0a86140bbf6ac1680e~mv2.png",
      highlight: true
    },
    {
      title: "Boleia Cargo",
      description: "For larger items or bulk deliveries. Our spacious vehicles ensure your goods arrive safely.",
      capacity: "500 passengers",
      type: "Delivery",
      image: "https://static.wixstatic.com/media/330c98_2076a86c5e724e0a86140bbf6ac1680e~mv2.png/v1/fill/w_339,h_191,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/330c98_2076a86c5e724e0a86140bbf6ac1680e~mv2.png",
      highlight: false
    },
    {
      title: "Boleia Family",
      description: "Need it there fast? Our express service ensures rapid delivery of small to medium-sized packages",
      capacity: "10 passengers",
      type: "Delivery",
      image: "https://static.wixstatic.com/media/330c98_2076a86c5e724e0a86140bbf6ac1680e~mv2.png/v1/fill/w_339,h_191,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/330c98_2076a86c5e724e0a86140bbf6ac1680e~mv2.png",
      highlight: false
    },
    {
      title: "Boleia Connect",
      description: "Share your ride and save! Connect with other passengers heading in the same direction for a cost-effective journey.",
      capacity: "500 passengers",
      type: "Delivery",
      image: "https://static.wixstatic.com/media/330c98_4934af1662e24af7b2f5bd991a9f472c~mv2.png/v1/fill/w_339,h_191,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/330c98_4934af1662e24af7b2f5bd991a9f472c~mv2.png",
      highlight: false
    },
    {
      title: "Boleia Family",
      description: "Share your ride and save! Connect with other passengers heading in the same direction for a cost-effective journey.",
      capacity: "500 passengers",
      type: "Delivery",
      image: "https://static.wixstatic.com/media/330c98_4934af1662e24af7b2f5bd991a9f472c~mv2.png/v1/fill/w_339,h_191,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/330c98_4934af1662e24af7b2f5bd991a9f472c~mv2.png",
      highlight: false
    },
    

  ];

  return (
    <section className="bg-gray-100 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Service Classes
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Choose from different service classes to match your needs and budget.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition border ${
                service.highlight ? "border-[#640000] bg-white" : "border-gray-200 bg-white"
              }`}
            >
              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="h-48 w-full object-cover"
              />

              {/* Content */}
              <div className="p-6">
                {service.highlight && (
                  <span className="inline-block mb-3 text-xs font-semibold bg-[#640000] text-white px-3 py-1 rounded-full">
                    Premium
                  </span>
                )}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>

                <div className="text-sm text-gray-700 space-y-1">
                  <p>
                    <span className="font-semibold">Capacity:</span>{" "}
                    {service.capacity}
                  </p>
                  <p>
                    <span className="font-semibold">Type:</span> {service.type}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
