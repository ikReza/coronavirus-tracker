import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";

import styles from "./CountryPicker.module.css";
import { countries } from "../../api";

const CountryPicker = () => {
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountryData(await countries());
    };
    fetchAPI();
    return () => {};
  }, [setCountryData]);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect>
        <option value="global">Ten</option>
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
