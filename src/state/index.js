import React from "react";
import { useLocalStore } from "mobx-react-lite";
import { Rooms, gender } from "../constants";
import { GetFromStorage, StoreObj, createFileFromObj } from "../utils";

export const CharKeys = {
  prowessTypes: {
    seduction: "seduction",
    grappling: "grappling",
    tongue: "tongue",
    touch: "touch",
    cock: "cock",
    vagina: "vagina",
    anus: "anus"
  },
  prowess: {
    seduction: "seductionProwess",
    grappling: "grapplingProwess",
    tongue: "tongueProwess",
    touch: "touchProwess",
    cock: "cockProwess",
    vagina: "vaginaProwess",
    anus: "anusProwess"
  },
  prowessUpd: {
    seduction: "changeSeductionProwess",
    grappling: "changeGrapplingProwess",
    tongue: "changeTongueProwess",
    touch: "changeTouchProwess",
    cock: "changeCockProwess",
    vagina: "changeVaginaProwess",
    anus: "changeAnusProwess"
  },
  resistTypes: {
    touch: "touch",
    breasts: "breasts",
    mouth: "mouth",
    cock: "cock",
    vagina: "vagina",
    anus: "anus"
  },
  resist: {
    touch: "touchResistance",
    breasts: "breastResistance",
    mouth: "mouthResistance",
    cock: "cockResistance",
    vagina: "vaginaResistance",
    anus: "anusResistance"
  },
  resistUpd: {
    touch: "changeTouchResistance",
    breasts: "changeBreastResistance",
    mouth: "changeMouthResistance",
    cock: "changeCockResistance",
    vagina: "changeVaginaResistance",
    anus: "changeAnusResistance"
  }
};

export const InitialValues = {
  name: "None",
  icon: null,
  img: null,
  gender: gender.female,
  isWoman: true,
  hasCock: false,
  race: "Human",
  bodyShape: false,
  eyeColor: false,
  hairColor: false,
  skinColor: false,
  maxVal: 20,
  minVal: -100,
  height: 2,
  // Size runs from 0-5
  penisSize: 2,
  breastSize: 2,
  vaginaSize: 2,
  anusSize: 2,
  throatSize: 2,
  powerPoints: 30, // spent at character setup
  choiceSelection: new Array(50).fill(false),
  selectionArr: new Array(50).fill(false),
  seductionProwess: 5,
  grapplingProwess: 5,
  tongueProwess: 5,
  touchProwess: 5, // hands/body eg. rubbing self against another
  cockProwess: 5, //strapon if female
  vaginaProwess: 5,
  anusProwess: 5,
  // -- resistance is ability to endure pleasure, 1 - 100
  touchResistance: 5,
  breastResistance: 5,
  mouthResistance: 5,
  cockResistance: 5,
  vaginaResistance: 5,
  anusResistance: 5,
  orgasmLimit: 3,
  // Items / spending
  RenownLv: 0, // displays 13 as lv1 xp3, max 100
  leagueCredits: 0, // reset after leaving a league
  leaguePoints: 0, // Accrued accross leagues, spent on medals, sponsoring
  cash: 100, // Accrued accross leagues, spent on upgrades / training
  currentRoom: Rooms.setup,
  currentLeagueProgress: {
    credits: 0,
    hasLost: false,
    wins: {}
  },
  currentLgWinNum: new Array(50).fill(0), // if in a league, number of wins/rank
  currentLeague: null,
  gameVersion: 1
};
const saveAvailable = GetFromStorage();
const valFromStorage = saveAvailable
  ? { ...InitialValues, ...saveAvailable }
  : InitialValues;

