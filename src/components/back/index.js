import React from "react";
import styled from "styled-components";
import { useGlobalDataStore } from "../../state";
import { Rooms } from "../../constants";

const BackToMainMenu = () => {
  const { setRoomSave } = useGlobalDataStore();
  const GoBack = () => setRoomSave(Rooms.main);

  return <BackBtn onClick={GoBack}>{"<- Back"}</BackBtn>;
};

const BackBtn = styled.button`
  border: 2px solid grey;
  background: rgba(124, 124, 124, 0.6);
  color: white;
  font-size: 20px;
  padding: 4px 16px;
  border-radius: 8px;
  cursor: pointer;
  height: 44px;
`;

export default BackToMainMenu;
