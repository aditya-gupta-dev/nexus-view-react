import React from "react";
import { cn } from "@/lib/utils";

interface NeoButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

export const NeoButton = React.forwardRef<HTMLButtonElement, NeoButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const variants = {
      primary: "bg-black text-white hover:bg-black/90",
      secondary: "bg-white text-black hover:bg-white/90",
      outline: "bg-transparent text-black border-2 border-black hover:bg-black/5",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base font-bold",
      lg: "px-8 py-4 text-lg font-extrabold",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "relative transition-all duration-200 cubic-bezier(0.175, 0.885, 0.32, 1.275)",
          "border-2 border-black rounded-xl",
          "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
          "hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]",
          "active:shadow-none active:translate-x-[4px] active:translate-y-[4px]",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);

NeoButton.displayName = "NeoButton";