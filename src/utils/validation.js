export const isNotEmptyString = (value) => {
  return typeof value === "string" && value.trim().length > 0;
};

export const isPresent = (value) => {
  return (value !== null && value !== undefined) || isNotEmptyString(value);
};
