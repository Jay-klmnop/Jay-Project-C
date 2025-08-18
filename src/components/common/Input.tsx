import { cva, type VariantProps } from 'class-variance-authority';
import type { InputHTMLAttributes } from 'react';

const inputVariants = cva('w-full rounded-lg py-3 pl-10 pr-4 focus:outline-none', {
  variants: {
    variant: {
      default: 'bg-white text-black placeholder:text-gray-500',
      search: 'bg-neutral-100 text-neutral-900 placeholder:text-neutral-400 border-0',
      card: 'bg-white text-black placeholder:text-gray-500 border border-gray-600',
      cvv: 'bg-white text-black placeholder:text-gray-500 border border-gray-300',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

export default function Input({ className, variant, type = 'text', ...props }: InputProps) {
  return <input type={type} className={inputVariants({ variant, className })} {...props} />;
}
