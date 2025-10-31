import type { FilterOption, FrequencyData, RechartData } from "../types";

export function getFrequenciesByKey<T extends Record<string, any>>(
  items: T[],
  key: keyof T
): FrequencyData {
  return items.reduce<FrequencyData>((acc, item) => {
    let count = acc[item[key]];
    count = count ? count + 1 : 1;
    acc[item[key]] = count;
    return acc;
  }, {});
}

export function getLabelsFromFrequencyData(
  frequencyData: FrequencyData
): FilterOption[] {
  return Object.keys(frequencyData).map((key, id) => {
    return { id: id, label: key };
  });
}

export function getFrequenciesRechartFormat(
  frequencyData: FrequencyData
): RechartData[] {
  return Object.entries(frequencyData).map((entry) => {
    return { name: entry[0], value: entry[1] };
  });
}
