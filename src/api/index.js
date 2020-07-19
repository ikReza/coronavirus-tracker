import axios from "axios";

const URL = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  let changeableUrl = URL;
  if (country) {
    changeableUrl = `${URL}/countries/${country}`;
  }
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(changeableUrl);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    console.log({ message: error });
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${URL}/daily`);

    const extractedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));

    return extractedData;
  } catch (error) {
    console.log({ message: error });
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${URL}/countries`);

    return countries.map((country) => country.name);
  } catch (error) {
    console.log({ message: error });
  }
};

const new_url = "https://disease.sh/v3/covid-19";

export const fetchMap = async (country) => {
  try {
    const {
      data: {
        countryInfo,
        todayCases,
        todayDeaths,
        todayRecovered,
        cases,
        updated,
      },
    } = await axios.get(`${new_url}/countries/${country}`);
    return {
      countryInfo,
      todayCases,
      todayDeaths,
      todayRecovered,
      cases,
      updated,
    };
  } catch (error) {
    console.log({ message: error });
  }
};
