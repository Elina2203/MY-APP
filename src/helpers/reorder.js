export const reorder = (list, startIndex, endIndex) => {
  const result = [...list];
  const [current] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, current);
  return result;
};
