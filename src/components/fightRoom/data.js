import { FightRooms } from "../../constants";
import UndergroundBg from "../../assets/room/underground.jpg";
import {
  isFightStatCompWin,
  fuckArousalCost,
  receiverArousalGain,
  TestStatTrain,
} from "../../utils/maths";
import { CharKeys } from "../../state";
import { FightTxtInterface } from "../../eventText/fightText";
import { replacer } from "../../eventText/replacers";

export const Strings = {
  title: "SLUT FIGHT",
  explain: "Bring your opponent to orgasm, before they make you",
};

export const RoomImages = {
  [FightRooms.underground]: UndergroundBg,
  [FightRooms.leagueA]: UndergroundBg,
};

export const FightPhaseTypes = [
  ["start"],
  ["incontrol", "seduced", "controlled"],
  ["pleasure", "dominate", "coy", "animal", "enjoy", "resist"],
  ["tongue", "touch", "cock", "vagina", "anus", "seducedopponent", "opponent"],
  ["touch", "breasts", "mouth", "cock", "vagina", "anus", "opponent"],
];

const fighterAttackOptions = ["tongue", "touch", "vagina", "anus"];
const fighterTargetFemOpt = ["touch", "breasts", "mouth", "vagina", "anus"];
const fighterTargetMaleOpt = ["touch", "mouth", "cock", "anus"];
const fighterTargetFutaOpt = [
  "touch",
  "breasts",
  "mouth",
  "cock",
  "vagina",
  "anus",
];

const EndPhaseOption = {
  name: "The Round moves to a close.",
  options: [
    {
      name: "Next Round",
      description: "Move to the next round.",
      onAction() {
        return {
          isSuccess: true,
          log: "The next round begins",
        };
      },
      //   Round will now end
    },
  ],
};

const isDom = (FightPhaseData) => {
  return FightPhaseData[1] === FightPhaseTypes[2][1];
};

