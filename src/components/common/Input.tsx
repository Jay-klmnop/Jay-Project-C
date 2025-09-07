import { cva, type VariantProps } from "class-variance-authority";
import type { InputHTMLAttributes } from "react";

const inputVariants = cva("w-full rounded-lg focus:outline-none", {
  variants: {
    variant: {
      default: "bg-white text-black placeholder:text-gray-500",
      search:
        "bg-transparent text-neutral-900 placeholder:text-neutral-950 border-[1px] border-black",
      card: "bg-white text-black placeholder:text-gray-500 border border-gray-600",
      cvv: "bg-white text-black placeholder:text-gray-500 border border-gray-300",
    },
    inputSize: {
      default: "text-[10px] py-1 px-3",
      large: "text-sm py-2 pl-8 pr-3",
    },
  },
  defaultVariants: {
    variant: "default",
    inputSize: "default",
  },
});
export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

export default function Input({
  className,
  variant,
  inputSize,
  type = "text",
  ...props
}: InputProps) {
  return (
    <input
      type={type}
      className={inputVariants({ variant, inputSize, className })}
      {...props}
    />
  );
}
