// src/components/FilterButtons.tsx

export type FilterType = 'all' | 'students' | 'staff' | 'favorites';

interface FilterButtonsProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

const filters: FilterType[] = ['all', 'students', 'staff', 'favorites'];

export function FilterButtons({ currentFilter, onFilterChange }: FilterButtonsProps) {
  return (
    <div className="flex gap-4 mb-6">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`px-4 py-2 rounded capitalize ${
            currentFilter === filter ? 'bg-blue-600 text-white' : 'bg-gray-200'
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
