import { CATEGORIES, SIZES, SORT_OPTIONS } from '@/constants';
import type { CategoryFilterType, SizeFilterType, SortOptionType } from '@/constants';
import { Checkbox } from '@/components/products';
import { ToggleMenu } from '@/components/common/ToggleMenu';

interface CategoryFilterProps {
  selectedCategories: CategoryFilterType[];
  onToggleCategory: (category: CategoryFilterType) => void;
}

export function CategoryFilter({ selectedCategories, onToggleCategory }: CategoryFilterProps) {
  return (
    <ToggleMenu
      className='filter-group leading-none'
      trigger={<div className='w-16 font-semibold md:w-20'>category</div>}
    >
      {Object.entries(CATEGORIES).map(([key, label]) => (
        <button
          key={key}
          onClick={() => onToggleCategory(key as CategoryFilterType)}
          className='centralize gap-1'
        >
          <Checkbox checked={!selectedCategories.includes(key as CategoryFilterType)} />
          <span>{label}</span>
        </button>
      ))}
    </ToggleMenu>
  );
}

interface SizeFilterProps {
  selectedSizes: SizeFilterType[];
  onToggleSize: (size: SizeFilterType) => void;
}

export function SizeFilter({ selectedSizes, onToggleSize }: SizeFilterProps) {
  return (
    <ToggleMenu
      className='filter-group leading-none'
      trigger={<div className='w-16 font-semibold md:w-20'>size</div>}
    >
      {Object.entries(SIZES).map(([key, label]) => (
        <button
          key={key}
          className='centralize gap-1'
          onClick={() => onToggleSize(key as SizeFilterType)}
        >
          <Checkbox checked={selectedSizes.includes(key as SizeFilterType)} />
          <span>{label}</span>
        </button>
      ))}
    </ToggleMenu>
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
    <ToggleMenu
      className='filter-group leading-none'
      trigger={<div className='w-16 font-semibold md:w-30'>{currentLabel}</div>}
    >
      {Object.entries(SORT_OPTIONS).map(([key, label]) => (
        <button
          key={key}
          className='centralize gap-1'
          onClick={() => onToggleOption(key as SortOptionType)}
        >
          <Checkbox checked={selectedOption.includes(key as SortOptionType)} />
          <span className={`${className}`}>{label}</span>
        </button>
      ))}
    </ToggleMenu>
  );
}
