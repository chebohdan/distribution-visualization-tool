import PropertyTable from "./PropertyTable";
import PropertyCardList from "./PropertyCardList";

interface PropertyVisualizerProps<T extends Record<string, any>> {
  dataKeys: string[];
  filteredData: T[];
}

function PropertyVisualizer<T extends Record<string, any>>({
  dataKeys,
  filteredData,
}: PropertyVisualizerProps<T>) {
  return (
    <div>
      <PropertyTable dataKeys={dataKeys} filteredData={filteredData} />
      <PropertyCardList dataKeys={dataKeys} filteredData={filteredData} />
    </div>
  );
}

export default PropertyVisualizer;
