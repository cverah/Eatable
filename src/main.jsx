import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Global } from "@emotion/react";
import { reset } from "./styles/reset.js";
import { global } from "./styles/global.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Global styles={reset} />
    <Global styles={global} />
    <App />
  </BrowserRouter>
);
