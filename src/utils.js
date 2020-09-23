export const sortedData = (data) => {
  const toSortData = [...data]
  return toSortData.sort((a,b) => b.cases - a.cases);
}