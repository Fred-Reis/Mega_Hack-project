import React from "react";
import { Link } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";

import { Container, Chat, Box, Message, Table } from "./styles";

function Oficina() {
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

      <Box>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <iframe
            src="https://www.youtube.com/embed/1wRzL4HNVsw"
            autoplay="1"
            frameborder="0"
          />
          <Table>
            <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
              <div
                style={{
                  marginBottom: 20,
                  borderRadius: 10,
                  background: "#949494",
                  padding: 15,
                }}
              >
                <h1>Mesas de Mentorias</h1>
                <p>
                  Clique sobre um espaço vazio para participar de uma mentoria
                  ao vivo.
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flex: 1,
                }}
              >
                <div>
                  <div>
                    <img src="https://randomuser.me/api/portraits/women/1.jpg" />
                    <img src="https://randomuser.me/api/portraits/men/21.jpg" />
                    <img src="https://randomuser.me/api/portraits/women/2.jpg" />
                  </div>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <img
                      style={{
                        margin: 20,
                        borderRadius: "50%",
                        height: 85,
                        width: 85,
                      }}
                      src="https://randomuser.me/api/portraits/men/75.jpg"
                    />
                  </div>
                  <div>
                    <img src="https://randomuser.me/api/portraits/women/5.jpg" />
                    <img src="https://randomuser.me/api/portraits/men/2.jpg" />
                    <img src="https://randomuser.me/api/portraits/men/41.jpg" />
                  </div>
                </div>

                <div>
                  <div>
                    <img src="https://randomuser.me/api/portraits/women/24.jpg" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQNymJi_7x2SIxOa6SULaZK91A25kbm737xXXEFoC4D-At1Q24B&usqp=CAU" />
                    <img src="https://randomuser.me/api/portraits/men/21.jpg" />
                  </div>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <img
                      style={{
                        margin: 20,
                        borderRadius: "50%",
                        height: 85,
                        width: 85,
                      }}
                      src="https://randomuser.me/api/portraits/men/20.jpg"
                    />
                  </div>
                  <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQNymJi_7x2SIxOa6SULaZK91A25kbm737xXXEFoC4D-At1Q24B&usqp=CAU" />
                    <img src="https://randomuser.me/api/portraits/women/2.jpg" />
                    <img src="https://randomuser.me/api/portraits/women/31.jpg" />
                  </div>
                </div>

                <div>
                  <div>
                    <img src="https://randomuser.me/api/portraits/women/34.jpg" />
                    <img src="https://randomuser.me/api/portraits/men/24.jpg" />
                    <img src="https://randomuser.me/api/portraits/women/91.jpg" />
                  </div>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <img
                      style={{
                        margin: 20,
                        borderRadius: "50%",
                        height: 85,
                        width: 85,
                      }}
                      src="https://randomuser.me/api/portraits/women/20.jpg"
                    />
                  </div>
                  <div>
                    <img src="https://randomuser.me/api/portraits/men/61.jpg" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQNymJi_7x2SIxOa6SULaZK91A25kbm737xXXEFoC4D-At1Q24B&usqp=CAU" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQNymJi_7x2SIxOa6SULaZK91A25kbm737xXXEFoC4D-At1Q24B&usqp=CAU" />
                  </div>
                </div>
              </div>
            </div>
          </Table>
        </div>
        <Chat>
          <h1>Bate-papo</h1>
          <div style={{ background: "#b9b9b9" }}>
            <strong>
              Clique sobre um ícone para ver o perfil ou iniciar um bate-papo{" "}
            </strong>
          </div>
          <div style={{ height: 2, background: "#89002c", padding: 0 }} />
          <div>
            <img
              style={{ marginLeft: 10 }}
              src="https://randomuser.me/api/portraits/women/33.jpg"
            />
            <img src="https://randomuser.me/api/portraits/men/6.jpg" />
            <img src="https://randomuser.me/api/portraits/men/53.jpg" />
            <img src="https://randomuser.me/api/portraits/women/41.jpg" />
            <img src="https://randomuser.me/api/portraits/women/7.jpg" />
            <img src="https://randomuser.me/api/portraits/women/73.jpg" />
            <img src="https://randomuser.me/api/portraits/men/69.jpg" />
            <img src="https://randomuser.me/api/portraits/men/59.jpg" />
            <img src="https://randomuser.me/api/portraits/women/1.jpg" />
            <img src="https://randomuser.me/api/portraits/women/50.jpg" />
            <img src="https://randomuser.me/api/portraits/women/38.jpg" />
            <img src="https://randomuser.me/api/portraits/men/68.jpg" />
            <img src="https://randomuser.me/api/portraits/men/55.jpg" />
            <img src="https://randomuser.me/api/portraits/women/51.jpg" />
            <img src="https://randomuser.me/api/portraits/women/54.jpg" />
            <img src="https://randomuser.me/api/portraits/women/39.jpg" />
            <img src="https://randomuser.me/api/portraits/men/60.jpg" />
            <img src="https://randomuser.me/api/portraits/men/51.jpg" />
            <img src="https://randomuser.me/api/portraits/women/21.jpg" />
            <img src="https://randomuser.me/api/portraits/women/37.jpg" />
            <img src="https://randomuser.me/api/portraits/women/53.jpg" />
            <img src="https://randomuser.me/api/portraits/men/66.jpg" />
            <img src="https://randomuser.me/api/portraits/men/56.jpg" />
            <img src="https://randomuser.me/api/portraits/women/71.jpg" />
            <img src="https://randomuser.me/api/portraits/women/87.jpg" />
            <img src="https://randomuser.me/api/portraits/women/93.jpg" />
            <img src="https://randomuser.me/api/portraits/men/69.jpg" />
            <img src="https://randomuser.me/api/portraits/men/50.jpg" />
            <img src="https://randomuser.me/api/portraits/women/11.jpg" />
            <img src="https://randomuser.me/api/portraits/women/27.jpg" />
            <img src="https://randomuser.me/api/portraits/women/43.jpg" />
            <img src="https://randomuser.me/api/portraits/men/63.jpg" />
            <img src="https://randomuser.me/api/portraits/men/54.jpg" />
            <img src="https://randomuser.me/api/portraits/women/51.jpg" />
            <img src="https://randomuser.me/api/portraits/women/57.jpg" />
            <img src="https://randomuser.me/api/portraits/women/63.jpg" />
            <img src="https://randomuser.me/api/portraits/men/67.jpg" />
            <img src="https://randomuser.me/api/portraits/men/57.jpg" />
            <img src="https://randomuser.me/api/portraits/women/81.jpg" />
            <img src="https://randomuser.me/api/portraits/women/97.jpg" />
            <img src="https://randomuser.me/api/portraits/women/3.jpg" />
            <img src="https://randomuser.me/api/portraits/men/60.jpg" />
            <img src="https://randomuser.me/api/portraits/men/57.jpg" />
            <img src="https://randomuser.me/api/portraits/women/51.jpg" />
            <img src="https://randomuser.me/api/portraits/women/27.jpg" />
            <img src="https://randomuser.me/api/portraits/women/43.jpg" />
            <img src="https://randomuser.me/api/portraits/men/76.jpg" />
            <img src="https://randomuser.me/api/portraits/men/8.jpg" />
            <img src="https://randomuser.me/api/portraits/women/19.jpg" />
            <img src="https://randomuser.me/api/portraits/women/5.jpg" />
            <img src="https://randomuser.me/api/portraits/women/3.jpg" />
            <img src="https://randomuser.me/api/portraits/men/6.jpg" />
            <img src="https://randomuser.me/api/portraits/men/57.jpg" />
            <img src="https://randomuser.me/api/portraits/women/21.jpg" />
          </div>
          <div style={{ height: 2, background: "#89002c", padding: 0 }} />
          <Message
            style={{
              justifyContent: "flex-end",
              display: "flex",
              background: "#8D1038",
            }}
          >
            <p>Lorem ipsum</p>
            <img src="https://randomuser.me/api/portraits/women/21.jpg" />
          </Message>
          <Message>
            <img src="https://randomuser.me/api/portraits/men/6.jpg" />
            <p>
              Lorem ipsum laoreet sollicitudin sem per a conubia, scelerisque
              non erat sociosqu augue quam, cubilia donec tempor eleifend netus
              ante.
            </p>
          </Message>
          <Message>
            <img src="https://randomuser.me/api/portraits/men/83.jpg" />
            <p>Lorem ipsum</p>
          </Message>
          <Message
            style={{
              justifyContent: "flex-end",
              display: "flex",
              background: "#8D1038",
            }}
          >
            <p>sollicitudin sem per a conubia,</p>
            <img src="https://randomuser.me/api/portraits/women/21.jpg" />
          </Message>
          <Message>
            <img src="https://randomuser.me/api/portraits/men/8.jpg" />
            <p>Lorem ipsum</p>
          </Message>
          <Message>
            <img src="https://randomuser.me/api/portraits/women/1.jpg" />
            <p>
              laoreet sollicitudin sem per a conubia, scelerisque non erat
              sociosqu augue quam,
            </p>
          </Message>
        </Chat>
      </Box>
    </Container>
  );
}

export default Oficina;
