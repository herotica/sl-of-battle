import React, { useState } from "react";
import styled from "styled-components";

import { leagueGirlsAccessor } from "../../combatants";
import RoomHeader from "../roomHeader";
import GoBack from "../back";
import { useGlobalDataStore } from "../../state";
import { useFightDataStore } from "../../state/fight";
import { observer } from "mobx-react-lite";
import { MdTitleMiddle, SmText } from "../text";
import { Rooms } from "../../constants";

const LeaguePointsShop = observer(() => {
  const [openSeries, setOpenSeries] = useState(false);
  const { losersBought, setRoom } = useGlobalDataStore();
  const { setFuckRoomCombatant } = useFightDataStore();

  return (
    <>
      <RoomHeader title="Loser Slave Pen">
        <GoBack />
      </RoomHeader>
      <MdTitleMiddle>Enjoy the fruits of your success!</MdTitleMiddle>
      <MdTitleMiddleMarginTop>
        You have Series, {Object.keys(losersBought)}
      </MdTitleMiddleMarginTop>
      {Object.keys(losersBought).map((seriesKey, index) => {
        const onClickSeriesBox = () => {
          setOpenSeries(index);
        };
        return (
          <div key={seriesKey}>
            <SeriesBox onClick={onClickSeriesBox}>V - {seriesKey}</SeriesBox>
            {openSeries === index && (
              <FlexWrap>
                {losersBought[seriesKey].map((char) => {
                  const slave = leagueGirlsAccessor(seriesKey, char);
                  const onSelectSlaveToFuck = () => {
                    setFuckRoomCombatant(slave, Rooms.loserSlaveRoom);
                    setRoom(Rooms.fuckRoom);
                  };

                  return (
                    <CombatantButton
                      key={slave.name}
                      onClick={onSelectSlaveToFuck}
                    >
                      <OverlayText>
                        <SmText>Use {slave.name}</SmText>
                      </OverlayText>
                      <LoserIcon src={slave.icon} alt={slave.name} />
                    </CombatantButton>
                  );
                })}
              </FlexWrap>
            )}
          </div>
        );
      })}
    </>
  );
});

const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 16px;
`;
const SeriesBox = styled.div`
  padding: 16px;
  background: #b95959;
  border: 2px solid darkred;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  margin: 16px 20px;
  cursor: pointer;
  transition: background 0.2s ease-in-out;

  &:hover {
    background: #da8f8f;
  }
`;
const MdTitleMiddleMarginTop = styled(MdTitleMiddle)`
  margin-top: 30px;
`;
const CombatantButton = styled.div`
  position: relative;
  border: 1px solid ${(p) => p.borderCol || "darkgrey"};
  border-radius: 5px;
  padding: 4px;
  cursor: ${(p) => (p.isbeaten ? "not-allowed" : "pointer")};
  margin: 0 4px;
  width: 140px;
  height: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  transition: background 0.3s ease-in-out;
  ${(p) => p.isbeaten && "opacity: 0.4"};

  &:hover {
    background: rgba(80, 80, 80, 0.2);
  }
`;
const LoserIcon = styled.img`
  object-fit: cover;
  max-width: 120px;
  height: auto;
  opacity: 0.3;
`;
const OverlayText = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 10;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export default LeaguePointsShop;
