import { ReactNode, CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  style?: CSSProperties;
}

const GlassCard = ({ children, className = "", hover = false, glow = false, style }: GlassCardProps) => {
  return (
    <div
      className={cn(
        hover ? "glass-card-hover" : "glass-card",
        glow && "purple-glow",
        "p-6",
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
};

export default GlassCard;