export const FightPhaseData = [
  {
    [FightPhaseTypes[0][0]]: {
      name: "Fight for control",
      options: [
        {
          name: "Grapple",
          description: "Fight your opponent for physical control.",
          onAction(charData, fighter, phaseChoices) {
            const result = isFightStatCompWin(
              charData.grapplingProwess,
              fighter.grapplingProwess
            );
            const logMsg = result
              ? "Grapple succeeds, take control"
              : `Grapple fails, ${fighter.name} take control`;
            return { isSuccess: result, log: logMsg };
          },
          nextPhaseTypeWin: FightPhaseTypes[1][0],
          nextPhaseTypeFail: FightPhaseTypes[1][2],
        },
        {
          name: "Seduce",
          description: "Seduce your opponent with your sexual allure.",
          onAction(charData, fighter, phaseChoices) {
            const result = isFightStatCompWin(
              charData.seductionProwess,
              fighter.seductionResistance
            );
            const logMsg = result
              ? "Seduction succeeds, charm opponent"
              : `Seduction fails, ${fighter.name} take control`;
            return { isSuccess: result, log: logMsg };
          },
          nextPhaseTypeWin: FightPhaseTypes[1][1],
          nextPhaseTypeFail: FightPhaseTypes[1][2],
        },
      ],
    },
  },
  {
    [FightPhaseTypes[1][0]]: {
      name: "You have control, how do you fuck?",
      options: [
        {
          name: "Tenderly",
          description: "Pleasure your opponent with your tender motions.",
          onAction() {
            // avoids adding roughPlayLvl.
            return { isSuccess: true, log: "You move tenderly" };
          },
          nextPhaseTypeWin: FightPhaseTypes[2][0],
        },
        {
          name: "Roughly",
          description: "Unleash the sexual animal.",
          onAction() {
            // checked later to see if add roughPlayLvl lvl.
            return { isSuccess: true, log: "You awake your animal passions" };
          },
          nextPhaseTypeWin: FightPhaseTypes[2][1],
        },
      ],
    },
    [FightPhaseTypes[1][1]]: {
      name: "You have Seduced you opponent how do you tease?",
      options: [
        {
          name: "Coyly",
          description: "Your tender loins yearn for a soft touch.",
          onAction() {
            // avoids adding roughPlayLvl.
            return { isSuccess: true, log: "You tease coyly" };
          },
          nextPhaseTypeWin: FightPhaseTypes[2][2],
        },
        {
          name: "Animal",
          description: "You command to be taken with animal passion.",
          onAction() {
            return {
              // adds roughPlayLvl, bonus for player if high.
              isSuccess: true,
              log: "You scream for animalistic intensity",
            };
          },
          nextPhaseTypeWin: FightPhaseTypes[2][3],
        },
      ],
    },
    [FightPhaseTypes[1][2]]: {
      name: "Your opponent takes control",
      options: [
        {
          name: "Enjoy",
          description: "Moan and writhe, your pleasure is enticing.",
          onAction() {
            return {
              isSuccess: true,
              // avoids adding roughPlayLvl.
              log: "You moan at writhe at every touch.",
            };
          },
          nextPhaseTypeWin: FightPhaseTypes[2][4],
        },
        {
          name: "Resist",
          description: "You refuse to relinquish control.",
          // adds roughPlayLvl to opponent, bonus for player if high.
          onAction() {
            return {
              isSuccess: true,
              log: "You fight and wriggle.",
            };
          },
          nextPhaseTypeWin: FightPhaseTypes[2][5],
        },
      ],
    },
  },
  // Pick sexual organ to use, (you or opponent)
  {
    [FightPhaseTypes[2][0]]: {
      name: "Your passion swells, what will you use?",
      options: [
        {
          name: "Use Tongue",
          description: "You ready your tongue.",
          onAction() {
            return {
              isSuccess: true,
              log: "You wet your lips.",
            };
          },
          nextPhaseTypeWin: FightPhaseTypes[3][0],
        },
        {
          name: "Use Touch",
          description: "You ready your body & hands.",
          onAction() {
            return {
              isSuccess: true,
              log: "You ready your body & hands.",
            };
          },
          nextPhaseTypeWin: FightPhaseTypes[3][1],
        },
        {
          name: "Use Cock",
          reqCock: true,
          description: "You ready your Cock.",
          onAction() {
            return {
              isSuccess: true,
              log: "You ready your cock.",
            };
          },
          nextPhaseTypeWin: FightPhaseTypes[3][2],
        },
        {
          name: "Use Pussy",
          reqFemale: true,
          description: "You ready your pussy.",
          onAction() {
            return {
              isSuccess: true,
              log: "You ready your pussy.",
            };
          },
          nextPhaseTypeWin: FightPhaseTypes[3][3],
        },
        {
          name: "Use Arse",
          description: "You ready your arse.",
          onAction() {
            return {
              isSuccess: true,
              log: "You ready your arse.",
            };
          },
          nextPhaseTypeWin: FightPhaseTypes[3][4],
        },
      ],
    },
    [FightPhaseTypes[2][1]]: {
      name: "Your inner animal growls, what is your weapon?",
      options: [
        {
          name: "Use Tongue",
          description: "You ready your tongue.",
          onAction() {
            return {
              isSuccess: true,
              log: "You lick your lips, wetting your tongue.",
            };
          },
          nextPhaseTypeWin: FightPhaseTypes[3][0],
        },
        {
          name: "Use Touch",
          description: "You ready your body & hands.",
          onAction() {
            return {
              isSuccess: true,
              log: "You ready your body & hands.",
            };
          },
          nextPhaseTypeWin: FightPhaseTypes[3][1],
        },
        {
          name: "Use Cock",
          reqCock: true,
          description: "You ready your Cock.",
          onAction() {
            return {
              isSuccess: true,
              log: "You ready your cock.",
            };
          },
          nextPhaseTypeWin: FightPhaseTypes[3][2],
        },
        {
          name: "Use Pussy",
          reqFemale: true,
          description: "You ready your pussy.",
          onAction() {
            return {
              isSuccess: true,
              log: "You ready your pussy.",
            };
          },
          nextPhaseTypeWin: FightPhaseTypes[3][3],
        },
        {
          name: "Use Arse",
          description: "You ready your arse.",
          onAction() {
            return {
              isSuccess: true,
              log: "You ready your arse.",
            };
          },
          nextPhaseTypeWin: FightPhaseTypes[3][4],
        },
      ],
    },
    // All below skip next step
    [FightPhaseTypes[2][2]]: {
      name: "You coyly present yourself for the taking.",
      options: [
        {
          name: "Shyly Admire",
          description: "You bashfully admire your opponent.",
          onAction() {
            return {
              isSuccess: true,
              log: "You bashfully admire your opponent",
            };
          },
          nextPhaseTypeWin: FightPhaseTypes[3][5],
        },
      ],
    },
    [FightPhaseTypes[2][3]]: {
      name:
        "Your animal passion drives your opponent wild, but they pick their tool.",
      options: [
        {
          name: "Growl",
          description: "You hurry your opponent.",
          onAction() {
            return {
              isSuccess: true,
              log: "You hurry your opponent.",
            };
          },
          nextPhaseTypeWin: FightPhaseTypes[3][5],
        },
      ],
    },
    [FightPhaseTypes[2][4]]: {
      name: "Your choose to take pleasure in being taken.",
      options: [
        {
          name: "Moan",
          description: "You moan at her touch.",
          onAction() {
            return {
              isSuccess: true,
              log: "You continue your passionate embrace.",
            };
          },
          nextPhaseTypeWin: FightPhaseTypes[3][6],
        },
      ],
    },
    [FightPhaseTypes[2][5]]: {
      name: "You try to fight your opponent, only burning both your energy.",
      options: [
        {
          name: "Resist",
          description: "You continue your resistance.",
          onAction() {
            return {
              isSuccess: true,
              log: "You continue to resist",
            };
          },
          nextPhaseTypeWin: FightPhaseTypes[3][6],
        },
      ],
    },
  },
  // Select what part of opponent to fuck/ seduced gets to set op's target
  {
    [FightPhaseTypes[3][0]]: {
      name: "Your tongue hunts it's target.",
      options: [
        {
          name: "Lick Body",
          description: "Lick her body.",
          nextPhaseTypeWin: FightPhaseTypes[4][0],
        },
        {
          name: "Lick Breasts",
          description: "Taste her breasts.",
          nextPhaseTypeWin: FightPhaseTypes[4][1],
        },
        {
          name: "Lick Tongues",
          description: "Stuff your tongue into your opponent's mouth.",
          nextPhaseTypeWin: FightPhaseTypes[4][2],
        },
        {
          name: "Suck Cock",
          opHasCock: true,
          description: "Try draining her balls.",
          nextPhaseTypeWin: FightPhaseTypes[4][3],
        },
        {
          name: "Savour Pussy",
          description: "Dig your tongue into her lower lips.",
          nextPhaseTypeWin: FightPhaseTypes[4][4],
        },
        {
          name: "Rimjob",
          description: "Dig your tongue into her anal passage.",
          nextPhaseTypeWin: FightPhaseTypes[4][5],
        },
      ],
    },
    [FightPhaseTypes[3][1]]: {
      name: "Your touch hunts it's target.",
      options: [
        {
          name: "Caress Body",
          description: "Caress her body.",
          nextPhaseTypeWin: FightPhaseTypes[4][0],
        },
        {
          name: "Grope Breasts",
          description: "Fondle her breast meat.",
          nextPhaseTypeWin: FightPhaseTypes[4][1],
        },
        {
          name: "Play With Mouth",
          description: "Make her taste your fingers.",
          nextPhaseTypeWin: FightPhaseTypes[4][2],
        },
        {
          name: "Handjob",
          opHasCock: true,
          description: "Pump the juice from their shaft.",
          nextPhaseTypeWin: FightPhaseTypes[4][3],
        },
        {
          name: "Finger Pussy",
          description: "Dig your fingers into her lower lips.",
          nextPhaseTypeWin: FightPhaseTypes[4][4],
        },
        {
          name: "Fisting",
          description: "Dig your fingers into her anal passage.",
          nextPhaseTypeWin: FightPhaseTypes[4][5],
        },
      ],
    },
    [FightPhaseTypes[3][2]]: {
      name: "Your cock is ready for action.",
      options: [
        {
          name: "Hump her Body",
          description: "Rub your cock on her supple body.",
          nextPhaseTypeWin: FightPhaseTypes[4][0],
        },
        {
          name: "Titfuck",
          description: "Fuck her breasts.",
          nextPhaseTypeWin: FightPhaseTypes[4][1],
        },
        {
          name: "Blowjob",
          description: "Push your cock into her mouth.",
          nextPhaseTypeWin: FightPhaseTypes[4][2],
        },
        {
          name: "Sword Fight",
          opHasCock: true,
          description: "Rub your shaft against hers.",
          nextPhaseTypeWin: FightPhaseTypes[4][3],
        },
        {
          name: "Fuck Her Pussy",
          description: "Drive deep into her pussy lips.",
          nextPhaseTypeWin: FightPhaseTypes[4][4],
        },
        {
          name: "Anal",
          description: "Plunder her back passage.",
          nextPhaseTypeWin: FightPhaseTypes[4][5],
        },
      ],
    },
    [FightPhaseTypes[3][3]]: {
      name: "Your pussy is wet and ready.",
      options: [
        {
          name: "Ride her Body",
          description: "Rub your pussy on her soft body.",
          nextPhaseTypeWin: FightPhaseTypes[4][0],
        },
        {
          name: "Soak Tits",
          description: "Rub your pussy on her  breasts.",
          nextPhaseTypeWin: FightPhaseTypes[4][1],
        },
        {
          name: "Oral",
          description: "Push your pussy onto her mouth.",
          nextPhaseTypeWin: FightPhaseTypes[4][2],
        },
        {
          name: "Ride Cock",
          opHasCock: true,
          description: "Ride her hard shaft.",
          nextPhaseTypeWin: FightPhaseTypes[4][3],
        },
        {
          name: "Tribasdism",
          description: "Rub your pussy against hers.",
          nextPhaseTypeWin: FightPhaseTypes[4][4],
        },
      ],
    },
    [FightPhaseTypes[3][4]]: {
      name: "Your arse is ready for use.",
      options: [
        {
          name: "Rimjob",
          description: "Push your arse over her mouth.",
          nextPhaseTypeWin: FightPhaseTypes[4][2],
        },
        {
          name: "Anal",
          opHasCock: true,
          description: "Ride her dick with your arse.",
          nextPhaseTypeWin: FightPhaseTypes[4][3],
        },
      ],
    },
    [FightPhaseTypes[3][5]]: {
      name: "Your seduction suceeds, where do you lead your opponent?",
      options: [
        {
          name: "Body",
          description: "She will use your body.",
          onAction() {
            return {
              isSuccess: true,
              log: "She uses your thighs",
            };
          },
          nextPhaseTypeWin: FightPhaseTypes[4][0],
        },
        {
          name: "Breasts",
          description: "Present your breasts.",
          onAction() {
            return {
              isSuccess: true,
              log: "She fucks your breasts",
            };
          },
          nextPhaseTypeWin: FightPhaseTypes[4][1],
        },
        {
          name: "Mouth",
          description: "Open your mouth.",
          onAction() {
            return {
              isSuccess: true,
              log: "She uses your mouth",
            };
          },
          nextPhaseTypeWin: FightPhaseTypes[4][2],
        },
        {
          name: "Cock",
          reqCock: true,
          description: "Present your ready cock.",
          onAction() {
            return {
              isSuccess: true,
              log: "She fucks your cock.",
            };
          },
          nextPhaseTypeWin: FightPhaseTypes[4][3],
        },
        {
          name: "Pussy",
          description: "Open your wet pussy lips.",
          onAction() {
            return {
              isSuccess: true,
              log: "She fucks your pussy",
            };
          },
          nextPhaseTypeWin: FightPhaseTypes[4][4],
        },
        {
          name: "Anal Passage",
          description: "Reveal your back passage.",
          onAction() {
            return {
              isSuccess: true,
              log: "She fucks your arse",
            };
          },
          nextPhaseTypeWin: FightPhaseTypes[4][5],
        },
      ],
    },
    [FightPhaseTypes[3][6]]: {
      name: "At your Opponent's mercy, she pleasures you as best she can.",
      options: [
        {
          name: "Ok",
          description: "You remain at her mercy.",
          onAction() {
            return {
              isSuccess: true,
              log: "Your opponent takes control.",
            };
          },
          nextPhaseTypeWin: FightPhaseTypes[4][6],
        },
      ],
    },
  },
  // final phase
  {
    [FightPhaseTypes[4][0]]: {
      ...EndPhaseOption,
    },
    [FightPhaseTypes[4][1]]: {
      ...EndPhaseOption,
    },
    [FightPhaseTypes[4][2]]: {
      ...EndPhaseOption,
    },
    [FightPhaseTypes[4][3]]: {
      ...EndPhaseOption,
    },
    [FightPhaseTypes[4][4]]: {
      ...EndPhaseOption,
    },
    [FightPhaseTypes[4][5]]: {
      ...EndPhaseOption,
    },
    [FightPhaseTypes[4][6]]: {
      ...EndPhaseOption,
    },
  },
];

