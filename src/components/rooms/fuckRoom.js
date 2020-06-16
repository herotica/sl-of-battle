import React, { useState } from "react";
import styled from "styled-components";
import { useGlobalDataStore } from "../../state";
import { observer } from "mobx-react-lite";
import RoomHeader from "../roomHeader";
import Button from "../button";
import { Rooms } from "../../constants";
import FuckRoomText from "../../eventText/fuckRoomText";

const FuckTypes = {
  dom: "dominate",
  please: "pleasure"
};

const FuckRoom = observer(() => {
  const [fuckType, setFuckType] = useState(false);
  const [fuckChoice, setFuckChoice] = useState(false);
  const [fuckEndChoice, setFuckEndChoice] = useState(false);
  const {
    fuckRoomCombatant,
    name,
    hasCock,
    isWoman,
    setRoomSave
  } = useGlobalDataStore();

  const LeaveRoom = () => {
    setRoomSave(Rooms.league);
  };
  const getRndJesus = textOptArr =>
    Math.floor(Math.random() * textOptArr.length);
  const SetFuckChoiceText = textOptArr => {
    const RNJesus = getRndJesus(textOptArr);
    setFuckChoice(textOptArr[RNJesus]);
  };
  const SetFuckEndChoiceText = textOptArr => {
    const RNJesus = getRndJesus(textOptArr);
    setFuckEndChoice(textOptArr[RNJesus]);
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
                {hasCock &&
                  FuckRoomText[fuckType].hasCock.map(option => (
                    <UpperCase
                      onClick={() => SetFuckChoiceText(option.textOptions)}
                    >
                      {option.displayText}
                    </UpperCase>
                  ))}
                {hasCock &&
                  fuckType === FuckTypes.dom &&
                  FuckRoomText[fuckType].cockBdsm.map(option => (
                    <UpperCase
                      onClick={() => SetFuckChoiceText(option.textOptions)}
                    >
                      {option.displayText}
                    </UpperCase>
                  ))}
                {isWoman &&
                  FuckRoomText[fuckType].isWoman.map(option => (
                    <UpperCase
                      onClick={() => SetFuckChoiceText(option.textOptions)}
                    >
                      {option.displayText}
                    </UpperCase>
                  ))}
              </FlexWrap>
            </>
          )}
          {fuckChoice && (
            <>
              <div>{fuckChoice}</div>
              {hasCock &&
                !fuckEndChoice &&
                FuckRoomText.finishCock.map(option => (
                  <UpperCase
                    onClick={() => SetFuckEndChoiceText(option.textOptions)}
                  >
                    {option.displayText}
                  </UpperCase>
                ))}
            </>
          )}
          {fuckEndChoice && <div>{fuckEndChoice}</div>}
        </TextWrap>
      </RoomWrap>

      <Button onClick={LeaveRoom}>Leave</Button>
    </UWrap>
  );
});

const UWrap = styled.div`
  margin: 32px;
  overflow-y: auto;
`;
const RoomWrap = styled.div`
  display: flex;
`;
const ImageWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 12px;
  padding-right: 12px;
  border-right: 1px solid grey;
  text-align: center;
`;
const TextWrap = styled.div`
  margin: 12px;
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

export default FuckRoom;