import KonoSuba from "../combatants/isekai/KonoSuba";
import SwordArt from "../combatants/isekai//SwordArt";
import howNotToSummonDemonLord from "../combatants/isekai/howNotToSummonDemonLord";
import icon from "../assets/logo/isekai.png";

export default {
  id: "isekai",
  name: "League 1; The Isekai League",
  description: "The hottest girls from virtual worlds fight for glory.",
  initialPoints: 50,
  renownRequired: 0,
  entryCost: 50,
  colors: {
    bgA: "yellow",
    bgB: "darkgoldenrod",
    border: "yellow",
  },
  icon,
  ranks: [
    {
      name: "Rookies",
      creditsWin: 5,
      pointsWin: 5,
      combatants: [
        KonoSuba.megumin,
        SwordArt.kirigayaSuguha,
        SwordArt.leafa,
        SwordArt.sinon,
      ],
    },
    {
      name: "Amateurs",
      creditsWin: 10,
      pointsWin: 10,
      reqWins: 2,
      combatants: [
        KonoSuba.aqua,
        howNotToSummonDemonLord.remGalleu,
        SwordArt.konnoYuuki,
      ],
    },
    {
      name: "Pro",
      creditsWin: 20,
      pointsWin: 20,
      reqWins: 1,
      combatants: [KonoSuba.darkness, SwordArt.yuukaAsuna],
    },
  ],
};
