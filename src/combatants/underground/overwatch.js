//interface for getting data
import Mei from "../../assets/body-type/chubby.png";

const Overwatch = {
  mei: {
    name: "Mei",
    description: "The curvaceous, busty Mei, she doesn't look confident.",
    img: Mei,
    gender: "female",
    isWoman: true,
    hasCock: false,
    race: "Human",
    bodyShape: "chubby",
    eyeColor: "brown",
    hairColor: "brown",
    skinColor: "fair",
    height: 2,
    penisSize: 0,
    breastSize: 5,
    vaginaSize: 3,
    anusSize: 2,
    throatSize: 3,
    // Pref properties effect 'AI'
    prefAttack: "touch",
    prefTarget: "mouth",
    uniqueAttackText: "Mei's gentle fingers explore your tongue & mouth",
    roughPlayLvl: -4, // how responds to domination either -hates or +likes
    // Prowess is capability
    seductionResistance: 15,
    grapplingProwess: 5,
    tongueProwess: 15,
    touchProwess: 25,
    cockProwess: 15,
    vaginaProwess: 15,
    anusProwess: 15,
    // -- resistance is ability to endure pleasure, 1 - 100
    touchResistance: 15,
    breastResistance: 10,
    mouthResistance: 25,
    cockResistance: 5,
    vaginaResistance: 25,
    anusResistance: 15,
    orgasmLimit: 3
  }
};

export default Overwatch;
