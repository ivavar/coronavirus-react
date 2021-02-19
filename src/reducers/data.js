import {
  GET_DATA_GLOBAL,
  GET_DATA_COUNTRIES
  } from "../actions/data";
  
  const initialState = {
    global: {},
    countries: [],
    loading: true,
  };
  
  export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GET_DATA_GLOBAL:
        return {
          ...state,
          global: payload,
          loading: false,
        };
        case GET_DATA_COUNTRIES:
          return {
            ...state,
            countries: payload,
            loading: false,
          };
      default:
        return state;
    }
  }