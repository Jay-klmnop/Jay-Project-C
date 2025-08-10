import Search from "../../../assets/search-input/search.svg?react";

interface SearchIconProps {
  className?: string;
}

export default function SearchIcon({ className }: SearchIconProps) {
  return <Search className={className} />;
}
