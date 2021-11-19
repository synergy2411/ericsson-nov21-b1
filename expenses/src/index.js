import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
// import rootReducer from "./store/reducers/root-reducer";
import counterReducer from "./store/reducers/counter.reducer";
import resultReducer from "./store/reducers/result.reducer";

const store = createStore(combineReducers({
  ctr : counterReducer,
  res : resultReducer
}));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
