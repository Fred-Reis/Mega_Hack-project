import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";

import { Container, EventList, Participe } from "./styles";
import desafiantes from "../../assets/desafiantes.png";

export default function Interna() {
  const { params } = useRouteMatch();

  console.log(params);

  return (
    <Container>
      <header>
        <nav>
          <Link to="/home">
            <FiChevronLeft size={16} />
            Voltar
          </Link>
        </nav>
        <span>@shawee/MEGA_HACK</span>
        <nav>
          <Link to="">Minha Conta</Link>
        </nav>
      </header>
      <div>
        <iframe
          src="https://www.youtube.com/embed/lAqOI19qbxs"
          autoplay="1"
          frameborder="0"
        />
      </div>
      <h1>🚀 Mega Hack 3 - Em Breve.</h1>
      <Participe>
        <Link to="/login" type="submit">
          COMO PARTICIPAR DESTE EVENTO
        </Link>
      </Participe>
      <h1>Facilitadores</h1>
      <EventList>
        <img src="https://randomuser.me/api/portraits/women/34.jpg" />
        <img src="https://randomuser.me/api/portraits/men/65.jpg" />
        <img src="https://randomuser.me/api/portraits/men/50.jpg" />
        <img src="https://randomuser.me/api/portraits/women/10.jpg" />
        <img src="https://randomuser.me/api/portraits/women/9.jpg" />
      </EventList>
      <div
        style={{
          marginTop: 40,
          marginRight: "auto",
          marginBottom: 40,
          marginLeft: "auto",
          width: "80%",
          height: 2,
          background: "#fb1861",
          alignSelf: "center",
        }}
      />
      {/* <h1>Empresas Desafiantes:</h1>
      <div>
        <img src={desafiantes} />
      </div> */}

      <h1>Sobre o Evento:</h1>
      <p>
        Lorem ipsum varius scelerisque donec ultrices tellus nec mauris nunc
        quisque torquent, etiam dapibus aenean facilisis vel torquent adipiscing
        sed sollicitudin dapibus. venenatis consequat morbi turpis torquent
        aliquet purus neque eu class dolor, ullamcorper pulvinar faucibus
        maecenas condimentum nostra faucibus porta dictumst quisque, mauris
        etiam ullamcorper imperdiet vulputate tellus massa in turpis. congue
        venenatis netus hendrerit vivamus scelerisque ut maecenas aenean integer
        senectus, conubia elit felis quam praesent sociosqu lacinia tristique
        consectetur imperdiet, euismod vitae quis duis eros tristique diam
        fringilla tempor. potenti himenaeos nulla nisi euismod tortor senectus
        quis a, porttitor libero cras volutpat amet commodo feugiat tincidunt
        consequat, gravida interdum diam sit pharetra bibendum consectetur.
        Etiam proin porta donec tempor etiam ultrices, neque sodales velit
        ligula sit interdum, velit a augue velit quisque. euismod volutpat sem
        curs
      </p>
    </Container>
  );
}
