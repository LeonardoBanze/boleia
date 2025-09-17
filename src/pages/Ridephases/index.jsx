import { MapPin, UserCheck, Car, CheckCircle } from "lucide-react";

export default function RidePhases() {
  return (
    <div className="bg-black min-h-screen text-white font-poppins">
      {/* Header */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Ride Phases</h1>
          <p className="text-lg text-gray-300 mb-2">
            Every BoleiaChain ride is designed for safety, comfort, and transparency. Here’s how your journey unfolds:
          </p>
        </div>
      </section>

      {/* Ride Phases Steps */}
      <section className="py-12 px-4 bg-black">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Phase 1: Request */}
          <div className="bg-[#18191a] rounded-2xl p-8 flex flex-col items-center shadow-lg border border-gray-800">
            <MapPin className="w-12 h-12 text-[#00ffae] mb-4" />
            <h2 className="text-2xl font-bold mb-2">Request</h2>
            <p className="text-gray-300 text-center mb-4">
              Open the app, select your ride type, and enter your destination.
            </p>
            <span className="text-[#00ffae] font-semibold">Step 1</span>
          </div>
          {/* Phase 2: Match */}
          <div className="bg-[#18191a] rounded-2xl p-8 flex flex-col items-center shadow-lg border border-gray-800">
            <UserCheck className="w-12 h-12 text-[#00ffae] mb-4" />
            <h2 className="text-2xl font-bold mb-2">Match</h2>
            <p className="text-gray-300 text-center mb-4">
              Get instantly matched with a verified driver nearby.
            </p>
            <span className="text-[#00ffae] font-semibold">Step 2</span>
          </div>
          {/* Phase 3: Ride */}
          <div className="bg-[#18191a] rounded-2xl p-8 flex flex-col items-center shadow-lg border border-gray-800">
            <Car className="w-12 h-12 text-[#00ffae] mb-4" />
            <h2 className="text-2xl font-bold mb-2">Ride</h2>
            <p className="text-gray-300 text-center mb-4">
              Track your ride in real-time and enjoy a safe, comfortable journey.
            </p>
            <span className="text-[#00ffae] font-semibold">Step 3</span>
          </div>
          {/* Phase 4: Complete */}
          <div className="bg-[#18191a] rounded-2xl p-8 flex flex-col items-center shadow-lg border border-gray-800">
            <CheckCircle className="w-12 h-12 text-[#00ffae] mb-4" />
            <h2 className="text-2xl font-bold mb-2">Complete</h2>
            <p className="text-gray-300 text-center mb-4">
              Arrive at your destination and rate your experience.
            </p>
            <span className="text-[#00ffae] font-semibold">Step 4</span>
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-16 px-4 bg-[#18191a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-[#00ffae]">Safety First</h2>
          <p className="text-gray-300 text-lg mb-6">
            All rides are monitored for safety. Drivers are vetted, and you can share your trip status with trusted contacts.
          </p>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-[#00ffae]">Need Help?</h2>
          <p className="text-gray-300 text-lg mb-6">
            Our support team is available 24/7 to assist you before, during, or after your ride.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#00ffae] text-black font-semibold px-8 py-3 rounded-lg shadow hover:bg-[#00e6a0] transition-colors duration-200"
          >
            Contact Support
          </a>
        </div>
      </section>


          </div>
  );
}