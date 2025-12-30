import { Rocket, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute inset-0 constellation" />
      
      {/* Purple Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]" />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
            <Sparkles size={16} className="text-primary" />
            <span className="text-sm text-primary font-medium">AI-Powered Automation Agency</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-slide-up">
            Launch Your Business{" "}
            <span className="gradient-text">Into the Future</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-slide-up delay-100">
            AI-powered automations that work while you sleep. We build custom n8n workflows 
            and voice AI agents for growing businesses.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up delay-200">
            <a href="#contact">
              <Button variant="hero" size="xl" className="group">
                Get Started
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="#services">
              <Button variant="heroOutline" size="xl">
                View Solutions
              </Button>
            </a>
          </div>

          {/* Trust Signals */}
          <div className="flex items-center justify-center gap-8 mt-16 text-muted-foreground text-sm animate-fade-in delay-300">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-success" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-success" />
              <span>Response within 24h</span>
            </div>
          </div>
        </div>

        {/* Floating Rocket */}
        <div className="absolute right-10 top-1/3 hidden lg:block animate-float">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/30 blur-xl rounded-full scale-150" />
            <Rocket size={80} className="text-primary relative" style={{ transform: "rotate(-45deg)" }} />
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
