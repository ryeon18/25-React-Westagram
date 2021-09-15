import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// 민지's 컴포넌트
import LoginminjiJeong from "./pages/minjiJeong/Login/Login";
import MainminjiJeong from "./pages/minjiJeong/Main/Main";

// 수민's 컴포넌트
import LoginsuminKim from "./pages/suminKim/Login/Login";
import MainsuminKim from "./pages/suminKim/Main/Main";

// 세연's 컴포넌트
import LoginseyeonPark from "./pages/seyeonPark/Login/Login";
import MainseyeonPark from "./pages/seyeonPark/Main/Main";

// 선호's 컴포넌트
import LoginsunhoLee from "./pages/sunhoLee/Login/Login";
import MainsunhoLee from "./pages/sunhoLee/Main/Main";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login-minji" component={LoginminjiJeong} />
          <Route exact path="/main-minji" component={MainminjiJeong} />
          <Route exact path="/login-seyeon" component={LoginseyeonPark} />
          <Route exact path="/main-seyeon" component={MainseyeonPark} />
          <Route exact path="/login-sunho" component={LoginsunhoLee} />
          <Route exact path="/main-sunho" component={MainsunhoLee} />
          <Route exact path="/login-suminKim" component={LoginsuminKim} />
          <Route exact path="/main-suminKim" component={MainsuminKim} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
