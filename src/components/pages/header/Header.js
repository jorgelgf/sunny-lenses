import React from "react";
import * as S from "./styles";

export default function Header() {
  return (
    <S.DivFullHeader>
      <S.DivHeader>
        <S.NavLeft>
          <p>SUNNY LENSES</p>
        </S.NavLeft>
      </S.DivHeader>
      <S.DivHeader>
        <S.NavRight>
          <button>FRAMES</button>
          <button>LENSES</button>
          <button>PRICING</button>
          <button>REVIEWS</button>
          <button>LOCATION</button>
        </S.NavRight>
      </S.DivHeader>
    </S.DivFullHeader>
  );
}
