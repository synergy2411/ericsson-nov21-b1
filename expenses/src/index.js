import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
// import rootReducer from "./store/reducers/root-reducer";
import counterReducer from "./store/reducers/counter.reducer";
import resultReducer from "./store/reducers/result.reducer";
import logger from "./store/middleware/logger";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(combineReducers({
  ctr : counterReducer,
  res : resultReducer
}), composeEnhancers(applyMiddleware(logger)));

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
