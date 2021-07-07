import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./component/page/home"
function App() {
  return (
    <div className="App">
     
      <Router>
      <Home />
      </Router>
    </div>
  );
}

export default App;
