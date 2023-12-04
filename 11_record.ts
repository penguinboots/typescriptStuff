// DYNAMIC KEYS

interface Cache {
  [index: string] : string;
}

const createCache = () => {
  const cache: Record<string, string> = {};
  // const cache: Cache = {};

  // Index signature inside a type
  // const cache: {
  //   [index: string]: string;
  // } = {};

  const add = (id: string, value: string) => {
    cache[id] = value;
  };

  const remove = (id: string) => {
    delete cache[id];
  };

  return {
    cache,
    add,
    remove,
  };
};