import React, { useState } from "react";
import styled from "styled-components";
import { useGlobalDataStore } from "../../state";
import { useFightDataStore } from "../../state/fight";
import { observer } from "mobx-react-lite";
import RoomHeader from "../roomHeader";
import Button from "../button";
import FuckRoomText from "../../eventText/fuckRoomText";

const FuckTypes = {
  dom: "dominate",
  please: "pleasure",
};

const FuckRoom = observer(() => {
  const [fuckType, setFuckType] = useState(false);
  const [fuckChoice, setFuckChoice] = useState(false);
  const [fuckEndChoice, setFuckEndChoice] = useState(false);
  const playerCharStore = useGlobalDataStore();
  const { hasCock, setRoomSave } = playerCharStore;
  const { fuckRoomCombatant, onBackRoom } = useFightDataStore();

  const LeaveRoom = () => {
    setRoomSave(onBackRoom);
  };
  const getRndJesus = (textOptArr) =>
    Math.floor(Math.random() * textOptArr.length);
  const SetFuckChoiceText = (textOptArr) => {
    const RNJesus = getRndJesus(textOptArr);
    setFuckChoice(textOptArr[RNJesus](playerCharStore, fuckRoomCombatant));
  };
  const SetFuckEndChoiceText = (textOptArr) => {
    const RNJesus = getRndJesus(textOptArr);
    setFuckEndChoice(textOptArr[RNJesus](playerCharStore, fuckRoomCombatant));
  };

  return (
    <UWrap>
      <RoomHeader title="The Loser Fucking Rooom">
        <Button onClick={LeaveRoom}>Leave</Button>
      </RoomHeader>
      <RoomWrap>
        <ImageWrap>
          <Image src={fuckRoomCombatant.img} alt="loser" />
          <Image src={fuckRoomCombatant.opLoseImg} alt="loser" />
          -- Win Image --
          <Image src={fuckRoomCombatant.opWinImg} alt="loser" />
        </ImageWrap>
        <TextWrap>
          {!fuckType && (
            <>
              <UpperCase onClick={() => setFuckType(FuckTypes.dom)}>
                {FuckTypes.dom}
              </UpperCase>
              <UpperCase onClick={() => setFuckType(FuckTypes.please)}>
                {FuckTypes.please}
              </UpperCase>
            </>
          )}
          {fuckType && !fuckChoice && (
            <>
              <FlexWrap>
                {" "}
                {FuckRoomText[fuckType].map((fuckGroupings) => {
                  const Show = fuckGroupings.check(playerCharStore);
                  if (Show) {
                    return fuckGroupings.options.map((option) => (
                      <UpperCase
                        onClick={() => SetFuckChoiceText(option.textOptions)}
                      >
                        {option.displayText}
                      </UpperCase>
                    ));
                  }
                  return null;
                })}
              </FlexWrap>
            </>
          )}
          {fuckChoice && (
            <>
              <div>{fuckChoice}</div>
              {hasCock &&
                !fuckEndChoice &&
                FuckRoomText.finishCock[fuckType].map((option) => (
                  <UpperCase
                    onClick={() => SetFuckEndChoiceText(option.textOptions)}
                  >
                    {option.displayText}
                  </UpperCase>
                ))}
            </>
          )}
          {fuckEndChoice && (
            <div>
              {hasCock && <Seperator>----</Seperator>}
              {fuckEndChoice}
            </div>
          )}
        </TextWrap>
      </RoomWrap>

      <Button onClick={LeaveRoom}>Leave</Button>
    </UWrap>
  );
});

const UWrap = styled.div`
  margin: 32px 0;
  overflow-y: auto;
`;
const RoomWrap = styled.div`
  display: flex;
`;
const ImageWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 16px 16px 0;
  padding-right: 12px;
  border-right: 1px solid grey;
  text-align: center;
  min-width: 360px;
  max-height: 80vh;
  overflow-y: auto;
`;
const TextWrap = styled.div`
  margin: 12px;
  white-space: pre-line;
  max-height: 80vh;
  overflow-y: auto;
`;
const Image = styled.img`
  max-width: 320px;
  margin-bottom: 24px;
`;
const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const UpperCase = styled(Button)`
  margin: 8px;

  &:first-letter {
    text-transform: uppercase;
  }
`;
const Seperator = styled.div`
  margin: 16px 0;
  text-align: center;
`;

export default FuckRoom;
