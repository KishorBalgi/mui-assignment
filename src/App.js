import "./App.css";
import React from "react";
import Home from "./pages/homePage/home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

function App() {
  return (
    <div>
      <h1>Border Changed Text Field</h1>
      <RouterProvider router={route} />
    </div>
  );
}

export default App;
