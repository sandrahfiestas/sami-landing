import React from 'react';
import './css/Styles.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Home from './pages/Home';
import PorqueSami from './pages/PorqueSami';
import SamiInsights from './pages/SamiInsights';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/porqueSami" component={PorqueSami} />
        <Route exact path="/samiInsights" component={SamiInsights} />
        <Route path="/404">
          <h1>404 Not found</h1>
        </Route>
        <Route path="*">
          <Redirect to="/404" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
