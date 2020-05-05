import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";
import logo from "../../assets/logo.png";

function Splash() {
  return (
    <Container>
      <div style={{ flexDirection: "column" }}>
        <h1>SEJA BEM VINDO A</h1>
        <img src={logo} />
        <Link to="/home">
          <p>ACESSAR A PLATAFORMA</p>
        </Link>
      </div>
    </Container>
  );
}

export default Splash;
