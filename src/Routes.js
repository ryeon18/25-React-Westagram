import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// 세연's 컴포넌트
import LoginSeyeon from './pages/seyeonPark/Login/Login';
import MainSeyeon from './pages/seyeonPark/Main/Main';
class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login-seyeon" component={LoginSeyeon} />
          <Route exact path="/main-seyeon" component={MainSeyeon} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
