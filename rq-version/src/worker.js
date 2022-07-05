export const multiplyNumbers = (a, b) => {
  postMessage({ type: "result", result: a * b });
};
