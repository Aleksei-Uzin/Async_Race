export const getTotalPages = (totalElements: number, size: number) =>
  Math.ceil(totalElements / size)
