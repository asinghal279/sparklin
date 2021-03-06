import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./topnav";
import Leftnav from "./components/leftnav/leftnav.js";
import Rightnav from "./components/rightnav/rightnav";
import Footer from "./components/footer/footer";
import "./Montserrat-Regular.ttf";
import Midpage from "./components/midpage/midpage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <div class="row">
      <Leftnav />
      <Midpage />
      <Rightnav />
    </div>
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
