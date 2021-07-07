import React from "react";
import "./Home.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ProSlidebar from "../component/ProSidebar";

function Home() {
  return (
    <>
      <div className="Home">
        <div className="Calendar">
          <Router>
            <ProSlidebar />
          </Router>
         
        </div>
      </div>
    </>
  );
}

export default Home;
