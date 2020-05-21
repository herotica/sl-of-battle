import React from "react";
import styled from "styled-components";
import { FightRooms } from "../../constants";
import { useGlobalDataStore } from "../../state";
import { useFightDataStore } from "../../state/fight";
import { observer } from "mobx-react-lite";

import { LgTitle, SmText, MdTitle } from "../text";
import UndergroundBg from "../../assets/room/underground.jpg";

const Strings = {
  title: "SLUT FIGHT",
  explain: "Bring your opponent to orgasm, before they make you"
};
const RoomImages = {
  [FightRooms.underground]: UndergroundBg
};

const FightRoom = observer(() => {
  const {
    fightCombantantData,
    fightRoom,
    onFightWin,
    onFightLose
  } = useFightDataStore();

  return (
    <Wrapper>
      <CenterTitle>
        <LgTitle>{Strings.title}</LgTitle>
        <SmText>{Strings.explain}</SmText>
      </CenterTitle>
      <FightersInfo room={fightRoom} fighter={fightCombantantData} />
      <button onClick={onFightWin}>Win</button>
      <button onClick={onFightLose}>Lose</button>
    </Wrapper>
  );
});

const FightersInfo = observer(({ room, fighter }) => {
  const { name, img, race, bodyShape } = useGlobalDataStore();

  return (
    <MainWrap roomImg={RoomImages[room]}>
      <FighterImg src={img} alt="player" />
      <FighterData>
        <DataBox marginRight>
          <MdTitle>{name}</MdTitle>
          <SmText>{`${name} is a ${bodyShape} ${race} slut fighter and ready for action.`}</SmText>
        </DataBox>
        <VSBox>VS</VSBox>
        <DataBox>
          <MdTitle>{fighter.name}</MdTitle>
          <SmText>{fighter.description}</SmText>
        </DataBox>
      </FighterData>
      <FighterImg src={fighter.img} alt="opponent" />
    </MainWrap>
  );
});

const Wrapper = styled.div`
  margin: 8px 16px;
`;
const CenterTitle = styled.div`
  text-align: center;
  margin-bottom: 16px;
`;
const MainWrap = styled.div`
  ${({ roomImg }) => roomImg && `background-image: url(${roomImg});`}
  padding: 16px;
  display: flex;
  align-items: stretch;
`;
const FighterImg = styled.img`
  height: 300px;
`;
const FighterData = styled.div`
  flex: 0 3 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const DataBox = styled.div`
  margin-${({ marginRight }) => (marginRight ? `right` : `left`)}: 24px;
  border: 1px solid black;
  background: rgba(78, 220 , 220,0.8);
`;
const VSBox = styled.div`
  color: white;
  font-weight: bold;
  font-size: 28px;
  text-align: center;
`;

export default FightRoom;
