import Search from "../../../assets/f-icon/32px/Search.svg?react";

interface SearchIconProps {
  className?: string;
}

export default function SearchIcon({ className }: SearchIconProps) {
  return <Search className={className} />;
}
