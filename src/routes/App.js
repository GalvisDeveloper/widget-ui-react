import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../index.css";
import Menu from "../components/Menu/Menu";
import SidebarMenu from "../components/SidebarMenu/SidebarMenu";
import Widget from "../components/WidgetPanel/WidgetPanel";
// import Footer from "../components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <div className="App__main">
          <Widget />
          <SidebarMenu />
          {/* <Footer /> */}
          <Switch>
            <Route exact path="/:widget" component={<Widget />} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
