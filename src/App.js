import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Dashboard, LoginRoute, PrivateRoute, HomeRoute } from "./components";
import { AppContainer } from "./components/styled-components";

function App() {
  return (
    <AppContainer>
      <Switch>
        <Route exact path="/">
          <HomeRoute />
        </Route>

        <Route exact path="/login">
          <LoginRoute />
        </Route>

        <PrivateRoute path="/dash" component={Dashboard} />
      </Switch>
    </AppContainer>
  );
}

export default App;
