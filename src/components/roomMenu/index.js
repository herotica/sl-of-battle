import React, { useState } from "react";
import styled from "styled-components";
import Button from "../button";
import { useGlobalDataStore } from "../../state";
import { Rooms } from "../../constants";
import { MdTitleMiddle } from "../text";

import LeaguesData from "../../leagueData";

export const RoomsData = [
  {
    name: "The Training Centre",
    description: "Build up your skills at the training centre.",
    colors: {
      bgA: "grey",
      bgB: "darkgrey",
      border: "black",
      borderHover: "#802b43",
    },
    room: Rooms.training,
  },
  {
    name: "Underground Sluts Arena",
    description:
      "Sluts battle for cash and training, no refunds, and no fun times with the losers neither",
    colors: {
      bgA: "grey",
      bgB: "darkgrey",
      border: "black",
      borderHover: "#802b43",
    },
    room: Rooms.underground,
  },
  {
    name: "League Point Shop",
    description: "Purchase permanent bonus with League Points",
    colors: {
      bgA: "grey",
      bgB: "darkgrey",
      border: "black",
      borderHover: "#802b43",
    },
    room: Rooms.leaguePShop,
  },
];

const loserSlavePen = {
  name: "Loser Slave Pen",
  description: "Check in on your owned sex slaves",
  colors: {
    bgA: "grey",
    bgB: "darkgrey",
    border: "black",
    borderHover: "#802b43",
  },
  room: Rooms.loserSlaveRoom,
};

const LeagueList = () => {
  const [collapseComplete, setCollapseComplete] = useState(false);
  const switchCollapseComplete = () => {
    setCollapseComplete(!collapseComplete);
  };
  const { boughtItems, leagueProgress } = useGlobalDataStore();

  return (
    <ListWrapper>
      {RoomsData.map((roomData) => (
        <RoomsWrapper {...roomData} key={roomData.name} />
      ))}
      {boughtItems.includes("licencePro") && (
        <RoomsWrapper {...loserSlavePen} key={"loserSlave"} />
      )}
      <TitleFlexWrap>
        <MdTitleMiddle>Leagues</MdTitleMiddle>
        <Button onClick={switchCollapseComplete}>
          {collapseComplete ? "Reveal" : "Collapse"} Complete
        </Button>
      </TitleFlexWrap>
      {LeaguesData.map((Data) => {
        const isComplete =
          (leagueProgress[Data.league.id] &&
            leagueProgress[Data.league.id].isComplete) ||
          false;
        return (
          <LeagueWrapper
            {...Data}
            key={Data.league.id}
            isComplete={isComplete}
            collapseComplete={collapseComplete}
          />
        );
      })}
    </ListWrapper>
  );
};

const LeagueWrapper = ({ room, league, isComplete, collapseComplete }) => {
  const {
    name,
    description,
    renownRequired,
    icon,
    colors,
    ranks,
    entryCost,
  } = league;
  const {
    setRoomSave,
    setLeague,
    RenownLv,
    cash,
    changeCash,
  } = useGlobalDataStore();

  const canAfford = entryCost <= cash;
  const onPress = () => {
    if (canAfford) {
      setLeague(league);
      setRoomSave(room);
      changeCash(-1 * entryCost);
    } else {
      window.alert("You can afford this.");
    }
  };
  const isLocked = RenownLv < renownRequired;
  const hide = collapseComplete && isComplete;

  return (
    <ListBox
      colors={colors}
      onClick={isLocked || onPress}
      padLess={hide}
      locked={isLocked}
    >
      <FlexWrap marginHide={hide}>
        <TitleWrap>
          <FlexWrap>
            <Title>{name}</Title>
            <Text>
              {isComplete ? "League Complete" : "Renown Lv ::" + renownRequired}{" "}
              | Entry cost £{entryCost}
            </Text>
          </FlexWrap>
          {!hide && <Text>{description}</Text>}
        </TitleWrap>
        {icon && (
          <Logo
            src={icon}
            alt="logo"
            isComplete={isComplete}
            colors={colors}
            hide={hide}
          />
        )}
      </FlexWrap>
      {!hide && (
        <>
          <Text>Rookies:</Text>
          <RookieWrap>
            {ranks[0].combatants.map((rookie) => (
              <RookieIcon
                src={rookie.icon}
                alt={rookie.name}
                key={rookie.name}
              />
            ))}
          </RookieWrap>
        </>
      )}
    </ListBox>
  );
};
const RoomsWrapper = (props) => {
  const { name, description, room, colors } = props;
  const { setRoomSave } = useGlobalDataStore();
  const onPress = () => {
    setRoomSave(room);
  };

  return (
    <ListBox colors={colors} onClick={onPress}>
      <FlexWrap>
        <TextBoxLeft>{name}</TextBoxLeft>

        <TextBoxRight>{description}</TextBoxRight>
      </FlexWrap>
    </ListBox>
  );
};

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 12px;
`;
const ListBox = styled.div`
  padding: ${(p) => (p.padLess ? "8px 16px" : "16px")};
  background-size: 1px 200px;
  background: linear-gradient(
    10deg,
    ${({ colors }) => `${colors.bgA} ,${colors.bgB} ,${colors.bgA} `}
  );
  border: 3px solid ${({ colors }) => colors.border};
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  margin: 16px 20px;
  cursor: pointer;
  background-size: 150% 150%;
  transition: background 0.2s ease-in-out, border-color 0.2s ease-in-out;
  ${(p) => p.locked && "opacity: 0.4;"}

  &:hover {
    background-position-y: -40px;
    background-position-x: -40px;
    ${({ colors }) =>
      colors.borderHover && "border-color: " + colors.borderHover};
  }
`;
const FlexWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${(p) => (p.marginHide ? "0px" : "8px")};
`;
const TitleFlexWrap = styled(FlexWrap)`
  padding: 10px 20px 0;
`;
const TitleWrap = styled.div`
  width: 75%;
  max-width: 82%;
`;
const Title = styled.h4`
  text-decoration: none;
  margin-top: 0px;
`;
const Text = styled.div`
  line-height: 1.4;
`;
const TextBoxLeft = styled(Title)`
  flex: 1 1 180px;
`;
const TextBoxRight = styled(Text)`
  flex: 1 1 320px;
`;
const Logo = styled.img`
  max-height: ${(p) => (p.hide ? "42px" : "72px")};
  opacity: ${(p) => (p.isComplete ? "1" : "0.2")};
  ${(p) => p.isComplete && `border: 1px solid ${p.colors.border};`};
  border-radius: 5px;
`;
const RookieWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: -16px;
`;
const RookieIcon = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
  margin-right: 16px;
  margin-top: 16px;
  border-radius: 5px;
`;
export default LeagueList;