export const fightResolve = (
  phaseChoices,
  charData,
  fighterData,
  arousalData
) => {
  const ResponseObj = {
    player: 0,
    playerOrgasm: false,
    fighter: 0,
    fighterOrgasm: false,
    skillGain: false,
    result: "", // text output, effect on player, effect on opponent
  };

  // setup who is control/fucker and constants
  const isPlayerFucker = phaseChoices[0] === FightPhaseTypes[1][0];
  const isOpSeduced = phaseChoices[2] === FightPhaseTypes[3][5];
  let opponentAttack = false;
  let opponentTarget = false;

  // player is attacker
  if (isPlayerFucker) {
    const arousalCost = fuckerArousal(phaseChoices[2], charData, 0);
    const dealArousal = recieverArousal(
      phaseChoices[2],
      charData,
      phaseChoices[3],
      fighterData,
      0,
      isOpSeduced
    );
    ResponseObj.player = arousalCost;
    ResponseObj.fighter = dealArousal;
    const ranTextEvent = FightTxtInterface(
      isDom(phaseChoices),
      phaseChoices[2],
      phaseChoices[3],
      charData,
      fighterData
    );
    ResponseObj.result += `${ranTextEvent}, causing ${fighterData.name}'s arousal to increase by ${dealArousal} & ${charData.name}'s to grow ${arousalCost}`;
  } else {
    // Check Options
    let canUsePrefTarget = true;
    if (fighterData.prefTarget === "cock" && !charData.hasCock) {
      canUsePrefTarget = false;
    }
    if (
      (fighterData.prefTarget === "breasts" ||
        fighterData.prefTarget === "vagina") &&
      !charData.isWoman
    ) {
      canUsePrefTarget = false;
    }

    // select Attacker's actions
    const UsePrefAttack = Math.floor(Math.random() * 2);
    if (UsePrefAttack) {
      opponentAttack = fighterData.prefAttack;
    } else {
      opponentAttack = fighterAttackOptions[Math.floor(Math.random() * 4)];
      opponentTarget = isOpSeduced
        ? phaseChoices[3]
        : FightPhaseTypes[4][Math.floor(Math.random() * 6)];
    }
    if (isOpSeduced) {
      opponentTarget = phaseChoices[3];
    } else if (UsePrefAttack && canUsePrefTarget) {
      opponentTarget = fighterData.prefTarget;
    } else {
      if (charData.hasCock && !charData.isWoman) {
        if (charData.isWoman) {
          opponentTarget = fighterTargetFutaOpt[Math.floor(Math.random() * 6)];
        } else {
          opponentTarget = fighterTargetMaleOpt[Math.floor(Math.random() * 4)];
        }
      } else {
        opponentTarget = fighterTargetFemOpt[Math.floor(Math.random() * 5)];
      }
    }

    const useRoughplayMod =
      phaseChoices[1] === FightPhaseTypes[2][1] ||
      phaseChoices[1] === FightPhaseTypes[2][3] ||
      phaseChoices[1] === FightPhaseTypes[2][5];
    const setRoughplayMod = useRoughplayMod ? fighterData.roughPlayLvl : 0;
    const arousalCost = fuckerArousal(
      opponentAttack,
      fighterData,
      setRoughplayMod
    );
    const dealArousal = recieverArousal(
      opponentAttack,
      fighterData,
      opponentTarget,
      charData,
      setRoughplayMod,
      isOpSeduced
    );
    ResponseObj.player = dealArousal;
    ResponseObj.fighter = arousalCost;
    // reveal attackers choice in result text
    if (UsePrefAttack && !isOpSeduced) {
      const uniqueAtktext = replacer(
        fighterData,
        charData,
        fighterData.uniqueAttackText
      );
      ResponseObj.result += `${uniqueAtktext}, causing ${charData.name}'s arousal to increase by ${dealArousal} & ${fighterData.name}'s to grow ${arousalCost}`;
    } else {
      const useRough = fighterData.roughPlayLvl > 0;
      const ranTextEvent = FightTxtInterface(
        useRough,
        opponentAttack,
        opponentTarget,
        fighterData,
        charData
      );
      ResponseObj.result += `${ranTextEvent}, causing ${charData.name}'s arousal to increase by ${dealArousal} & ${fighterData.name}'s to grow ${arousalCost}`;
    }
  }

  if (arousalData[0] + ResponseObj.player >= 100) {
    ResponseObj.playerOrgasm = true;
  }
  if (arousalData[1] + ResponseObj.fighter >= 100) {
    ResponseObj.fighterOrgasm = true;
  }

  if (isPlayerFucker) {
    ResponseObj.skillGain = checkSkillGain(
      isPlayerFucker,
      phaseChoices[2],
      charData
    );
  } else {
    ResponseObj.skillGain = checkSkillGain(false, opponentTarget, charData);
  }

  console.log("respObj", ResponseObj);
  return ResponseObj;
};

