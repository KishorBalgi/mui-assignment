import React from "react";
import TextField from "@mui/material/TextField";
import "./home.css";

const Home = () => {
  return (
    <div className="text-container">
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        className="text-field"
        InputProps={{ classes: "input-field" }}
      />
    </div>
  );
};

export default Home;
