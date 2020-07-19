import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl, Box } from "@material-ui/core";
import { Search } from "@material-ui/icons";

import styles from "./CountryPicker.module.css";
import { fetchCountries } from "../../api";

const CountryPicker = ({ handleCountryChange }) => {
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountryData(await fetchCountries());
    };
    fetchAPI();
    return () => {};
  }, [setCountryData]);

  return (
    <Box component="div" className={styles.formBox}>
      <Search style={{ marginRight: "2vw", marginTop: "1vh" }} />
      <FormControl className={styles.formControl}>
        <NativeSelect
          defaultValue=""
          onChange={(e) => handleCountryChange(e.target.value)}
        >
          <option value="">Global</option>
          {countryData.map((country, i) => (
            <option value={country} key={i}>
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </Box>
  );
};

export default CountryPicker;
