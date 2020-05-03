import styled from "styled-components";

export const Container = styled.div`
  padding-bottom: 100px;

  header {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #89002c;
    height: 70px;
    padding: 0 30px;

    span {
      color: #fff;
      font-size: 25px;
      margin-left: 30px;
      font-weight: bold;
    }

    a {
      color: #fff;
      text-decoration: none;
      font-size: 16px;
      transition: opacity 0.2s;
      padding-bottom: 10px;
      font-weight: bold;

      & + a {
        margin-left: 32px;
      }

      svg {
        color: #fff;
      }

      &:hover {
        border-bottom: 2px solid #f40c52;
        opacity: 0.6;
      }
    }
  }

  iframe {
    width: 1000px;
    height: 500px;
    border-radius: 15px;
  }
`;

export const Box = styled.div`
  padding: 5px 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Chat = styled.div`
  width: 470px;
  height: 900px;
  border-radius: 15px;
  background: rgba(148, 148, 148, 0.9);
  padding: 20px;

  h1 {
    font-size: 20px;
    color: #f40c52;
    text-align: center;
  }

  div {
    border-radius: 5px;
    margin: 20px;
    padding: 10px;
    background: rgba(162, 57, 91, 0.9);
  }

  p {
    font-size: 15px;
    color: #fff;
  }

  strong {
    color: #f40c52;
  }

  img {
    border-radius: 50%;
    height: 30px;
    width: 30px;
    transition: transform 0.5s;

    & + img {
      margin-left: 8px;
    }

    &:hover {
      transform: translateX(10px);
    }
  }
`;

export const Message = styled.section`
  flex-direction: row;
  display: flex;
  align-items: center;
  border-radius: 5px;
  margin: 20px;
  padding: 10px;
  background: rgba(162, 57, 91, 0.9);

  img {
    border-radius: 50%;
    height: 25px;
    width: 25px;
    display: block;
  }

  p {
    font-size: 15px;
    color: #fff;
    margin-right: 10px;
    margin-left: 10px;
  }
`;

export const Table = styled.section`
  display: flex;
  background: #a2395b;
  flex: 1;
  border-radius: 15px;
  margin-top: 20px;
  justify-content: space-between;
  align-items: center;
  padding: 0 80px;
  text-align: center;

  h1 {
    font-size: 25px;
    color: #f40c52;
  }

  p {
    font-size: 15px;
    color: #f40c52;
  }

  img {
    border-radius: 50%;
    height: 40px;
    width: 40px;
    transition: transform 0.5s;

    & + img {
      margin-left: 15px;
    }

    &:hover {
      transform: translateX(10px);
    }
  }
`;
