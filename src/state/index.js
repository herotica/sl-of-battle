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
        gender: 'Female',
        setGender(newVal) {
            this.gender = newVal;
        },
        race: 'Human',
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

        // Items
        RenownLv: 0, // displays 13 as lv1 xp3, max 100
        ChangeRenown(changeVal) {
            if (this.RenownLv + changeVal > 100) {
                this.RenownLv = 100
            } else if (this.RenownLv + changeVal < 0) {
                this.RenownLv = 0
            } else {
                this.RenownLv = this.RenownLv + changeVal;
            }
        },
        leagueCredits: 0, // reset after leaving a league
        changeLeagueCredits(changeVal) {
            if (this.leagueCredits + changeVal < 0) {
                this.leagueCredits = 0
            } else {
                this.leagueCredits = this.leagueCredits + changeVal
            }
        },
        leaguePoints: 0, // Accrued accross leagues, spent on medals, sponsoring
        changeLeaguePoints(changeVal) {
            if (this.leaguePoints + changeVal < 0) {
                this.leaguePoints = 0
            } else {
                this.leaguePoints = this.leaguePoints + changeVal
            }
        },
        cash: 0, // Accrued accross leagues, spent on upgrades / training
        changeCash(changeVal) {
            if (this.cash + changeVal < 0) {
                this.cash = 0
            } else {
                this.cash = this.cash + changeVal
            }
        },
        // Logic
        currentRoom: Rooms.newGame,
        setRoom(RoomString) {
            this.currentRoom = RoomString;
        }
    };
}

const GlobalContext = React.createContext();

export const GlobalContextProvider = ({ children }) => {
    const store = useLocalStore(createGlobalStore);
    return (
        <GlobalContext.Provider value={store}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalDataStore = () => {
    const store = React.useContext(GlobalContext);
    if (!store) {
        throw new Error("useStore requires a StoreProvider.");
    }
    return store;
};