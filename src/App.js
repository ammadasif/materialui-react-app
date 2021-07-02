import { makeStyles } from "@material-ui/core/styles";
import Navbar from "./Navbar";
import { Paper, TextField, Button } from "@material-ui/core";
import React from "react";
import BarChart from "./BarChart.js";
import PieChart from "./PieChart.js";
import "./App.css";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: 400,
    margin: "0 auto",
    marginTop: 50,
    textAlign: "center",
    padding: 15,
  },
  input: {
    width: "95%",
    marginBottom: 10,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div>
      {/* <Navbar/>
      <Paper elevation={3} className={classes.paper}>
        <h1>Login</h1>
        <form noValidate autoComplete="off">
          <TextField type="Email" label="Enter Email" className={classes.input} />
          <br />
          <TextField type="Password" label="Enter Password" className={classes.input} />
          <Button variant="contained" color="primary" className={classes.input}>
            Login
          </Button>
        </form>
      </Paper> */}

      <BarChart />
      <PieChart />
    </div>
  );
}

export default App;
