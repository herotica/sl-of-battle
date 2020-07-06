import FireEmblem from "../combatants/jrpg/FireEmblem";
import icon from "../assets/logo/jrpg.png";

export default {
  id: "jrpga",
  name: "League 3; The JRPG League",
  description: "The most beautiful RPG maiden's are fighting for glory.",
  initialPoints: 50,
  renownRequired: 1,
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
      combatants: [FireEmblem.corrin, FireEmblem.lucina],
    },
    {
      name: "Amateurs",
      creditsWin: 10,
      pointsWin: 10,
      reqWins: 2,
      combatants: [FireEmblem.lyn, FireEmblem.lysithea],
    },
    {
      name: "Pro",
      creditsWin: 20,
      pointsWin: 20,
      reqWins: 1,
      combatants: [FireEmblem.edelgard],
    },
  ],
};
