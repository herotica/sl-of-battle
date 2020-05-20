import React from "react";
// import styled from "styled-components";
import { useGlobalDataStore } from "../../state";
import ImportCharacter from "../importChar";

import Leagues from "../leagues";

const Main = () => {
  const { startNewGame, createSaveFile } = useGlobalDataStore();

  return (
    <div>
      Main Rooms
      <button onClick={startNewGame}>New Game</button>
      <button onClick={createSaveFile}>Export Character</button>
      <ImportCharacter />
      <Leagues />
    </div>
  );
};

export default Main;
