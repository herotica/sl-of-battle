import domCock from "./fuckroom/domCock";
import domWoman from "./fuckroom/domWoman";
import pleasureCock from "./fuckroom/pleasureCock";
import pleasureWoman from "./fuckroom/pleasureWoman";

import finishCock from "./fuckroom/finishCock";
import finishCockPleasure from "./fuckroom/finishCockPleasure";

export default {
  // p: playerstore, c: combatant
  dominate: [
    {
      check: (p) => p.hasCock,
      options: domCock,
    },
    {
      check: (p) => p.isWoman,
      options: domWoman,
    },
  ],
  pleasure: [
    {
      check: (p) => p.hasCock,
      options: pleasureCock,
    },
    {
      check: (p) => p.isWoman,
      options: pleasureWoman,
    },
  ],
  finishCock: {
    dominate: finishCock,
    pleasure: finishCockPleasure,
  },
};
