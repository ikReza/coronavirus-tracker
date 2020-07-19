import React, { useState, useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";
import styles from "./Chart.module.css";

import { fetchDailyData } from "../../api";
import { Box } from "@material-ui/core";

const Chart = () => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };
    fetchAPI();
    return () => {};
  }, []);

  const LineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            labels: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            labels: "Infected",
            borderColor: "red",
            backgroundColor: "rgba(255,0,0,0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  return (
    <Box component="div" className={styles.container}>
      {console.log(dailyData)}
      {LineChart}
    </Box>
  );
};

export default Chart;
