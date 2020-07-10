import Toons from "../combatants/na-toons/toons";
import KimPossible from "../combatants/na-toons/KimPossible";
import icon from "../assets/logo/tv.svg";

export default {
  id: "natoons",
  name: "North American Toons",
  description: "The hottest toons from north america, are ready for action.",
  initialPoints: 60,
  renownRequired: 3,
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
      combatants: [
        Toons.sam,
        Toons.daphne,
        Toons.alex,
        KimPossible.bonnie,
        KimPossible.ann,
      ],
    },
    {
      name: "Amateurs",
      creditsWin: 15,
      pointsWin: 15,
      reqWins: 2,
      combatants: [Toons.velma, Toons.mandy, Toons.april, KimPossible.shego],
    },
    {
      name: "Pro",
      creditsWin: 30,
      pointsWin: 30,
      reqWins: 1,
      combatants: [Toons.clover, KimPossible.kim],
    },
  ],
};
