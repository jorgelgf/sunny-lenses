import styled from "styled-components";
import { themes } from "../../../themes";
import model1 from "../../../img/1.jpg";
import model2 from "../../../img/2.jpg";
import model3 from "../../../img/3.png";
import model4 from "../../../img/4.jpg";
import model5 from "../../../img/5.jpg";
export const DivFull = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${themes.bgSection3};
  font-family: ${themes.font};
`;

export const DivTop = styled.div`
  height: 300px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 970px) {
    border: solid black;
    flex-direction: column;
    height: 770px;
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
  //border: 1px solid;
  h1 {
    transition: all 0.3s ease;
    :hover {
      color: ${themes.colorPrimary};
      text-shadow: 1px 1px 1px ${themes.fontColorPrimary};
      cursor: pointer;
      transition: all 0.3s ease;
    }
    @media (max-width: 1200px) {
      font-size: 20px;
      width: 400px;
      margin: auto;
      padding: 0;
    }
  }
  @media (max-width: 1200px) {
    font-size: 14px;
  }
`;

export const DivPhoto1 = styled.div`
  margin: 300px 150px 0 0;
  width: 200px;
  height: 100vh;
  z-index: 10;
  background-repeat: no-repeat;
  background-image: url(${model1});
  background-size: cover;
  background-position: -87px 0;
  z-index: 0;
  @media (max-width: 1200px) {
    display: none;
  }
`;

export const DivPhoto2 = styled.div`
  margin: 399px 30px 0 0;
  width: 200px;
  height: 100vh;
  position: absolute;
  z-index: 0;
  left: 270px;
  background-image: url(${model2});
  background-size: cover;
  background-position: -350px 0;
  background-repeat: no-repeat;
  @media (max-width: 1200px) {
    display: none;
  }
`;
export const DivPhoto3 = styled.div`
  border-radius: 50%;
  height: 230px;
  width: 230px;
  margin: 0 0px 0 160px;
  background-image: url(${model3});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: -95px 0px;
  z-index: 3;
  @media (max-width: 1200px) {
    border-radius: 3px;
    height: 100%;
    background-position: center;
    width: 90%;
    margin: 0;
  }
`;
export const DivPhoto4 = styled.div`
  border-radius: 50%;
  height: 330px;
  width: 330px;
  background-image: url(${model4});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: -60px 0;
  z-index: 10;
  margin: 50px 0 0 750px;
  @media (max-width: 1200px) {
    display: none;
  }
`;
export const DivPhoto5 = styled.div`
  border-radius: 50%;
  height: 130px;
  width: 130px;
  background-image: url(${model5});
  background-size: center;
  background-repeat: no-repeat;
  background-position: -133px -60px;
  position: absolute;
  right: 220px;
  top: 1715px;
  @media (max-width: 1200px) {
    display: none;
  }
`;
