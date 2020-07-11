import KantaiCollection from "../combatants/battleship/KantaiCollection";
import AzurLane from "../combatants/battleship/AzurLane";
import icon from "../assets/logo/battleship.svg";

export default {
  id: "battleship",
  name: "League 4; The Battleship League",
  description: "The prettiest battleship mascots duke it out.",
  initialPoints: 50,
  renownRequired: 2,
  entryCost: 150,
  colors: {
    bgA: "#8fcfc7",
    bgB: "#378291",
    border: "#8fcfc7",
  },
  icon,
  ranks: [
    {
      name: "Rookies",
      creditsWin: 5,
      pointsWin: 5,
      combatants: [
        KantaiCollection.hibiki,
        KantaiCollection.maxSchultz,
        KantaiCollection.akagi,
        AzurLane.belfast,
        AzurLane.leMalin,
      ],
    },
    {
      name: "Amateurs",
      creditsWin: 10,
      pointsWin: 10,
      reqWins: 2,
      combatants: [
        KantaiCollection.kaga,
        KantaiCollection.zuikaku,
        AzurLane.PrinzEugen,
      ],
    },
    {
      name: "Pro",
      creditsWin: 20,
      pointsWin: 20,
      reqWins: 1,
      combatants: [KantaiCollection.shimakaze, AzurLane.atago],
    },
  ],
};
