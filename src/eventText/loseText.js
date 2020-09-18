const Data = {
  isWoman: {
    cHasCock: [
      (p, name) =>
        `${name} destroys ${p.name} pussy, leaving them shuddering on the matt, with her pussy leaking thick ropes of cum.`,
    ],
    cIsWoman: [
      (p, name) =>
        `${name} extracts multiple shuddering orgasms from ${p.name} and leaves ${p.name} whimpering on the matt.`,
    ],
  },
  hasCock: {
    cHasCock: [
      (p, name) =>
        `${name} destroys ${p.name} arse, leaving them shuddering on the matt, with their arse leaking thick ropes of cum.`,
    ],
    cIsWoman: [
      (p, name) =>
        `${name} extracts multiple spurting orgasms from ${p.name} and leaves them a whimpering mess on the matt.`,
    ],
  },
};

export default (p, cHasCock, cName) => {
  const characterOptKey = cHasCock ? "cHasCock" : "cIsWoman";

  let textOptArray = null;
  if (p.isWoman) {
    textOptArray = p.hasCock
      ? [...Data.isWoman[characterOptKey], ...Data.hasCock[characterOptKey]]
      : Data.isWoman[characterOptKey];
  } else {
    textOptArray = Data.hasCock[characterOptKey];
  }

  const rndJesus = Math.floor(Math.random() * textOptArray.length);
  return textOptArray[rndJesus](p, cName);
};
