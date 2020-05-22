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
  console.log('rngJ', RngJesus);
  return playerStat > (fighterStat + RngJesus);
};
