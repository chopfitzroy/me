const head = <T = unknown>(payload: T[]): T | undefined => {
  const [head] = payload.slice(0, 1);
  return head;
};

const tail = <T = unknown>(payload: T[]): T | undefined => {
  const [last] = payload.slice(-1);
  return last;
};

// @NOTE
// - Throwing error here to make below functions simpler
const atIndex = <T = unknown>(payload: T[], index: number): T => {
  const adjustedIndex = index + 1;
  const [item] = payload.slice(index, adjustedIndex);

  if (item === undefined) {
    throw new Error(
      `Could not find valid value at ${index}. Please check array value`
    );
  }

  return item;
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

const swap = <T = unknown>(payload: T[], a: number, b: number): T[] => {
  const aValue = atIndex<T>(payload, a);
  const bValue = atIndex<T>(payload, b);

  return replaceMultiple<T>(payload, [a, bValue], [b, aValue]);
};

export { swap, head, tail, replace, atIndex, findAndReplace, replaceMultiple };
