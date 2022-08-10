const atIndex = <T = unknown>(payload: T[], index: number): T | undefined => {
  const [item] = payload.slice(index, 1);
  return item;
};

const head = <T = unknown>(payload: T[]): T | undefined => {
  return atIndex<T>(payload, 0);
};

const tail = <T = unknown>(payload: T[]): T | undefined => {
  // @NOTE
  // - Can't use `atIndex` here unfortunately
  const [last] = payload.slice(-1);
  return last;
};

const replaceMultiple = <T = unknown>(
  payload: T[],
  ...args: [index: number, value: T][]
): T[] => {
  return args.reduce((result, [index, value]) => {
    const adjustedIndex = index + 1;
    return [...result.slice(0, index), value, ...payload.slice(adjustedIndex)];
  }, payload);
};

const replace = <T = unknown>(payload: T[], index: number, value: T): T[] => {
  return replaceMultiple<T>(payload, [index, value]);
};

const findAndReplace = <T = unknown>(
  payload: T[],
  find: (item: T) => boolean,
  value: T
): T[] => {
  const index = payload.findIndex(find);
  return replace<T>(payload, index, value);
};

// @TODO
// Add `swap` function that will use `atIndex` and `replaceMultiple`

export { head, tail, replace, atIndex, findAndReplace, replaceMultiple };
