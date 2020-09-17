import React from "react";
import { useLocalStore } from "mobx-react-lite";
import { FightRooms } from "../constants";
import { Rooms } from "../constants";

export function createFightStore() {
  return {
    fightCombantantData: null,
    setCombatant(newCombatant) {
      this.fightCombantantData = newCombatant;
    },

    fightRoom: FightRooms.underground,
    setFightRoom(newRoom) {
      this.fightRoom = newRoom;
    },

    onFightWin: null,
    setOnWinFunc(winFunction) {
      this.onFightWin = winFunction;
    },

    onFightLose: null,
    setOnLoseFunc(loseFunc) {
      this.onFightLose = loseFunc;
    },

    fightLog: [],
    addToFightLog(text) {
      this.fightLog.push(text);
    },

    fightArousalState: [0, 0],
    setFightArousalState(arrayIn) {
      // stops arousal breaching 100(orgasm trigger), resets to 10 + overflow;
      const newArray = arrayIn.slice(0);
      if (arrayIn[0] >= 100) {
        if (arrayIn[0] - 90 >= 100) {
          newArray[0] = 99;
        } else {
          newArray[0] = arrayIn[0] - 90;
        }
      }
      if (arrayIn[1] >= 100) {
        if (arrayIn[1] - 90 >= 100) {
          newArray[1] = 99;
        } else {
          newArray[1] = arrayIn[1] - 90;
        }
      }
      this.fightArousalState = newArray.slice(0, 2);
    },

    fightOrgasmState: [],
    fightOrgasmStateOriginal: [],
    setOrgasmState(playerLoss, fighterLoss) {
      const initVal = this.fightOrgasmState.slice(0);
      if (playerLoss) initVal[0] = initVal[0] - 1;
      if (fighterLoss) initVal[1] = initVal[1] - 1;
      if (playerLoss || fighterLoss) {
        this.fightOrgasmState = initVal;
      }
    },

    // used to fix race error with useState
    fightRoundEnd: false,
    setRoundEnd(newBool) {
      this.fightRoundEnd = newBool;
    },

    // should be one of "draw","win","lose"
    fightWinner: false,
    setRoundWinner(newVal) {
      this.fightWinner = newVal;
    },

    fightMatchWinnings: 0,

    readyNewFight(
      combatant,
      room,
      onWin,
      onLose,
      winnings,
      playerMaxOrgasm = false
    ) {
      this.setCombatant(combatant);
      this.setFightRoom(room);
      this.setOnWinFunc(onWin);
      this.setOnLoseFunc(onLose);

      this.fightArousalState = [0, 0];
      this.fightOrgasmState = playerMaxOrgasm
        ? [playerMaxOrgasm, combatant.orgasmLimit]
        : [2, 2];
      this.fightOrgasmStateOriginal = playerMaxOrgasm
        ? [playerMaxOrgasm, combatant.orgasmLimit]
        : [2, 2];
      this.fightLog = [];
      this.fightRoundEnd = false;
      this.fightWinner = false;
      this.fightMatchWinnings = winnings;
    },

    onBackRoom: Rooms.league,

    fuckRoomCombatant: null,
    setFuckRoomCombatant(combatant, onBackRoom = Rooms.leaguee) {
      this.fuckRoomCombatant = combatant;
      this.onBackRoom = onBackRoom;
    },

    event: false,
    setSlaveEvent(event, onBackRoom = Rooms.loserSlaveRoom) {
      this.event = event;
      this.onBackRoom = onBackRoom;
    },
  };
}

const FightContext = React.createContext();

export const FightContextProvider = ({ children }) => {
  const store = useLocalStore(createFightStore);
  return (
    <FightContext.Provider value={store}>{children}</FightContext.Provider>
  );
};

export const useFightDataStore = () => {
  const store = React.useContext(FightContext);
  if (!store) {
    throw new Error("useFightDataStore requires a Fight StoreProvider.");
  }
  return store;
};
