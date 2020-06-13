import React, { useState } from "react";
import styled from "styled-components";
import { useGlobalDataStore } from "../../state";
import { observer } from "mobx-react-lite";
import GoBack from "../back";
import { LgTitle, SmText, SmlrText } from "../text";

const LeagueRoom = observer(() => {
  const { currentLeague } = useGlobalDataStore();
  console.log('c', currentLeague);
  return (
    <UWrap>
      <FlexWrap>
        <LgTitle>{currentLeague.name}</LgTitle>
        <GoBack />
      </FlexWrap>
    </UWrap>
  );
});

const UWrap = styled.div`
  margin: 32px;
  overflow-y: auto;
`;
const FlexWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;

export default LeagueRoom;
