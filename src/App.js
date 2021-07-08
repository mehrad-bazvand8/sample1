import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./component/page/home";
import TodoList from "./component/TodoList";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
