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
  padding: 0 30px;
  height: 400px;
  width: 70%;
  border-radius: 10px;
  background: rgba(141, 16, 56, 0.5);
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    padding: 5px 5px 10px 5px;
    background: rgb(141, 16, 56);
    border-radius: 10px;
    text-decoration: none;

    img {
      border-radius: 10px;
      width: 300px;
      height: 170px;
      transition: transform 0.5s;
    }

    p {
      color: #f2f2f2;
      font-size: 15px;
      max-width: 300px;
    }

    &:hover {
      transform: translateX(10px);
      background: #f40c52;
    }
  }
`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
  color: #8d1038;
  text-align: center;
  margin: 20px;
`;

export const EventList = styled.section`
  display: flex;
  justify-content: center;

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
      background: rgb(141, 16, 56);
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
