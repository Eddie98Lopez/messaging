import './App.css';
import styled from 'styled-components'
import {Switch, Route} from 'react-router-dom'
import { Dashboard,LoginRoute, PrivateRoute} from './components';
import HomeRoute from './components/HomeRoute';

const AppContainer = styled.div`
width: 100%;
height: 100vh;
box-sizing: border-box;`

function App() {
  return (
    <AppContainer>

      <Switch>
        <Route exact path="/">
          <HomeRoute/>
        </Route>

        <Route exact path="/login">
          <LoginRoute/>
        </Route>
        
        <PrivateRoute path="/dash" component={Dashboard}/>
      </Switch>

    </AppContainer>
  );
}

export default App;
