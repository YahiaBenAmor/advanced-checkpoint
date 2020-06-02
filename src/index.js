import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ProducTable from "./components/ProductTable";
import * as serviceWorker from "./serviceWorker";

const products = [
  { category: "Electronics", price: 300, name: "Phone" },
  { category: "Clothes", price: 50, name: "T-shirt" },
  { category: "Electronics", price: 500, name: "Pc" }
];

ReactDOM.render(
  <React.StrictMode>
    <ProducTable data={products} />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();