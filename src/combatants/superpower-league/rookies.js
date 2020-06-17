import Megumin from "../../assets/combatants/isekai-league/megumin.png";
import MeguminIcon from "../../assets/combatants/isekai-league/megumin-icon.png";
import MeguminWin from "../../assets/combatants/isekai-league/megumin-win.png";
import MeguminLose from "../../assets/combatants/isekai-league/megumin-lose.png";

export default {
  name: "Rookies",
  creditsWin: 5,
  pointsWin: 5,
  combatants: [
    {
      name: "Megumin",
      description: "A cute young Arch Wizard of the Crimson Demon Clan.",
      img: Megumin,
      icon: MeguminIcon,
      opWinImg: MeguminWin,
      opLoseImg: MeguminLose,
      gender: "female",
      isWoman: true,
      hasCock: false,
      race: "Human",
      bodyShape: "petite",
      eyeColor: "red",
      hairColor: "black",
      skinColor: "fair",
      height: 1,
      penisSize: 0,
      breastSize: 1,
      vaginaSize: 1,
      anusSize: 2,
      throatSize: 1,
      // Pref properties effect 'AI'
      prefAttack: "tongue",
      prefTarget: "mouth",
      uniqueAttackText:
        "Mei's soft little tongue slips it's squishy way into ++++'s mouth, exploring ==== mouth passionately, and tasting all over ==== tongue.",
      roughPlayLvl: -12, // how responds to domination either -hates or +likes
      // Prowess is capability
      seductionResistance: 15,
      grapplingProwess: 5,
      tongueProwess: 30,
      touchProwess: 25,
      cockProwess: 15,
      vaginaProwess: 20,
      anusProwess: 15,
      // -- resistance is ability to endure pleasure, 1 - 100
      touchResistance: 15,
      breastResistance: 20,
      mouthResistance: 32,
      cockResistance: 5,
      vaginaResistance: 15,
      anusResistance: 25,
      orgasmLimit: 3
    }
  ]
};
