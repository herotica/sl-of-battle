import JavA from "../combatants/jav-a";
import icon from "../assets/logo/battleship.svg";
import javA from "../combatants/jav-a";

export default {
  id: "jav-a",
  name: "Jav - A",
  description: "The softest JAV stars fight for glory.",
  initialPoints: 60,
  renownRequired: 2,
  entryCost: 150,
  colors: {
    bgA: "#65daaa",
    bgB: "#5c70a9",
    border: "#65daaa",
  },
  icon,
  ranks: [
    {
      name: "Rookies",
      creditsWin: 5,
      pointsWin: 5,
      combatants: [
        JavA.YuiHatano,
        JavA.AsahiMizuno,
        JavA.Aika,
        JavA.Julia
      ],
    },
    {
      name: "Amateurs",
      creditsWin: 10,
      pointsWin: 10,
      reqWins: 2,
      combatants: [
        JavA.HibikiOtsuki,
        JavA.NozomiArimura,
        javA.TsukasaAoi
      ],
    },
    {
      name: "Pro",
      creditsWin: 20,
      pointsWin: 20,
      reqWins: 1,
      combatants: [JavA.ShuriAtomi, JavA.EimiFukada],
    },
  ],
};
