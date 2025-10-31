interface PropertyCardListProps<T extends Record<string, any>> {
  dataKeys: string[];
  filteredData: T[];
}

function PropertyCardList<T extends Record<string, any>>({
  dataKeys,
  filteredData,
}: PropertyCardListProps<T>) {
  return (
    <div className="lg:hidden space-y-4">
      {filteredData.map((item, i) => (
        <div
          key={i}
          className="flex flex-col gap-3 bg-gray-800 p-4 border border-gray-700 rounded-lg"
        >
          {dataKeys.map((key, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-left font-bold text-gray-300">{key}</span>
              <span className="text-left text-gray-100">{item[key]}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default PropertyCardList;
