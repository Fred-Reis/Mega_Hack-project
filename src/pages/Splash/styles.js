import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  /* flex: 1; */
  justify-content: center;
  background: #b8b7b8;

  h1 {
    margin: 10px auto 20px auto;
    font-size: 50px;
    color: #e94568;
    text-align: center;
    font-weight: bold;
  }

  img {
    height: 500px;
  }

  a {
    display: flex;
    background: #3e3e3e;
    height: 70px;
    margin: 30px auto 50px auto;
    width: 80%;
    border-radius: 15px;
    text-decoration: none;
    justify-content: center;
    align-items: center;

    p {
      font-size: 20px;
      color: #e94568;
      font-weight: bold;
    }
  }
`;
