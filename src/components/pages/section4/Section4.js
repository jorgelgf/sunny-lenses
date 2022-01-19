import React from "react";
import * as S from "./styles";
import glasses2 from "../../../img/glasses2.png";
import location from "../../../img/location.png";
import magnifier from "../../../img/magnifier.png";
export default function Section4() {
  return (
    <S.DivFull>
      <S.DivCards>
        <div>
          <b>FIND A LOCATION</b>
          <img src={glasses2} alt="glasses" />
          <p>Learn more </p>
        </div>
        <div>
          <b>BROWSE OUR FRAME STYLES</b>
          <img src={location} alt="location" />
          <p>Explore frames</p>
        </div>
        <div>
          <b>EXPLORE OUR LENS OPTIONS</b>
          <img src={magnifier} alt="magnifier" />
          <p>Explore lenses </p>
        </div>
      </S.DivCards>
      <S.Footer>
        {" "}
        <span> 2023 Sunny Lenses. All Rights Reserved.</span>
        <span>Privacy & Security | Terms and Conditions</span>
      </S.Footer>
    </S.DivFull>
  );
}
