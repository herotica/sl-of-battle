import NicoRobin from "../../assets/combatants/superpower/nico-robin.png";
import NicoRobinIcon from "../../assets/combatants/superpower/nico-robin-icon.png";
import NicoRobinWin from "../../assets/combatants/superpower/nico-robin-win.png";
import NicoRobinLose from "../../assets/combatants/superpower/nico-robin-lose.png";

export default {
  name: "Rookies",
  creditsWin: 5,
  pointsWin: 5,
  combatants: [
    {
      name: "Nico Robin",
      description: "Also known by her epithet 'Devil Child' and the 'Light of the Revolution', she is the archaeologist of the Straw Hat Pirates. She is the sole survivor of the destroyed island of Ohara.",
      img: NicoRobin,
      icon: NicoRobinIcon,
      opWinImg: NicoRobinWin,
      opLoseImg: NicoRobinLose,
      gender: "female",
      isWoman: true,
      hasCock: false,
      race: "Human",
      bodyShape: "buxom",
      eyeColor: "blue",
      hairColor: "black",
      skinColor: "fair",
      height: 3,
      penisSize: 0,
      breastSize: 4,
      vaginaSize: 2,
      anusSize: 3,
      throatSize: 1,
      // Pref properties effect 'AI'
      prefAttack: "touch",
      prefTarget: "mouth",
      uniqueAttackText:
        "Nico pushes her heavy bust into ++++'s mouth, forcing her to taste her delicious breasts.",
      roughPlayLvl: -2, // how responds to domination either -hates or +likes
      // Prowess is capability
      seductionResistance: 25,
      grapplingProwess: 15,
      tongueProwess: 10,
      touchProwess: 25,
      cockProwess: 15,
      vaginaProwess: 20,
      anusProwess: 15,
      // -- resistance is ability to endure pleasure, 1 - 100
      touchResistance: 25,
      breastResistance: 10,
      mouthResistance: 32,
      cockResistance: 25,
      vaginaResistance: 35,
      anusResistance: 25,
      orgasmLimit: 3
    }
  ]
};
