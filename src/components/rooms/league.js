import React, { useState } from "react";
import styled from "styled-components";
import { useGlobalDataStore } from "../../state";
import { useFightDataStore } from "../../state/fight";

import { observer } from "mobx-react-lite";
import { LgTitle, SmText, SmlrText, MdTitleMiddle } from "../text";
import Button from "../button";
import Modal from "../modal";
import { InitialValues } from "../../state";
import { FightRooms, Rooms } from "../../constants";

const RankAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H"];

const LeagueRoom = observer(() => {
  const [showExit, setShowExit] = useState(false);
  const {
    currentLgWinNum,
    currentLeague,
    currentLeagueProgress,
    resetCurrentLgWinNum,
    setCurrentLeagueProgress,
    setLeague,
    setRoomSave,
    ChangeRenown,
    saveChar
  } = useGlobalDataStore();
  const { ranks } = currentLeague;

  const resetOnLeave = () => {
    setRoomSave(Rooms.main);
    setCurrentLeagueProgress(InitialValues.currentLeagueProgress);
    resetCurrentLgWinNum();
    setLeague(InitialValues.currentLeague);
    saveChar();
  };
  const isComplete = currentLgWinNum[ranks.length - 1] > 0;
  const OnComplete = () => {
    ChangeRenown(1); // TODO req check if first completion
    resetOnLeave();
  };
  const closeWinBox = () => {
    const newProgObj = {
      ...currentLeagueProgress,
      fightPic: false
    };
    setCurrentLeagueProgress(newProgObj);
    saveChar();
  };

  return (
    <UWrap>
      {showExit && (
        <Modal title="Leave?" onHide={() => setShowExit(false)}>
          <UWrap>
            <SmText>
              Are you sure you want to leave the league, doing so will lose your
              current progress & move you to the next training week
            </SmText>
            <Button onClick={resetOnLeave}>Quit League</Button>
          </UWrap>
        </Modal>
      )}
      {currentLeagueProgress.fightPic &&
        (currentLeagueProgress.hasLost ? (
          <Modal title="Fight Over" onHide={() => {}} wide>
            <UWrap>
              <FlexCol>
                <FightEndImg
                  src={currentLeagueProgress.fightPic}
                  alt="lose-img"
                />
                <SmlrText>
                  Oh No!!, you were bested, and that means you've failed to
                  complete the League, try again after you've trained some more.
                </SmlrText>
              </FlexCol>
              <Button onClick={resetOnLeave}>Leave</Button>
            </UWrap>
          </Modal>
        ) : (
          <Modal title="Fight Over" wide>
            <UWrap>
              <FlexCol>
                <FightEndImg
                  src={currentLeagueProgress.fightPic}
                  alt="win-img"
                />
                <SmlrText>
                  You bested your opponent, and fucked them into submission,
                  congratulations!
                </SmlrText>
              </FlexCol>
              <Button onClick={closeWinBox}>Close</Button>
            </UWrap>
          </Modal>
        ))}
      <FlexSpaced>
        <LgTitle>{currentLeague.name}</LgTitle>
        {isComplete ? (
          <Button onClick={OnComplete}>Return To Training</Button>
        ) : (
          <Button onClick={() => setShowExit(true)}>Quit League</Button>
        )}
      </FlexSpaced>
      <LeagueBottomText>{currentLeague.description}</LeagueBottomText>
      <MainBox>
        {ranks.map((rank, index) => (
          <LeagueRankBox
            key={RankAlphabet[index]}
            name={RankAlphabet[index]}
            group={rank}
            groupID={index}
            isFinal={index + 1 === ranks.length}
            currentLgWinNum={currentLgWinNum}
          />
        ))}
        <MdTitleMiddle>Credit Shop</MdTitleMiddle>
        <LeagueShop
          currentLeagueProgress={currentLeagueProgress}
          currentLeague={currentLeague}
        />
      </MainBox>
    </UWrap>
  );
});

const LeagueRankBox = ({ name, group, groupID, isFinal, currentLgWinNum }) => {
  const requiresWins = group.reqWins && groupID > 0;
  const isLocked = requiresWins && currentLgWinNum[groupID - 1] < group.reqWins;

  return (
    <Flex>
      <LgTitle>{name}</LgTitle>
      <RankBox borderCol={isFinal && "gold"}>
        {isLocked && (
          <LockedOverlay>
            Locked - Requires {group.reqWins} wins in prior Rank
          </LockedOverlay>
        )}
        <FlexWrap>
          {group.combatants.map((combatant, index) => (
            <CombatantBox
              key={`${groupID}-${index}`}
              combatant={combatant}
              combatantVal={`${groupID}-${index}`}
              groupID={groupID}
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

const CombatantBox = ({ combatant, combatantVal, groupID }) => {
  const {
    setCurrentLgWinNum,
    currentLeagueProgress,
    setCurrentLeagueProgress,
    setRoomSave,
    setRoom
  } = useGlobalDataStore();
  const { readyNewFight } = useFightDataStore();
  const isbeaten = currentLeagueProgress.wins[combatantVal];

  const onWin = () => {
    const newProgObj = {
      ...currentLeagueProgress,
      wins: {
        ...currentLeagueProgress.wins,
        [combatantVal]: true
      },
      fightPic: combatant.opLoseImg
    };
    setCurrentLeagueProgress(newProgObj);
    setCurrentLgWinNum(groupID);
    setRoomSave(Rooms.league);
  };
  const onLose = () => {
    setRoomSave(Rooms.league);
    const newProgObj = {
      ...currentLeagueProgress,
      hasLost: true,
      fightPic: combatant.opWinImg
    };
    setCurrentLeagueProgress(newProgObj);
  };

  const onClick = () => {
    readyNewFight(combatant, FightRooms.leagueA, onWin, onLose, 0);
    setRoom(Rooms.fight);
  };
  return (
    <CombatantButton onClick={isbeaten ? null : onClick} isbeaten={isbeaten}>
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
          <CombatantButton key={losersVal}>
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
const FlexCol = styled(FlexSpaced)`
  align-items: center;
  margin: 0 20px;
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
  position: relative;
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
const LockedOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(80, 80, 80, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FightEndImg = styled.img`
  max-height: 380px;
  margin-right: 24px;
  margin-top: -12px;
`;

export default LeagueRoom;
