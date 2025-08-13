import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-semibold transition-colors focus:outline-none",
  {
    variants: {
      variant: {
        "filled-dark": "bg-black text-white hover:bg-neutral-800",
        "outlined-light": "border border-white bg-neutral-100 text-neutral-800",
        "outlined-dark": "border border-neutral-400 bg-neutral-100 text-black",
      },
      shape: {
        default: "rounded-md",
        rounded: "rounded-lg",
      },
      size: {
        big: "px-8 py-3 text-base",
        small: "px-4 py-2 text-sm",
      },
    },
    defaultVariants: {
      variant: "filled-dark",
      shape: "default",
      size: "big",
    },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export default function Button({
  className,
  variant,
  shape,
  size,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonVariants({ variant, shape, size, className })}
      {...props}
    >
      {children}
    </button>
  );
}
