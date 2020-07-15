import Marvel from "../combatants/marvel/marvel";
import icon from "../assets/logo/marvel.png";

export default {
  id: "marvel",
  name: "The Marvel League",
  description: "The most seductive ladies of marvel fight for victory.",
  initialPoints: 60,
  renownRequired: 4,
  entryCost: 250,
  colors: {
    bgA: "#ff9151",
    bgB: "#ffb4a8",
    border: "#d60000",
  },
  icon,
  ranks: [
    {
      name: "Rookies",
      creditsWin: 5,
      pointsWin: 5,
      combatants: [
        Marvel.kittyPryde,
        Marvel.emmaFrost,
        Marvel.blackWidow,
        Marvel.blackCat,
      ],
    },
    {
      name: "Amateurs",
      creditsWin: 10,
      pointsWin: 10,
      reqWins: 2,
      combatants: [Marvel.rogue, Marvel.jeanGrey, Marvel.gwenStacy],
    },
    {
      name: "Pro",
      creditsWin: 20,
      pointsWin: 20,
      reqWins: 1,
      combatants: [Marvel.maryJane, Marvel.x23],
    },
  ],
};
