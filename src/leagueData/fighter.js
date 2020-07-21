import Tekken from "../combatants/fighter/tekken";
import Doa from "../combatants/fighter/doa";
import icon from "../assets/logo/fight.png";

export default {
  id: "fighters",
  name: "Fighters",
  description: "The hottest fighters duke it out in battle.",
  initialPoints: 60,
  renownRequired: 8,
  entryCost: 450,
  colors: {
    bgA: "#0c0803",
    bgB: "#b76219",
    border: "#0c0803",
  },
  icon,
  ranks: [
    {
      name: "Rookies",
      creditsWin: 5,
      pointsWin: 5,
      combatants: [Doa.christie, Doa.marieRose, Tekken.emilie, Tekken.xiaoyu],
    },
    {
      name: "Amateurs",
      creditsWin: 10,
      pointsWin: 10,
      reqWins: 2,
      combatants: [Doa.lisa, Doa.hitomi, Tekken.asuka],
    },
    {
      name: "Pro",
      creditsWin: 20,
      pointsWin: 20,
      reqWins: 1,
      combatants: [Tekken.nina, Doa.helena],
    },
  ],
};
