import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { ChartDataConfig } from "../../utils";
import numeral from "numeral";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  lineGraph: {
    backgroundColor: "whitesmoke",
    height: 450,
    width: 500,
    borderRadius: 12,
   padding: 10,
   paddingRight: 20
  },
}));

const LineGraph = ({ casesType }) => {
  const classes = useStyle();
  const [chartData, setChartData] = useState();

  const [colorChanger, setColorChanger] = useState({
    bgColor: "",
    bodColor: "",
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
    // eslint-disable-next-line
  }, [casesType]);

  const options = {
    legend: {
      display: true,
      position: "bottom",
      align: "start",
      labels: {
        fontSize: 15,
        fontColor: colorChanger.bodColor,
        boxWidth: 30,
      },
    },
    animation: {
      duration: 800,
      easing: "easeInOutQuart",
      //  easing: "easeInOutElastic",
      // easing: "easeOutExpo",
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
          ticks: {
            fontColor: colorChanger.bodColor,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            fontColor: colorChanger.bodColor,
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
              fill: false,
              lineTension: 0.1,
              label: `Worldwide ${casesType}`,

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
