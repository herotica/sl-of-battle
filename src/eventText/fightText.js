import { replacer } from "./replacers";
import DominateFightText from "./fightLog/dominate";
import PleasureFightText from "./fightLog/pleasure";

const Data = {
  fight: {
    dominate: DominateFightText,
    pleasure: PleasureFightText,
  },
};
const organSizeKey = (organ) => {
  switch (organ) {
    case "tongue":
      return "throatSize";
    case "mouth":
      return "throatSize";
    case "touch":
      return "height";
    case "cock":
      return "penisSize";
    case "vagina":
      return "vaginaSize";
    case "anus":
      return "anusSize";
    case "breasts":
      return "breastSize";
    default:
      console.error("incorrect organ", organ);
      return "breastSize";
  }
};
const sizeOptions = (organSize) => {
  if (organSize <= 1) {
    return "S";
  } else if (organSize <= 3) {
    return "M";
  } else {
    return "L";
  }
};
export const FightTxtInterface = (
  isDominate,
  fuckerOrgan,
  recieverOrgan,
  fuckerData,
  recieverData
) => {
  const DataObj = isDominate ? Data.fight.dominate : Data.fight.pleasure;
  const FuckerOpts = DataObj[fuckerOrgan];

  let RecieverOpts = null;
  if (FuckerOpts.sizeOpt) {
    RecieverOpts =
      FuckerOpts["size" + sizeOptions(fuckerData[organSizeKey(fuckerOrgan)])][
        recieverOrgan
      ];
  } else {
    RecieverOpts = FuckerOpts.sizeX[recieverOrgan];
  }
  console.log("RecieverOpts", RecieverOpts);
  let TextOpts = null;
  if (RecieverOpts.sizeOpt) {
    TextOpts =
      RecieverOpts[
        "size" + sizeOptions(recieverData[organSizeKey(recieverOrgan)])
      ];
  } else {
    TextOpts = RecieverOpts.sizeX;
  }

  const RNJesus = Math.floor(Math.random() * TextOpts.length);
  const TextoutputPre = TextOpts[RNJesus];
  console.log("TextOpts", TextOpts);
  console.log("TextoutputPre", TextoutputPre);
  const output = replacer(fuckerData, recieverData, TextoutputPre);

  return output;
};
