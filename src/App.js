import React, { useEffect, useState } from "react";
import styles from "./App.module.css";

import { Cards, Chart, CountryPicker, Footer, CountryMap } from "./components";
import { fetchData } from "./api";
import { Box } from "@material-ui/core";

const App = () => {
  const [data, setData] = useState({});
  const [country, setCountry] = useState("");

  useEffect(() => {
    const fetchAPI = async () => {
      setData(await fetchData());
    };
    fetchAPI();
    return () => {};
  }, []);

  const handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    setData(fetchedData);
    setCountry(country);
  };

  return (
    <>
      <Box component="div" className={styles.container}>
        <img className={styles.image} src="images/covid.png" alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={handleCountryChange} />
        <Chart data={data} country={country} />
        <CountryMap country={country} />
      </Box>
      <Footer />
    </>
  );
};

export default App;
