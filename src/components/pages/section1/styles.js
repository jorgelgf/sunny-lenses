import styled from "styled-components";
import { themes } from "../../../themes";
import model from "../../../img/model.png";
export const DivFull = styled.div`
  height: 700px;
  width: 100%;
  background-image: url(${model});
  background-position: 1%-30%;
  background-repeat: no-repeat;
  background-size: cover;
  font-size: ${themes.font};
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  transition: all 0.3s ease;
  font-family: ${themes.font};
  color: ${themes.fontColorPrimary};
  @media (max-width: 780px) {
    width: 100%;
    height: 500px;
    align-items: end;
    justify-content: center;
    text-align: center;
  }

  div {
    @media (max-width: 900px) {
      font-size: 20px;
      text-align: center;
    }
  }
`;
export const DivInfoButton = styled.div`
  width: 400px;
  height: 300px;
  margin-right: 40px;
  padding: 10px;
  div {
    text-align: justify;
    width: auto;
    font-size: 30px;

    @media (max-width: 900px) {
      font-size: 30px;
      text-align: center;
    }
  }
  @media (max-width: 900px) {
    width: 100%;
    height: auto;
    margin: 0;
    justify-content: center;
    align-items: center;
    background-color: rgba(9, 9, 5, 0.6);
    color: ${themes.colorSecondary};
    margin-bottom: 200px;
  }
  @media (max-width: 900px) {
    margin: 0 0 50px 0;
  }
  span {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    @media (max-width: 900px) {
      justify-content: center;
    }

    button {
      background-color: ${themes.fontColorPrimary};
      border: none;
      height: 30px;
      border-radius: 5px;
      color: ${themes.colorSecondary};
      margin-right: 10px;
      margin-top: 10px;
      cursor: pointer;
      transition: all 0.3s ease;
      :hover {
        transition: all 0.3s ease;

        color: ${themes.fontColorPrimary};
        background-color: ${themes.colorPrimary};
      }
      @media (max-width: 900px) {
        height: 50px;
        font-size: 20px;
        margin: 30px 10px;
      }
    }
  }
`;
