import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import RouterApp from "./router/RouterApp.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import Navbar from "./layout/Navbar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <Navbar />
      <RouterApp />
    </Provider>
  </BrowserRouter>
);
