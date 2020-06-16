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

  return (
    <UWrap>
      <RoomHeader title="The Loser Fucking Rooom">
        <Button onClick={LeaveRoom}>Leave</Button>
      </RoomHeader>
      {!fuckType && (
        <>
          <div onClick={() => setFuckType(FuckTypes.dom)}>{FuckTypes.dom}</div>
          <div onClick={() => setFuckType(FuckTypes.please)}>
            {FuckTypes.please}
          </div>
        </>
      )}
      {fuckType && !fuckChoice && (
        <>
          <FlexWrap>
            {" "}
            {hasCock &&
              FuckRoomText[fuckType].hasCock.map(option => (
                <div>{option.displayText}</div>
              ))}
            {hasCock &&
              fuckType === FuckTypes.dom &&
              FuckRoomText[fuckType].cockBdsm.map(option => (
                <div>{option.displayText}</div>
              ))}
            {isWoman &&
              FuckRoomText[fuckType].isWoman.map(option => (
                <div>{option.displayText}</div>
              ))}
          </FlexWrap>
        </>
      )}
    </UWrap>
  );
});

const UWrap = styled.div`
  margin: 32px;
  overflow-y: auto;
`;

const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default FuckRoom;