const fuckerArousal = (sexChoice, fuckerData, RoughplayMod) => {
  // returns numerical cost of using sex organ on opponent
  switch (sexChoice) {
    case FightPhaseTypes[3][0]: // tongue
      return fuckArousalCost(fuckerData.mouthResistance, RoughplayMod);
    case FightPhaseTypes[3][1]: // touch
      return fuckArousalCost(fuckerData.touchResistance, RoughplayMod);
    case FightPhaseTypes[3][2]: // cock
      return fuckArousalCost(fuckerData.cockResistance, RoughplayMod);
    case FightPhaseTypes[3][3]: // vagina
      return fuckArousalCost(fuckerData.vaginaResistance, RoughplayMod);
    case FightPhaseTypes[3][4]: // anus
      return fuckArousalCost(fuckerData.anusResistance, RoughplayMod);
    default:
      console.warn("err: choice not known", sexChoice);
      return 10;
  }
};

const recieverArousal = (
  fuckerOrgan,
  fuckerData,
  receiverTarget,
  receiverData,
  RoughplayMod,
  playerSeduceSuccess = false
) => {
  // sets attack effect on reciever -> prowess , resistance , tightness , roughplay
  let tightnessMod = SizeDiffMod(fuckerOrgan, receiverTarget);

  return receiverArousalGain(
    fuckerData[prowessKey[fuckerOrgan]],
    receiverData[resistanceKey[receiverTarget]],
    tightnessMod,
    RoughplayMod,
    playerSeduceSuccess
  );
};
const prowessKey = {
  tongue: "tongueProwess",
  touch: "touchProwess",
  cock: "cockProwess",
  vagina: "vaginaProwess",
  anus: "anusProwess",
};
const resistanceKey = {
  touch: "touchResistance",
  breasts: "breastResistance",
  mouth: "mouthResistance",
  cock: "cockResistance",
  vagina: "vaginaResistance",
  anus: "anusResistance",
};

