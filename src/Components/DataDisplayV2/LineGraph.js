import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { ChartDataConfig } from "../../utils";
import numeral from "numeral";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  lineGraph: {
    marginTop: 20,
    height: 200,
    width: "100%",
    marginBottom: 20,

  },
}));

const LineGraph = ({ casesType = "cases" }) => {
  const classes = useStyle();
  const [chartData, setChartData] = useState();
  const [colorChanger, setColorChanger] = useState({
    bgColor: "red",
    bodColor: "cyan",
  });

  const fetchChartData = async () => {
    const url = `https://disease.sh/v3/covid-19/historical/all?lastdays=30`;
    const chartApi = await Axios.get(url);

    // console.log(chartApi.data);
    const getchartData = ChartDataConfig(chartApi.data, casesType);
    // console.log(getchartData);
    setChartData(getchartData);
  };

  const colorPicker = () => {
    if (casesType === "cases") {
      setColorChanger({
        bgColor: "red",
        bodColor: "#D21F3C",
      });
    } else if (casesType === "recovered") {
      setColorChanger({
        bgColor: "greenyellow",
        bodColor: "green",
      });
    } else {
      setColorChanger({
        bgColor: "grey",
        bodColor: "black",
      });
    }
  };

  useEffect(() => {
    fetchChartData();
    colorPicker();
  }, []);

  const options = {
    legend: {
      display: false,
    },
    elements: {
      point: {
        radius: 0,
      },
    },
    maintainAspectRatio: false,
    tooltips: {
      // available mode index, point , nearest
      mode: "index",
      intersect: false,
      callbacks: {
        label: function (tooltipItem, data) {
          return numeral(tooltipItem.value).format("+0,0");
          // return tooltipItem.value
        },
      },
    },
    scales: {
      xAxes: [
        {
          type: "time",
          time: {
            // format: "MM/DD/YY", //original documentation
            parser: "MM/DD/YY", //according to chrome warning
            tooltipFormat: "ll",
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            // beginAtZero: true,
            // Include a dollar sign in the ticks
            callback: function (value, index, values) {
              return numeral(value).format("0a");
              // return value
            },
          },
        },
      ],
    },
  };

  return (
    <div className={classes.lineGraph}>
      <Line
        options={options}
        data={{
          datasets: [
            {
              backgroundColor: colorChanger.bgColor,
              borderColor: colorChanger.bodColor,
              data: chartData,
            },
          ],
        }}
      />
    </div>
  );
};

export default LineGraph;
