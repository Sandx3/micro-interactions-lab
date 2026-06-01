export const paginate = (items, page, pageSize) => {
  if (!Array.isArray(items)) return [];

  const currentPage = Math.max(1, page);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  return items.slice(startIndex, endIndex);
};
