import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

import type { FilterOption } from "../../types";
import FilterSidePanelItem from "./FilterSidePanelItem";
import { useState } from "react";

export interface FilterSidePanelProps {
  filterOptions: FilterOption[];
  activeFilter: string[];
  handleFilterSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
  filterBy: string;
}

function FilterSidePanel({
  filterOptions,
  activeFilter,
  handleFilterSelect,
  filterBy,
}: FilterSidePanelProps) {
  const [isFilterOpen, setFilterOpen] = useState(false);

  return (
    <div>
      {/* Hamburger Panel*/}
      <div className="p-4 md:hidden flex justify-between bg-gray-900 ">
        <h1 className="font-bold uppercase">{filterBy}</h1>
        <button onClick={() => setFilterOpen(true)}>
          <GiHamburgerMenu size={24} />
        </button>
      </div>
      {/* Backdrop */}
      {isFilterOpen && (
        <div
          className="fixed inset-0 bg-black/50 bg-opacity-50 z-10 md:hidden"
          onClick={() => setFilterOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed h-screen overflow-auto top-0 left-0 w-80 bg-gray-800 z-11 
          ${isFilterOpen ? "translate-x-0" : "-translate-x-full"}
          md:h-full md:static md:translate-x-0 md:flex md:flex-col md:w-96 md:z-1
          transition-transform duration-300 ease-in-out 
        `}
      >
        {/* Header */}
        <div className="flex justify-between p-6 border-b border-gray-700">
          <h1 className="font-bold uppercase">{filterBy}</h1>
          <button className="md:hidden" onClick={() => setFilterOpen(false)}>
            <RxCross2 size={24} />
          </button>
        </div>

        {/* Filter Options */}
        <nav className="overflow-y-auto flex-1 p-4 space-y-2">
          {filterOptions.map((filterOption, i) => (
            <FilterSidePanelItem
              key={i}
              filterOption={filterOption}
              handleFilterSelect={handleFilterSelect}
              activeFilter={activeFilter}
            />
          ))}
        </nav>
      </aside>
    </div>
  );
}

export default FilterSidePanel;