export function createGlobalStore() {
  return {
    setName(newName) {
      this.name = newName;
    },
    setSmIcon(newImg) {
      this.icon = newImg;
    },
    setImage(newImg) {
      this.img = newImg;
    },
    setGender(newVal) {
      this.gender = newVal;
      this.isWoman = newVal === gender.female || newVal === gender.futanari;
      this.hasCock = newVal === gender.male || newVal === gender.futanari;
    },
    setRace(newVal) {
      this.race = newVal;
    },
    setBodyShape(newVal) {
      this.bodyShape = newVal;
    },
    setEyeColor(newEyeColor) {
      this.eyeColor = newEyeColor;
    },
    setHairColor(newHairColor) {
      this.hairColor = newHairColor;
    },
    setSkinColor(newSkinColor) {
      this.skinColor = newSkinColor;
    },

    // Sex Organs/ height size 0->5
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
    setHeight(newVal) {
      this.height = checkedVal(newVal, this.height, 0, this.maxVal);
    },
    adjPenisSize(newVal) {
      this.penisSize = checkedVal(newVal, this.penisSize, 0, this.maxVal);
    },
    adjBreastSize(newVal) {
      this.breastSize = checkedVal(newVal, this.breastSize, 0, this.maxVal);
    },
    adjVaginaSize(newVal) {
      this.vaginaSize = checkedVal(newVal, this.vaginaSize, 0, this.maxVal);
    },
    adjAnusSize(newVal) {
      this.anusSize = checkedVal(newVal, this.anusSize, 0, this.maxVal);
    },
    adjThroatSize(newVal) {
      this.throatSize = checkedVal(newVal, this.throatSize, 0, this.maxVal);
    },

    // Setup
    changePowerPoints(newVal) {
      this.powerPoints = checkedVal(newVal, this.powerPoints, 0, 100);
    },
    updateChoiceSelection(newArr) {
      this.choiceSelection = newArr;
    },
    updateSelectionArr(index, newVal) {
      const newArr = this.selectionArr.slice(0);
      newArr[index] = newVal;
      this.selectionArr = newArr;
    },
    // Skills

    // -- prowess is the ability to pleasure with.. 1- 100

    changeSeductionProwess(newVal) {
      this.seductionProwess = checkedVal(newVal, this.seductionProwess, 1, 100);
    },
    changeGrapplingProwess(newVal) {
      this.grapplingProwess = checkedVal(newVal, this.grapplingProwess, 1, 100);
    },
    changeTongueProwess(newVal) {
      this.tongueProwess = checkedVal(newVal, this.tongueProwess, 1, 100);
    },
    changeTouchProwess(newVal) {
      this.touchProwess = checkedVal(newVal, this.touchProwess, 1, 100);
    },
    changeCockProwess(newVal) {
      this.cockProwess = checkedVal(newVal, this.cockProwess, 1, 100);
    },
    changeVaginaProwess(newVal) {
      this.vaginaProwess = checkedVal(newVal, this.vaginaProwess, 1, 100);
    },
    changeAnusProwess(newVal) {
      this.anusProwess = checkedVal(newVal, this.anusProwess, 1, 100);
    },

    // -- resistance is ability to endure pleasure, 1 - 100

    changeTouchResistance(newVal) {
      this.touchResistance = checkedVal(newVal, this.touchResistance, 1, 100);
    },
    changeBreastResistance(newVal) {
      this.breastResistance = checkedVal(newVal, this.breastResistance, 1, 100);
    },
    changeMouthResistance(newVal) {
      this.mouthResistance = checkedVal(newVal, this.mouthResistance, 1, 100);
    },
    changeCockResistance(newVal) {
      this.cockResistance = checkedVal(newVal, this.cockResistance, 1, 100);
    },
    changeVaginaResistance(newVal) {
      this.vaginaResistance = checkedVal(newVal, this.vaginaResistance, 1, 100);
    },
    changeAnusResistance(newVal) {
      this.anusResistance = checkedVal(newVal, this.anusResistance, 1, 100);
    },

    // Orgasm Limit, is 'hp'
    adjOrgasmLimit(newVal) {
      this.orgasmLimit = checkedVal(newVal, this.orgasmLimit, 1, 100);
    },

    // Items
    ChangeRenown(changeVal) {
      this.RenownLv = checkedVal(changeVal, this.RenownLv, 0, 100);
    },
    changeLeagueCredits(changeVal) {
      if (this.leagueCredits + changeVal < 0) {
        this.leagueCredits = 0;
      } else {
        this.leagueCredits = this.leagueCredits + changeVal;
      }
    },
    changeLeaguePoints(changeVal) {
      if (this.leaguePoints + changeVal < 0) {
        this.leaguePoints = 0;
      } else {
        this.leaguePoints = this.leaguePoints + changeVal;
      }
    },
    changeCash(changeVal) {
      if (this.cash + changeVal < 0) {
        this.cash = 0;
      } else {
        this.cash = this.cash + changeVal;
      }
    },
    // Logic
    setRoom(RoomString) {
      this.currentRoom = RoomString;
    },
    setRoomSave(RoomString) {
      this.currentRoom = RoomString;
      this.saveChar();
    },
    setLeague(LeagueObj) {
      this.currentLeague = LeagueObj;
    },
    setCurrentLeagueProgress(progressObj) {
      this.currentLeagueProgress = progressObj;
    },
    setCurrentLgWinNum(rankIndxToIncrease) {
      const tempArr = this.currentLgWinNum.slice();
      tempArr[rankIndxToIncrease] = tempArr[rankIndxToIncrease] + 1;
      this.currentLgWinNum = tempArr;
    },
    resetCurrentLgWinNum() {
      this.currentLgWinNum = InitialValues.currentLgWinNum;
    },

    saveChar() {
      SaveCharacter(this);
    },

    startNewGame() {
      //set init vals
      Object.assign(this, InitialValues);
      // Saved data only overwritten if setup complete
    },

    createSaveFile() {
      ExportCharacter(this);
    },

    importSaveFile(importedObj) {
      try {
        Object.assign(this, importedObj);
        window.alert("Character imported successfully");
        this.saveChar();
      } catch (e) {
        window.alert("Failed character import", e);
      }
    },

    // Overwrite data with previously saved values
    ...valFromStorage
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

const CreateSaveObj = cntxt => {
  const Obj = {};
  Object.keys(cntxt).forEach(key => {
    if (typeof cntxt[key] !== "function") {
      Obj[key] = cntxt[key];
    }
  });
  return Obj;
};

const ExportCharacter = cntxt => {
  const Obj = CreateSaveObj(cntxt);
  createFileFromObj(Obj, Obj.name);
};

const SaveCharacter = cntxt => {
  const Obj = CreateSaveObj(cntxt);

  StoreObj(Obj);
};
