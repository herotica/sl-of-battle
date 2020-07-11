import React from "react";
import styled from "styled-components";
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
  const { boughtItems } = useGlobalDataStore();

  return (
    <ListWrapper>
      {RoomsData.map((roomData) => (
        <RoomsWrapper {...roomData} key={roomData.name} />
      ))}
      {boughtItems.includes("licencePro") && (
        <RoomsWrapper {...loserSlavePen} key={"loserSlave"} />
      )}
      <MdTitleMiddle>Leagues</MdTitleMiddle>
      {LeaguesData.map((Data) => (
        <LeagueWrapper {...Data} key={Data.league.id} />
      ))}
    </ListWrapper>
  );
};

const LeagueWrapper = ({ room, league }) => {
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

  return (
    <ListBox colors={colors} onClick={isLocked || onPress} locked={isLocked}>
      <FlexWrap>
        <TitleWrap>
          <FlexWrap>
            <Title>{name}</Title>
            <Text>
              Renown Lv :: {renownRequired} | Entry cost £{entryCost}
            </Text>
          </FlexWrap>
          <Text>{description}</Text>
        </TitleWrap>
        {icon && <Logo src={icon} alt="logo" />}
      </FlexWrap>
      <Text>Rookies:</Text>
      <RookieWrap>
        {ranks[0].combatants.map((rookie) => (
          <RookieIcon src={rookie.icon} alt={rookie.name} key={rookie.name} />
        ))}
      </RookieWrap>
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
        <Title style={{ flex: "0 0 180px" }}>{name}</Title>

        <Text style={{ flex: "1 0 320px" }}>{description}</Text>
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
  padding: 16px;
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
  margin-bottom: 8px;
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
const Logo = styled.img`
  max-height: 72px;
`;
const RookieWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const RookieIcon = styled.img`
  margin-right: 16px;
  max-width: 80px;
`;
export default LeagueList;
