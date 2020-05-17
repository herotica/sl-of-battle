import React from "react";
import { useLocalStore } from "mobx-react-lite";
import { Rooms } from "../constants";

export function createGlobalStore() {
  return {
    name: "None",
    setName(newName) {
      this.name = newName;
    },
    isWoman: true,
    setIsWoman(valBool) {
      this.isWoman = valBool;
    },
    gender: "Female",
    setGender(newVal) {
      this.gender = newVal;
    },
    race: "Human",
    setRace(newVal) {
      this.race = newVal;
    },
    height: false,
    setHeight(newVal) {
      this.height = newVal;
    },
    bodyShape: false,
    setBodyShape(newVal) {
      this.bodyShape = newVal;
    },
    eyeColor: false,
    setEyeColor(newEyeColor) {
      this.eyeColor = newEyeColor;
    },
    hairColor: false,
    setHairColor(newHairColor) {
      this.hairColor = newHairColor;
    },
    skinColor: false,
    setSkinColor(newSkinColor) {
      this.skinColor = newSkinColor;
    },

    // Sex Organs
    penisSize: 0,
    setPenisSize(newVal) {
      this.penisSize = newVal;
    },
    breastSize: 0,
    setBreastSize(newVal) {
      this.breastSize = newVal;
    },
    vaginaSize: 0,
    setVaginaSize(newVal) {
      this.vaginaSize = newVal;
    },
    anusSize: 0,
    setAnusSize(newVal) {
      this.anusSize = newVal;
    },
    throatSize: 0,
    setThroatSize(newVal) {
      this.throatSize = newVal;
    },

    // Skills
    powerPoints: 20, // spent at character setup
    changePowerPoints(newVal) {
        this.powerPoints = checkedVal(newVal, this.powerPoints, 0, 100);
      },
    // -- prowess is the ability to pleasure with.. 1- 100
    tongueProwess: 5,
    changeTongueProwess(newVal) {
      this.tongueProwess = checkedVal(newVal, this.tongueProwess, 1, 100);
    },
    touchProwess: 5, // hands/body eg. rubbing self against another
    changeTouchProwess(newVal) {
      this.touchProwess = checkedVal(newVal, this.touchProwess, 1, 100);
    },
    cockProwess: 5, //strapon if female
    changeCockProwess(newVal) {
      this.cockProwess = checkedVal(newVal, this.cockProwess, 1, 100);
    },
    vaginaProwess: 5,
    changeVaginaProwess(newVal) {
      this.vaginaProwess = checkedVal(newVal, this.vaginaProwess, 1, 100);
    },
    anusProwess: 5,
    changeAnusProwess(newVal) {
      this.anusProwess = checkedVal(newVal, this.anusProwess, 1, 100);
    },
    // -- resistance is ability to endure pleasure, 1 - 100
    touchResistance: 5,
    changeTouchResistance(newVal) {
      this.touchResistance = checkedVal(newVal, this.touchResistance, 1, 100);
    },
    breastResistance: 5,
    changeBreastResistance(newVal) {
      this.breastResistance = checkedVal(newVal, this.breastResistance, 1, 100);
    },
    mouthResistance: 5,
    changeMouthResistance(newVal) {
      this.mouthResistance = checkedVal(newVal, this.mouthResistance, 1, 100);
    },
    cockResistance: 5,
    changeCockResistance(newVal) {
      this.cockResistance = checkedVal(newVal, this.cockResistance, 1, 100);
    },
    vaginaResistance: 5,
    changeVaginaResistance(newVal) {
      this.vaginaResistance = checkedVal(newVal, this.vaginaResistance, 1, 100);
    },
    anusResistance: 5,
    changeAnusResistance(newVal) {
      this.anusResistance = checkedVal(newVal, this.anusResistance, 1, 100);
    },

    // Items
    RenownLv: 0, // displays 13 as lv1 xp3, max 100
    ChangeRenown(changeVal) {
      this.RenownLv = checkedVal(changeVal, this.RenownLv, 0, 100);
    },
    leagueCredits: 0, // reset after leaving a league
    changeLeagueCredits(changeVal) {
      if (this.leagueCredits + changeVal < 0) {
        this.leagueCredits = 0;
      } else {
        this.leagueCredits = this.leagueCredits + changeVal;
      }
    },
    leaguePoints: 0, // Accrued accross leagues, spent on medals, sponsoring
    changeLeaguePoints(changeVal) {
      if (this.leaguePoints + changeVal < 0) {
        this.leaguePoints = 0;
      } else {
        this.leaguePoints = this.leaguePoints + changeVal;
      }
    },
    cash: 0, // Accrued accross leagues, spent on upgrades / training
    changeCash(changeVal) {
      if (this.cash + changeVal < 0) {
        this.cash = 0;
      } else {
        this.cash = this.cash + changeVal;
      }
    },
    // Logic
    currentRoom: Rooms.newGame,
    setRoom(RoomString) {
      this.currentRoom = RoomString;
    }
  };
}

const checkedVal = (valChange, origVal, min, max) => {
  const newVal = origVal + valChange;
  if (newVal > max) {
    return max;
  } else if (newVal < min) {
    return min;
  } else {
    return newVal;
  }
};

const GlobalContext = React.createContext();

export const GlobalContextProvider = ({ children }) => {
  const store = useLocalStore(createGlobalStore);
  return (
    <GlobalContext.Provider value={store}>{children}</GlobalContext.Provider>
  );
};

export const useGlobalDataStore = () => {
  const store = React.useContext(GlobalContext);
  if (!store) {
    throw new Error("useStore requires a StoreProvider.");
  }
  return store;
};
