import { ArrowRight, Calendar, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Ready to <span className="gradient-text">Automate</span> Your Business?
          </h2>

          {/* Subheading */}
          <p className="text-muted-foreground text-lg mb-10">
            Book a free 30-minute discovery call to discuss your automation needs. 
            No pressure, just valuable insights.
          </p>

          {/* CTA Button */}
          <a href="mailto:hello@stratosphr.com">
            <Button variant="hero" size="xl" className="group mb-10">
              <Calendar className="mr-2" />
              Schedule Discovery Call
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>

          {/* Trust Signals */}
          <div className="flex flex-wrap justify-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield size={20} className="text-primary" />
              <span className="text-sm">No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={20} className="text-primary" />
              <span className="text-sm">Response within 24h</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
