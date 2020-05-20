import React from "react";
import styled from "styled-components";
// import { useGlobalDataStore } from "../../state";
import GoBack from "../back";
import { LgTitle, SmText } from "../text";
import UndergroundBg from "../../assets/room/underground.jpg";

const Strings = {
  title: "Underground Slut Fighting",
  explain:
    "Unable or unwilling to fight in the leagues, or just hungry for dark money, many people come to the undergound sluts league and either make or break their fortunes. This is good experience for beginners, but it can be rough, and the winnings are slim."
};

const FightOptions = [
  {
    name: "Rookie",
    bet: 20,
    reward: 40,
    difficulty: 1
  },
  {
    name: "Amatuer",
    bet: 50,
    reward: 120,
    difficulty: 2
  },
  {
    name: "Seasoned",
    bet: 150,
    reward: 400,
    difficulty: 4
  }
];

const UndergroundArena = () => {
  return (
    <UWrap>
      <FlexWrap>
        <LgTitle>{Strings.title}</LgTitle>
        <GoBack />
      </FlexWrap>
      <MainBox>
        <ExplainBox>
          <SmText>{Strings.explain}</SmText>
        </ExplainBox>
        <FightWrap>
          {FightOptions.map(fight => {
            return (
              <FightOption>
                <SmText>- {fight.name} -</SmText>
                <SmText>
                  Bet: {fight.bet} / Reward: {fight.reward}
                </SmText>
                <SmText>Difficulty Lvl::{fight.difficulty}</SmText>
              </FightOption>
            );
          })}
        </FightWrap>
      </MainBox>
    </UWrap>
  );
};

const UWrap = styled.div`
  margin: 32px;
  overflow-y: auto;
`;
const FlexWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;
const MainBox = styled.div`
  padding: 32px;
  background: ${UndergroundBg};
`;
const ExplainBox = styled.div`
  line-height: 1.6;
  border: 2px solid black;
  background: rgba(120, 120, 120, 0.7);
  padding: 16px;
  margin-bottom: 32px;
`;
const FightWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
const FightOption = styled.div`
  flex: 0 0 240px;
  margin: 8px 32px;
  padding: 16px;
  border-radius: 8px;
  border: 2px solid black;
  color: white;
  background: rgba(20, 20, 20, 0.8);
`;

export default UndergroundArena;
