import { CATEGORIES, SIZES, SORT_OPTIONS } from '@/constants';
import type { CategoryFilterType, SizeFilterType, SortOptionType } from '@/constants';
import { Checkbox } from '@/components/products';
import { DropToggleMenu } from '@/components/common';
import { RiArrowDropDownLine } from 'react-icons/ri';

interface CategoryFilterProps {
  selectedCategories: CategoryFilterType[];
  onToggleCategory: (category: CategoryFilterType) => void;
}

export function CategoryFilter({ selectedCategories, onToggleCategory }: CategoryFilterProps) {
  return (
    <DropToggleMenu
      className='flex'
      trigger={
        <div className='flex w-full items-center justify-between'>
          <span className='w-20 font-semibold md:flex'>category</span>
          <RiArrowDropDownLine size={16} />
        </div>
      }
    >
      <div className='flex flex-col gap-2'>
        {Object.entries(CATEGORIES).map(([key, label]) => (
          <button
            key={key}
            className='flex items-center justify-baseline gap-1 text-center'
            onClick={() => onToggleCategory(key as CategoryFilterType)}
          >
            <Checkbox checked={!selectedCategories.includes(key as CategoryFilterType)} />
            <span>{label}</span>
          </button>
        ))}
      </div>
    </DropToggleMenu>
  );
}

interface SizeFilterProps {
  selectedSizes: SizeFilterType[];
  onToggleSize: (size: SizeFilterType) => void;
}

export function SizeFilter({ selectedSizes, onToggleSize }: SizeFilterProps) {
  return (
    <DropToggleMenu
      className='flex'
      trigger={
        <div className='flex w-full items-center justify-between'>
          <span className='w-20 font-semibold md:flex'>size</span>
          <RiArrowDropDownLine size={16} />
        </div>
      }
    >
      <div className='flex flex-col gap-2'>
        {Object.entries(SIZES).map(([key, label]) => (
          <button
            key={key}
            className='flex items-center justify-baseline gap-1 text-center'
            onClick={() => onToggleSize(key as SizeFilterType)}
          >
            <Checkbox checked={selectedSizes.includes(key as SizeFilterType)} />
            <span>{label}</span>
          </button>
        ))}
      </div>
    </DropToggleMenu>
  );
}

interface SortOptionsProps {
  selectedOption: SortOptionType;
  onToggleOption: (size: SortOptionType) => void;
  className: string;
}

export function SortOption({ selectedOption, onToggleOption, className }: SortOptionsProps) {
  const currentLabel = SORT_OPTIONS[selectedOption];
  return (
    <DropToggleMenu
      className='flex'
      trigger={
        <div className='flex w-full items-center justify-between'>
          <span className='w-28 font-semibold md:w-32'>{currentLabel}</span>
          <RiArrowDropDownLine size={16} />
        </div>
      }
    >
      <div className='flex flex-col gap-2'>
        {Object.entries(SORT_OPTIONS).map(([key, label]) => (
          <button
            key={key}
            className='flex items-center justify-baseline gap-1 text-center'
            onClick={() => onToggleOption(key as SortOptionType)}
          >
            <Checkbox checked={selectedOption.includes(key as SortOptionType)} />
            <span className={`${className}`}>{label}</span>
          </button>
        ))}
      </div>
    </DropToggleMenu>
  );
}
