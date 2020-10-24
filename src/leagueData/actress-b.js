import A from "../combatants/actress-b";
import icon from "../assets/logo/acting2.png";

export default {
  id: "actressesB",
  name: "Sirens of Acting",
  description: "More seductive ladies of acting fight for victory.",
  initialPoints: 60,
  renownRequired: 4,
  entryCost: 250,
  colors: {
    bgA: "#ff9151",
    bgB: "#e84d34",
    border: "#d60000",
  },
  icon,
  ranks: [
    {
      name: "Rookies",
      creditsWin: 5,
      pointsWin: 5,
      combatants: [
        A.KatherynWinnick,
        A.LilyCollins,
        A.OliviaWilde,
        A.NataliePortman,
      ],
    },
    {
      name: "Amateurs",
      creditsWin: 10,
      pointsWin: 10,
      reqWins: 2,
      combatants: [A.KateMara, A.RooneyMara, A.DaisyRidley],
    },
    {
      name: "Pro",
      creditsWin: 20,
      pointsWin: 20,
      reqWins: 1,
      combatants: [A.FelicityJones, A.AlexandraDaddario],
    },
  ],
};
