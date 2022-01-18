import React from "react";
import * as S from "./styles";
export default function Section5() {
  return (
    <S.DivFull>
      <S.DivHeader>
        <p>VERIFIED CUSTOMER REVIEWS</p>
        <h1>Customer lookbook</h1>
      </S.DivHeader>
      <div>
        <S.DivCard>
          <S.DivCardLeft>
            <S.Avatar />
          </S.DivCardLeft>
          <S.DivCardRight></S.DivCardRight>
        </S.DivCard>
      </div>
    </S.DivFull>
  );
}
