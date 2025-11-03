import type { FlatRecord } from "../types";

export function getFlatRecords<T extends Record<string, any>>(
  data: T[]
): FlatRecord[] {
  return data.map((item) => {
    const flatItem: FlatRecord = {};
    for (const key in item) {
      const value = item[key];
      if (typeof value !== "object" || value === null) {
        flatItem[key] = value;
      }
    }
    return flatItem;
  });
}