const SizeDiffMod = (fuckerOrgan, fuckerData, recieverTarget, recieverData) => {
  if (fuckerOrgan === "cock") {
    switch (recieverTarget) {
      case "mouth":
        return sizeDiffCalc(fuckerData.penisSize, recieverData.throatSize);
      case "vagina":
        return sizeDiffCalc(fuckerData.penisSize, recieverData.vaginaSize);
      case "anus":
        return sizeDiffCalc(fuckerData.penisSize, recieverData.anusSize);
      default:
        return 1;
    }
  } else if (recieverTarget === "cock") {
    switch (fuckerOrgan) {
      case "tongue":
        return sizeDiffCalc(fuckerData.throatSize, recieverData.penisSize);
      case "vagina":
        return sizeDiffCalc(fuckerData.vaginaSize, recieverData.penisSize);
      case "anus":
        return sizeDiffCalc(fuckerData.anusSize, recieverData.penisSize);
      default:
        return 1;
    }
  } else {
    return 1;
  }
  // return high num if tight, low if loose
};
const sizeDiffCalc = (fuckerOrganSize, recieverOrganSize) => {
  // returns from 15(fucker bigger) -> 5
  const diff = fuckerOrganSize - recieverOrganSize + 10;
  return diff / 10;
};

const checkSkillGain = (isPlayerFucker, organ, charData) => {
  let returnTxt = false;

  if (isPlayerFucker) {
    returnTxt = checkAndIncrease(
      organ,
      charData,
      CharKeys.prowess[organ],
      CharKeys.prowessUpd[organ]
    );
  } else {
    returnTxt = checkAndIncrease(
      organ,
      charData,
      CharKeys.resist[organ],
      CharKeys.resistUpd[organ]
    );
  }
  return returnTxt;
};
const checkAndIncrease = (name, CharData, skill, skillUp) => {
  const skillLvled = TestStatTrain(CharData[skill], 2);
  skillLvled && CharData[skillUp](1);
  return skillLvled && `${name} skill increased.`;
};
