import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-semibold shadow-lg shadow-amber-500/20 hover:from-amber-400 hover:to-amber-500 hover:shadow-amber-500/30",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-amber-400/50 text-slate-100",
        secondary:
          "bg-slate-800/80 border border-slate-700 text-slate-200 hover:bg-slate-700/80 hover:text-white",
        ghost: "hover:bg-white/10 text-slate-300 hover:text-white",
        link: "text-amber-400 underline-offset-4 hover:underline",
        glass:
          "border border-white/15 bg-slate-900/40 backdrop-blur-xl text-slate-100 hover:bg-slate-800/60 hover:border-amber-400/40 shadow-sm",
        cinematic:
          "relative overflow-hidden font-cinematic uppercase tracking-widest text-xs border border-amber-500/40 bg-gradient-to-r from-amber-500/10 via-amber-500/20 to-amber-500/10 text-amber-200 hover:border-amber-400 hover:text-white hover:shadow-[0_0_25px_rgba(245,158,11,0.35)] transition-all duration-500",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 rounded-md px-3 text-xs",
        lg: "h-12 rounded-lg px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
