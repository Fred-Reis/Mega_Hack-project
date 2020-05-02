import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  padding-bottom: 100px;

  h1 {
    color: #f40c52;
    font-size: 25px;
    margin-right: 10px;
    font-weight: bold;
  }

  p {
    color: #f75183;
    font-size: 20px;
  }

  header {
    display: flex;
    flex: 1;
    height: 70px;
    background: #f40c52;
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
  }
`;

export const Box = styled.section`
  display: flex;
  justify-content: center;

  iframe {
    border-radius: 15px;
    width: 900px;
    height: 400px;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    margin-top: 20px;
    justify-content: center;
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

      iframe {
        border-radius: 10px;
        width: 250px;
        height: 130px;
      }
    }
  }
`;
