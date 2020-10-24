import pornstarA from "../combatants/pornstar-a";
import icon from "../assets/logo/vagina.png";

export default {
  id: "pornstarA",
  name: "Stars of Porn - A",
  description: "The hottest stars of porn thinks they can win the league.",
  initialPoints: 70,
  renownRequired: 0,
  entryCost: 50,
  colors: {
    bgA: "#0c6684",
    bgB: "#51bde0",
    border: "#0c6684",
  },
  icon,
  ranks: [
    {
      name: "Rookies",
      creditsWin: 5,
      pointsWin: 5,
      combatants: [
        pornstarA.elizaJane,
        pornstarA.jennaIvory,
        pornstarA.bunny,
        pornstarA.emilyWillis,
      ],
    },
    {
      name: "Amateurs",
      creditsWin: 10,
      pointsWin: 10,
      reqWins: 2,
      combatants: [pornstarA.jenniLee, pornstarA.lilyCarter, pornstarA.riley],
    },
    {
      name: "Pro",
      creditsWin: 20,
      pointsWin: 20,
      reqWins: 1,
      combatants: [pornstarA.bree, pornstarA.angela],
    },
  ],
};
