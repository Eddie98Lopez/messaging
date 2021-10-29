import './App.css';
import styled from 'styled-components'
import {Switch, Route} from 'react-router-dom'
import { Dashboard,Login } from './components';

const AppContainer = styled.div`
width: 100%;
height: 100vh;
box-sizing: border-box;`

function App() {
  return (
    <AppContainer>

      <Switch>
        <Route exact path="/"></Route>

        <Route exact path="/login">
          <Login/>
        </Route>
        
        <Route path="/dash">
          <Dashboard/>
        </Route>
      </Switch>

    </AppContainer>
  );
}

export default App;
