import OnePiece from "../combatants/superhero/OnePiece";
import BokuNoHero from "../combatants/superhero/BokuNoHero";
import icon from "../assets/logo/superhero.png";

export default {
  id: "superpower",
  name: "League 2; The Superhero League",
  description:
    "The sexiest and most powerful girls from superhero anime, thankfully their powers have been dulled, as per rules for league entry.",
  initialPoints: 50,
  renownRequired: 0,
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
        OnePiece.nicoRobin,
        OnePiece.vinsmokeReiju,
        BokuNoHero.jirouKyouka,
        BokuNoHero.ochacoUraraka,
      ],
    },
    {
      name: "Amateurs",
      creditsWin: 10,
      pointsWin: 10,
      reqWins: 2,
      combatants: [
        OnePiece.boaHancock,
        BokuNoHero.momoYaoyorozu,
        BokuNoHero.utsushimiCamie,
      ],
    },
    {
      name: "Pro",
      creditsWin: 20,
      pointsWin: 20,
      reqWins: 1,
      combatants: [BokuNoHero.asuiTsuyu, OnePiece.nami],
    },
  ],
};
