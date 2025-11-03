// Components
import BarChartCard from "./BarChardCard/BarCharCard";
import FilterSidePanel from "./FilterSidePanel/FilterSidePanel";

// Hooks
import useChartData from "../hooks/useChartData";
import useDataKeys from "../hooks/useDataKeys";
import useFilter from "../hooks/useFilter";
import PropertyVisualizer from "./PropertyVisualizer/PropertyVisualizer";

interface DataVisualizerProps<T extends FlatRecord> {
  data: T[];
  distributionBy: (keyof T)[];
  filterBy: keyof T;
}

type FlatRecord = {
  [key: string]: string | number | boolean | null | undefined;
};

export const DataVisualizer = <T extends FlatRecord>({
  data,
  distributionBy,
  filterBy,
}: DataVisualizerProps<T>) => {
  // -------------------------------
  // Hooks
  // -------------------------------

  const chartData = useChartData({ data, distributionBy });
  const dataKeys = useDataKeys({ data });
  const { filteredData, filterOptions, activeFilter, handleFilterSelect } =
    useFilter({ data, filterBy });

  return (
    <div className="min-h-screen p-3 bg-gray-950 text-white">
      {/* --- Charts Section --- */}
      <div className="bg-gray-900 p-8">
        <h1 className="text-3xl text-center font-bold">Distributions</h1>
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2  ">
          {chartData.map((chartData, i) => {
            return <BarChartCard key={i} chartDetails={chartData} />;
          })}
        </div>
      </div>

      {/* --- Content Section --- */}
      <div className="flex flex-col md:flex-row p-8 mt-3 bg-gray-900">
        {/* --- Filter Options Panel --- */}
        <FilterSidePanel
          filterBy={String(filterBy)}
          filterOptions={filterOptions}
          handleFilterSelect={handleFilterSelect}
          activeFilter={activeFilter}
        />

        {/* --- Table of content --- */}
        <div className="flex-1 overflow-auto md:ml-6">
          <PropertyVisualizer filteredData={filteredData} dataKeys={dataKeys} />
        </div>
      </div>
    </div>
  );
};
