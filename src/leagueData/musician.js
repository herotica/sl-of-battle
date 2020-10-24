import M from "../combatants/musician";
import icon from "../assets/logo/music.png";

export default {
  id: "music",
  name: "Musicians",
  description: "The hottest musicians are ready for action.",
  initialPoints: 60,
  renownRequired: 3,
  entryCost: 200,
  colors: {
    bgA: "#2f7117",
    bgB: "#28ce44",
    border: "#2f7117",
  },
  icon,
  ranks: [
    {
      name: "Rookies",
      creditsWin: 5,
      pointsWin: 5,
      combatants: [M.HilaryDuff, M.Lana, M.TaylorMomsen, M.DuaLipa],
    },
    {
      name: "Amateurs",
      creditsWin: 15,
      pointsWin: 15,
      reqWins: 2,
      combatants: [M.Cheryl, M.KatyPerry, M.Avril],
    },
    {
      name: "Pro",
      creditsWin: 30,
      pointsWin: 30,
      reqWins: 1,
      combatants: [M.SelenaGomez, M.TaylorSwift],
    },
  ],
};
