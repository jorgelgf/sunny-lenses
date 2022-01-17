import React from "react";
import * as S from "./styles";
import smartphone from "../../../img/smartphone.png";
import designer from "../../../img/designer.png";
import glasses from "../../../img/glasses.png";
import favorite from "../../../img/favorite.png";
export default function Section2() {
  return (
    <S.DivFull>
      <S.DivHeader>
        <S.MiniTitle>
          <b>HOW IT WORKS</b>
        </S.MiniTitle>
        <S.Description>
          <b>This is the future of premiun eyewear</b>
        </S.Description>
      </S.DivHeader>
      <S.DivElements>
        <S.DivElement>
          <S.MarkPoint />
          <img src={smartphone} alt="smartphone" />
          <p>
            <b>Measured for you</b>
          </p>
          <S.DescriptionElement>
            USe our iOS app to scan your face and capture over 20,000 3D
            measurements
          </S.DescriptionElement>
        </S.DivElement>
        <S.DivElement>
          <S.MarkPoint />
          <img src={designer} alt="designer" />
          <p>
            <b>Designed by you</b>
          </p>
          <S.DescriptionElement>
            Select your style, choose your color, fine-tune the shape, and
            preview it with our virtual try-on
          </S.DescriptionElement>
        </S.DivElement>
        <S.DivElement>
          <S.MarkPoint />
          <img src={glasses} alt="glasses" />
          <p>
            <b>Made from scratch</b>
          </p>
          <S.DescriptionElement>
            Each pair is crafted for one person at a time from the highest
            quality acetate and metal
          </S.DescriptionElement>
        </S.DivElement>
        <S.DivElement>
          <S.MarkPoint />
          <img src={favorite} alt="favorite" />
          <p>
            <b>Perfect, guaranteed</b>
          </p>
          <S.DescriptionElement>
            We guarantee your Sunny Lenses glasses will fit perfectly, look
            great and fell amazing
          </S.DescriptionElement>
        </S.DivElement>
      </S.DivElements>
    </S.DivFull>
  );
}
