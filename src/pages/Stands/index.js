import React from "react";
import { Link } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";

import { Container, EventList, Card, Banner, Title } from "./styles";

import megaHack3 from "../../assets/megahack3.png";
import megaHack4 from "../../assets/megahack4.png";
import megaHack from "../../assets/megahack.png";

import americanas from "../../assets/americanas.png";
import cv_latam from "../../assets/cv_latam.png";
import flourish from "../../assets/flourish.png";
import globo from "../../assets/globo.png";
import gorila from "../../assets/gorila.png";
import olist from "../../assets/olist.png";
import pegn from "../../assets/pegn.png";
import sebrae from "../../assets/sebrae.png";
import vtex from "../../assets/vtex.png";

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
      <Title style={{ marginBottom: -70, color: "#fff" }}>Destaques</Title>

      <Banner>
        <a
          href="https://www.youtube.com/watch?v=iA4a8NPQmJ8&t=20s"
          target="blank"
        >
          <img src={megaHack} />
          <p>MEGA HACK: Ask me anything com Rodrigo Terron e Abraão Sena</p>
        </a>
        <a href="https://www.youtube.com/watch?v=bwdhOqJHYj8" target="blank">
          <img src={megaHack3} />
          <p>
            MEGA HACK: Conteúdo Oferecido pela Trybe - Qualidade de Software com
            Alberto Cavalcanti
          </p>
        </a>
        <a href="https://www.youtube.com/watch?v=HJWpoaxNARE" target="blank">
          <img src={megaHack4} />
          <p>
            MEGA HACK: Conteúdo Oferecido pela GR1D - Um Olhar Estratégico para
            utilização de APIs
          </p>
        </a>
      </Banner>
      <Title>OFICINAS</Title>
      <EventList>
        <ul>
          <li>
            <Card>
              <Link to="/oficina">
                <img src={americanas} />
                <div>
                  <h1>Destaque:</h1>
                  <p>Mega Hack AO VIVO - Hackathon Organizado pela Shawee.</p>
                </div>
              </Link>
            </Card>
          </li>
          <li>
            <Card>
              <Link to="/oficina">
                <img src={cv_latam} />
                <div>
                  <h1>Destaque:</h1>
                  <p>Mega Hack AO VIVO - Hackathon Organizado pela Shawee.</p>
                </div>
              </Link>
            </Card>
          </li>
          <li>
            <Card>
              <Link to="/oficina">
                <img src={flourish} />
                <div>
                  <h1>Destaque:</h1>
                  <p>Mega Hack AO VIVO - Hackathon Organizado pela Shawee.</p>
                </div>
              </Link>
            </Card>
          </li>
          <li>
            <Card>
              <Link to="/oficina">
                <img src={globo} />
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
              <Link to="/oficina">
                <img src={gorila} />
                <div>
                  <h1>Destaque:</h1>
                  <p>Mega Hack AO VIVO - Hackathon Organizado pela Shawee.</p>
                </div>
              </Link>
            </Card>
          </li>
          <li>
            <Card>
              <Link to="/oficina">
                <img src={olist} />
                <div>
                  <h1>Destaque:</h1>
                  <p>Mega Hack AO VIVO - Hackathon Organizado pela Shawee.</p>
                </div>
              </Link>
            </Card>
          </li>
          <li>
            <Card>
              <Link to="/oficina">
                <img src={pegn} />
                <div>
                  <h1>Destaque:</h1>
                  <p>Mega Hack AO VIVO - Hackathon Organizado pela Shawee.</p>
                </div>
              </Link>
            </Card>
          </li>
          <li>
            <Card>
              <Link to="/oficina">
                <img src={sebrae} />
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
              <Link to="/oficina">
                <img src={vtex} />
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
