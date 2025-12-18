import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-bold transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 rounded-2xl border-4 border-border shadow-large hover:shadow-medium active:shadow-soft active:translate-y-1",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-2xl border-4 border-border shadow-large hover:shadow-medium active:shadow-soft active:translate-y-1",
        outline: "border-4 border-border bg-card hover:bg-card/80 rounded-2xl shadow-medium hover:shadow-soft active:translate-y-1",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-2xl border-4 border-border shadow-large hover:shadow-medium active:shadow-soft active:translate-y-1",
        ghost: "hover:bg-accent/20 rounded-xl",
        link: "text-primary underline-offset-4 hover:underline",
        accent: "bg-accent text-accent-foreground hover:bg-accent/90 rounded-2xl border-4 border-border shadow-large hover:shadow-medium active:shadow-soft active:translate-y-1",
      },
      size: {
        default: "h-14 px-8 py-3 text-lg",
        sm: "h-10 px-4 text-base rounded-xl",
        lg: "h-20 px-12 text-2xl",
        icon: "h-14 w-14",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
