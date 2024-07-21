import React from "react";
import "../src/App.css";
import Modelwindow from "./modelWindow/Modelwindow";
const App = () => {
  return (
    <div>
      <div className="main-div">
        <nav>View Audience</nav>

        <Modelwindow />
      </div>
    </div>
  );
};

export default App;
