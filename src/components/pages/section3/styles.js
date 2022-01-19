import styled from "styled-components";
import { themes } from "../../../themes";
import model1 from "../../../img/1.jpg";
import model2 from "../../../img/2.png";
import model3 from "../../../img/3.jpg";
export const DivFull = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${themes.bgSection3};
  font-family: ${themes.font};
  @media (max-width: 1200px) {
    height: 900px;
  }
`;

export const DivTop = styled.div`
  height: 300px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1200px) {
    flex-direction: column;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
`;

export const DivDescription = styled.div`
  height: 100%;
  width: 350px;
  margin: 0 140px 0 60px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  z-index: 5;

  p {
    @media (max-width: 1200px) {
      font-size: 30px;
    }
    @media (max-width: 650px) {
      font-size: 20px;
    }
  }

  h1 {
    transition: all 0.3s ease;
    :hover {
      color: ${themes.colorPrimary};
      text-shadow: 1px 1px 1px ${themes.fontColorPrimary};
      cursor: pointer;
      transition: all 0.3s ease;
    }
    @media (max-width: 1200px) {
      font-size: 40px;
      width: 400px;
      margin: auto;
      padding: 0;
    }
  }
  @media (max-width: 1200px) {
    font-size: 14px;
    margin: auto;
    height: 400px;
    padding: 0;
    width: 90%;
  }
`;

export const DivPhoto1 = styled.div`
  margin: 300px 0px 0 0;
  width: 200px;
  height: 100vh;
  z-index: 10;
  background-repeat: no-repeat;
  background-image: url(${model1});
  background-size: cover;
  background-position: -87px 0;
  z-index: 0;
  @media (max-height: 1600px) {
    height: 700px;
  }
  @media (max-width: 1200px) {
    display: none;
  }
`;

export const DivPhoto2 = styled.div`
  border-radius: 50%;
  height: 230px;
  width: 230px;
  margin: 0 0px 0 160px;
  background-image: url(${model2});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: -95px 0px;
  z-index: 3;
  @media (max-width: 1200px) {
    border-radius: 20px;
    height: 400px;
    background-size: cover;
    background-position: 0 0;
    width: 90%;
    margin: 45px 0 10px 0;
    border: solid 10px ${themes.colorPrimary};
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 5px black;
  }
  @media (max-width: 600px) {
    background-position: center;
  }
`;
export const DivPhoto3 = styled.div`
  border-radius: 50%;
  height: 330px;
  width: 330px;
  background-image: url(${model3});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: -60px 0;
  z-index: 10;
  margin: 50px 0 0 650px;
  @media (max-width: 1200px) {
    display: none;
  }
`;
