// Optional parameter
export const getName = (first: string, last?: string) => {
  if (last) {
    return `${first} ${last}`;
  }
  return first;
};

// Required parameters cannot follow optional parameters