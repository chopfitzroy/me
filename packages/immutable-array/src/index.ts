// @NOTE
// - We use `U` to satisfy bad indexes
// - The responsibility of index checks belongs to the consumer
type U<T> = T | undefined;

const head = <T = unknown>(payload: U<T>[]): U<T> => {
  const [head] = payload.slice(0, 1);
  return head;
};

const tail = <T = unknown>(payload: U<T>[]): U<T> => {
  const [last] = payload.slice(-1);
  return last;
};

const atIndex = <T = unknown>(payload: U<T>[], index: number): U<T> => {
  const adjustedIndex = index + 1;
  const [item] = payload.slice(index, adjustedIndex);

  return item;
};

const replaceMultiple = <T = unknown>(
  payload: U<T>[],
  ...args: [index: number, value: U<T>][]
): U<T>[] => {
  return args.reduce((result, [index, value]) => {
    const adjustedIndex = index + 1;
    return [...result.slice(0, index), value, ...payload.slice(adjustedIndex)];
  }, payload);
};

const replace = <T = unknown>(
  payload: U<T>[],
  index: number,
  value: U<T>
): U<T>[] => {
  return replaceMultiple<T>(payload, [index, value]);
};

const findAndReplace = <T = unknown>(
  payload: U<T>[],
  find: (item: U<T>) => boolean,
  value: T
): U<T>[] => {
  const index = payload.findIndex(find);

  if (index < 0) {
    return [...payload];
  }

  return replace<T>(payload, index, value);
};

const swap = <T = unknown>(payload: U<T>[], a: number, b: number): U<T>[] => {
  const aValue = atIndex<T>(payload, a);
  const bValue = atIndex<T>(payload, b);

  return replaceMultiple<T>(payload, [a, bValue], [b, aValue]);
};

export { swap, head, tail, replace, atIndex, findAndReplace, replaceMultiple };
