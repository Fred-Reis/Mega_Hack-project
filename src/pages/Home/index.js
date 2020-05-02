import React from "react";
import { Link } from "react-router-dom";

import { TiThMenu } from "react-icons/ti";

import { Container, Box, EventList } from "./styles";

export default function Home() {
  return (
    <Container>
      <header>
        <span>EVENTOS</span>
        {/* <Link to="/"> */}
        <TiThMenu size={25} />
        {/* </Link> */}
      </header>
      <Box>
        <section>
          <iframe
            type="text/html"
            src="https://www.youtube.com/embed/1wRzL4HNVsw"
            frameborder="0"
          />
          <div>
            <h1>Próximo Evento em Destaque:</h1>
            <p>Mega Hack 3 - Hackathon Organizado pela Shawee.</p>
          </div>
        </section>
      </Box>

      {/* <EventList>
        <img src="https://randomuser.me/api/portraits/women/33.jpg" />
        <img src="https://randomuser.me/api/portraits/men/66.jpg" />
        <img src="https://randomuser.me/api/portraits/men/5.jpg" />
        <img src="https://randomuser.me/api/portraits/women/41.jpg" />
        <img src="https://randomuser.me/api/portraits/women/57.jpg" />
      </EventList> */}

      <h1 style={{ textAlign: "center", marginTop: 30 }}>Eventos Por Vir:</h1>

      <EventList>
        <ul>
          <li>
            <iframe
              type="text/html"
              src="https://www.youtube.com/embed/1wRzL4HNVsw"
              frameborder="0"
            />
          </li>
          <li>
            <iframe
              type="text/html"
              src="https://www.youtube.com/embed/1wRzL4HNVsw"
              frameborder="0"
            />
          </li>
          <li>
            <iframe
              type="text/html"
              src="https://www.youtube.com/embed/1wRzL4HNVsw"
              frameborder="0"
            />
          </li>
          <li>
            <iframe
              type="text/html"
              src="https://www.youtube.com/embed/1wRzL4HNVsw"
              frameborder="0"
            />
          </li>
        </ul>
      </EventList>

      <h1 style={{ textAlign: "center", marginTop: 30 }}>Eventos Passados:</h1>

      <EventList>
        <ul>
          <li>
            <iframe
              type="text/html"
              src="https://www.youtube.com/embed/1wRzL4HNVsw"
              frameborder="0"
            />
          </li>
          <li>
            <iframe
              type="text/html"
              src="https://www.youtube.com/embed/1wRzL4HNVsw"
              frameborder="0"
            />
          </li>
          <li>
            <iframe
              type="text/html"
              src="https://www.youtube.com/embed/1wRzL4HNVsw"
              frameborder="0"
            />
          </li>
          <li>
            <iframe
              type="text/html"
              src="https://www.youtube.com/embed/1wRzL4HNVsw"
              frameborder="0"
            />
          </li>
        </ul>
      </EventList>
    </Container>
  );
}
