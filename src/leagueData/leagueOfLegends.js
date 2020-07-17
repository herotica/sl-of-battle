import leagueoflegends from "../combatants/league-of-legends";
import icon from "../assets/logo/league-of-legends.png";
import leagueOfLegends from "../combatants/league-of-legends";

export default {
  id: "leagueoflegends",
  name: "League of Legends",
  description:
    "The sweetest fighters from the League of Legends face off for battle.",
  initialPoints: 60,
  renownRequired: 6,
  entryCost: 350,
  colors: {
    bgA: "#f1cf48",
    bgB: "#51bde0",
    border: "#51bde0",
  },
  icon,
  ranks: [
    {
      name: "Rookies",
      creditsWin: 5,
      pointsWin: 5,
      combatants: [
        leagueoflegends.sarah,
        leagueoflegends.luxanna,
        leagueoflegends.ahri,
        leagueoflegends.akali,
      ],
    },
    {
      name: "Amateurs",
      creditsWin: 10,
      pointsWin: 10,
      reqWins: 2,
      combatants: [
        leagueoflegends.jinx,
        leagueoflegends.nidalee,
        leagueoflegends.sonaBuvelle,
      ],
    },
    {
      name: "Pro",
      creditsWin: 20,
      pointsWin: 20,
      reqWins: 1,
      combatants: [leagueoflegends.katarina, leagueOfLegends.riven],
    },
  ],
};
