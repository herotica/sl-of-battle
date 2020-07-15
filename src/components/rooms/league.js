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
    leagueProgress,
    resetCurrentLgWinNum,
    setCurrentLeagueProgress,
    setLeague,
    setRoomSave,
    saveChar,
    addNewLeague,
    resetLeagueCredits,
  } = useGlobalDataStore();
  if (!currentLeague) setRoomSave(Rooms.main);
  const { ranks, id, initialPoints } = currentLeague;
  const missingLeagueData = !leagueProgress[id];
  const isComplete = leagueProgress[id] && leagueProgress[id].isComplete;

  if (missingLeagueData) {
    addNewLeague(id, initialPoints);
    saveChar();
  }

  const resetOnLeave = () => {
    setCurrentLeagueProgress(InitialValues.currentLeagueProgress);
    resetCurrentLgWinNum();
    setLeague(InitialValues.currentLeague);
    resetLeagueCredits();
    setRoomSave(Rooms.main);
  };
  const closeWinBox = () => {
    const newProgObj = {
      ...currentLeagueProgress,
      fightPic: false,
    };
    setCurrentLeagueProgress(newProgObj);
    saveChar();
  };

  return (
    <UWrap isComplete={isComplete}>
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
          <Button onClick={resetOnLeave}>Return To Training</Button>
        ) : (
          <Button onClick={() => setShowExit(true)}>Quit League</Button>
        )}
      </FlexSpaced>
      <LeagueBottomText>
        {isComplete
          ? `CONGRATULATIONS!!, you've beaten this League, maybe your ready for the next one?`
          : currentLeague.description}
      </LeagueBottomText>
      <LeagueBottomText>
        League Points Left to Gain :{" "}
        {leagueProgress[id] && leagueProgress[id].pointsAvailable}
      </LeagueBottomText>
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
          {group.combatants &&
            group.combatants.map((combatant, index) => (
              <CombatantBox
                key={`${groupID}-${index}`}
                combatant={combatant}
                combatantVal={`${groupID}-${index}`}
                groupID={groupID}
                isFinal={isFinal}
                isLocked={isLocked}
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

const CombatantBox = ({
  combatant,
  combatantVal,
  groupID,
  isFinal,
  isLocked,
}) => {
  const {
    currentLeague,
    setCurrentLgWinNum,
    currentLeagueProgress,
    leagueProgress,
    setCurrentLeagueProgress,
    setRoomSave,
    setRoom,
    setLeagueProgress,
    changeLeagueCredits,
    gainLeaguePoints,
    ChangeRenown,
  } = useGlobalDataStore();
  const { id, ranks } = currentLeague;
  const { readyNewFight } = useFightDataStore();
  const isbeaten = currentLeagueProgress.wins[combatantVal];

  const onWin = () => {
    const newProgObj = {
      ...currentLeagueProgress,
      wins: {
        ...currentLeagueProgress.wins,
        [combatantVal]: true,
      },
      fightPic: combatant.opLoseImg,
    };
    setCurrentLeagueProgress(newProgObj);
    setCurrentLgWinNum(groupID);
    changeLeagueCredits(ranks[groupID].creditsWin);
    gainLeaguePoints(ranks[groupID].pointsWin, currentLeague.id);
    if (isFinal & !leagueProgress[currentLeague.id].isComplete) {
      ChangeRenown(1);
    }
    setLeagueProgress(id, isFinal, ranks[groupID].pointsWin);
    setRoomSave(Rooms.league);
  };
  const onLose = () => {
    setRoomSave(Rooms.league);
    const newProgObj = {
      ...currentLeagueProgress,
      hasLost: true,
      fightPic: combatant.opWinImg,
    };
    setCurrentLeagueProgress(newProgObj);
  };

  const onClick = () => {
    readyNewFight(combatant, FightRooms.leagueA, onWin, onLose, 0);
    setRoom(Rooms.fight);
  };
  return (
    <CombatantButton
      onClick={isbeaten || isLocked ? null : onClick}
      isbeaten={isbeaten}
    >
      <CombatantIcon src={combatant.icon} alt={combatant.name} />
      <NameText>{combatant.name}</NameText>
    </CombatantButton>
  );
};

const LeagueShop = ({ events, currentLeagueProgress, currentLeague }) => {
  const {
    setRoom,
    leagueCredits,
    changeLeagueCredits,
    boughtItems,
  } = useGlobalDataStore();
  const { setFuckRoomCombatant } = useFightDataStore();

  const onSelectLoserToFuck = (combatant, cost) => {
    if (cost <= leagueCredits) {
      changeLeagueCredits(cost * -1);
      setFuckRoomCombatant(combatant);
      setRoom(Rooms.fuckRoom);
    }
  };
  let baseCreditCost = 35;
  if (boughtItems.includes("licenceA")) baseCreditCost -= 10;
  if (boughtItems.includes("licenceB")) baseCreditCost -= 10;
  if (boughtItems.includes("licenceC")) baseCreditCost -= 10;

  const hasPro = boughtItems.includes("licencePro");

  return (
    <RankBox borderCol={"#00ffb8"}>
      <NameText>
        League Shop{events} :: You have {leagueCredits} league Credits
        remaining, they will be lost upon leaving the league
      </NameText>
      <FlexWrap>
        {Object.keys(currentLeagueProgress.wins).map((losersVal) => {
          const rank = parseInt(losersVal.substr(0, 1));
          const combatantId = parseInt(losersVal.substr(2, losersVal.length));
          const combatant = currentLeague.ranks[rank].combatants[combatantId];
          const cost = baseCreditCost + 5 * rank;

          return (
            <CombatantButton
              key={losersVal}
              onClick={() => onSelectLoserToFuck(combatant, cost)}
            >
              <OverlayText>
                <SmText>Fuck {combatant.name}</SmText>
                <SmText>
                  [<CostText isRed={cost > leagueCredits}>{cost}</CostText>{" "}
                  Credits]
                </SmText>
              </OverlayText>
              <LoserIcon src={combatant.icon} alt={combatant.name} />
            </CombatantButton>
          );
        })}
      </FlexWrap>
      {hasPro && <LoserEnslaveShop />}
    </RankBox>
  );
};

const LoserEnslaveShop = observer(() => {
  const {
    currentLeague,
    currentLeagueProgress,
    leagueCredits,
    changeLeagueCredits,
    cash,
    changeCash,
    losersBought,
    addLoserToListSlaves,
  } = useGlobalDataStore();

  const onSelectLoserEnslave = (combatant, creditCost, cashCost) => {
    if (creditCost <= leagueCredits && cashCost <= cash) {
      changeLeagueCredits(creditCost * -1);
      changeCash(cashCost * -1);
      addLoserToListSlaves(combatant.id, combatant.seriesId);
    }
  };

  return (
    <>
      <NameText>
        As a Pro you can purchase girls you've beaten to keep!
      </NameText>
      <FlexWrap>
        {Object.keys(currentLeagueProgress.wins).map((losersVal) => {
          const rank = parseInt(losersVal.substr(0, 1));
          const combatantId = parseInt(losersVal.substr(2, losersVal.length));
          const combatant = currentLeague.ranks[rank].combatants[combatantId];
          const cost = 10 + 5 * rank;
          const cashCost = 100 + 50 * rank;
          const ownedSeries = Object.keys(losersBought);
          const ownSlaveSeries = ownedSeries.includes(combatant.seriesId);
          let ownSlave = false;
          if (
            ownSlaveSeries &&
            losersBought[combatant.seriesId].includes(combatant.id)
          ) {
            ownSlave = true;
          }
          return (
            !ownSlave && (
              <CombatantButton
                key={losersVal}
                onClick={() => onSelectLoserEnslave(combatant, cost, cashCost)}
              >
                <OverlayText>
                  <SmText>Purchase {combatant.name}</SmText>
                  <SmText>
                    [<CostText isRed={cost > leagueCredits}>{cost} C</CostText>
                    {","}
                    <CostText isRed={cost > cash}>${cashCost}</CostText>]
                  </SmText>
                </OverlayText>
                <LoserIcon src={combatant.icon} alt={combatant.name} />
              </CombatantButton>
            )
          );
        })}
      </FlexWrap>
    </>
  );
});

const UWrap = styled.div`
  margin: 16px 0;
  overflow-y: auto;
  ${(p) => p.isComplete && `border: 2px solid gold`}
`;
const FlexSpaced = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;
const FlexCol = styled(FlexSpaced)`
  align-items: center;
  margin-bottom: 20px;
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
  border: 2px solid ${(p) => p.borderCol || "black"};
  padding: 8px;
  flex-grow: 1;
  position: relative;
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
const CombatantIcon = styled.img`
  max-width: 80px;
  height: 90px;
  object-fit: cover;
`;
const NameText = styled(SmlrText)`
  text-align: center;
`;
const LoserIcon = styled(CombatantIcon)`
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
const LeagueBottomText = styled(SmlrText)`
  margin: 16px 8px;
`;
const LockedOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  height: 100%;
  width: 100%;
  background: rgba(180, 150, 180, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FightEndImg = styled.img`
  max-height: 380px;
  margin-right: 24px;
  margin-top: -12px;
`;
const CostText = styled.span`
  ${(p) => p.isRed && "color: darkred;"}
`;

export default LeagueRoom;
