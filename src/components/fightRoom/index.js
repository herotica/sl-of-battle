import React, { useState } from "react";
import { useGlobalDataStore } from "../../state";
import { useFightDataStore } from "../../state/fight";
import { observer } from "mobx-react-lite";
import OrgasmImg from "../../assets/logo/orgasm.png";
import OrgasmLossImg from "../../assets/logo/orgasmLoss.png";

import { SmText, MdTitle, SmlrText, LogText, TextSpanLog } from "../text";
import {
  Strings,
  RoomImages,
  FightPhaseTypes,
  FightPhaseData,
  fightResolve,
} from "./data";
import {
  FightRoomWrap,
  ActBtn,
  FightEnd,
  MainWrap,
  FighterImg,
  FighterData,
  DataBox,
  VSBox,
  FlexWrap,
  FlexBetween,
  ActionWrap,
  FightLogWrap,
  OrgasmIcon,
} from "./styled";

const FightRoom = () => {
  const { onFightWin, onFightLose } = useFightDataStore();
  console.log("process.env.NODE_ENV", process.env.NODE_ENV);

  return (
    <FightRoomWrap title={Strings.title} subTitle={Strings.explain}>
      <FightersInfo />
      <FlexWrap>
        <FighterTextLog />
        <FighterActions />
      </FlexWrap>
      {process.env.NODE_ENV === "development" && (
        <>
          <button onClick={onFightWin}>Dev Win</button>
          <button onClick={onFightLose}>Dev Lose</button>{" "}
        </>
      )}
    </FightRoomWrap>
  );
};

const FightersInfo = observer(() => {
  const { name, img, race, bodyShape } = useGlobalDataStore();
  const {
    fightCombantantData,
    fightRoom,
    fightArousalState,
    fightOrgasmState,
    fightOrgasmStateOriginal,
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
    <MainWrap roomImg={RoomImages[fightRoom]}>
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
          <SmText>{fightCombantantData.name}</SmText>
          <SmlrText>{fightCombantantData.description}</SmlrText>
          <FlexBetween>
            <div>{FighterOrgasmIcons}</div>
            <SmlrText>Arousal::{fightArousalState[1]}</SmlrText>
          </FlexBetween>
        </DataBox>
      </FighterData>
      <FighterImg src={fightCombantantData.img} alt="opponent" />
    </MainWrap>
  );
});

const FighterActions = observer(() => {
  const [fightPhase, setFightPhase] = useState(0);
  const [fightPhaseType, setFightPhaseType] = useState(FightPhaseTypes[0][0]);
  const [phaseChoices, setPhaseChoices] = useState([]);
  const [roundResult, setRoundResult] = useState(false);
  const PhaseData = FightPhaseData[fightPhase];

  const charData = useGlobalDataStore();
  const {
    fightCombantantData,
    addToFightLog,
    fightArousalState,
    setFightArousalState,
    fightOrgasmState,
    setOrgasmState,
    fightRoundEnd,
    setRoundEnd,
    fightWinner,
    setRoundWinner,
    onFightWin,
    onFightLose,
    fightMatchWinnings,
  } = useFightDataStore();
  const fighter = fightCombantantData;

  const shouldHideOpt = (phaseOpt) =>
    (phaseOpt.reqCock && !charData.hasCock) ||
    (phaseOpt.reqFemale && !charData.isWoman) ||
    (phaseOpt.opHasCock && !fighter.hasCock);

  const OnActionRan = (btnAction, optionIndex) => {
    let actionResponse = { isSuccess: true, log: "" };
    if (btnAction) {
      actionResponse = btnAction(charData, fighter, phaseChoices);
      addToFightLog(actionResponse.log);
    }

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
    setRoundResult(responseObj.result);
    const newArousalData = [
      fightArousalState[0] + responseObj.player,
      fightArousalState[1] + responseObj.fighter,
    ];
    setFightArousalState(newArousalData);

    // check for winner
    if (responseObj.playerOrgasm && fightOrgasmState[0] === 1) {
      if (responseObj.fighterOrgasm && fightOrgasmState[1] === 1) {
        setRoundWinner("draw");
      } else {
        setRoundWinner("lose");
      }
    } else if (responseObj.fighterOrgasm && fightOrgasmState[1] === 1) {
      setRoundWinner("win");
    }

    setOrgasmState(responseObj.playerOrgasm, responseObj.fighterOrgasm);
    const SkillGained = responseObj.skillGain || "";
    addToFightLog(responseObj.result + ". " + SkillGained);
  };
  if (isRoundEnd && !fightRoundEnd) {
    setRoundEnd(true);
    BuildResolveStep();
  }
  if (fightPhase === 0 && fightRoundEnd) {
    setRoundEnd(false);
  }

  return (
    <ActionWrap>
      <MdTitle>{PhaseData[fightPhaseType].name}</MdTitle>
      {isRoundEnd && <SmText>{roundResult}</SmText>}
      {!fightWinner &&
        PhaseData[fightPhaseType].options.map((phaseOpt, index) => {
          const onPress = () => OnActionRan(phaseOpt.onAction, index);
          const isHidden = shouldHideOpt(phaseOpt);

          return !isHidden && <ActBtn onPress={onPress} {...phaseOpt} />;
        })}
      {fightWinner && (
        <FightEnd
          winType={fightWinner}
          onWin={onFightWin}
          onLose={onFightLose}
          winnings={fightMatchWinnings}
        />
      )}
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
          <TextSpanLog bold={i === 0}>{fightLog[l - i - 1]}</TextSpanLog>
        </LogText>
      );
  }
  return <FightLogWrap>{CompArray}</FightLogWrap>;
});

export default FightRoom;
