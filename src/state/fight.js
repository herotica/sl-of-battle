import React from "react";
import { useLocalStore } from "mobx-react-lite";
import { FightRooms } from "../constants";

export function createFightStore() {
  return {
    fightCombantantKey: null,
    setCombatant(newCombatant) {
      this.fightCombantantKey = newCombatant;
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

    readyNewFight(combatant, room, onWin, onLose) {
      this.setCombatant(combatant);
      this.setFightRoom(room);
      this.setOnWinFunc(onWin);
      this.setOnLoseFunc(onLose);
    }
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
