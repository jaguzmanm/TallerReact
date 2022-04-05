import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";

import React from "react";
import ReactDOM from "react-dom";
import * as ReactDOMClient from "react-dom/client";

import Banner from "./banner.js";
import Museums from "./museums.js";
import MuseumDetail from "./museum_detail";
import { Row } from "react-bootstrap";

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);

root.render(
  <div>
    <Banner /> <Museums />
  </div>
);
