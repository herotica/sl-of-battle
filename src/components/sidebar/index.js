import React from "react";
import { observer } from "mobx-react-lite";

import { useGlobalDataStore } from "../../state";
import { PenisSize, BreastSize, holeSize } from "../../constants";
import { SmlrText, SmText, MdTitle } from "../text";
import BeerIcon from "../../assets/logo/beer.png";
import {
  ExpandingSidebar,
  MainWrapper,
  LinksBox,
  BtmLink,
  SmIcon,
  CharWrap,
  Icon,
  DetailsWrap,
  SmTitle,
  SmCap,
  Split,
  PadTop,
  Img,
  SplitThirds,
} from "./styled";

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
      <LinksBox>
        <BtmLink
          href="https://paypal.me/herotica"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SmIcon src={BeerIcon} />
          <span>Like it? Toss a coin to the devs</span>
        </BtmLink>
        <a
          href="https://github.com/herotica/sl-of-battle"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </LinksBox>
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
      {props.hasCock && <SmCap>CCK: {props.cockProwess}</SmCap>}
      {props.isWoman && <SmCap>PSY: {props.vaginaProwess}</SmCap>}
      <SmCap>ANS: {props.anusProwess}</SmCap>
      <SmCap>TOU: {props.tongueProwess}</SmCap>
    </Split>
    <Split>
      <SmCap>SED: {props.seductionProwess}</SmCap>
      <SmCap>GRP: {props.grapplingProwess}</SmCap>
      <SmCap>TCH: {props.touchProwess}</SmCap>
    </Split>

    <SmTitle>RESIST</SmTitle>
    <Split>
      <SmCap>TCH: {props.touchResistance}</SmCap>
      {props.isWoman && <SmCap>BST: {props.breastResistance}</SmCap>}
      <SmCap>MOU: {props.mouthResistance}</SmCap>
    </Split>
    <Split>
      {props.hasCock && <SmCap>CCK: {props.cockResistance}</SmCap>}
      {props.isWoman && <SmCap>PSY: {props.vaginaResistance}</SmCap>}
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
      <SmText>Seduction: {props.seductionProwess}</SmText>
      <SmText>Grappling: {props.grapplingProwess}</SmText>
    </SplitThirds>
    <SplitThirds>
      {props.hasCock && <SmText>Cock: {props.cockProwess}</SmText>}
      {props.isWoman && <SmText>Pussy: {props.vaginaProwess}</SmText>}
      <SmText>Arse: {props.anusProwess}</SmText>
    </SplitThirds>
    <SplitThirds>
      <SmText>Tounge: {props.tongueProwess}</SmText>
      <SmText>Touch: {props.touchProwess}</SmText>
    </SplitThirds>

    <SmTitle>RESIST</SmTitle>
    <SplitThirds>
      {props.hasCock && <SmText>Cock: {props.cockResistance}</SmText>}
      {props.isWoman && <SmText>Breasts: {props.breastResistance}</SmText>}
    </SplitThirds>
    <SplitThirds>
      {props.isWoman && <SmText>Pussy: {props.vaginaResistance}</SmText>}
      <SmText>Arse: {props.anusResistance}</SmText>
    </SplitThirds>
    <SplitThirds>
      <SmText>Touch: {props.touchResistance}</SmText>
      <SmText>Mouth: {props.mouthResistance}</SmText>
    </SplitThirds>
    <PadTop>
      <SmText>Orgasm Limit: {props.orgasmLimit}</SmText>
    </PadTop>
  </DetailsWrap>
);

export default SideBar;
