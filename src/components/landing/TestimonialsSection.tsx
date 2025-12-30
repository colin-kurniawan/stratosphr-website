import { Star, Quote } from "lucide-react";
import GlassCard from "@/components/GlassCard";

const testimonials = [
  {
    quote: "STRATOSPHR transformed our lead management process. We're now capturing and qualifying leads 3x faster with their voice AI solution.",
    name: "Sarah Chen",
    title: "CEO",
    company: "TechStart Inc",
    rating: 5,
  },
  {
    quote: "The automation they built saved us 20+ hours per week on invoice processing. ROI was achieved in the first month.",
    name: "Michael Rodriguez",
    title: "Operations Manager",
    company: "GrowthCo",
    rating: 5,
  },
  {
    quote: "Professional team, excellent communication, and the workflows just work. Highly recommend for any growing business.",
    name: "Emily Johnson",
    title: "Founder",
    company: "Acme Corp",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 relative bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Trusted by <span className="gradient-text">Growing Businesses</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See what our clients say about working with us
          </p>
        </div>

        {/* Logo Wall Placeholder */}
        <div className="flex flex-wrap justify-center gap-8 mb-16 opacity-40">
          {["Your Logo Here", "Partner", "Client", "Brand", "Company"].map((text, i) => (
            <div
              key={i}
              className="px-8 py-4 rounded-lg border border-border/50 text-muted-foreground text-sm font-medium"
            >
              {text}
            </div>
          ))}
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <GlassCard
              key={testimonial.name}
              hover
              className="animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <Quote size={32} className="text-primary/30 mb-4" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} className="text-warning fill-warning" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground mb-6 leading-relaxed">"{testimonial.quote}"</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center text-foreground font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.title}, {testimonial.company}
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
