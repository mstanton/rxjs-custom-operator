export const AutocompleteDecorator = (target) =>  {
  return target.addOperators = (...operators) => {
    target.pipe(...operators);
  }
}