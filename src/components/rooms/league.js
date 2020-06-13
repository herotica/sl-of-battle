import React, { useState } from "react";
import styled from "styled-components";
import { useGlobalDataStore } from "../../state";
import { observer } from "mobx-react-lite";
import { LgTitle, SmText, SmlrText, MdTitleMiddle } from "../text";
import Button from "../button";
import GoBack from "../back";
import Modal from "../modal";

const RankAlphabet = ["A", "B", "C", "D", "E", "F"];

const LeagueRoom = observer(() => {
  const [showExit, setShowExit] = useState(false);
  const {
    currentLeague,
    currentLeagueProgress,
    setCurrentLeagueProgress
  } = useGlobalDataStore();
  const { ranks } = currentLeague;

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
      <FlexSpaced>
        <LgTitle>{currentLeague.name}</LgTitle>
        <Button onClick={() => setShowExit(true)}>Leave League</Button>
      </FlexSpaced>
      <LeagueBottomText>{currentLeague.description}</LeagueBottomText>
      <MainBox>
        {ranks.map((rank, index) => (
          <LeagueRankBox
            name={RankAlphabet[index]}
            group={rank}
            groupID={index}
            isFinal={index + 1 === ranks.length}
          />
        ))}
        <MdTitleMiddle>Credit Shop</MdTitleMiddle>
        <LeagueShop currentLeagueProgress={currentLeagueProgress} currentLeague={currentLeague}/>
      </MainBox>
    </UWrap>
  );
});

const LeagueRankBox = ({ name, group, groupID, isFinal }) => {
  return (
    <Flex>
      <LgTitle>{name}</LgTitle>
      <RankBox borderCol={isFinal && "gold"}>
        <FlexWrap>
          {group.combatants.map((combatant, index) => (
            <CombatantBox
              combatant={combatant}
              combatantVal={`${groupID}-${index}`}
            />
          ))}
        </FlexWrap>
        <LeagueBottomText>
          {group.name}; Credits/Win: {group.creditsWin}, Point/Win:{" "}
          {group.pointsWin}
        </LeagueBottomText>
      </RankBox>
    </Flex>
  );
};

const CombatantBox = ({ combatant, combatantVal }) => {
  const {
    currentLeagueProgress,
    setCurrentLeagueProgress
  } = useGlobalDataStore();
  const isbeaten = currentLeagueProgress.wins[combatantVal];
  const onClick = () => {
    if (!isbeaten) {
      const newProgObj = {
        ...currentLeagueProgress,
        wins: {
          ...currentLeagueProgress.wins,
          [combatantVal]: true
        }
      };
      setCurrentLeagueProgress(newProgObj);
    }
  };
  return (
    <CombatantButton onClick={onClick} isbeaten={isbeaten}>
      <CombatantIcon src={combatant.icon} alt={combatant.name} />
      <NameText>{combatant.name}</NameText>
    </CombatantButton>
  );
};

const LeagueShop = ({ events, currentLeagueProgress, currentLeague }) => (
  <RankBox borderCol={"#00ffb8"}>
    <NameText>League Shop{events}</NameText>
    <FlexWrap>
      {Object.keys(currentLeagueProgress.wins).map(losersVal => {
        const rank = parseInt(losersVal.substr(0, 1));
        const combatant = parseInt(losersVal.substr(2, losersVal.length));
        const loser = currentLeague.ranks[rank].combatants[combatant];
        return (
          <CombatantButton>
            Fuck {loser.name} 5 Credits
          </CombatantButton>
        );
      })}
    </FlexWrap>
  </RankBox>
);

const UWrap = styled.div`
  margin: 32px;
  overflow-y: auto;
`;
const FlexSpaced = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;
const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
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

const CombatantButton = styled.div`
  border: 1px solid ${p => p.borderCol || "darkgrey"};
  border-radius: 5px;
  padding: 4px;
  cursor: ${p => (p.isbeaten ? "not-allowed" : "pointer")};
  margin: 0 4px;
  width: 140px;
  height: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  transition: background 0.3s ease-in-out;
  ${p => p.isbeaten && "opacity: 0.4"};

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
