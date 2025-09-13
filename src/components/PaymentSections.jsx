import { CheckCircle, Smartphone, CreditCard, Coins, DollarSign, Banknote, Wallet } from "lucide-react";

export default function PaymentSections() {
  return (
    <div className="bg-gray-50 py-16 px-4">
      {/* Payment Methods */}
      <div className="max-w-7xl mx-auto mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#640000] mb-2">
          Payment Methods
        </h2>
        <p className="text-gray-700 text-center mb-10">
          We support multiple payment methods to make transactions convenient and accessible for everyone.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white border border-[#640000] rounded-xl p-6 shadow-lg flex flex-col hover:scale-105 hover:shadow-2xl transition-all duration-300 group">
            <div className="flex items-center mb-3">
              <span className="bg-[#640000] p-2 rounded-full mr-3">
                <Smartphone className="w-6 h-6 text-white" />
              </span>
              <span className="font-bold text-[#640000] text-lg">Mobile Money</span>
            </div>
            <p className="text-gray-700 text-sm mb-2 flex-1">
              Secure and widely used mobile payment service across Africa. Link your account for instant payments.
            </p>
            <div className="flex justify-between text-xs text-gray-600 mt-2">
              <span>Regions: <span className="font-semibold">East, West, Southern Africa</span></span>
              <span>Fee: <span className="font-semibold">1.2%</span></span>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-white border border-[#640000] rounded-xl p-6 shadow-lg flex flex-col hover:scale-105 hover:shadow-2xl transition-all duration-300 group">
            <div className="flex items-center mb-3">
              <span className="bg-[#640000] p-2 rounded-full mr-3">
                <CreditCard className="w-6 h-6 text-white" />
              </span>
              <span className="font-bold text-[#640000] text-lg">Credit/Debit Card</span>
            </div>
            <p className="text-gray-700 text-sm mb-2 flex-1">
              Pay conveniently with your Visa, MasterCard, or other major credit/debit cards.
            </p>
            <div className="flex justify-between text-xs text-gray-600 mt-2">
              <span>Regions: <span className="font-semibold">All regions</span></span>
              <span>Fee: <span className="font-semibold">2.5%</span></span>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-white border border-[#640000] rounded-xl p-6 shadow-lg flex flex-col hover:scale-105 hover:shadow-2xl transition-all duration-300 group">
            <div className="flex items-center mb-3">
              <span className="bg-[#640000] p-2 rounded-full mr-3">
                <Coins className="w-6 h-6 text-white" />
              </span>
              <span className="font-bold text-[#640000] text-lg">BoleiaChain Token (BCT)</span>
            </div>
            <p className="text-gray-700 text-sm mb-2 flex-1">
              Use BCT for exclusive discounts, loyalty rewards, and seamless token blockchain experience.
            </p>
            <div className="flex justify-between text-xs text-gray-600 mt-2">
              <span>Regions: <span className="font-semibold">All regions</span></span>
              <span>Fee: <span className="font-semibold">0%</span></span>
            </div>
          </div>
          {/* Card 4 */}
          <div className="bg-white border border-[#640000] rounded-xl p-6 shadow-lg flex flex-col hover:scale-105 hover:shadow-2xl transition-all duration-300 group">
            <div className="flex items-center mb-3">
              <span className="bg-[#640000] p-2 rounded-full mr-3">
                <DollarSign className="w-6 h-6 text-white" />
              </span>
              <span className="font-bold text-[#640000] text-lg">Cash Payment</span>
            </div>
            <p className="text-gray-700 text-sm mb-2 flex-1">
              Pay directly in cash to your driver or courier upon completion of services. Available in select regions.
            </p>
            <div className="flex justify-between text-xs text-gray-600 mt-2">
              <span>Regions: <span className="font-semibold">All regions</span></span>
              <span>Fee: <span className="font-semibold">0%</span></span>
            </div>
          </div>
          {/* Card 5 */}
          <div className="bg-white border border-[#640000] rounded-xl p-6 shadow-lg flex flex-col hover:scale-105 hover:shadow-2xl transition-all duration-300 group">
            <div className="flex items-center mb-3">
              <span className="bg-[#640000] p-2 rounded-full mr-3">
                <Banknote className="w-6 h-6 text-white" />
              </span>
              <span className="font-bold text-[#640000] text-lg">Bank Transfer (EFT)</span>
            </div>
            <p className="text-gray-700 text-sm mb-2 flex-1">
              For corporate accounts or larger transactions, make direct electronic fund transfers.
            </p>
            <div className="flex justify-between text-xs text-gray-600 mt-2">
              <span>Regions: <span className="font-semibold">South Africa, Nigeria, Kenya</span></span>
              <span>Fee: <span className="font-semibold">0.5%</span></span>
            </div>
          </div>
          {/* Card 6 */}
          <div className="bg-white border border-[#640000] rounded-xl p-6 shadow-lg flex flex-col hover:scale-105 hover:shadow-2xl transition-all duration-300 group">
            <div className="flex items-center mb-3">
              <span className="bg-[#640000] p-2 rounded-full mr-3">
                <Wallet className="w-6 h-6 text-white" />
              </span>
              <span className="font-bold text-[#640000] text-lg">Digital Wallets</span>
            </div>
            <p className="text-gray-700 text-sm mb-2 flex-1">
              Connect popular digital wallets like PayPal for a swift, secure, and easy payment experience.
            </p>
            <div className="flex justify-between text-xs text-gray-600 mt-2">
              <span>Regions: <span className="font-semibold">Global (where supported by your local provider)</span></span>
              <span>Fee: <span className="font-semibold">1.8%</span></span>
            </div>
          </div>
        </div>
      </div>

      {/* Why Our Pricing */}
      <div className="max-w-5xl mx-auto pt-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#640000] mb-12">
          Why Our Pricing?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center text-center">
            <CheckCircle className="w-10 h-10 text-[#640000] mb-4" />
            <h3 className="font-bold text-[#640000] mb-2">No Hidden Fees</h3>
            <p className="text-gray-700 text-sm">
              What you see is what you pay. No surprise charges or hidden fees.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <CheckCircle className="w-10 h-10 text-[#640000] mb-4" />
            <h3 className="font-bold text-[#640000] mb-2">Fair Pricing</h3>
            <p className="text-gray-700 text-sm">
              Competitive rates that provide value for both users and service providers.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <CheckCircle className="w-10 h-10 text-[#640000] mb-4" />
            <h3 className="font-bold text-[#640000] mb-2">Flexible Payments</h3>
            <p className="text-gray-700 text-sm">
              Multiple payment options including BCT tokens for additional savings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}