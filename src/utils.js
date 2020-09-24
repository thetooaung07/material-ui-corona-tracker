export const sortedData = (data) => {
  const toSortData = [...data]
  return toSortData.sort((a,b) => b.cases - a.cases);
}


export const ChartDataConfig = (data, casesType ) => {
  let chartData = [];
  let lastDataPoint; 
  for (let date in data[casesType]) {
    if (lastDataPoint) {
      let newDataPoint = {
        x: date,
        y: data[casesType][date] - lastDataPoint,
      };
      chartData.push(newDataPoint);
    }
    lastDataPoint = data[casesType][date];
  }
  return chartData;
}