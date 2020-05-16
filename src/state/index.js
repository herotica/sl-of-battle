import React from "react";
import { useLocalStore } from "mobx-react-lite";

export function createGlobalStore() {
    return {
        name: "None",
        setName(newName) {
            this.name = newName;
        },
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