import React, { useState } from "react";
// import styled from "styled-components";
import { useGlobalDataStore } from "../../state";
import ImportCharacter from "../importChar";
import Modal from "../modal";

import Leagues from "../leagues";

const Main = () => {
  const { startNewGame, createSaveFile } = useGlobalDataStore();
  const [showSettings, setShowSettings] = useState(false);
  const openSettings = () => setShowSettings(true);
  const hideSettings = () => setShowSettings(false);

  return (
    <div>
      Main Rooms
      {showSettings && (
        <Modal title="Settings" onHide={hideSettings}>
          <button onClick={startNewGame}>New Game</button>
          <button onClick={createSaveFile}>Export Character</button>

          <ImportCharacter />
        </Modal>
      )}
      <button onClick={openSettings}>Settings</button>
      <Leagues />
    </div>
  );
};

export default Main;
