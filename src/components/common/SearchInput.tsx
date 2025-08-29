import { type InputHTMLAttributes } from 'react';
import clsx from 'clsx';
import { Input } from '@/components/common';

interface SearchInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'className'> {
  containerClassName?: string;
  inputClassName?: string;
}

export default function SearchInput({
  containerClassName,
  inputClassName,
  ...props
}: SearchInputProps) {
  return (
    <div className={clsx('relative flex items-center', containerClassName)}>
      <Input
        placeholder='Search'
        {...props}
        type='search'
        variant='search'
        className={inputClassName}
      />
    </div>
  );
}
