import { Zap, Phone, Link2, ArrowRight } from "lucide-react";
import GlassCard from "@/components/GlassCard";

const services = [
  {
    icon: Zap,
    title: "Workflow Automation",
    description: "Connect your tools and automate repetitive tasks with custom n8n workflows",
    examples: ["CRM syncing", "Lead routing", "Data processing"],
    gradient: "from-yellow-500/20 to-orange-500/20",
  },
  {
    icon: Phone,
    title: "AI Voice Agents",
    description: "24/7 voice AI receptionists and customer service using Retell AI",
    examples: ["Appointment booking", "Lead qualification", "Support calls"],
    gradient: "from-primary/20 to-secondary/20",
  },
  {
    icon: Link2,
    title: "Integration Solutions",
    description: "Seamless connections between your existing software stack",
    examples: ["Salesforce", "HubSpot", "Shopify", "QuickBooks"],
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            What We <span className="gradient-text">Build</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Powerful automation solutions tailored to your business needs
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <GlassCard key={service.title} hover className="group animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon size={28} className="text-foreground" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>

              {/* Description */}
              <p className="text-muted-foreground mb-6">{service.description}</p>

              {/* Examples */}
              <div className="space-y-2 mb-6">
                {service.examples.map((example) => (
                  <div key={example} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {example}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a href="#contact" className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                Learn more <ArrowRight size={16} />
              </a>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
