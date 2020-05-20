//interface for getting data

const Data = {
  underground: {
    tierA: {
      mei: {
        name: "Mei",
        description: "Mei overwatch"
      }
    }
  }
};

export const keys = {
  underground: {
    tierA: Object.keys(Data.underground.tierA)
  }
};

export default Data;
