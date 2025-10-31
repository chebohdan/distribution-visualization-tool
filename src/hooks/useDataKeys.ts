import { useMemo } from "react";

interface UseDataKeysProps<T extends Record<string, any>> {
  data: T[];
}

function useDataKeys<T extends Record<string, any>>({
  data,
}: UseDataKeysProps<T>) {
  const dataKeys = useMemo(
    () => (data.length > 0 ? Object.keys(data[0]) : []),
    [data]
  );
  return dataKeys;
}

export default useDataKeys;
