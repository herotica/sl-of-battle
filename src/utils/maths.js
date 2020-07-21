// a characters stats run from 1 -> 100, training power runs from 0 -> 20
export const StatTrainSuccessChance = (statLv, trainPower) => {
  const statModifier = 900 - statLv * 8; // 100-900
  const trainingModifier = trainPower * 3 + 20; //23 - 80
  //returns ~ 5 - 84, this being a % of success
  return statModifier * trainingModifier * 0.001;
};

export const TestStatTrain = (statLv, trainPower) => {
  const val = Math.floor(Math.random() * Math.floor(100));
  return val < StatTrainSuccessChance(statLv, trainPower);
};

export const isFightStatCompWin = (playerStat, fighterStat) => {
  const A = Math.floor(Math.random() * 10);
  const B = Math.floor(Math.random() * 10);
  const C = Math.floor(Math.random() * 10);
  const D = Math.floor(Math.random() * 30);
  const RngJesus = A + B + C + D - 32;
  return playerStat > fighterStat + RngJesus;
};

export const fuckArousalCost = (resistanceLvl, roughplayMod) => {
  const A = Math.floor(Math.random() * 30);
  const B = Math.floor(Math.random() * 30);
  const resistanceMod = (100 - resistanceLvl) / 100;
  const RngJesus = Math.floor((A + B) * resistanceMod + 5) - roughplayMod;
  return RngJesus > 0 ? RngJesus : 0;
};

export const receiverArousalGain = (
  fuckerProwess,
  receiverResistance,
  tightnessMod,
  roughplayMod,
  playerSeduceSuccess = false
) => {
  const A = Math.floor(Math.random() * 10);
  const B = Math.floor(Math.random() * 20);
  const C = Math.floor(Math.random() * 20);
  // output 3-80
  let diff = fuckerProwess - receiverResistance + 40;
  if (diff < 0) diff = 0;
  if (diff > 100) diff = 100;
  const seductionDefence = playerSeduceSuccess ? 0.5 : 1;
  const arousalGain = (A + B + C + diff + roughplayMod) * tightnessMod * seductionDefence;
  console.log('playerSeduceSuccess', playerSeduceSuccess);
  return arousalGain;
  // output 20-120
};
