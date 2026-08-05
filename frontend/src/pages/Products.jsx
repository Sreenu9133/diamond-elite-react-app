import React from "react";
import {
  CheckCircle,
  Crown,
  Gem,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "₹500",
    duration: "Forever",
    icon: CheckCircle,
    color: "from-gray-500 to-gray-700",
    button: "Get Started",
    features: [
      "Limited News Access",
      "5 Reward Coins Daily",
      "Like Articles",
      "Comment on News",
      "Ads Included",
    ],
  },
  {
    name: "Silver",
    price: "₹2000",
    duration: "/month",
    icon: Sparkles,
    color: "from-emerald-500 to-emerald-700",
    badge: "Popular",
    button: "Subscribe",
    features: [
      "Unlimited News",
      "No Ads",
      "1000 Coins Daily",
      "Premium Articles",
      "Priority Support",
    ],
  },
  {
    name: "Gold",
    price: "₹6000",
    duration: "/month",
    icon: Crown,
    color: "from-yellow-400 to-orange-500",
    badge: "Best Value",
    button: "Go Premium",
    features: [
      "Everything in Silver",
      "500 Coins Daily",
      "Exclusive Reports",
      "Breaking News Early",
      "AI News Feed",
    ],
  },
  {
    name: "Platinum",
    price: "₹9000",
    duration: "/month",
    icon: Gem,
    color: "from-indigo-500 to-purple-700",
    badge: "VIP",
    button: "Join VIP",
    features: [
      "Everything in Gold",
      "50 Coins Daily",
      "VIP Events",
      "Personalized News",
      "Premium Support",
    ],
  },
];

function SubscriptionCards() {
  return (
    <div className="min-h-screen bg-gray-100 py-16 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-800">
            Choose Your Membership
          </h2>

          <p className="text-gray-500 mt-3">
            Unlock Premium News, Earn Daily Rewards & Enjoy an Ad-Free
            Experience.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan, index) => {
            const Icon = plan.icon;

            return (
              <div
                key={index}
                className="relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                {plan.badge && (
                  <span className="absolute top-4 right-4 bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full">
                    {plan.badge}
                  </span>
                )}

                <div
                  className={`bg-gradient-to-r ${plan.color} p-8 text-white`}
                >
                  <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center mb-5">
                    <Icon size={32} />
                  </div>

                  <h3 className="text-3xl font-bold">{plan.name}</h3>

                  <div className="flex items-end mt-3">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="ml-1 opacity-90">{plan.duration}</span>
                  </div>
                </div>

                <div className="p-7">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-gray-700"
                      >
                        <CheckCircle
                          className="text-emerald-500"
                          size={18}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className="w-full bg-emerald-700 hover:bg-emerald-800 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition">
                    {plan.button}
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SubscriptionCards;
