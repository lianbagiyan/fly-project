import { FC } from "react";
import SignUp from "./components/pages/SignUp";
import SignIn from "./components/pages/SignIn";
import "./App.less";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App: FC = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route exact path="/">
            <SignUp />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
