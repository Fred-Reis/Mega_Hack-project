import styled from "styled-components";

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
    svg {
      margin-right: 30px;
      color: #fff;
    }

    nav {
      margin-right: 30px;

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

        &:hover {
          border-bottom: 2px solid #f40c52;
          opacity: 0.6;
        }
      }
    }
  }
`;

export const Box = styled.section`
  display: flex;
  justify-content: center;

  a {
    border-radius: 15px;
    text-decoration: none;
    background: #f40c52;
    padding: 2px;
    padding-bottom: 20px;

    &:hover {
      background: #5e001e;
      transition: color 0.5ms;
    }

    img {
      border-radius: 15px 15px 0 0;
      width: 900px;
      /* height: 400px; */
    }

    div {
      display: flex;
      flex-direction: row;
      align-items: baseline;
      margin-top: 20px;
      justify-content: center;

      h1 {
        color: #fff;
        font-size: 30px;
        margin-right: 10px;
        font-weight: bold;
      }

      p {
        color: #f2f2f2;
        font-size: 25px;
      }
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

  ul {
    display: flex;
    list-style: none;
    margin-top: 20px;
    li {
      & + li {
        margin-left: 10px;
      }
    }
  }
`;

export const Card = styled.div`
  a {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    border-radius: 15px;
    background: #f40c52;
    padding: 3px 2px 20px 2px;
    transition: transform 0.5s;

    &:hover {
      transform: translateX(5px);
      background: #5e001e;
      transition: color 0.7ms;
    }
  }

  img {
    border-radius: 10px 10px 0 0;
    width: 300px;
    height: 170px;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    padding-right: 10px;
    padding-left: 10px;
    max-width: 250px;

    h1 {
      color: #fff;
      font-size: 15px;
      font-weight: bold;
      margin-top: auto;
    }

    p {
      color: #f2f2f2;
      font-size: 10px;
      margin-top: auto;
    }
  }
`;
