import React, { useState } from "react";
import styled from "styled-components";
import { useGlobalDataStore } from "../../state";
import { observer } from "mobx-react-lite";
import { LgTitle, SmText, SmlrText } from "../text";
import Button from "../button";
import GoBack from "../back";
import Modal from "../modal";

const RankAlphabet = ["B", "C", "D", "E", "F"];

const LeagueRoom = observer(() => {
  const [showExit, setShowExit] = useState(false);
  const { currentLeague } = useGlobalDataStore();
  const { rookies, ranks } = currentLeague;

  return (
    <UWrap>
      {showExit && (
        <Modal title="Leave?" onHide={() => setShowExit(false)}>
          <UWrap>
            <SmText>
              Are you sure you want to leave the league, doing so will lose your
              current progress & move you to the next training week
            </SmText>
            <GoBack />
          </UWrap>
        </Modal>
      )}
      <FlexWrap>
        <LgTitle>{currentLeague.name}</LgTitle>
        <Button onClick={() => setShowExit(true)}>Leave League</Button>
      </FlexWrap>
      <LeagueBottomText>{currentLeague.description}</LeagueBottomText>
      <MainBox>
        <LeagueRankBox name="A" group={rookies} />
        {ranks.map((rank, index) => (
          <LeagueRankBox name={RankAlphabet[index]} group={rank} />
        ))}
      </MainBox>
    </UWrap>
  );
});

const LeagueRankBox = ({ name, group }) => {
  return (
    <Flex>
      <LgTitle>{name}</LgTitle>
      <RankBox>
        <CombatantsWrap>
          {group.combatants.map(combatant => (
            <CombatantBox combatant={combatant} />
          ))}
        </CombatantsWrap>
        <LeagueBottomText>
          {group.name}; Credits/Win: {group.creditsWin}, Point/Win:{" "}
          {group.pointsWin}
        </LeagueBottomText>
      </RankBox>
    </Flex>
  );
};

const CombatantBox = ({ combatant }) => (
  <CombatantButton>
    <CombatantIcon src={combatant.icon} alt={combatant.name} />
    <NameText>{combatant.name}</NameText>
  </CombatantButton>
);

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
  background: rgba(80, 80, 80, 0.2);
  border-radius: 5px;
`;
const Flex = styled.div`
  display: flex;
  margin-bottom: 24px;
  align-items: center;
`;
const RankBox = styled.div`
  margin-left: 16px;
  border: 2px solid ${p => p.borderCol || "black"};
  padding: 8px;
  flex-grow: 1;
`;

const CombatantsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const CombatantButton = styled.div`
  border: 1px solid ${p => p.borderCol || "darkgrey"};
  border-radius: 5px;
  padding: 4px;
  cursor: pointer;
  margin: 0 4px;
  width: 140px;
  height: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: rgba(80, 80, 80, 0.2);
  }
`;
const CombatantIcon = styled.img`
  max-width: 80px;
  height: 90px;
  object-fit: cover;
`;
const NameText = styled(SmlrText)`
  text-align: center;
`;
const LeagueBottomText = styled(SmlrText)`
  margin: 16px 8px;
`;

export default LeagueRoom;
