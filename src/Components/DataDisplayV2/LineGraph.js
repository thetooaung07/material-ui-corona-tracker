import Axios from 'axios';
import React, { useEffect, useState } from 'react'

const LineGraph = () => {
  const [chartData, setChartData] = useState();
  const fetchChartData = async() => {
    const url = `https://disease.sh/v3/covid-19/historical/all?lastdays=120`
    const chartApi = await Axios.get(url);
    console.log(chartApi.data);
  }
  useEffect(() => {
    fetchChartData();
  },[]) 
  return (
    <div>
      
    </div>
  )
}

export default LineGraph
