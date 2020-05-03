import React from "react";
import { Link } from "react-router-dom";

import { Container, Form } from "./styles";

export default function Cadastro() {
  return (
    <Container>
      <div>
        <Form>
          <h1>Cadastro</h1>
          <input
            // value={}
            // onChange={(e) => {
            //   setNewRepo(e.target.value);
            // }}
            placeholder="Digite seu nome"
          />
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
          <input
            // value={}
            // onChange={(e) => {
            //   setNewRepo(e.target.value);
            // }}
            placeholder="Confirme a sua senha"
          />

          <Link to="/login" type="submit">
            Cadastrar
          </Link>
        </Form>
        <Link
          to="/login"
          style={{
            textAlign: "center",
            color: "#fc98b8",
            fontSize: 12,
            background: "transparent",
          }}
        >
          Já tenho cadastro
        </Link>
      </div>
    </Container>
  );
}
