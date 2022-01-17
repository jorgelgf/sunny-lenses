import styled from "styled-components";
import { themes } from "../../../themes";
import model2 from "../../../img/model2.jpg";
export const DivFull = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${themes.bgSection3};
  font-family: ${themes.font};
`;

export const DivTop = styled.div`
  border: solid 1px;
  height: 300px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DivPhotoTop = styled.div`
  border: 1px solid;
  border-radius: 50%;
  height: 160px;
  width: 160px;
  margin: 0 80px 0 80px;
  background-image: url(${model2});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: -50px 0px;
`;
export const DivDescription = styled.div`
  border: 1px solid;
  height: 100%;
  width: 350px;
  margin: 0 100px 0 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
