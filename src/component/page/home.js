import React from "react";
import "./Home.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ProSlidebar from "../ProSidebar";
import Calendar from "../Calendar";
function Home() {
  return (
    <>
      <div className="Home">
        <div className="Calendar">
          <Router>
            <ProSlidebar />
            <Calendar/>

          </Router>
          
        </div>
      </div>
    </>
  );
}

export default Home;
