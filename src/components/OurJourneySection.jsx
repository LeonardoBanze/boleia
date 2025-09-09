import React from 'react';

const TimelineItem = ({ year, title, description, isLeft = false }) => {
  return (
    <div className={`flex items-center mb-12 ${isLeft ? 'flex-row-reverse' : ''}`}>
      {/* Content Card */}
      <div className={`flex-1 ${isLeft ? 'ml-8' : 'mr-8'}`}>
        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
          <div className="text-2xl font-bold text-[#640000] mb-3">
            {year}
          </div>
          <h3 className="text-xl font-bold text-black mb-4">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
      
      {/* Timeline Dot */}
      <div className="relative flex-shrink-0">
        <div className="w-6 h-6 bg-[#640000] rounded-full border-4 border-white shadow-lg z-10 relative"></div>
      </div>
      
      {/* Empty space for opposite side */}
      <div className="flex-1"></div>
    </div>
  );
};

const OurJourneySection = () => {
  const timeline = [
    {
      year: "2020",
      title: "The Vision",
      description: "BoleiaChain was conceived with the vision of transforming urban mobility across Africa.",
      isLeft: false
    },
    {
      year: "2021",
      title: "First Launch",
      description: "Launched in Luanda, Angola, connecting the first 1,000 users with reliable transportation.",
      isLeft: true
    },
    {
      year: "2022",
      title: "Expansion",
      description: "Expanded to 10 cities across Angola and introduced delivery services.",
      isLeft: false
    },
    {
      year: "2023",
      title: "Token Launch",
      description: "Introduced BoleiaChain Token (BCT) and launched in 5 additional African countries..",
      isLeft: true
    },
    {
      year: "2024",
      title: "Community Growth",
      description: "Reached 500K+ users and established partnerships with local businesses and governments.",
      isLeft: false
    }
  ];

  return (
    <div className="bg-gray-50 py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
            Our Journey
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            From a simple idea to a continent-wide movement, here's how we've grown to serve 
            millions across Africa.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-[#640000] h-full opacity-30"></div>
          
          {/* Timeline Items */}
          <div className="space-y-0">
            {timeline.map((item, index) => (
              <TimelineItem
                key={index}
                year={item.year}
                title={item.title}
                description={item.description}
                isLeft={item.isLeft}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurJourneySection;