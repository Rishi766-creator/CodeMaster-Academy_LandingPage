import { Check } from "lucide-react"

export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "₹0",
      period: "",
      description: "Get started with AI-powered learning",
      features: ["Access to 10 lessons", "Limited AI hints", "Community support", "Basic coding exercises"],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Pro",
      price: "₹499",
      period: "/month",
      description: "Perfect for serious learners",
      features: [
        "Full access to all lessons",
        "Unlimited AI Mentor support",
        "Real-world projects",
        "Priority support",
        "Downloadable resources",
        "Certificate of completion",
      ],
      cta: "Start Pro",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For teams and organizations",
      features: [
        "Everything in Pro",
        "Team management dashboard",
        "AI insights & analytics",
        "Custom learning paths",
        "Dedicated account manager",
        "Priority onboarding",
      ],
      cta: "Contact Sales",
      highlighted: false,
    },
  ]

  return (
    <section id="pricing" className="relative py-10 px-6 bg-black overflow-hidden pb-24">
      {/* Purple glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-white via-purple-200 to-violet-300 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]">
          Choose Your Plan
        </h2>
        <p className="text-gray-300 text-center mb-18 text-lg">Start learning with AI today</p>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:-translate-y-2 ${
                plan.highlighted
                  ? "bg-gradient-to-br from-purple-900/40 to-violet-900/40 border-purple-400/60 shadow-2xl shadow-purple-500/40 scale-105"
                  : "bg-black/60 border-purple-500/30 hover:border-purple-400/60 hover:shadow-2xl hover:shadow-purple-500/30"
              }`}
            >
              {/* Popular badge for Pro plan */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full text-white text-sm font-semibold shadow-lg">
                  Most Popular
                </div>
              )}

              {/* Gradient overlay on hover */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-600/10 to-violet-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  plan.highlighted ? "opacity-20" : ""
                }`}
              />

              <div className="relative z-10">
                {/* Plan Name */}
                <h3
                  className={`text-2xl font-bold mb-2 ${
                    plan.highlighted ? "text-purple-200" : "text-white group-hover:text-purple-200"
                  } transition-colors duration-300`}
                >
                  {plan.name}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-8">
                  <span className="text-5xl font-bold text-white">{plan.price}</span>
                  {plan.period && <span className="text-gray-400 text-lg ml-1">{plan.period}</span>}
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div
                        className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                          plan.highlighted ? "bg-purple-500/30" : "bg-purple-500/20"
                        }`}
                      >
                        <Check className="w-3 h-3 text-purple-300" />
                      </div>
                      <span className="text-gray-200 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.highlighted
                      ? "bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70"
                      : "bg-purple-600/20 hover:bg-purple-600/40 text-purple-200 border border-purple-500/50 hover:border-purple-400"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
