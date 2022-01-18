import styled from "styled-components";
import { themes } from "../../../themes";
export const DivFull = styled.div`
  width: 100%;
  height: 600px;
  font-family: ${themes.font};
  background-color: ${themes.fontColorPrimary};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
`;
export const DivHeader = styled.div`
  width: 327px;
  margin-right: 820px;
  p {
    font-size: 12px;
  }
`;

export const DivCard = styled.div`
  width: 1150px;
  height: 300px;
  background-color: ${themes.bgSection3};
  border-radius: 5px;
  display: flex;
`;
export const DivCardLeft = styled.div`
  width: 50%;
  height: 100%;
  border: solid 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const DivCardRight = styled.div`
  width: 50%;
  height: 100%;
  border: solid 1px;
  cursor: pointer;
`;
export const Avatar = styled.img`
  background-color: black;
  width: 240px;
  height: 240px;
  border-radius: 50%;
`;
