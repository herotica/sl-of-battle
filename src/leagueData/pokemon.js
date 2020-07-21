import Pokemon from "../combatants/pokemon";
import icon from "../assets/logo/pokeball.png";

export default {
  id: "Pokémon",
  name: "The Pokémon League",
  description:
    "The cutest trainers from the land of pokémon fight their hardest.",
  initialPoints: 80,
  renownRequired: 5,
  entryCost: 300,
  colors: {
    bgA: "#c10808",
    bgB: "#ffffff",
    border: "#c10808",
  },
  icon,
  ranks: [
    {
      name: "Rookies",
      creditsWin: 5,
      pointsWin: 5,
      combatants: [
        Pokemon.newSerena,
        Pokemon.moon,
        Pokemon.lillie,
        Pokemon.dawn,
        Pokemon.green,
        Pokemon.hilda,
        Pokemon.gloria,
      ],
    },
    {
      name: "Amateurs",
      creditsWin: 10,
      pointsWin: 10,
      reqWins: 3,
      combatants: [
        Pokemon.Nessa,
        Pokemon.serena,
        Pokemon.rosa,
        Pokemon.may,
        Pokemon.marnie,
      ],
    },
    {
      name: "Pro",
      creditsWin: 20,
      pointsWin: 20,
      reqWins: 1,
      combatants: [Pokemon.misty, Pokemon.jessie, Pokemon.cynthia],
    },
  ],
};
