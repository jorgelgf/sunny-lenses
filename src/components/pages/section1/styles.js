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
  @media (max-width: 1110px) {
    justify-content: flex-end;
    background-position: center;
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
    @media (max-width: 1110px) {
      width: 500px;
      display: flex;
      align-items: flex-start;
      width: 400px;
      margin-right: 40px;
    }
  }
`;
export const Tittle = styled.div`
  margin-right: 40px;

  @media (max-width: 1105px) {
    border-radius: 5px;
    margin: 0;
    display: flex;
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
      border-radius: 1px;
      width: 200px;
      margin: 0;
      text-align: center;
      font-family: ${themes.font};
      font-size: 12px;
    }
    @media (max-width: 870px) {
      color: white;
      text-shadow: 1px 1px 1px black;
    }
  }
`;
export const DivInfo = styled.div`
  display: flex;
  width: 100px;
  margin-right: 60px;
  color: ${themes.fontColorPrimary};
  @media (max-width: 1105px) {
    margin: 0 50px 30px 0;
    background-color: rgba(255, 255, 255, 0.5);
    padding: 15px;
    border-radius: 5px;
    text-shadow: 1px 1px 1px ${themes.colorSecondary};
  }

  div {
    color: ${themes.fontColorPrimary};
    margin: 20px 0;
    width: 500px;
    font-size: 40px;
    text-align: left;
    @media (max-width: 1105px) {
      margin: 0 0px 0 0;
      width: 100%;
      font-size: 30px;
      border-radius: 5px;
    }
  }
`;

export const DivButton = styled.div`
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 250px;
    margin-right: 310px;
    button {
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
    }
  }
`;
