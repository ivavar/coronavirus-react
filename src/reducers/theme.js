import {
    CHANGE_THEME
  } from "../actions/theme";
  
  const initialState = {
    dark: false
  };

  const localStorageTheme = {
    dark: localStorage.getItem("dark"),
    getTheme() {
      return (localStorage.getItem("dark") == "true") ? true : false
    }
  };
  const isDark = (localStorage.getItem("dark") == "true"); 
  const isLight = (localStorage.getItem("dark") == "false"); 
  const inLocalStorage = isDark || isLight;
  let init = inLocalStorage ? localStorageTheme.getTheme : initialState

  export default function (state = init, action) {
    const { type, payload } = action;
  
    switch (type) {
      case CHANGE_THEME:
        return {
          ...state,
          dark: !state.dark
        };
      default:
        return state;
    }
  }