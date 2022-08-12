type U<T> = T | undefined;

const trap =
  <T extends (...args: any[]) => any>(handler: T) =>
  async (...args: Parameters<T>): Promise<[unknown, U<ReturnType<T>>]> => {
    try {
      const result = await handler(...args);
      return [undefined, result];
    } catch (err) {
      return [err, undefined];
    }
  };

export { trap };
