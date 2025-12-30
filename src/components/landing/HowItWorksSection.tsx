import { MessageSquare, Code2, Rocket, HeartHandshake } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Discovery Call",
    description: "We learn your business processes and identify automation opportunities",
  },
  {
    icon: Code2,
    number: "02",
    title: "Custom Build",
    description: "We design and develop your automation tailored to your specific needs",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Implementation",
    description: "We deploy and integrate with your systems for seamless operation",
  },
  {
    icon: HeartHandshake,
    number: "04",
    title: "Ongoing Support",
    description: "We monitor and optimize performance to ensure continued success",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 relative bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Simple Process, <span className="gradient-text">Powerful Results</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From discovery to deployment in weeks, not months
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative text-center group animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Number Badge */}
                <div className="relative inline-flex mb-6">
                  <div className="w-16 h-16 rounded-full bg-card border-2 border-primary/30 flex items-center justify-center group-hover:border-primary transition-colors group-hover:shadow-lg group-hover:shadow-primary/20">
                    <step.icon size={28} className="text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
