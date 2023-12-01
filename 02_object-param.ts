// Typing params as an object directly
// Gives most info in error message
export const addTwoNumbers = (params: { first: number; second: number }) => {
  return params.first + params.second;
};


// Generally better to extract
// Typing params with a named Type
type AddTwoNumbersArgs = {
  first: number;
  second: number;
};
export const addTwoNumbersAgain = (params: AddTwoNumbersArgs) => {
  return params.first + params.second;
};

// Typing params with an interface
interface AddTwoNumbersArgsAgain {
  first: number;
  second: number;
}
export const addTwoNumbersOnceAgain = (params: AddTwoNumbersArgs) => {
  return params.first + params.second;
};