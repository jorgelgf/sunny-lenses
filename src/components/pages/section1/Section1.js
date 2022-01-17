import React from "react";
import * as S from "./styles";
export default function Section1() {
  return (
    <S.DivFull>
      <div>
        <S.Tittle>
          <b>CUSTOM - TAILORED EYEWEAR </b>
        </S.Tittle>
        <S.DivInfo>
          <div>GLASSES THAT LOOK GOOD ON YOU, NOT JUST ON THE SHELF</div>
        </S.DivInfo>
        <S.DivButton>
          <div>
            <button>SHOP MEN</button>
            <button>SHOP WOMAN</button>
          </div>
        </S.DivButton>
      </div>
    </S.DivFull>
  );
}
