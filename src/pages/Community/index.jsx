import { Users, MessageSquare, HeartHandshake, ShieldCheck, Bell, Group, Store, Fuel, Building2, Wrench, Briefcase, UserCheck, Send } from "lucide-react";
import Topbar from "../../components/Topbar";
import Navbar from "../../components/Navbar";
import Foooter from "../../components/foooter";

const rolesAndPartners = [
  {
    title: "Passenger",
    icon: <UserCheck className="text-[#640000] mb-2" />,
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    description: "Move within cities using BoleiaChain for personal transportation needs, including ride-hailing and shared mobility options.",
    benefits: "Convenience, affordability, and safe urban travel, access to diverse vehicle options, and exciting incentives.",
    button: "Join as Passenger",
  },
  {
    title: "Sender",
    icon: <Send className="text-[#640000] mb-2" />,
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
    description: "Individuals or businesses using BoleiaChain platform to send packages, documents, and other deliveries.",
    benefits: "Convenience, affordability, and safe urban delivery, access to multiple delivery options, and exciting incentives.",
    button: "Join as Sender",
  },
  {
    title: "Driver Partner",
    icon: <UserCheck className="text-[#640000] mb-2" />,
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    description: "Independent drivers who provide ride services to passengers through the BoleiaChain application.",
    benefits: "Flexible working hours, competitive earnings, access to a large customer base, and exciting incentives.",
    button: "Join as Driver Partner",
  },
  {
    title: "Courier Partner",
    icon: <Send className="text-[#640000] mb-2" />,
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
    description: "Deliveries, logistics, and package tracking for individuals and businesses.",
    button: "Become a Courier Partner",
  },
  {
    title: "Community Content Creator",
    icon: <Users className="text-[#640000] mb-2" />,
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    description: "Share stories, insights, and media, building a vibrant, unified community.",
    button: "Become a Content Creator",
  },
  {
    title: "Supermarket Partner",
    icon: <Store className="text-[#640000] mb-2" />,
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    description: "Retail solutions, grocery partnerships, and delivery collaborations.",
    button: "Become a Supermarket Partner",
  },
  {
    title: "Fuel Station Partner",
    icon: <Fuel className="text-[#640000] mb-2" />,
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    description: "Fuel solutions, partnerships, and loyalty programs for BoleiaChain vehicles.",
    button: "Become a Fuel Station Partner",
  },
  {
    title: "Insurance Partner",
    icon: <Building2 className="text-[#640000] mb-2" />,
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
    description: "Insurance solutions, coverage, and community development.",
    button: "Become an Insurance Partner",
  },
  {
    title: "Auto Workshop Partner",
    icon: <Wrench className="text-[#640000] mb-2" />,
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    description: "Maintenance, repairs, and service for mobility vehicles.",
    button: "Become an Auto Workshop Partner",
  },
  {
    title: "Investor",
    icon: <Briefcase className="text-[#640000] mb-2" />,
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    description: "Invest in mobility innovation and growth, supporting the BoleiaChain ecosystem.",
    button: "Become an Investor",
  },
];

