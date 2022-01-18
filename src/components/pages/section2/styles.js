import styled from "styled-components";
import { themes } from "../../../themes";

export const DivFull = styled.div`
  height: 100%;
  width: 100%;
  font-family: ${themes.font};
  margin-bottom: 100px;
`;

export const DivHeader = styled.div`
  width: 600px;
  height: auto;
  margin-left: 100px;
`;

export const MiniTitle = styled.div`
  width: 170px;
  font-family: ${themes.fontLogo};
  font-size: 15px;
  margin: 40px 0;
  color: ${themes.fontColorPrimary};
  @media (max-width: 650px) {
    font-size: 12px;
  }
`;

export const Description = styled.div`
  width: 600px;
  font-family: ${themes.font};
  font-size: 40px;
  margin: 30px 0;
  color: ${themes.fontColorPrimary};
  @media (max-width: 650px) {
    font-size: 16px;
  }
`;

export const DivElements = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const DivElement = styled.div`
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
  p {
    b {
      transition: all 0.3s ease;

      :hover {
        color: ${themes.colorPrimary};
        text-shadow: 1px 1px 1px ${themes.fontColorPrimary};
        cursor: pointer;
        transition: all 0.3s ease;
      }
    }
  }
  img {
    width: 100px;
    height: 100px;
    cursor: pointer;
    transition: all 0.5s ease;
    margin: 30px;

    :hover {
      transition: all 0.5s ease;
      -webkit-transform: scale(1.5);
      transform: scale(1.5);
    }
  }
`;
export const MarkPoint = styled.p`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: transparent;
`;

export const DescriptionElement = styled.p`
  margin: 0 30px;
  text-align: center;
`;
