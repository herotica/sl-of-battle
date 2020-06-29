//interface for getting data
import { OtherMid } from "./underground/others";
import OtherBasic from "./underground/otherBasic";
import HentaiFoundry from "./underground/hentaiFoundry";

export const Underground = {
  // Max 3 difficulty tiers, A is the lowest
  tierBasic: {
    ...OtherBasic,
  },
  tierMedium: {
    ...OtherMid,
  },
  tierHard: {
    carmen: HentaiFoundry.carmen,
    meryl: HentaiFoundry.meryl,
  },
};

export const keys = {
  underground: {
    tierBasic: Object.keys(Underground.tierBasic),
    tierMedium: Object.keys(Underground.tierMedium),
    tierHard: Object.keys(Underground.tierHard),
  },
};

export default Underground;
