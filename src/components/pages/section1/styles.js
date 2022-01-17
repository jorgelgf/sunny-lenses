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

  b {
    color: ${themes.fontColorPrimary};
    font-family: ${themes.fontLogo};
    font-size: 15px;
    text-align: left;
    width: 500px;
    margin-right: 20px;
  }
`;
export const DivInfo = styled.div`
  display: flex;
  width: 100px;
  margin-right: 60px;
  color: ${themes.fontColorPrimary};

  div {
    color: ${themes.fontColorPrimary};
    margin: 20px 0;
    width: 500px;
    font-size: 40px;
    text-align: left;
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
