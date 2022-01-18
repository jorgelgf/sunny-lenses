import styled from "styled-components";
import { themes } from "../../../themes";
export const DivFull = styled.div`

width:100%
height: 100%;


`;

export const DivCards = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: space-between;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: ${themes.font};
    width: 300px;
    height: 250px;
    margin: 100px 100px 0 100px;
    border-radius: 10px;
    background-color: ${themes.colorPrimary};
    b {
      text-align: center;
      width:150px;
  }
`;
