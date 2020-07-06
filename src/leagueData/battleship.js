import FireEmblem from "../combatants/jrpg/FireEmblem";
import GranblueFantasy from "../combatants/jrpg/GranblueFantasy";
import icon from "../assets/logo/jrpg.png";

export default {
  id: "battleship",
  name: "League 4; The Battleship League",
  description: "The prettiest battleship mascots duke it out.",
  initialPoints: 50,
  renownRequired: 2,
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
        FireEmblem.corrin,
        FireEmblem.lucina,
        GranblueFantasy.vikala,
        GranblueFantasy.silva,
      ],
    },
    {
      name: "Amateurs",
      creditsWin: 10,
      pointsWin: 10,
      reqWins: 2,
      combatants: [
        FireEmblem.lyn,
        FireEmblem.lysithea,
        GranblueFantasy.ferry,
        GranblueFantasy.djeeta,
      ],
    },
    {
      name: "Pro",
      creditsWin: 20,
      pointsWin: 20,
      reqWins: 1,
      combatants: [FireEmblem.edelgard, GranblueFantasy.cagliostro],
    },
  ],
};
