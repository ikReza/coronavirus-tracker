import React, { useEffect, useState } from "react";
import styles from "./App.module.css";

import { Cards, Chart, CountryPicker } from "./components";
import { fetchData } from "./api";

const App = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchAPI = async () => {
      setData(await fetchData());
    };
    fetchAPI();
    return () => {};
  }, []);

  return (
    <div className={styles.container}>
      <Cards data={data} />
      <CountryPicker />
      <Chart />
    </div>
  );
};

export default App;
