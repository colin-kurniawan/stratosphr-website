import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import GlassCard from "@/components/GlassCard";

const pricingPlans = [
  {
    name: "Starter",
    price: "$1,500",
    description: "Perfect for small businesses testing automation",
    features: [
      "Single automation workflow",
      "Up to 3 app integrations",
      "2 weeks delivery",
      "30 days support",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "$3,500",
    description: "For growing teams ready to scale",
    features: [
      "3 custom workflows",
      "Up to 8 app integrations",
      "Voice AI setup (optional)",
      "1 month delivery",
      "90 days support + monitoring",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with complex needs",
    features: [
      "Unlimited workflows",
      "Complex integrations",
      "Dedicated support",
      "SLA guarantees",
      "Custom development",
    ],
    popular: false,
  },
];

const addons = [
  { name: "Monthly Maintenance", price: "$200-500/mo" },
  { name: "24/7 Monitoring", price: "$100-300/mo" },
  { name: "Additional Workflows", price: "From $800/each" },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the plan that fits your automation needs
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {pricingPlans.map((plan, index) => (
            <GlassCard
              key={plan.name}
              hover
              glow={plan.popular}
              className={`relative animate-slide-up ${plan.popular ? "border-primary/50 scale-105" : ""}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary rounded-full text-xs font-semibold text-primary-foreground flex items-center gap-1">
                  <Star size={12} fill="currentColor" /> Most Popular
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>

              {/* Price */}
              <div className="mb-4">
                <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                {plan.price !== "Custom" && <span className="text-muted-foreground ml-1">one-time</span>}
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check size={18} className="text-success shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a href="#contact" className="block">
                <Button
                  variant={plan.popular ? "hero" : "outline"}
                  className="w-full"
                >
                  {plan.price === "Custom" ? "Contact Us" : "Get Started"}
                </Button>
              </a>
            </GlassCard>
          ))}
        </div>

        {/* Add-ons */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-foreground mb-6">Optional Add-ons</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {addons.map((addon) => (
              <div
                key={addon.name}
                className="px-6 py-3 rounded-lg bg-muted/50 border border-border/50 text-sm"
              >
                <span className="text-foreground font-medium">{addon.name}</span>
                <span className="text-primary ml-2">{addon.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
