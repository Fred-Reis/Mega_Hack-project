import React from "react";
import { Link } from "react-router-dom";

import { Container, Form } from "./styles";

export default function Login() {
  return (
    <Container>
      <div>
        <Form>
          <h1>Login</h1>
          <input
            // value={}
            // onChange={(e) => {
            //   setNewRepo(e.target.value);
            // }}
            placeholder="Digite seu email"
          />
          <input
            // value={}
            // onChange={(e) => {
            //   setNewRepo(e.target.value);
            // }}
            placeholder="Digite sua senha"
          />
          <Link to="/" type="submit">
            Login
          </Link>
        </Form>
        <p>Esqueci minha senha</p>
        <div
          style={{
            width: "80%",
            height: 2,
            background: "#fb1861",
            alignSelf: "center",
          }}
        />
        <Link style={{ width: "60%" }} to="/cadastro" type="submit">
          Cadastrar
        </Link>
      </div>
    </Container>
  );
}
