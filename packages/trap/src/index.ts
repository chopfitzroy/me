type U<T> = T | undefined;

const trap =
  <T extends (...args: any[]) => any>(handler: T) =>
  async (...args: Parameters<T>): Promise<[unknown, U<ReturnType<T>>]> => {
    try {
      const result = await handler(...args);
      return [undefined, result];
    } catch (err) {
      const result =  err ?? new Error(`Nullish value recieved in 'trap'`);
      return [result, undefined];
    }
  };

export { trap };
