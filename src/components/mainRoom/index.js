import React, { useState } from "react";
import styled from "styled-components";
import { useGlobalDataStore } from "../../state";
import ImportCharacter from "../importChar";
import Modal from "../modal";
import { LgTitle, SmlrText } from "../text";
import Button from "../button";

import RoomMenu from "../roomMenu";
import { observer } from "mobx-react-lite";

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
              <Button onClick={startNewGame}>New Character</Button>
              <Button onClick={createSaveFile}>Export Character</Button>
            </FlexSeperateWrap>

            <ImportCharacter />
          </Modal>
        )}
        <Tutorial />
        <Button onClick={openSettings}>Settings</Button>
      </FlexSeperateWrap>

      <RoomMenu />
    </div>
  );
};

const Tutorial = observer(() => {
  const { tutorialClosed, CloseTutorial } = useGlobalDataStore();

  return (
    !tutorialClosed && (
      <Modal title="Tutorial" onHide={CloseTutorial}>
        <Tutorialtext>
          {"Ẁelcome to Sluts of battle, your goal is to ascend through the " +
            "League defeated an array of beautiful opponents with your sexual prowess, " +
            "and enjoying yourself as you do.\nWill you be able to fuck your way to the " +
            "top and claim the title of Ultimate Slut?\n\nRemember to train at the gym, " +
            "and if your feeling lucky, try fighting in the underground league to gain " +
            "some extra cash!"}
        </Tutorialtext>
        <Button onClick={CloseTutorial}>Ok</Button>
      </Modal>
    )
  );
});

const FlexSeperateWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Tutorialtext = styled(SmlrText)`
  white-space: pre-line;
`;

export default Main;
