import { type InputHTMLAttributes } from 'react';
import clsx from 'clsx';
import Input from '@/components/common/Input';
import { MagnifyingGlassIcon } from '@phosphor-icons/react';

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
      <MagnifyingGlassIcon
        size={24}
        color='#989898'
        className='pointer-events-none absolute left-3 top-3 shrink-0'
      />
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
