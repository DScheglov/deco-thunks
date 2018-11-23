export const prevent = event => event.preventDefault();
export const handleWith = (...handlers) => event => handlers.forEach(
  handler => handler(event)
);
