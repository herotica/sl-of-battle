import React from "react";
import styled from "styled-components";
import { useGlobalDataStore } from "../../state";

const Main = () => {
  const { startNewGame } = useGlobalDataStore();

  return (
    <div>
      Main Rooms
      <button onClick={startNewGame}>New Game</button>
    </div>
  );
};

export default Main;
