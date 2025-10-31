import type { FilterOption } from "../../types";

export interface FilterSidePanelItemProps {
  filterOption: FilterOption;
  activeFilter: string[];
  handleFilterSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function FilterSidePanelItem({
  filterOption,
  activeFilter,
  handleFilterSelect,
}: FilterSidePanelItemProps) {
  return (
    <div
      className={`hover:bg-gray-700 ${
        activeFilter.includes(filterOption.label) && "bg-indigo-500"
      }`}
    >
      <label className="block p-3 ">
        <span>{filterOption.label}</span>
        <input
          className="hidden"
          value={filterOption.label}
          onChange={handleFilterSelect}
          type="checkbox"
        />
      </label>
    </div>
  );
}

export default FilterSidePanelItem;
