import React from "react";
import { Link } from "react-router-dom";

import megaHack from "../../assets/megahack.png";
import megaHack2 from "../../assets/megahack2.png";
import megaHack1 from "../../assets/megahack1.png";
import aovivo from "../../assets/aovivo.svg";

import { Container, Box, EventList, Card } from "./styles";

export default function Home() {
  return (
    <Container>
      <header>
        <span>@shawee/EVENTOS</span>
        <nav>
          <>
            {/* <a>Contate-nos</a>
            <a>Meus Eventos</a>
            <a>Minha Conta</a> */}
            <Link to="/login">Fazer Login</Link>
            <Link to="/cadastro">Cadastro</Link>
          </>
        </nav>
      </header>
      <Box>
        <Link to={`/interna`}>
          <img src={megaHack} />

          <div>
            <img
              style={{
                width: 90,
                borderRadius: 0,
                marginRight: 70,
                marginLeft: -40,
              }}
              src={aovivo}
            />

            <h1>Destaque :</h1>
            <p> 🚀 Mega Hack - de 24/04 a 08/05.</p>
          </div>
        </Link>
      </Box>

      <h1 style={{ textAlign: "center", marginTop: 30, color: "#8B1540" }}>
        Próximos Eventos:
      </h1>

      <EventList>
        <ul>
          <li>
            <Card>
              <Link to="/futuros">
                <img src={megaHack1} />
                <div>
                  <h1>Destaque:</h1>
                  <p>Mega Hack AO VIVO - Hackathon Organizado pela Shawee.</p>
                </div>
              </Link>
            </Card>
          </li>
          <li>
            <Card>
              <Link to="/futuros">
                <img src={megaHack1} />
                <div>
                  <h1>Destaque:</h1>
                  <p>Mega Hack AO VIVO - Hackathon Organizado pela Shawee.</p>
                </div>
              </Link>
            </Card>
          </li>
          <li>
            <Card>
              <Link to="/futuros">
                <img src={megaHack1} />
                <div>
                  <h1>Destaque:</h1>
                  <p>Mega Hack AO VIVO - Hackathon Organizado pela Shawee.</p>
                </div>
              </Link>
            </Card>
          </li>
          <li>
            <Card>
              <Link to="/futuros">
                <img src={megaHack1} />
                <div>
                  <h1>Destaque:</h1>
                  <p>Mega Hack AO VIVO - Hackathon Organizado pela Shawee.</p>
                </div>
              </Link>
            </Card>
          </li>
        </ul>
      </EventList>

      <h1 style={{ textAlign: "center", marginTop: 30, color: "#8B1540" }}>
        Eventos Passados:
      </h1>

      <EventList>
        <ul>
          <li>
            <Card>
              <Link to="/passados">
                <img src={megaHack2} />
                <div>
                  <h1>Destaque:</h1>
                  <p>de 13/03/2020 a 18/03/2020.</p>
                </div>
              </Link>
            </Card>
          </li>
          <li>
            <Card>
              <Link to="/passados">
                <img src={megaHack2} />
                <div>
                  <h1>Destaque:</h1>
                  <p>de 13/03/2020 a 18/03/2020.</p>
                </div>
              </Link>
            </Card>
          </li>
          <li>
            <Card>
              <Link to="/passados">
                <img src={megaHack2} />
                <div>
                  <h1>Destaque:</h1>
                  <p>de 13/03/2020 a 18/03/2020.</p>
                </div>
              </Link>
            </Card>
          </li>
          <li>
            <Card>
              <Link to="/passados">
                <img src={megaHack2} />
                <div>
                  <h1>Destaque:</h1>
                  <p>de 13/03/2020 a 18/03/2020.</p>
                </div>
              </Link>
            </Card>
          </li>
        </ul>
      </EventList>
    </Container>
  );
}
