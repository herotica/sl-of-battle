import React, { useState } from "react";
import styled from "styled-components";
import { useGlobalDataStore } from "../../state";
import { useFightDataStore } from "../../state/fight";
import { observer } from "mobx-react-lite";

import {
  LgTitle,
  SmText,
  MdTitle,
  SmlrText,
  LogText,
  TextSpanLog
} from "../text";
import { Strings, RoomImages, FightPhaseTypes, FightPhaseData } from "./data";

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
      <FlexWrap>
        <FighterTextLog />
        <FighterActions fighter={fightCombantantData} />
      </FlexWrap>
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

const FighterActions = observer(({ fighter }) => {
  const [fightPhase, setFightPhase] = useState(0);
  const [fightPhaseType, setFightPhaseType] = useState(FightPhaseTypes[0][0]);
  const [phaseChoices, setPhaseChoices] = useState([]);
  const PhaseData = FightPhaseData[fightPhase];

  const charData = useGlobalDataStore();
  const { addToFightLog } = useFightDataStore();

  const OnActionRan = (btnAction, optionIndex) => {
    const actionResponse = btnAction(charData, fighter, phaseChoices);
    addToFightLog(actionResponse.log);

    if (fightPhase >= FightPhaseData.length - 1) {
      setFightPhase(0);
      setPhaseChoices([]);
      setFightPhaseType(FightPhaseTypes[0][0]);
    } else {
      setFightPhase(fightPhase + 1);
      const newChoiceList = phaseChoices.slice(0);
      const Options = PhaseData[fightPhaseType].options;

      if (actionResponse.isSuccess) {
        const WinPhase = Options[optionIndex].nextPhaseTypeWin;
        newChoiceList.push(WinPhase);
        setPhaseChoices(newChoiceList);
        setFightPhaseType(WinPhase);
      } else {
        const LosePhase = Options[optionIndex].nextPhaseTypeFail;
        newChoiceList.push(LosePhase);
        setPhaseChoices(newChoiceList);
        setFightPhaseType(LosePhase);
      }
    }
  };

  const BuildResolveStep = () => {
    if (fightPhase < FightPhaseData.length - 1) {
      return false;
    } else {
      console.log("phasechoice", phaseChoices);
      const responseObj = { result: "yay" };
      return responseObj;
    }
  };
  const Resolved = BuildResolveStep();

  return (
    <ActionWrap>
      <MdTitle>{PhaseData[fightPhaseType].name}</MdTitle>
      {Resolved && <SmText>{Resolved.result}</SmText>}
      {PhaseData[fightPhaseType].options.map((phase, index) => {
        const onPress = () => OnActionRan(phase.onAction, index);

        return (
          <ActionItem onClick={onPress}>
            <SmText>{phase.name}</SmText>
            <SmlrText>{phase.description}</SmlrText>
          </ActionItem>
        );
      })}
    </ActionWrap>
  );
});

// Fight Log
const FighterTextLog = observer(() => {
  const { fightLog } = useFightDataStore();

  return (
    <FightLogWrap>
      {fightLog.map(entry => (
        <LogText>
          {"> "}
          <TextSpanLog>{entry}</TextSpanLog>
        </LogText>
      ))}
    </FightLogWrap>
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
  background: rgba(78, 220, 220, 0.8);
  padding: 4px;
`;
const VSBox = styled.div`
  color: white;
  font-weight: bold;
  font-size: 28px;
  text-align: center;
`;
const FlexWrap = styled.div`
  display: flex;
`;
const ActionWrap = styled.div`
  border: 1px solid darkgreen;
  background: rgba(25, 146, 91, 0.85);
  padding: 8px;
  flex-grow: 4;
`;
const ActionItem = styled.div`
  border: 1px solid black;
  background: rgba(60, 60, 60, 0.8);
  margin: 16px;
  cursor: pointer;
  padding: 8px;
  max-width: 400px;
  border-radius: 10px;
`;
const FightLogWrap = styled.div`
  border: 1px solid black;
  background: rgba(180, 212, 180, 0.85);
  padding: 8px;
  flex: 1 0 35%;
  overflow-y: auto;
  max-height: 240px;
`;

export default FightRoom;
