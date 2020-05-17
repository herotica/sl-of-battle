import React from "react";
import styled from "styled-components";
import { useGlobalDataStore } from "../../state";
import { observer } from "mobx-react-lite";

const Character = observer(() => {
  const { name } = useGlobalDataStore();
  return <div>xname::{name}x</div>;
});

export const SideBarMain = observer(() => {
  const {
    name,
    gender,
    race,
    height,
    bodyShape,
    eyeColor,
    hairColor,
    penisSize,
    breastSize,
    vaginaSize,
    anusSize,
    throatSize,
    tongueProwess,
    touchProwess,
    cockProwess,
    vaginaProwess,
    anusProwess,
    touchResistance,
    breastResistance,
    mouthResistance,
    cockResistance,
    vaginaResistance,
    anusResistance
  } = useGlobalDataStore();
  return (
    <MainWrapper>
      <div>:: {name}</div>
      <div>:: {gender}</div>
      <div>:: {race}</div>
      <div>::height {height}</div>
      <div>::body {bodyShape}</div>
      <div>::eyecol {eyeColor}</div>
      <div>::haircol {hairColor}</div>
      <div>Genitals</div>
      <div>::penisSize {penisSize}</div>
      <div>::breastSize {breastSize}</div>
      <div>::vaginaSize {vaginaSize}</div>
      <div>::anusSize {anusSize}</div>
      <div>::throatSize {throatSize}</div>
      <div>====Prowess</div>
      <div>::Tongue {tongueProwess}</div>
      <div>::Touch {touchProwess}</div>
      <div>::cock {cockProwess}</div>
      <div>::Pussy {vaginaProwess}</div>
      <div>::Anus {anusProwess}</div>
      <div>====Resistance</div>
      <div>::Touch {touchResistance}</div>
      <div>::Breasts {breastResistance}</div>
      <div>::mouth {mouthResistance}</div>
      <div>::cock {cockResistance}</div>
      <div>::Pussy {vaginaResistance}</div>
      <div>::Anus {anusResistance}</div>
      <div>====Items</div>
    </MainWrapper>
  );
});

export const MainWrapper = styled.div`
  padding: 8px;
`;

export default Character;
