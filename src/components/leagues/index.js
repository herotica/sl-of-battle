import React from "react";
import styled from "styled-components";
import { useGlobalDataStore } from "../../state";
import { Rooms } from "../../constants";

export const LeaguesData = {
  training: {
    name: "The Training Centre",
    description: "Build up your skills at the training centre.",
    renownRequired: 0,
    icon: null,
    colors: {
      bgA: "grey",
      bgB: "darkgrey",
      border: "black"
    },
    rookies: null, // list of icons for rookies
    room: Rooms.training,
    league: false
  },
  underground: {
    name: "Underground Sluts Arena",
    description:
      "Sluts battle for cash and training, no refunds, and no fun times with the losers neither",
    renownRequired: 0,
    icon: null,
    colors: {
      bgA: "grey",
      bgB: "darkgrey",
      border: "black"
    },
    rookies: null, // list of icons for rookies
    room: Rooms.underground,
    league: false
  },
  isekai: {
    name: "League 1; The Isekai League",
    description: "The hottest girls from virtual worlds fight for glory.",
    renownRequired: 0,
    icon: null,
    colors: {
      bgA: "yellow",
      bgB: "darkgoldenrod",
      border: "yellow"
    },
    rookies: null, // list of icons for rookies
    room: Rooms.leagueA
  }
};
export const LeagueKeys = Object.keys(LeaguesData);

const LeagueList = () => {
  return (
    <ListWrapper>
      {LeagueKeys.map(key => (
        <LeagueSmPanel {...LeaguesData[key]} />
      ))}
    </ListWrapper>
  );
};

const LeagueSmPanel = ({
  name,
  description,
  renownRequired,
  icon,
  room,
  colors,
  rookies
}) => {
  const { setRoomSave } = useGlobalDataStore();
  const onPress = () => {
    setRoomSave(room);
  };

  return (
    <ListBox colors={colors} onClick={onPress}>
      <div>
        <FlexWrap>
          <Title>{name}</Title>
          <Text>Renown Lv :: {renownRequired}</Text>
        </FlexWrap>
        <Text>{description}</Text>
        {rookies && <div>rookies</div>}
      </div>
      {icon && <Logo src={icon} alt="logo" />}
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
  margin: 16px 20px;
  cursor: pointer;
  background-size: 150% 150%;
  transition: background 0.2s ease-in-out;

  &:hover {
    background-position-y: -40px;
    background-position-x: -40px;
  }
`;
const FlexWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;
const Title = styled.h4`
  text-decoration: none;
  margin-top: 0px;
`;
const Text = styled.div`
  line-height: 1.4;
`;
const Logo = styled.img`
  max-width: 40px;
  max-height: 40px;
`;
export default LeagueList;
