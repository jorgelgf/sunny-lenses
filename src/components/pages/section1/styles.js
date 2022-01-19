import styled from "styled-components";
import { themes } from "../../../themes";
import model from "../../../img/model.png";
export const DivFull = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url(${model});
  background-position: 1%-30%;
  background-repeat: no-repeat;
  background-size: cover;
  font-size: ${themes.font};
  display: flex;
  align-items: center;
  transition: all 0.3s ease;

  @media (max-width: 750px) {
    justify-content: center;
    align-items: center;
    background-position: -300px;
    width: 100%;
    height: 100%;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
    color: black;
    font-size: 20px;
    text-align: right;
    text-shadow: black;

    p {
      align-items: flex-end;
      width: 200px;
      margin-right: 30px;
    }
  }
`;
export const Tittle = styled.div`
  margin-right: 40px;
  transition: all 0.3s ease;

  @media (max-width: 1276px) {
    transition: all 0.3s ease;

    margin: 500px 0 0 0;
    display: flex;
    background-color: rgba(255, 255, 255, 0.5);
  }

  b {
    color: ${themes.fontColorPrimary};
    font-family: ${themes.fontLogo};
    font-size: 15px;
    text-align: left;
    display: flex;
    justify-content: center;
    width: 500px;
    margin-right: 20px;
    @media (max-width: 1105px) {
      width: 400px;
      margin: 0;
      text-align: center;
      font-family: ${themes.font};
      font-size: 25px;
    }
    @media (max-width: 450px) {
      font-size: 15px;
    }
  }
`;
export const DivInfo = styled.div`
  width: 100px;
  margin-right: 60px;
  color: ${themes.fontColorPrimary};
  @media (max-width: 1276px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 0 5px 0;
    background-color: rgba(255, 255, 255, 0.5);
    padding: 15px;
  }

  div {
    color: ${themes.fontColorPrimary};
    margin: 20px 0;
    width: 500px;
    font-size: 40px;
    text-align: left;
    @media (max-width: 550px) {
      font-size: 15px;
      text-align: right;
      width: 300px;
      margin: 0 0;
    }
  }
`;

export const DivButton = styled.div`
  @media (max-width: 1250px) {
    margin-bottom: 150px;
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-right: 30px;
    width: 450px;
    @media (min-width: 1600px) {
      width: 300px;
      margin: 0;
    }
    @media (max-width: 550px) {
      justify-content: center;
      align-items: flex-start;
      margin: auto 0 0 20px;
      width: auto;
    }
    button {
      margin-right: 30px;
      font-size: 15px;
      border: none;
      height: 35px;
      border-radius: 5px;
      background-color: ${themes.fontColorPrimary};
      color: ${themes.colorSecondary};
      transition: all 0.3s ease;

      :hover {
        background-color: ${themes.colorSecondary};
        color: ${themes.fontColorPrimary};
        cursor: pointer;
      }
      @media (max-width: 1600px) {
        height: 100%;
        font-size: 25px;
        width: 250px;
      }
      @media (max-width: 550px) {
        font-size: 15px;
        width: auto;
        margin: 10px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;
