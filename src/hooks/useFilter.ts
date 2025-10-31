import { useMemo, useState } from "react";
import type { FilterOption } from "../types";
import {
  getFrequenciesByKey,
  getLabelsFromFrequencyData,
} from "../helpers/FrequencyHelper";

interface UseFilterProps<T extends Record<string, any>> {
  data: T[];
  filterBy: keyof T;
}

function useFilter<T extends Record<string, any>>({
  data,
  filterBy,
}: UseFilterProps<T>) {
  const [activeFilter, setActiveFilter] = useState<string[]>([]);

  const filterOptions: FilterOption[] = useMemo(() => {
    const filterOptions = getLabelsFromFrequencyData(
      getFrequenciesByKey(data, filterBy)
    );
    const sortedFilterOptions = filterOptions.sort((a, b) => {
      var textA = a.label.toUpperCase();
      var textB = b.label.toUpperCase();
      return textA < textB ? -1 : textA > textB ? 1 : 0;
    });
    return sortedFilterOptions;
  }, [data, filterBy]);

  const filteredData = useMemo(() => {
    if (activeFilter.length === 0) return data;
    return data.filter((item) => activeFilter.includes(item[filterBy]));
  }, [data, activeFilter, filterBy]);

  const handleFilterSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setActiveFilter((prev) =>
      checked
        ? prev.includes(value)
          ? prev
          : [...prev, value]
        : prev.filter((f) => f !== value)
    );
  };

  return {
    filterOptions,
    filteredData,
    activeFilter,
    handleFilterSelect,
  };
}

export default useFilter;
