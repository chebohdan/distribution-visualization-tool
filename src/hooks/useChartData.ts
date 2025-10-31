import { useMemo } from "react";
import {
  getFrequenciesByKey,
  getFrequenciesRechartFormat,
} from "../helpers/FrequencyHelper";
import type { ChartDetails } from "../types";
import { capitalizeFirstLetter } from "../helpers/stringUtils";

interface UseChartDataProps<T extends Record<string, any>> {
  data: T[];
  distributionBy: (keyof T)[];
}

// Returns formatted chart data
function useChartData<T extends Record<string, any>>({
  data,
  distributionBy,
}: UseChartDataProps<T>): ChartDetails[] {
  const chartDetails: ChartDetails[] = useMemo(() => {
    return distributionBy.map((key) => {
      const frequencies = getFrequenciesByKey(data, key);
      const dataset = getFrequenciesRechartFormat(frequencies);

      return {
        data: dataset,
        title: capitalizeFirstLetter(String(key)),
      };
    });
  }, [data, distributionBy]);

  return chartDetails;
}
export default useChartData;
