import { BiCheckbox, BiSolidCheckbox } from 'react-icons/bi';

interface CheckboxProps {
  checked: boolean;
}

export function Checkbox({checked}: CheckboxProps) {
  return checked ? <BiSolidCheckbox size={10} /> : <BiCheckbox size={10} />
}
