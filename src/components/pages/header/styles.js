import styled from "styled-components";
import { themes } from "../../../themes";

export const DivFullHeader = styled.header`
  width: 100%;
  height: 80px;
  background-color: ${themes.colorPrimary};
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
`;

export const DivHeader = styled.div`
  width: 50%;
  height: 50px;
  color: ${themes.fontColorPrimary};
`;
export const NavLeft = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  height: 80px;
  margin-left: 100px;
  font-family: ${themes.fontLogo};
  font-size: 30px;
  p {
    :hover {
      color: ${themes.colorSecondary};
      text-shadow: 1px 1px 5px ${themes.fontColorPrimary};
      cursor: pointer;
      transition: all 0.3s ease;
    }
  }
`;

export const NavRight = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  height: 80px;
  margin-left: 10px;
  margin-right: 10px;
  font-family: ${themes.font};
  button {
    color: ${themes.fontColorPrimary};
    display: flex;
    height: 100%;
    width: 50%;
    align-items: center;
    text-align: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;

    :hover {
      background-color: ${themes.colorSecondary};
    }
  }
`;
