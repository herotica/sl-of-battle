import domCock from "./fuckroom/domCock";
import cockBdsm from "./fuckroom/cockBdsm";
import domWoman from "./fuckroom/domWoman";
import pleasureCock from "./fuckroom/pleasureCock";
import pleasureWoman from "./fuckroom/pleasureWoman";
import finishCock from "./fuckroom/finishCock";

export default {
  // p: playerstore, c: combatant
  dominate: [
    {
      check: p => p.hasCock,
      options: domCock,
    },
    {
      check: p => p.hasCock,
      options: cockBdsm,
    },
    {
      check: p => p.isWoman,
      options: domWoman,
    },
  ],
  pleasure: [
    {
      check: p => p.hasCock,
      options: pleasureCock,
    },
    {
      check: p => p.isWoman,
      options: pleasureWoman,
    },
  ],
  finishCock,
};
