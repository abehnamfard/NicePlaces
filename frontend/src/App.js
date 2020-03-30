import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import { ConfigProvider } from "antd";
import faIR from "antd/es/locale/fa_IR";

import Users from "./user/pages/Users";
import UserPlaces from "./place/pages/UserPlaces";
import NewPlace from "./place/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";

const App = () => {
  return (
    <ConfigProvider locale={faIR} direction="rtl">
      <Router>
        <MainNavigation />
        <main>
          <Switch>
            <Route path="/" component={Users} exact />
            <Route path="/:userId/places" component={UserPlaces} exact />
            <Route path="/places/new" component={NewPlace} exact />
            <Redirect to="/" />
          </Switch>
        </main>
      </Router>
    </ConfigProvider>
  );
};

export default App;
