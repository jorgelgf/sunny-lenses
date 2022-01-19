import React from "react";
import * as S from "./styles";

export default function Section3() {
  return (
    <S.DivFull>
      <S.DivTop>
        <S.DivPhoto1 />
        <S.DivPhoto2 />

        <S.DivPhoto3 />
        <S.DivDescription>
          <p>
            <b>DESIGNER BY YOU</b>
          </p>
          <h1>Individual style</h1>
          <p>
            Like a bespoke or couture drees, exceptional style starts with fit
            that was made just for you. We craft your glasses based to your
            distinct stylistic choices and your personal preferences, so you're
            free to truly express yourself
          </p>
        </S.DivDescription>
      </S.DivTop>
      <S.DivPhoto4 />

      <S.DivPhoto5 />
    </S.DivFull>
  );
}
