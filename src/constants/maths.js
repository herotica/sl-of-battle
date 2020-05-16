// a characters stats run from 1 -> 100, training power runs from 0 -> 20
export const StatTrainSuccessChance = (statLv, trainPower) => {
    const statModifier = 900 - (statLv * 8); // 100-900
    const trainingModifier = (trainPower * 3) + 20; //23 - 80
    //returns ~ 5 - 84, this being a % of success
    return (statModifier * trainingModifier) * 0.001;
}

export const TestStatTrain = (statLv, trainPower) => {
    const val = Math.floor(Math.random() * Math.floor(100));
    return val < StatTrainSuccessChance(statLv, trainPower);
}