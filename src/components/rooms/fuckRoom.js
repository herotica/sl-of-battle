import React, { useState } from "react";
import { useGlobalDataStore } from "../../state";
import { useFightDataStore } from "../../state/fight";
import { observer } from "mobx-react-lite";
import RoomHeader from "../roomHeader";
import Button from "../button";
import FuckRoomText from "../../eventText/fuckRoomText";
import {
  UWrap,
  RoomWrap,
  ImageWrap,
  Image,
  TextWrap,
  InnerWrap,
  UpperCase,
  FlexWrap,
  Seperator,
} from "./styled";

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
          <InnerWrap>
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
          </InnerWrap>
        </TextWrap>
      </RoomWrap>

      <Button onClick={LeaveRoom}>Leave</Button>
    </UWrap>
  );
});

export default FuckRoom;
