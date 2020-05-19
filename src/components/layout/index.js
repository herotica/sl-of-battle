import React, { useState } from "react";
import styled from "styled-components";
import { useGlobalDataStore } from "../../state";
import { observer } from "mobx-react-lite";
import { Rooms } from "../../constants";

import Character, { SideBarMain } from "../character";
import Setup from "../setup";
import MainRoom from "../mainRoom";

const Layout = () => {
  const [showSidebar, setSidebar] = useState(false);
  const hideSidebar = () => setSidebar(false);
  const expandSidebar = () => setSidebar(true);
  return (
    <Wrapper>
      {showSidebar ? (
        <WideSidebar onClick={hideSidebar}>
          <SideBarMain />
        </WideSidebar>
      ) : (
        <SmSidebar onClick={expandSidebar}>
          Small
          <Character />
        </SmSidebar>
      )}
      <Main>
        <RoomManager />
      </Main>
    </Wrapper>
  );
};

const RoomManager = observer(() => {
  const { currentRoom, setRoom } = useGlobalDataStore();

  switch (currentRoom) {
    case Rooms.setup:
      return <Setup />;
    case Rooms.main:
      return <MainRoom />;
    default:
      return (
        <div>
          Error with room
          <button onClick={() => setRoom(Rooms.main)}>Reset Room</button>
        </div>
      );
  }
});

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: black;
  display: flex;
`;
const WideSidebar = styled.div`
  flex: 0 0 300px;
  background: darkgrey;
  overflow-y: auto;
`;
const SmSidebar = styled.div`
  width: 80px;
  background: darkblue;
`;
const Main = styled.div`
  background: lightgrey;
  flex-grow: 1;
  overflow-y: auto;
`;

export default Layout;
