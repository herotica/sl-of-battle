import pornstarB from "../combatants/pornstar-b";
import icon from "../assets/logo/league-of-legends.png";

export default {
  id: "pornstarA",
  name: "Stars of Porn - B",
  description: "More sexy girls from the world of porn.",
  initialPoints: 70,
  renownRequired: 1,
  entryCost: 80,
  colors: {
    bgA: "darkred",
    bgB: "red",
    border: "darkred",
  },
  icon,
  ranks: [
    {
      name: "Rookies",
      creditsWin: 5,
      pointsWin: 5,
      combatants: [
        pornstarB.rileeMarks,
        pornstarB.hollyMichaels,
        pornstarB.emilyAddison,
        pornstarB.elsaJean,
      ],
    },
    {
      name: "Amateurs",
      creditsWin: 10,
      pointsWin: 10,
      reqWins: 2,
      combatants: [
        pornstarB.miaMalkova,
        pornstarB.naomiWoods,
        pornstarB.miaKhalifa,
      ],
    },
    {
      name: "Pro",
      creditsWin: 20,
      pointsWin: 20,
      reqWins: 1,
      combatants: [pornstarB.kaydenKross, pornstarB.sashaGrey],
    },
  ],
};
