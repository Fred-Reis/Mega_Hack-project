import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
  flex: 1;
  padding-bottom: 100px;

  header {
    display: flex;
    flex: 1;
    height: 70px;
    background: #89002c;
    align-items: center;
    justify-content: space-between;

    span {
      color: #fff;
      font-size: 25px;
      margin-left: 30px;
    }

    nav {
      margin-right: 30px;
      margin-left: 30px;

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
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  iframe {
    border-radius: 15px;
    width: 900px;
    height: 500px;
  }

  h1 {
    margin: 20px;
    text-align: center;
    font-size: 25px;
    font-weight: bold;
    color: #9b1540;
  }

  p {
    margin-right: auto;
    margin-left: auto;
    width: 80%;
    font-size: 28px;
    color: #b14265;
  }
`;

export const EventList = styled.section`
  display: flex;
  justify-content: center;

  img {
    border-radius: 50%;
    & + img {
      margin-left: 30px;
    }
  }
`;
