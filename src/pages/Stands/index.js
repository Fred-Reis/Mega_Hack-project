import React from "react";
import { Link } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";

import { Container, EventList, Card, Banner } from "./styles";

import megaHack from "../../assets/megahack.png";
import megaHack2 from "../../assets/megahack2.png";
import megaHack1 from "../../assets/megahack1.png";
import aovivo from "../../assets/aovivo.svg";

function Stands() {
  return (
    <Container>
      <header>
        <nav>
          <Link to="/">
            <FiChevronLeft size={16} />
            Voltar
          </Link>
        </nav>
        <span>@shawee/MEGA_HACK</span>
        <nav>
          <Link to="">Minha Conta</Link>
        </nav>
      </header>
      <div />
      <Banner />
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
    </Container>
  );
}

export default Stands;
