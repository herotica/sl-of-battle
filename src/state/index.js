import React from "react";
import { useLocalStore } from "mobx-react-lite";
import { Rooms } from "../constants";

export function createGlobalStore() {
  return {
    name: "None",
    setName(newName) {
      this.name = newName;
    },
    icon: null,
    setSmIcon(newImg) {
      this.icon = newImg;
    },
    img: null,
    setImage(newImg) {
      this.img = newImg;
    },
    isWoman: true,
    setIsWoman(valBool) {
      this.isWoman = valBool;
    },
    gender: "female",
    setGender(newVal) {
      this.gender = newVal;
    },
    race: "Human",
    setRace(newVal) {
      this.race = newVal;
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

    // Sex Organs/ height size 0->5
    maxVal: 20,
    minVal: -100,
    normaliseVal() {
      this.maxVal = 5; // Ran after initial character setup
      this.minVal = 0;

      this.height = checkedVal(0, this.height, 0, this.maxVal);
      this.penisSize = checkedVal(0, this.penisSize, 0, this.maxVal);
      this.breastSize = checkedVal(0, this.breastSize, 0, this.maxVal);
      this.vaginaSize = checkedVal(0, this.vaginaSize, 0, this.maxVal);
      this.anusSize = checkedVal(0, this.anusSize, 0, this.maxVal);
      this.throatSize = checkedVal(0, this.throatSize, 0, this.maxVal);
    },
    height: 2,
    setHeight(newVal) {
      this.height = checkedVal(newVal, this.height, 0, this.maxVal);
    },
    penisSize: 2,
    adjPenisSize(newVal) {
      this.penisSize = checkedVal(newVal, this.penisSize, 0, this.maxVal);
    },
    breastSize: 2,
    adjBreastSize(newVal) {
      this.breastSize = checkedVal(newVal, this.breastSize, 0, this.maxVal);
    },
    vaginaSize: 2,
    adjVaginaSize(newVal) {
      this.vaginaSize = checkedVal(newVal, this.vaginaSize, 0, this.maxVal);
    },
    anusSize: 2,
    adjAnusSize(newVal) {
      this.anusSize = checkedVal(newVal, this.anusSize, 0, this.maxVal);
    },
    throatSize: 2,
    adjThroatSize(newVal) {
      this.throatSize = checkedVal(newVal, this.throatSize, 0, this.maxVal);
    },

    // Setup
    powerPoints: 30, // spent at character setup
    changePowerPoints(newVal) {
      this.powerPoints = checkedVal(newVal, this.powerPoints, 0, 100);
    },
    choiceSelection: new Array(50).fill(false),
    updateChoiceSelection(newArr) {
      this.choiceSelection = newArr;
    },
    selectionArr: new Array(50).fill(false),
    updateSelectionArr(index, newVal) {
      const newArr = this.selectionArr.slice(0);
      newArr[index] = newVal;
      this.selectionArr = newArr;
    },
    // Skills

    // -- prowess is the ability to pleasure with.. 1- 100
    seductionProwess: 5,
    changeSeductionProwess(newVal) {
      this.seductionProwess = checkedVal(newVal, this.seductionProwess, 1, 100);
    },
    grapplingProwess: 5,
    changeGrapplingProwess(newVal) {
      this.grapplingProwess = checkedVal(newVal, this.grapplingProwess, 1, 100);
    },
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

    // Orgasm Limit, is 'hp'
    orgasmLimit: 3,
    adjOrgasmLimit(newVal) {
      this.orgasmLimit = checkedVal(newVal, this.orgasmLimit, 1, 100);
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
    currentRoom: Rooms.setup,
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
