interface PropertyTableProps<T extends Record<string, any>> {
  dataKeys: string[];
  filteredData: T[];
}

function PropertyTable<T extends Record<string, any>>({
  dataKeys,
  filteredData,
}: PropertyTableProps<T>) {
  return (
    <table className="hidden lg:table w-full min-w-full table-auto">
      <thead className="text-left font-medium border-b border-gray-800 bg-gray-900">
        <tr>
          {dataKeys.map((key, i) => (
            <th key={i} className="p-4">
              {key}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-gray-800 text-white">
        {filteredData.map((item, i) => (
          <tr key={i} className="border-b border-gray-700">
            {dataKeys.map((key, idx) => (
              <td key={idx} className="p-4 pl-8">
                {item[key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PropertyTable;
