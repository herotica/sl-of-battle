import Megumin from "../../assets/combatants/isekai-league/megumin.png";
import MeguminIcon from "../../assets/combatants/isekai-league/megumin-icon.png";
import MeguminWin from "../../assets/combatants/isekai-league/megumin-win.png";
import MeguminLose from "../../assets/combatants/isekai-league/megumin-lose.png";

import Aqua from "../../assets/combatants/isekai-league/aqua.png";
import AquaIcon from "../../assets/combatants/isekai-league/aqua-icon.png";
import AquaWin from "../../assets/combatants/isekai-league/aqua-win.png";
import AquaLose from "../../assets/combatants/isekai-league/aqua-lose.png";

import Darkness from "../../assets/combatants/isekai-league/darkness.png";
import DarknessIcon from "../../assets/combatants/isekai-league/darkness-icon.png";
import DarknessWin from "../../assets/combatants/isekai-league/darkness-win.png";
import DarknessLose from "../../assets/combatants/isekai-league/darkness-lose.png";

import Konosuba from "../../assets/events/konosuba.jpg";
import KonosubaLg1 from "../../assets/events/konosuba-lg1.jpg";
import KonosubaLg2 from "../../assets/events/konosuba-lg2.jpg";

export const seriesId = "KonoSuba";

export default {
  megumin: {
    seriesId,
    id: "megumin",
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
      "Mei's soft little tongue slips it's squishy way into xxxx's mouth, exploring ==== mouth passionately, and tasting all over ==== tongue.",
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
    orgasmLimit: 3,
  },
  aqua: {
    seriesId,
    id: "aqua",
    name: "Aqua",
    description:
      "An ex-goddess of water who used to guide humans to the afterlife.",
    img: Aqua,
    icon: AquaIcon,
    opWinImg: AquaWin,
    opLoseImg: AquaLose,
    gender: "female",
    isWoman: true,
    hasCock: false,
    race: "Human",
    bodyShape: "curvy",
    eyeColor: "blue",
    hairColor: "blue",
    skinColor: "fair",
    height: 2,
    penisSize: 0,
    breastSize: 3,
    vaginaSize: 2,
    anusSize: 3,
    throatSize: 2,
    prefAttack: "touch",
    prefTarget: "breasts",
    uniqueAttackText:
      "Aqua rubs her supple tits eagerly against xxxx's, tickling her nipples against her opponent's.",
    roughPlayLvl: 15,
    seductionResistance: 20,
    grapplingProwess: 20,
    tongueProwess: 25,
    touchProwess: 30,
    cockProwess: 15,
    vaginaProwess: 25,
    anusProwess: 15,
    touchResistance: 15,
    breastResistance: 25,
    mouthResistance: 20,
    cockResistance: 15,
    vaginaResistance: 25,
    anusResistance: 25,
    orgasmLimit: 3,
  },
  darkness: {
    seriesId,
    id: "darkness",
    name: "Darkness",
    description: "A noble & serious Crusader, and also a masochist.",
    img: Darkness,
    icon: DarknessIcon,
    opWinImg: DarknessWin,
    opLoseImg: DarknessLose,
    gender: "female",
    isWoman: true,
    hasCock: false,
    race: "Human",
    bodyShape: "curvy",
    eyeColor: "blue",
    hairColor: "blonde",
    skinColor: "fair",
    height: 2,
    penisSize: 0,
    breastSize: 4,
    vaginaSize: 3,
    anusSize: 3,
    throatSize: 4,
    prefAttack: "anus",
    prefTarget: "cock",
    uniqueAttackText:
      "Darkness mounts you like an animal, jamming your hard cock deep into her back passage, she screams as sh forces you deep into her.",
    roughPlayLvl: 40,
    seductionResistance: 20,
    grapplingProwess: 20,
    tongueProwess: 20,
    touchProwess: 20,
    cockProwess: 15,
    vaginaProwess: 25,
    anusProwess: 35,
    touchResistance: 25,
    breastResistance: 65,
    mouthResistance: 10,
    cockResistance: 35,
    vaginaResistance: 25,
    anusResistance: 55,
    orgasmLimit: 3,
  },
};

export const Events = [
  {
    requires: ["megumin", "aqua", "darkness"],
    reqMale: true,
    reqFemale: false,
    title: "1 cock 3 mouths",
    icon: Konosuba,
    imgs: [KonosubaLg2, KonosubaLg1],
    story: (p) => `Story for ${p.name}`,
  },
];
