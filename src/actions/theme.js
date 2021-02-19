export const CHANGE_THEME = "CHANGE_THEME";

export const changeTheme = () => (dispatch, getState) => {
  try {
    let state = getState();
    let dark = state.theme.dark;
    localStorage.setItem("dark", !dark);
    var element = document.body;
    dark ? element.classList.remove("dark") : element.classList.add("dark");
    dispatch({
      type: CHANGE_THEME,
      payload: !dark,
    });
  } catch (error) {
    console.log(error);
  }
};