//interface for getting data
import { OtherMid } from "./underground/othersMid";
import OtherBasic from "./underground/otherBasic";
import othersHard from "./underground/othersHard";

// Series Imports
// pornstars
import PornstarA, { seriesId as PornstarAId } from "./pornstar-a";
import PornstarB, { seriesId as PornstarBId } from "./pornstar-b";
// Actress
import ActressA, { seriesId as ActressId } from "./actress-a";
// JAV
import JavA, { seriesId as JavAId } from "./jav-a";
// Musician
import Musician, { seriesId as musicianId } from "./musician";

export const Underground = {
  // Max 3 difficulty tiers, A is the lowest
  tierBasic: {
    ...OtherBasic,
  },
  tierMedium: {
    ...OtherMid,
  },
  tierHard: {
    ...othersHard,
  },
};

export const keys = {
  underground: {
    tierBasic: Object.keys(Underground.tierBasic),
    tierMedium: Object.keys(Underground.tierMedium),
    tierHard: Object.keys(Underground.tierHard),
  },
};

const seriesDb = {
  [PornstarAId]: PornstarA,
  [PornstarBId]: PornstarB,
  [ActressId]: ActressA,
  [JavAId]: JavA,
  [musicianId]: Musician,
};
const eventsDb = {};

export const leagueGirlsAccessor = (seriesId, charId) => {
  return seriesDb[seriesId][charId];
};
export const leagueSeriesEvents = (seriesId) => {
  return eventsDb[seriesId];
};
// export const leagueFranchiseAccessor = (seriesId) => {};

export default Underground;
