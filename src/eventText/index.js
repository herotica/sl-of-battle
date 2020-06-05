import { ReceiverNameReplace, ReplacersHisHer } from "./replacers";
import DominateFightText from "./dominate";
import PleasureFightText from "./pleasure";

const Data = {
  fight: {
    dominate: DominateFightText,
    pleasure: PleasureFightText
  },
  event: "todo"
};

const size3 = organSize => {
  if (organSize <= 1) {
    return "S";
  } else if (organSize <= 3) {
    return "M";
  } else {
    return "L";
  }
};
export const FightTxtInterface = ({
  isDominate,
  fuckerOrgan,
  fuckerOrganSize,
  fuckerIsFemale,
  recieverOrgan,
  recieverOrganSize,
  recieverName
}) => {
  const DataObj = isDominate ? Data.fight.dominate : Data.fight.pleasure;
  const FuckerOpts = DataObj[fuckerOrgan];
  let RecieverOpts = null;
  if (FuckerOpts.sizeOpt) {
    RecieverOpts = FuckerOpts["size" + size3(fuckerOrganSize)][recieverOrgan];
  } else {
    RecieverOpts = FuckerOpts.sizeX[recieverOrgan];
  }
  let TextOpts = null;
  if (RecieverOpts.sizeOpt) {
    TextOpts = RecieverOpts["size" + size3(recieverOrganSize)];
  } else {
    TextOpts = RecieverOpts.sizeX;
  }
  console.log("txtOpts", TextOpts);
  const RNJesus = Math.floor(Math.random() * TextOpts.length);
  const TextoutputPre = TextOpts[RNJesus];
  const pronoun = fuckerIsFemale ? "her" : "his";
  return TextoutputPre.replace(ReceiverNameReplace, recieverName).replace(
    ReplacersHisHer,
    pronoun
  );
};
