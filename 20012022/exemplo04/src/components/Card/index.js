import { useState } from "react";
import * as S from "./styles";

function Card({ message }) {

  return (
    <S.Box>
      <S.Title> {message} </S.Title>
      <S.Subtitle> Aula 04 Academia front-end </S.Subtitle>
      <S.Button> Ok </S.Button>
      <S.Button color={"magenta"}> Cancelar </S.Button>
      <S.ButtonAlt color={"grey"}> Botão Alternativo </S.ButtonAlt>
    </S.Box>
  );
}

export default Card;


