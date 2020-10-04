import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Palette from "../../constants/palette";
import { useGlobalDataStore } from "../../state";
import { observer } from "mobx-react-lite";
import Sidebar from "../sidebar";
import { GetFileAsync } from "../../utils";

// Rooms
import { Rooms } from "../../constants";
import Setup from "../setup";
import MainRoom from "../mainRoom";
import Training from "../rooms/training";
import FightRoom from "../fightRoom";
import Underground from "../rooms/underground";
import LeagueRoom from "../rooms/league";
import FuckRoom from "../rooms/fuckRoom";
import LeaguePointsShop from "../rooms/leaguePointsShop";
import LoserSlaveRoom from "../rooms/loserSlaveRoom";
import SlaveEventsRoom from "../rooms/slaveEventsRoom";

const Layout = () => {
  const [showSidebar, setSidebar] = useState(false);
  const switchSidebarSize = () => setSidebar(!showSidebar);

  return (
    <Wrapper>
      <Sidebar isCollapsed={!showSidebar} onSwitch={switchSidebarSize} />
      <Main>
        <RoomManager />
      </Main>
    </Wrapper>
  );
};

const RoomManager = observer(() => {
  const { currentRoom, setRoom, importSaveFile } = useGlobalDataStore();

  useEffect(() => {
    if (window.__TAURI__) {
      GetFileAsync().then((result) => {
        if (result.name) {
          importSaveFile(result);
        }
      });
    }
  }, [importSaveFile]);

  switch (currentRoom) {
    case Rooms.setup:
      return <Setup />;
    case Rooms.main:
      return <MainRoom />;
    case Rooms.underground:
      return <Underground />;
    case Rooms.fight:
      return <FightRoom />;
    case Rooms.training:
      return <Training />;
    case Rooms.league:
      return <LeagueRoom />;
    case Rooms.fuckRoom:
      return <FuckRoom />;
    case Rooms.leaguePShop:
      return <LeaguePointsShop />;
    case Rooms.loserSlaveRoom:
      return <LoserSlaveRoom />;
    case Rooms.slaveEventRoom:
      return <SlaveEventsRoom />;
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
const Main = styled.div`
  background: ${Palette.light};
  flex-grow: 1;
  overflow-y: auto;
  padding: 1rem calc(2rem + 0.4vw);
`;

export default Layout;
