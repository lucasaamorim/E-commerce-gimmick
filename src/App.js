import React from 'react';
import styled from 'styled-components'
import Header from './components/Header'
import Main from './components/Main'
import { 
  BrowserRouter as Router,
  Switch,
  Route
}
  from 'react-router-dom'

function App() {
  return (
    <Container className="App">
      <Router>
        <Header />
        
        <Switch>
          
          <Route path="/">
            <Main />
          </Route>

          {/* <Route path="/login">
            <Login />
          </Route> */}

          {/* <Route path="/cart">
            <Cart />
          </Route> */}

        </Switch>

      </Router>
    </Container>
  );
}

export default App;

const Container = styled.div`

`