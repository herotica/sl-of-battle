import React from "react";
import { useGlobalDataStore } from "../../state";
import { useFightDataStore } from "../../state/fight";
import { observer } from "mobx-react-lite";
import RoomHeader from "../roomHeader";
import Button from "../button";
import {
  UWrap,
  RoomWrap,
  ImageWrap,
  Image,
  TextWrap,
  InnerWrap,
  UpperCase,
} from "./styled";

const EventRoom = observer(() => {
  const playerCharStore = useGlobalDataStore();
  const { setRoomSave } = playerCharStore;
  const { event, onBackRoom } = useFightDataStore();
  console.log("event", event);

  const LeaveRoom = () => {
    setRoomSave(onBackRoom);
  };

  return (
    <UWrap>
      <RoomHeader title={event.title}>
        <Button onClick={LeaveRoom}>Leave</Button>
      </RoomHeader>
      <RoomWrap>
        <ImageWrap>
          {event.imgs.map((img) => (
            <Image src={img} alt="pic" />
          ))}
        </ImageWrap>
        <TextWrap>
          <InnerWrap>{event.story(playerCharStore)}</InnerWrap>
        </TextWrap>
      </RoomWrap>

      <Button onClick={LeaveRoom}>Leave</Button>
    </UWrap>
  );
});

export default EventRoom;
