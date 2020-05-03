import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
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
`;

export const Banner = styled.div`
  margin: 20px auto;
  height: 300px;
  width: 70%;
  border-radius: 10px;
  background: #7159c1;
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
