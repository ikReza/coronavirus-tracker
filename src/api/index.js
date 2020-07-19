import axios from "axios";

const URL = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(URL);

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

export const countries = async () => {
  try {
    const response = await axios.get(`${URL}/countries`);

    console.log(response);

    return response;
  } catch (error) {
    console.log({ message: error });
  }
};
