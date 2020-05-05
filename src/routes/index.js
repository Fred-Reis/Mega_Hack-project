import React from "react";

import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import Interna from "../pages/Interna";
import Passados from "../pages/Passados";
import Futuros from "../pages/Futuros";
import Stands from "../pages/Stands";
import Oficina from "../pages/Oficina";
import Splash from "../pages/Splash";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Splash} />
      <Route path="/login" component={Login} />
      <Route path="/cadastro" component={Cadastro} />
      <Route path="/interna" component={Interna} />
      <Route path="/passados" component={Passados} />
      <Route path="/futuros" component={Futuros} />
      <Route path="/stands" component={Stands} />
      <Route path="/oficina" component={Oficina} />
      <Route path="/home" component={Home} />
    </Switch>
  );
}

export default Routes;
