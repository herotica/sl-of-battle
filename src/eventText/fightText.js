import { replacer } from "./replacers";
import DominateFightText from "./dominate";
import PleasureFightText from "./pleasure";

const Data = {
  fight: {
    dominate: DominateFightText,
    pleasure: PleasureFightText,
  },
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

  console.log("fsize", fuckerData[fuckerOrgan + "Size"]);
  console.log("rsize", recieverData[fuckerOrgan + "Size"]);
  const FuckerOpts = DataObj[fuckerOrgan];
  let RecieverOpts = null;
  if (FuckerOpts.sizeOpt) {
    RecieverOpts =
      FuckerOpts["size" + sizeOptions(fuckerData[fuckerOrgan + "Size"])][
        recieverOrgan
      ];
  } else {
    RecieverOpts = FuckerOpts.sizeX[recieverOrgan];
  }
  let TextOpts = null;
  if (RecieverOpts.sizeOpt) {
    TextOpts =
      RecieverOpts["size" + sizeOptions(recieverData[recieverOrgan + "Size"])];
  } else {
    TextOpts = RecieverOpts.sizeX;
  }

  const RNJesus = Math.floor(Math.random() * TextOpts.length);
  const TextoutputPre = TextOpts[RNJesus];
  const output = replacer(fuckerData, recieverData, TextoutputPre);

  return output;
};
