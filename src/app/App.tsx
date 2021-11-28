import { FunctionComponent } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Playground from "./pages/playground/Playground";

const App: FunctionComponent = () => (
  <div>
    <Switch>
      <Route exact path={"/home"}>
        <Home />
      </Route>
      <Route exact path={"/playground"}>
        <Playground />
      </Route>
    </Switch>
  </div>
);

export default App;
