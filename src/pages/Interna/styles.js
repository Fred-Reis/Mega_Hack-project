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
    padding: 0 30px;

    span {
      color: #fff;
      font-size: 25px;
      margin-left: 30px;
      font-weight: bold;
    }

    nav {
      /* margin-right: 30px;
      margin-left: 30px; */

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

export const Participe = styled.div`
  a {
    margin-top: 30px;
    margin-right: auto;
    margin-left: auto;
    align-items: center;
    justify-content: center;
    display: flex;
    width: 60%;
    height: 70px;
    border-radius: 15px;
    background: #fb1861;
    color: #fff;
    font-size: 30px;
    font-weight: bold;
    transition: background-color 0.2s;
    margin-bottom: 20px;
    text-decoration: none;

    &:hover {
      background: ${shade(0.2, "#fb1861")};
    }
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
