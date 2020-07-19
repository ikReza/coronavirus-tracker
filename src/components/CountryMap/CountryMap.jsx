import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import styles from "./CountryMap.module.css";

import { fetchMap } from "../../api";
import { Card, CardContent, Typography, Box, Grid } from "@material-ui/core";

const API_KEY = "AIzaSyDq5sQ3GiaoIt1jr2KE4jrwXS_kXe-sXy8";
let today = new Date().toISOString().slice(0, 10);

const CountryMap = ({ country }) => {
  const [mapData, setMapData] = useState({});
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setMapData(await fetchMap(country));
      setResults(await fetchMap(country));
    };
    fetchAPI();
    return () => {};
  }, [country]);

  console.log(mapData);

  return (
    <Box component="div" className={styles.container}>
      {Object.keys(mapData).length === 0 ? (
        <Box>Loading. .. ... </Box>
      ) : (
        <Grid container justify="center">
          <Grid item xs={12} md={11} component={Card} className={styles.card}>
            <CardContent className={styles.content}>
              <Box className={styles.cardBox}>
                <Typography gutterBottom variant="h4">
                  {country}
                </Typography>
                <Typography>
                  <span style={{ fontStyle: "italic", color: "blue" }}>
                    Today Active Cases:
                  </span>{" "}
                  {mapData.todayCases}
                </Typography>
                <Typography>
                  <span style={{ fontStyle: "italic", color: "green" }}>
                    Today Recoveries:
                  </span>{" "}
                  {mapData.todayRecovered}
                </Typography>
                <Typography gutterBottom>
                  <span style={{ fontStyle: "italic", color: "red" }}>
                    Today Death Cases:
                  </span>{" "}
                  {mapData.todayDeaths}
                </Typography>
                <Typography color="textSecondary">Date: {today}</Typography>
              </Box>
              {mapData.countryInfo && (
                <img src={mapData.countryInfo.flag} alt={country} />
              )}
            </CardContent>
          </Grid>
        </Grid>
      )}

      <Box component="div" style={{ height: "80vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          defaultCenter={{
            lat: 23.777176,
            lng: 90.399452,
          }}
          defaultZoom={1}
        >
          {results.length > 0 &&
            results.map((data, i) => (
              <Box
                key={i}
                component="div"
                lat={data.countryInfo.lat}
                long={data.countryInfo.long}
                style={{
                  color: "red",
                  backgroundColor: "#FFF",
                  height: "25px",
                  width: "35px",
                }}
              >
                {data.cases}
              </Box>
            ))}
        </GoogleMapReact>
      </Box>
    </Box>
  );
};

export default CountryMap;
