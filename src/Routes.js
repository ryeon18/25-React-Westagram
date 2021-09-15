import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// 민지's 컴포넌트
import LoginMinji from "./pages/minjiJeong/Login/Login";
import MainMinji from "./pages/minjiJeong/Main/Main";

// 수민's 컴포넌트
import LoginSumin from "./pages/suminKim/Login/Login";
import MainSumin from "./pages/suminKim/Main/Main";

// 세연's 컴포넌트
import LoginSeyeon from "./pages/seyeonPark/Login/Login";
import MainSeyeon from "./pages/seyeonPark/Main/Main";

// 선호's 컴포넌트
import LoginSunho from "./pages/sunhoLee/Login/Login";
import MainSunho from "./pages/sunhoLee/Main/Main";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login-minji" component={LoginMinji} />
          <Route exact path="/main-minji" component={MainMinji} />
          <Route exact path="/login-seyeon" component={LoginSeyeon} />
          <Route exact path="/main-seyeon" component={MainSeyeon} />
          <Route exact path="/login-sunho" component={LoginSunho} />
          <Route exact path="/main-sunho" component={MainSunho} />
          <Route exact path="/login-suminKim" component={LoginSumin} />
          <Route exact path="/main-suminKim" component={MainSumin} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
