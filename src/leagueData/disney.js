import Disney from "../combatants/disney";
import icon from "../assets/logo/disney.png";

export default {
  id: "disney",
  name: "Disney",
  description: "The prettiest princesses from disney fight for victory.",
  initialPoints: 60,
  renownRequired: 7,
  entryCost: 400,
  colors: {
    bgA: "#746bab",
    bgB: "#1ab28a",
    border: "#746bab",
  },
  icon,
  ranks: [
    {
      name: "Rookies",
      creditsWin: 5,
      pointsWin: 5,
      combatants: [Disney.megara, Disney.aurora, Disney.anna, Disney.rapunzel],
    },
    {
      name: "Amateurs",
      creditsWin: 10,
      pointsWin: 10,
      reqWins: 2,
      combatants: [Disney.jasmine, Disney.mulan, Disney.belle],
    },
    {
      name: "Pro",
      creditsWin: 20,
      pointsWin: 20,
      reqWins: 1,
      combatants: [Disney.ariel, Disney.elsa],
    },
  ],
};
