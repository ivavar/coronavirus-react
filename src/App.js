import { useEffect } from "react";
import './App.scss';
import Header from "./components/Header";
import { getDataGlobal, getDataCountries } from "./actions/data.js";
import { Provider } from "react-redux";
import store from "./store";
import Main from "./components/Main";
import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(getDataGlobal());
    store.dispatch(getDataCountries());
  }, []);
  return (
    <Provider store = {store}>
      <div>
        <Header />
        <Main />
      </div>
    </Provider>
  );
}

export default App;
