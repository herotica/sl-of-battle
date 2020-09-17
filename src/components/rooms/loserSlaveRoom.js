import React, { useState } from "react";
import styled from "styled-components";
import Palette from "../../constants/palette";

import { leagueGirlsAccessor, leagueSeriesEvents } from "../../combatants";
import RoomHeader from "../roomHeader";
import GoBack from "../back";
import { useGlobalDataStore } from "../../state";
import { useFightDataStore } from "../../state/fight";
import { observer } from "mobx-react-lite";
import { MdTitleMiddle, SmText } from "../text";
import { Rooms } from "../../constants";
import BeerIcon from "../../assets/logo/beer.png";

const LeaguePointsShop = observer(() => {
  const [openSeries, setOpenSeries] = useState(false);
  const { losersBought, setRoom, isWoman, hasCock } = useGlobalDataStore();
  const { setFuckRoomCombatant, setSlaveEvent } = useFightDataStore();

  return (
    <>
      <RoomHeader title="Loser Slave Pen">
        <GoBack />
      </RoomHeader>
      <MdTitleMiddle>Enjoy the fruits of your success!</MdTitleMiddle>
      <SmText>
        Congrats on getting so far, here you can find all the girls you've
        collected, if you've enjoyed the game please consider buying me a beer,
        though I might spend it on porn..
      </SmText>
      <BtmLink
        href="https://paypal.me/herotica"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SmIcon src={BeerIcon} />
        <span>Like it? Toss a coin to the devs</span>
      </BtmLink>
      <BtmLink
        href="https://github.com/herotica/sl-of-battle/blob/master/docs/requests.md"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>Request new characters</span>
      </BtmLink>
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
                    slave && (
                      <CombatantButton
                        key={slave.name}
                        onClick={onSelectSlaveToFuck}
                      >
                        <OverlayText>
                          <SmText>Use {slave.name}</SmText>
                        </OverlayText>
                        <LoserIcon src={slave.icon} alt={slave.name} />
                      </CombatantButton>
                    )
                  );
                })}
                <EventsList
                  seriesKey={seriesKey}
                  isWoman={isWoman}
                  hasCock={hasCock}
                  charIds={losersBought[seriesKey]}
                  setSlaveEvent={setSlaveEvent}
                  setRoom={setRoom}
                />
              </FlexWrap>
            )}
          </div>
        );
      })}
    </>
  );
});

const EventsList = ({
  seriesKey,
  setSlaveEvent,
  setRoom,
  isWoman,
  hasCock,
  charIds,
}) => {
  const events = leagueSeriesEvents(seriesKey) || false;

  return (
    events &&
    events.map((e) => {
      let show = true;
      if ((e.reqMale && !hasCock) || (e.reqFemale && !isWoman)) {
        show = false;
      }
      let isLocked = false;
      let reqUnlocks = "";
      e.requires.forEach((reqSlave) => {
        if (!charIds.includes(reqSlave)) {
          isLocked = true;
          reqUnlocks += reqSlave + ", ";
        }
      });
      const onSelectEvent = () => {
        setSlaveEvent(e);
        setRoom(Rooms.slaveEventRoom);
      };

      return (
        show && (
          <CombatantButton
            key={e.title}
            onClick={onSelectEvent}
            isLocked={isLocked}
            isEvent
          >
            <OverlayText>
              <SmText>{isLocked ? "Req: " + reqUnlocks : e.title}</SmText>
            </OverlayText>
            <LoserIcon src={e.icon} alt={e.title} />
          </CombatantButton>
        )
      );
    })
  );
};

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
const CombatantButton = styled.div`
  position: relative;
  border: 1px solid ${(p) => (p.isEvent ? Palette.darker : "darkgrey")};
  border-radius: 5px;
  padding: 4px;
  cursor: ${(p) => (p.isLocked ? "not-allowed" : "pointer")};
  margin: 0 4px;
  width: 140px;
  height: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  transition: background 0.3s ease-in-out;
  ${(p) => p.isLocked && "opacity: 0.4"};

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
const SmIcon = styled.img`
  height: 38px;
  display: inline;
`;
const BtmLink = styled.a`
  margin-bottom: 4px;
  padding: 0 8px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #3e3333;

  &:hover {
    color: black;
  }
`;

export default LeaguePointsShop;
