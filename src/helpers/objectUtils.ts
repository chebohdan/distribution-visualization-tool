export function sortObjectsByField<T extends Record<string, any>>(
  arr: T[],
  field: keyof T
): T[] {
  return arr.sort((a, b) => {
    const textA = String(a[field]).toUpperCase();
    const textB = String(b[field]).toUpperCase();
    return textA.localeCompare(textB);
  });
}
