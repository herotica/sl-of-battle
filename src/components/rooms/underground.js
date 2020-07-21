import React from "react";
import styled from "styled-components";
import { useGlobalDataStore } from "../../state";
import { useFightDataStore } from "../../state/fight";
import { observer } from "mobx-react-lite";

import GoBack from "../back";
import { LgTitle, SmText } from "../text";
import { FightRooms, Rooms } from "../../constants";
import { keys, Underground } from "../../combatants";
import UndergroundBg from "../../assets/room/underground.jpg";

const Strings = {
  title: "Underground Slut Fighting",
  explain:
    "Unable or unwilling to fight in the leagues, or just hungry for dark money, many people come to the undergound sluts league and either make or break their fortunes. This is good experience for beginners, but it can be rough, and the winnings are slim."
};

const FightOptions = [
  {
    name: "Exhibition",
    bet: -10,
    reward: 100,
    difficulty: 5,
    mediumDiffChance: 1000, // chance in a thousand
    hardDiffChance: 900,
    desc: `Let the pros abuse you for the crowd's entertainment.`
  },
  {
    name: "Rookie",
    bet: 20,
    reward: 50,
    difficulty: 1,
    mediumDiffChance: 10, // chance in a thousand
    hardDiffChance: 2,
    desc: `Fight some inexperienced but hungry rookies.`
  },
  {
    name: "Amatuer",
    bet: 50,
    reward: 150,
    difficulty: 2,
    mediumDiffChance: 620,
    hardDiffChance: 30,
    desc: `Risk it and fight some more experienced fighters.`
  },
  {
    name: "Seasoned",
    bet: 120,
    reward: 400,
    difficulty: 4,
    mediumDiffChance: 1000,
    hardDiffChance: 450,
    desc: `Think your ready for the big leagues?`
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
          {FightOptions.map(fight => (
            <FightTierOption {...fight} />
          ))}
        </FightWrap>
      </MainBox>
    </UWrap>
  );
};

const FightTierOption = observer(
  ({ name, bet, reward, difficulty, mediumDiffChance, hardDiffChance, desc }) => {
    //remove cash, send data to fight state, move room
    const {
      cash,
      setRoomSave,
      setRoom,
      saveChar,
      changeCash
    } = useGlobalDataStore();
    const { readyNewFight } = useFightDataStore();
    const onWin = () => {
      changeCash(reward);
      setRoomSave(Rooms.underground);
    };
    const onLose = () => {
      setRoomSave(Rooms.underground);
    };

    const onSelect = () => {
      if (bet <= cash) {
        changeCash(-1 * bet);
        saveChar();
        // select combatant
        const diffLevel = SelectDifficulty(mediumDiffChance, hardDiffChance);
        const combatant = SelectCombatant(diffLevel);
        readyNewFight(combatant, FightRooms.underground, onWin, onLose, reward);
        setRoom(Rooms.fight);
      } else {
        window.alert("You can afford this.");
      }
    };

    return (
      <FightOption onClick={onSelect}>
        <SmText>- {name} -</SmText>
        <SmText>
          Bet: {bet} / Reward: {reward}
        </SmText>
        <SmText>Difficulty Lvl::{difficulty}</SmText>
        <SmText>--</SmText>
        <SmText>{desc}</SmText>
      </FightOption>
    );
  }
);

const DifficultyLevels = ["basic", "medium", "hard"];
const SelectDifficulty = (midChance, HardChance) => {
  const RanNum = Math.floor(Math.random() * 1000);
  if (RanNum <= HardChance) {
    return DifficultyLevels[2];
  }
  if (RanNum <= midChance) {
    return DifficultyLevels[1];
  } else {
    return DifficultyLevels[0];
  }
};
const SelectCombatant = difficultyLevel => {
  let optionsAvailable = 0;
  let RanNum = 0;

  switch (difficultyLevel) {
    case DifficultyLevels[0]:
      optionsAvailable = keys.underground.tierBasic.length;
      RanNum = Math.floor(Math.random() * optionsAvailable);
      return Underground.tierBasic[keys.underground.tierBasic[RanNum]];

    case DifficultyLevels[1]:
      optionsAvailable = keys.underground.tierMedium.length;
      RanNum = Math.floor(Math.random() * optionsAvailable);
      return Underground.tierMedium[keys.underground.tierMedium[RanNum]];

    case DifficultyLevels[2]:
      optionsAvailable = keys.underground.tierHard.length;
      RanNum = Math.floor(Math.random() * optionsAvailable);
      return Underground.tierHard[keys.underground.tierHard[RanNum]];

    default:
      return false;
  }
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
  background-image: url(${UndergroundBg});
`;
const ExplainBox = styled.div`
  line-height: 1.6;
  border: 2px solid black;
  background: rgba(120, 120, 120, 0.7);
  padding: 16px;
  margin-bottom: 32px;
  color: lightgrey;
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
  cursor: pointer;

  &:hover {
    border: 2px solid orange;
  }
`;

export default UndergroundArena;
