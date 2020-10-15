import ActressessA from "../combatants/actress-a";
import icon from "../assets/logo/battleship.svg";

export default {
  id: "actressA",
  name: "Actresses",
  description: "The prettiest girls from hollywood.",
  initialPoints: 60,
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
        ActressessA.MeganFox,
        ActressessA.KieraKnightly,
        ActressessA.AlexisBledel,
        ActressessA.AlisonBrie,
      ],
    },
    {
      name: "Amateurs",
      creditsWin: 10,
      pointsWin: 10,
      reqWins: 2,
      combatants: [
        ActressessA.EmmaStone,
        ActressessA.EmmaRoberts,
        ActressessA.LaurenCohen,
      ],
    },
    {
      name: "Pro",
      creditsWin: 20,
      pointsWin: 20,
      reqWins: 1,
      combatants: [ActressessA.EmmaWatson, ActressessA.AnneHathaway],
    },
  ],
};
