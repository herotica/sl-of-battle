import React, { useState } from "react";
import styled from "styled-components";
import { useGlobalDataStore } from "../../state";
import ImportCharacter from "../importChar";
import Modal from "../modal";
import { LgTitle } from "../text";
import Button from "../button";

import RoomMenu from "../roomMenu";

const Main = () => {
  const { startNewGame, createSaveFile } = useGlobalDataStore();
  const [showSettings, setShowSettings] = useState(false);
  const openSettings = () => setShowSettings(true);
  const hideSettings = () => setShowSettings(false);

  return (
    <div>
      <FlexSeperateWrap>
        <LgTitle>Lobby</LgTitle>
        {showSettings && (
          <Modal title="Settings" onHide={hideSettings}>
            <FlexSeperateWrap>
              <Button onClick={startNewGame}>New Game</Button>
              <Button onClick={createSaveFile}>Export Character</Button>
            </FlexSeperateWrap>

            <ImportCharacter />
          </Modal>
        )}
        <Button onClick={openSettings}>Settings</Button>
      </FlexSeperateWrap>

      <RoomMenu />
    </div>
  );
};

const FlexSeperateWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default Main;
