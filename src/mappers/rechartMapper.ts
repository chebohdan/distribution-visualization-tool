import type { RechartData } from "../types";

const frequenciecToRechartData = (
  frequenciesData: Record<string, number>
): RechartData[] => {
  return Object.entries(frequenciesData).map((entry) => {
    return { name: entry[0], value: entry[1] };
  });
};

export { frequenciecToRechartData };
