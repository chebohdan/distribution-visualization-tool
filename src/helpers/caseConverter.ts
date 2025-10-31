function toCamelCase(str: string) {
  return str.replace(/([-_][a-z])/gi, (match) =>
    match.toUpperCase().replace("-", "").replace("_", "")
  );
}

const isObject = (value: any) => {
  return value !== null && typeof value === "object" && !Array.isArray(value);
};

const snakeToCamel = <T extends Record<string, any>>(object: T) => {
  return Object.keys(object).reduce((acc: Record<string, any>, currentKey) => {
    const camelKey: string = toCamelCase(currentKey);
    const value: any = object[currentKey];
    if (Array.isArray(object[currentKey])) {
      acc[camelKey] = value.map((item: any) =>
        isObject(item) ? snakeToCamel(item) : item
      );
    } else if (isObject(object[currentKey])) {
      acc[camelKey] = snakeToCamel(object[currentKey]);
    } else {
      acc[camelKey] = object[currentKey];
    }
    return acc;
  }, {});
};

export { toCamelCase, isObject, snakeToCamel };
