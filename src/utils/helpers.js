export const include = (list, item) => (
  list.includes(item)
    ? list
    : list.concat(item)
);

export const exclude = (list, item) => {
  const index = list.indexOf(item);
  if (index < 0) return list;
  return list.slice(0, index).concat(
    list.slice(index + 1)
  );
};

export const packTo = field => value => ({ [field]: value });