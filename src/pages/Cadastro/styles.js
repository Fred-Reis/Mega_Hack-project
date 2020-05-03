import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.section`
  display: flex;
  flex: 1;
  justify-content: center;

  div {
    justify-content: center;
    display: flex;
    margin-top: 5%;
    /* height: 550px; */
    padding: 25px 0;
    width: 600px;
    background-color: rgba(0, 0, 0, 0.67);
    border-radius: 15px;
    flex-direction: column;

    p {
      text-align: center;
      color: #fc98b8;
      font-size: 12px;
    }

    a {
      margin-top: 30px;
      align-self: center;
      align-items: center;
      justify-content: center;
      display: flex;
      width: 60%;
      height: 40px;
      border-radius: 15px;
      border: none;
      background: #fb1861;
      color: #fff;
      font-size: 20px;
      font-weight: bold;
      transition: background-color 0.2s;
      margin-bottom: 20px;
      text-decoration: none;

      &:hover {
        background: ${shade(0.2, "#fb1861")};
      }
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    color: #fa0050;
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 30px;
  }

  input {
    width: 80%;
    height: 50px;
    padding: 0 24px;
    border-radius: 15px;
    border: 2px solid #fb1861;
    color: #3a3a3a;
    background: #fff;
    margin-bottom: 30px;

    &::placeholder {
      color: #a8a8b3;
    }
  }
`;
