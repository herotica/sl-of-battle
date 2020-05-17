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
    throatSize
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
      <div>::eyecol {penisSize}</div>
      <div>::eyecol {breastSize}</div>
      <div>::vaginaSize {vaginaSize}</div>
      <div>::eyecol {anusSize}</div>
      <div>::throatSize {throatSize}</div>
    </MainWrapper>
  );
});

export const MainWrapper = styled.div`
  padding: 8px;
`;

export default Character;
