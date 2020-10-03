import { PenisSize } from "../../constants";

import Megumin from "../../assets/combatants/isekai-league/megumin.png";
import MeguminIcon from "../../assets/combatants/isekai-league/megumin-icon.png";
import MeguminWin from "../../assets/combatants/isekai-league/megumin-win.png";
import MeguminLose from "../../assets/combatants/isekai-league/megumin-lose.png";
import MeguminLes from "../../assets/combatants/isekai-league/megumin-les.png";

import Aqua from "../../assets/combatants/isekai-league/aqua.png";
import AquaIcon from "../../assets/combatants/isekai-league/aqua-icon.png";
import AquaWin from "../../assets/combatants/isekai-league/aqua-win.png";
import AquaLose from "../../assets/combatants/isekai-league/aqua-lose.png";
import AquaLes from "../../assets/combatants/isekai-league/aqua-les.png";

import Darkness from "../../assets/combatants/isekai-league/darkness.png";
import DarknessIcon from "../../assets/combatants/isekai-league/darkness-icon.png";
import DarknessWin from "../../assets/combatants/isekai-league/darkness-win.png";
import DarknessLose from "../../assets/combatants/isekai-league/darkness-lose.png";
import DarknessLes from "../../assets/combatants/isekai-league/darkness-les.png";

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
    opLoseLesImg: MeguminLes,
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
    opLoseLesImg: AquaLes,
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
    opLoseLesImg: DarknessLes,
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
    story: (p) => `${p.name} walked into the bedroom and looked at the assembled girls, ${p.pn.she} walked over to Darkness, admiring the blonde's ample, perky rack. The girl looked at ${p.pn.her} shyly, and ${p.name} pulled her close by tugging under her sports bra.

    "What do we have here?"
  
    ${p.pn.Cshe} said as another hand slipped under the tight latex, and began to knead the soft breastmeat, Darkness looked away reddening at the pleasurable rub. Lifting the girls top up, ${p.name} revealed the jiggly pair along with a pair of thick squishy nipples, which ${p.pn.she} hungrily explored with ${p.pn.her} tongue. The other girls watched, their lust growing as Darkness danced on her tiptoes trying to deny herself the waves of pleasure. Once ${p.name} had fully sucked each now erect nipple ${p.pn.she} began to lick the girls soft face.
  
    "You are pretty little one, now get on you knees."
    "Yes master."
    "Good slave, now open your mouth."
  
  ${p.name} smiled as Darkness whimpered at the release of ${p.name}'s ${PenisSize[p.penisSize]}, erect, meaty cock. Darkness tried to avoid it, but ${p.name} pushed it swiftly into her mouth, biting ${p.pn.her} lip as the girl's pleading eyes looked up at her. Darkness maintained eye contact as ${p.pn.she} began to move ${p.pn.her} hips, deepthroating slowly but forcefully, and revelling in each expelled gag. ${p.pn.Cshe} then began energetically assualting the girls face, slowly ${p.name} began to feel ${p.pn.her} sexual energy rise. After a while Darkness's mascara began to run, and ${p.name} began to feel ready, pulling free, ${p.pn.she} looked dominantly down on Darkness.
  
    "Lean back and show me those delightful fresh young tits of yours."
  
  Darkness leant back, and ${p.name} began to massage ${p.pn.her} pulsing rod, then suddenly ${p.pn.she} released, thick, creamy ropes poured from ${p.pn.her} cock, covering Darkness's pert breasts in a thick layer of fresh, hot cum, ${p.pn.she} smiled at Darkness's shy, but lustful face.
  
    "What a sight my little cumslut!"
  
  ${p.name} took a picture with ${p.pn.her} phone, then pushed the scared looking girl slowly to her back, spreading her legs and massaging her soft panties. Admiring the slow flow of cum dripping down her breasts, ${p.name} began to tease her soft pussy lips with ${p.pn.her} throbbing tip, turning ${p.pn.she} spoke to the other girls.
  
    "Megumin, Aqua, Darkness's poor tits are a little messy, could you come over and clean them."
  
  The girls moved hurriedly.
  
    "Looks like someones hungry for my freshest batch of spunk?"
  
  Megumin looked apologetically at Darkness, before hungrily cleaning the girl's nipple, suckling it long after it was cleaned of cum. Aqua joined, lapping like a cat at the sticky feast, Darkness closed her eyes and shuddered at the soft wet licks. ${p.name} pulled the panies up, and slid ${p.pn.self}self in, and slowly began ploughing at the girl's soft, wet cunt. Noisly ${p.name} worked Darkness's pussy till she began moaning loudly. Aqua and Megumin, continued to clean Darkness's hard nipples, hungrily pleasuring themselves the taste of her soft skin. Aqua continued to mop up the loose strands of cum, lathering all of Darkness's sides with her cute little licks, whilst Megumin hungrily moved between polished her nipples, and rubbing her soft bust against Darkness's side.
  
  Again, balls ready with fresh cum, ${p.name} pulled ${p.pn.self}self from the tight young cunt, and stood on ${p.pn.her} feet, smiling down on the three hungry girls who suddenly looked up.
  
    "Seconds, my sweet little cumsluts."
  
  Megumin presented her open mouth, tongue out, little trickles of cum dripping down her chin, Darkness, pushed herself up, and eagerly lapped them up, and gently licking the bottom of Megumin's tongue, Aqua joined as the three girls present open mouths.
  ${p.name}'s dick exploded, cum bursting forth, expertly aimed, it spattered onto all three of the females tongues, faces and hair. Megumin groaned in pleasure, then looked betrayed as Aqua & Darkness hungrily tongue fucked, swapping cum enthusiastically.
  Megumin then looked at ${p.name}'s still throbbing cock, and began to suck on it, milking the last few drops of cum as she looked up submissively through the streaks of cum over her eyes, up at ${p.name}.
  
  ${p.name} stroked her hair.

  "God your a sweet little thing, show me what you've earned before you swallow."

  Pumping the last tendril of jizz from ${p.pn.her} balls, Megumin leant back and showed the ample collection of transparent goo floating in her little mouth, before swallowing the entire load, then smiled proudly. ${p.name} grunted animalistically, and crouching wiped the cum and spit off her cock over both Megumin's small breasts, then looked to the two other girls still rubbing each others bodies and french kissing.
  
  "You have a job here girls"
  
  And presented them with megumin's messy rack, the girl reddedned as Aqua and Darkness proceeded to slather her chest with licks and pleasure her small nipples, eliciting small squeeks of pleasure as they did.
  
  ${p.name} smiled at the show.

  "You are a beautiful group of girls aren't you."
  `,
  },
];
