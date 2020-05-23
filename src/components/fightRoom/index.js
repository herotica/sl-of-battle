import React, { useState } from "react";
import styled from "styled-components";
import { useGlobalDataStore } from "../../state";
import { useFightDataStore } from "../../state/fight";
import { observer } from "mobx-react-lite";
import OrgasmImg from "../../assets/logo/orgasm.png";
import OrgasmLossImg from "../../assets/logo/orgasmLoss.png";

import {
  LgTitle,
  SmText,
  MdTitle,
  SmlrText,
  LogText,
  TextSpanLog
} from "../text";
import {
  Strings,
  RoomImages,
  FightPhaseTypes,
  FightPhaseData,
  fightResolve
} from "./data";

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
  const {
    fightArousalState,
    fightOrgasmState,
    fightOrgasmStateOriginal
  } = useFightDataStore();

  const PlayerOrgasmIcons = [];
  for (let i = 0; i < fightOrgasmStateOriginal[0]; i++) {
    PlayerOrgasmIcons.push(
      <OrgasmIcon
        src={i >= fightOrgasmState[0] ? OrgasmLossImg : OrgasmImg}
        alt="icon"
      />
    );
  }
  const FighterOrgasmIcons = [];
  for (let i = 0; i < fightOrgasmStateOriginal[1]; i++) {
    FighterOrgasmIcons.push(
      <OrgasmIcon
        src={i >= fightOrgasmState[1] ? OrgasmLossImg : OrgasmImg}
        alt="icon"
      />
    );
  }

  return (
    <MainWrap roomImg={RoomImages[room]}>
      <FighterImg src={img} alt="player" />
      <FighterData>
        <DataBox marginRight>
          <SmText>{name}</SmText>
          <SmlrText>{`${name} is a ${bodyShape} ${race} slut fighter and ready for action.`}</SmlrText>
          <FlexBetween>
            <div>{PlayerOrgasmIcons}</div>
            <SmlrText>Arousal::{fightArousalState[0]}</SmlrText>
          </FlexBetween>
        </DataBox>
        <VSBox>VS</VSBox>
        <DataBox>
          <SmText>{fighter.name}</SmText>
          <SmlrText>{fighter.description}</SmlrText>
          <FlexBetween>
            <div>{FighterOrgasmIcons}</div>
            <SmlrText>Arousal::{fightArousalState[1]}</SmlrText>
          </FlexBetween>
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
  const [roundResult, setRoundResult] = useState(false);
  const PhaseData = FightPhaseData[fightPhase];

  const charData = useGlobalDataStore();
  const {
    addToFightLog,
    fightArousalState,
    setFightArousalState,
    fightOrgasmState,
    setOrgasmState
  } = useFightDataStore();

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

  const isRoundEnd = fightPhase === FightPhaseData.length - 1;
  const BuildResolveStep = () => {
    // resolve damage to each
    const responseObj = fightResolve(
      phaseChoices,
      charData,
      fighter,
      fightArousalState,
      fightOrgasmState
    );
    setRoundResult(responseObj);
    const newArousalData = [
      fightArousalState[0] + responseObj.player,
      fightArousalState[1] + responseObj.fighter
    ];
    setFightArousalState(newArousalData);
    if (
      (responseObj.playerOrgasm && fightArousalState[0] === 1) ||
      (responseObj.fighterOrgasm && fightArousalState[1] === 1)
    ) {
      console.log("XXX round ends");
    } else {
      setOrgasmState(responseObj.playerOrgasm, responseObj.fighterOrgasm);
    }
    addToFightLog(responseObj.result);
  };
  if (isRoundEnd && !roundResult) {
    BuildResolveStep();
  }
  if (fightPhase === 0 && roundResult) {
    setRoundResult(false);
  }

  return (
    <ActionWrap>
      <MdTitle>{PhaseData[fightPhaseType].name}</MdTitle>
      {isRoundEnd && <SmText>{roundResult.result}</SmText>}
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
  const CompArray = [];

  for (var i = 0, l = fightLog.length; i < l; i++) {
    fightLog[l - i - 1].length > 1 &&
      CompArray.push(
        <LogText>
          {"> "}
          <TextSpanLog>{fightLog[l - i - 1]}</TextSpanLog>
        </LogText>
      );
  }
  return <FightLogWrap>{CompArray}</FightLogWrap>;
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
  margin-${({ marginRight }) => (marginRight ? `right` : `left`)}: 25%;
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
const FlexBetween = styled(FlexWrap)`
  justify-content: space-between;
  align-items: center;
  margin-right: 16px;
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
const OrgasmIcon = styled.img`
  width: 30px;
  height: 30px;
  margin: 4px;
`;

export default FightRoom;
