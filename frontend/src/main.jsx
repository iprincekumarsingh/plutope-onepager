import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
axios.defaults.baseURL = "https://drab-red-wasp-veil.cyclic.app/";
// axios.defaults.baseURL = 'http://localhost:4001';
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="about">About Us</Link>
      </div>
    ),
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    //{" "}
    <React.StrictMode>
      <ToastContainer />
      // <App />
      //{" "}
    </React.StrictMode>
    <RouterProvider router={router} />
  </div>
);
