import { type InputHTMLAttributes } from "react";
import clsx from "clsx";
import SearchIcon from "./icons/SearchIcon";
import Input from "./Input";

interface SearchInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "className"> {
  containerClassName?: string;
  inputClassName?: string;
}

export default function SearchInput({
  containerClassName,
  inputClassName,
  ...props
}: SearchInputProps) {
  return (
    <div className={clsx("relative flex items-center", containerClassName)}>
      <SearchIcon className="absolute left-3 top-3 pointer-events-none shrink-0" />
      <Input
        placeholder="Search"
        {...props}
        type="search"
        variant="search"
        className={inputClassName}
      />
    </div>
  );
}
