import { Rocket } from "lucide-react";

interface LogoProps {
  className?: string;
  showIcon?: boolean;
  size?: "sm" | "md" | "lg";
}

const Logo = ({ className = "", showIcon = true, size = "md" }: LogoProps) => {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  };

  const iconSizes = {
    sm: 18,
    md: 22,
    lg: 28,
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {showIcon && (
        <div className="relative">
          <div className="absolute inset-0 bg-primary/30 blur-lg rounded-full" />
          <Rocket 
            size={iconSizes[size]} 
            className="text-primary relative animate-pulse-glow" 
            style={{ transform: "rotate(-45deg)" }}
          />
        </div>
      )}
      <span 
        className={`font-bold tracking-[0.2em] text-foreground ${sizeClasses[size]}`}
        style={{ letterSpacing: "0.2em" }}
      >
        STRATOSPHR
      </span>
    </div>
  );
};

export default Logo;
