import React from "react";
import styled from "styled-components";
import { observer } from "mobx-react-lite";

import { useGlobalDataStore } from "../../state";
import Palette from "../../constants/palette";
import { PenisSize, BreastSize, holeSize } from "../../constants";
import { SmlrText, SmText, MdTitle } from "../text";

const SideBar = observer(({ isCollapsed, onSwitch }) => {
  const charStore = useGlobalDataStore();

  return (
    <ExpandingSidebar onClick={onSwitch} isCollapsed={isCollapsed}>
      <MainWrapper>
        {isCollapsed ? (
          <>
            <SmCharacter {...charStore} />
            <SmCharDetails {...charStore} />
          </>
        ) : (
          <>
            <ExpandedCharacter {...charStore} />
            <ExpandedDetails {...charStore} />
          </>
        )}
      </MainWrapper>
    </ExpandingSidebar>
  );
});

const SmCharacter = ({ icon, name, gender, race }) => (
  <CharWrap>
    <Icon src={icon} alt="No Icon" />
    <SmText>{name}</SmText>
    <SmlrText>
      {gender} {race}
    </SmlrText>
  </CharWrap>
);
const SmCharDetails = (props) => (
  <DetailsWrap>
    <SmTitle>INV</SmTitle>
    <SmCap>£{props.cash}</SmCap>
    <SmCap>Renown Lvl: {props.RenownLv}</SmCap>
    <SmCap>LG Points: {props.leaguePoints}</SmCap>
    <SmCap>LG Credits: {props.leagueCredits}</SmCap>

    <SmTitle>BODY</SmTitle>
    {props.hasCock && <SmCap>{PenisSize[props.penisSize]} penis</SmCap>}
    {props.isWoman && (
      <>
        <SmCap>{BreastSize[props.breastSize]} breasts</SmCap>
        <SmCap>{holeSize[props.vaginaSize]} pussy</SmCap>
      </>
    )}
    <SmCap>{holeSize[props.anusSize]} arse</SmCap>
    <SmCap>{holeSize[props.throatSize]} throat</SmCap>

    <SmTitle>PROWESS</SmTitle>
    <Split>
      <SmCap>CCK: {props.cockProwess}</SmCap>
      <SmCap>PSY: {props.vaginaProwess}</SmCap>
      <SmCap>ANS: {props.anusProwess}</SmCap>
    </Split>
    <Split>
      <SmCap>SED: {props.seductionProwess}</SmCap>
      <SmCap>GRP: {props.grapplingProwess}</SmCap>
      <SmCap>TOU: {props.tongueProwess}</SmCap>
      <SmCap>TCH: {props.touchProwess}</SmCap>
    </Split>

    <SmTitle>RESIST</SmTitle>
    <Split>
      <SmCap>TCH: {props.touchResistance}</SmCap>
      <SmCap>BST: {props.breastResistance}</SmCap>
      <SmCap>MOU: {props.mouthResistance}</SmCap>
    </Split>
    <Split>
      <SmCap>CCK: {props.cockResistance}</SmCap>
      <SmCap>PSY: {props.vaginaResistance}</SmCap>
      <SmCap>ANS: {props.anusResistance}</SmCap>
    </Split>
    <PadTop>
      <SmCap>Orgasm Limit: {props.orgasmLimit}</SmCap>
    </PadTop>
  </DetailsWrap>
);
const ExpandedCharacter = ({ img, name, gender, race }) => (
  <CharWrap>
    <Img src={img} alt="No Icon" />
    <MdTitle>{name}</MdTitle>
    <SmText>
      {gender} {race}
    </SmText>
  </CharWrap>
);
const ExpandedDetails = (props) => (
  <DetailsWrap>
    <SmTitle>INV</SmTitle>
    <SmText>£{props.cash}</SmText>
    <SmText>Renown Lvl: {props.RenownLv}</SmText>
    <SmText>LG Points: {props.leaguePoints}</SmText>
    <SmText>LG Credits: {props.leagueCredits}</SmText>

    <SmTitle>BODY</SmTitle>
    <Split>
      {props.isWoman && <SmText>{BreastSize[props.breastSize]} breasts</SmText>}
      {props.hasCock && <SmText>{PenisSize[props.penisSize]} penis</SmText>}
    </Split>
    <Split>
      {props.isWoman && <SmText>{holeSize[props.vaginaSize]} pussy</SmText>}
      <SmText>{holeSize[props.anusSize]} arse</SmText>
      <SmText>{holeSize[props.throatSize]} throat</SmText>
    </Split>

    <SmTitle>PROWESS</SmTitle>
    <SplitThirds>
      <SmText>Cock: {props.cockProwess}</SmText>
      <SmText>Pussy: {props.vaginaProwess}</SmText>
      <SmText>Arse: {props.anusProwess}</SmText>
    </SplitThirds>
    <SplitThirds>
      <SmText>Section: {props.seductionProwess}</SmText>
      <SmText>Grappling: {props.grapplingProwess}</SmText>
    </SplitThirds>
    <SplitThirds>
      <SmText>Tounge: {props.tongueProwess}</SmText>
      <SmText>Touch: {props.touchProwess}</SmText>
    </SplitThirds>

    <SmTitle>RESIST</SmTitle>
    <SplitThirds>
      <SmText>Touch: {props.touchResistance}</SmText>
      <SmText>Mouth: {props.mouthResistance}</SmText>
    </SplitThirds>
    <SplitThirds>
      <SmText>Cock: {props.cockResistance}</SmText>
      <SmText>Breasts: {props.breastResistance}</SmText>
    </SplitThirds>
    <SplitThirds>
      <SmText>Pussy: {props.vaginaResistance}</SmText>
      <SmText>Arse: {props.anusResistance}</SmText>
    </SplitThirds>
    <PadTop>
      <SmText>Orgasm Limit: {props.orgasmLimit}</SmText>
    </PadTop>
  </DetailsWrap>
);

const ExpandingSidebar = styled.div`
  flex: 0 0 ${(p) => (p.isCollapsed ? "calc(160px + 0.4vw)" : "400px")};
  background: ${(p) => (p.isCollapsed ? Palette.mid : Palette.light)};
  overflow-y: auto;
  transition: flex 0.5s ease-in-out, background 0.5s ease-in-out;
  border-right: solid 4px ${Palette.dark};
  direction: rtl;
  padding-left: 10px;
  cursor: pointer;
`;
const MainWrapper = styled.div`
  padding: 10px;
`;
const CharWrap = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;
const DetailsWrap = styled.div`
  text-align: left;
  margin-bottom: 20px;
`;
const Img = styled.img`
  max-height: 360px;
  object-fit: contain;
`;
const Icon = styled.img`
  width: calc(80px + 0.2vw);
  height: calc(80px + 0.2vw);
`;
const SmCap = styled.div`
  margin-bottom: 2px;
  line-height: 1.1;
  font-size: calc(0.75rem + 0.2vw);

  &:first-letter {
    text-transform: uppercase;
  }
`;
const PadTop = styled.div`
  margin-top: 8px;
`;
const SmTitle = styled(SmText)`
  font-weight: bold;
  margin: 8px 0;
  text-align: center;
  line-height: 1;
`;
const Split = styled.div`
  display: inline-block;
  width: 50%;
`;
const SplitThirds = styled.div`
  display: inline-block;
  width: 33%;
`;

export default SideBar;
