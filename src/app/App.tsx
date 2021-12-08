import { FunctionComponent } from "react";
import { Route, Switch } from "react-router-dom";
import Playground from "./pages/playground/Playground";

const App: FunctionComponent = () => (
  <div>
    <Switch>
      <Route exact path={"/"}>
        <Playground />
      </Route>
    </Switch>
  </div>
);

export default App;
