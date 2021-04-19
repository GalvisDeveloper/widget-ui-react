import "../App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "../components/Menu/Menu";
import Widget from "../components/WidgetPanel/WidgetPanel";

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Switch>
          <Route exact path="/:widget" component={<Widget />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
