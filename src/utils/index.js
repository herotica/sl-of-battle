// Browser LocalStorage
const LocalstorageKey = "slutsofbattle";

export const GetFromStorage = () => {
  const Data = localStorage.getItem(LocalstorageKey);
  try {
    return JSON.parse(Data);
  } catch (e) {
    return false;
  }
};

export const StoreObj = Data => {
  localStorage.setItem(LocalstorageKey, JSON.stringify(Data));
};
