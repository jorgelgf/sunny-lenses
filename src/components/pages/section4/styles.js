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
    border-radius: 5px;
    background-color: ${themes.colorPrimary};
    cursor: pointer;
    transition: all 0.5s ease;
    

    :hover {
      transition: all 0.5s ease;
      -webkit-transform: scale(1.2);
      transform: scale(1.2);
      
    }
    b {
      text-align: center;
      width:150px;
  }
  img{
     margin-top:20px; 
    width:100px;
    height:100px;

  }
`;
