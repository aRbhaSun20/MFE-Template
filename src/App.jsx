import React from "react";
import ReactDOM from "react-dom";
import Footer from "./Footer";
import Header from "home/Header";

import { StoreProvider } from "store/store";

import "./index.css";

const App = () => {
  return (
    <React.Fragment>
      <StoreProvider>
        <Footer />
        <Header />
      </StoreProvider>
    </React.Fragment>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
