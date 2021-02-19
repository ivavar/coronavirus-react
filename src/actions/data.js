import axios from "axios";

export const GET_DATA_COUNTRIES = "GET_DATA_COUNTRIES";
export const GET_DATA_GLOBAL = "GET_DATA_GLOBAL";

export const getDataGlobal = () => async (dispatch) => {
  try {
    const res = await axios.get("https://api.covid19api.com/summary");
    dispatch({
      type: GET_DATA_GLOBAL,
      payload: res.data.Global,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getDataCountries = () => async (dispatch) => {
  try {
    const res = await axios.get("https://api.covid19api.com/summary");
    dispatch({
      type: GET_DATA_COUNTRIES,
      payload: res.data.Countries,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getSearchedData = ({ userInput }) => async (dispatch) => {
  try {
    const res = await axios.get(`https://api.covid19api.com/summary/search?q=${userInput}`);
    dispatch({
      type: GET_DATA_COUNTRIES,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