export default function Community() {
  return (
    <div className="bg-gray-100 min-h-screen font-poppins text-gray-800">
        <Topbar/>
        <Navbar/>
   {/* Roles & Partners - Dynamic Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#640000]">Community Roles & Partners</h2>
          <p className="text-center text-gray-700 mb-8">
            Every member and partner plays a vital role in creating a sustainable and inclusive mobility ecosystem.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rolesAndPartners.map((item, idx) => (
              <div
                key={item.title}
                className={`bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-lg transition-shadow ${item.title === "Investor" ? "md:col-span-3" : ""}`}
              >
                <img src={item.img} alt={item.title} className="w-full h-40 object-cover" />
                <div className="p-6">
                  {item.icon}
                  <h3 className="font-bold mb-1 text-[#640000]">{item.title}</h3>
                  <p className="text-gray-700 text-sm mb-2">{item.description}</p>
                  {item.benefits && (
                    <div className="text-gray-600 text-xs mb-2">
                      <span className="font-semibold">Benefits:</span> {item.benefits}
                    </div>
                  )}
                  <a
                    href="#"
                    className="block mt-2 border border-[#640000] text-[#640000] font-semibold px-4 py-2 rounded text-center hover:bg-[#640000] hover:text-white transition-colors"
                  >
                    {item.button}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Community Partners */}
    
      {/* Community Features */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#640000]">Community Features</h2>
          <p className="text-gray-700 mb-10">
            Connect, share, and grow together with features designed to build meaningful relationships within our community.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Users className="mx-auto mb-2 text-[#640000] w-10 h-10" />
              <h3 className="font-bold mb-1 text-[#640000]">Social Interactions</h3>
              <p className="text-gray-600 text-sm">Connect with others, share experiences, and strengthen community bonds.</p>
            </div>
            <div>
              <MessageSquare className="mx-auto mb-2 text-[#640000] w-10 h-10" />
              <h3 className="font-bold mb-1 text-[#640000]">Posts & Chats</h3>
              <p className="text-gray-600 text-sm">Share your journey, post updates, and interact with fellow members.</p>
            </div>
            <div>
              <ShieldCheck className="mx-auto mb-2 text-[#640000] w-10 h-10" />
              <h3 className="font-bold mb-1 text-[#640000]">Community Support</h3>
              <p className="text-gray-600 text-sm">Get help from community members, find support, and report concerns.</p>
            </div>
            <div>
              <HeartHandshake className="mx-auto mb-2 text-[#640000] w-10 h-10" />
              <h3 className="font-bold mb-1 text-[#640000]">Care Together</h3>
              <p className="text-gray-600 text-sm">Participate in community programs and outreach initiatives.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Community Interactions */}
      <section className="py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#640000]">Community Interactions</h2>
          <p className="text-center text-gray-700 mb-8">
            Engage with your community through various interactive features designed to foster connection and shared experiences.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-gray-200 p-6 flex items-center gap-4 hover:shadow-lg transition-shadow">
              <MessageSquare className="text-[#640000] w-8 h-8" />
              <div>
                <h3 className="font-bold mb-1 text-[#640000]">Posts & Feeds</h3>
                <p className="text-gray-600 text-sm">Share personal stories, updates, and info within the BoleiaChain community.</p>
              </div>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6 flex items-center gap-4 hover:shadow-lg transition-shadow">
              <Group className="text-[#640000] w-8 h-8" />
              <div>
                <h3 className="font-bold mb-1 text-[#640000]">Comments & Chats</h3>
                <p className="text-gray-600 text-sm">Engage in meaningful discussions and real-time conversations with other users.</p>
              </div>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6 flex items-center gap-4 hover:shadow-lg transition-shadow">
              <Bell className="text-[#640000] w-8 h-8" />
              <div>
                <h3 className="font-bold mb-1 text-[#640000]">Notifications</h3>
                <p className="text-gray-600 text-sm">Stay updated with community activities, announcements, and important updates.</p>
              </div>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6 flex items-center gap-4 hover:shadow-lg transition-shadow">
              <HeartHandshake className="text-[#640000] w-8 h-8" />
              <div>
                <h3 className="font-bold mb-1 text-[#640000]">Hobbies & Interests</h3>
                <p className="text-gray-600 text-sm">Connect with groups and discover your interests within our community.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Community Impact */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#640000]">Community Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <span className="text-4xl font-bold text-[#640000]">500K+</span>
              <div className="text-gray-700 mt-2">Active Members</div>
            </div>
            <div>
              <span className="text-4xl font-bold text-[#640000]">10K+</span>
              <div className="text-gray-700 mt-2">Daily Rides</div>
            </div>
            <div>
              <span className="text-4xl font-bold text-[#640000]">50+</span>
              <div className="text-gray-700 mt-2">Cities Connected</div>
            </div>
            <div>
              <span className="text-4xl font-bold text-[#640000]">98%</span>
              <div className="text-gray-700 mt-2">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>
      {/* Join Community CTA */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl p-10 text-center border border-[#640000] shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#640000]">Join Our Community Today</h2>
            <p className="text-gray-700 mb-6">
              Become part of Africa’s largest mobility community. Connect with like-minded individuals, share your experiences, and help shape the future of urban transportation.
            </p>
            <div className="flex justify-center gap-4">
              <a href="#" className="bg-[#640000] text-white font-semibold px-6 py-2 rounded hover:bg-[#520000] transition-colors">Join Community</a>
              <a href="#" className="border border-[#640000] text-[#640000] font-semibold px-6 py-2 rounded hover:bg-[#640000] hover:text-white transition-colors">Learn More</a>
            </div>
          </div>
        </div>
      </section>
      <Foooter  />
    </div>
  );
}