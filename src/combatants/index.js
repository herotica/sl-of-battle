//interface for getting data
import { OtherMid } from "./underground/othersMid";
import OtherBasic from "./underground/otherBasic";
import othersHard from "./underground/othersHard";
import HentaiFoundry from "./underground/hentaiFoundry";

// Series Imports
import KonoSuba, { seriesId as KonoSubaId } from "./isekai/KonoSuba";
import SwordArt, { seriesId as SwordArtId } from "./isekai/SwordArt";
import howNotToSummonDemonLord, {
  seriesId as howDemonId,
} from "./isekai/howNotToSummonDemonLord";
import BokuNoHero, { seriesId as BokuNoHeroId } from "./superhero/BokuNoHero";
import OnePiece, { seriesId as OnePieceId } from "./superhero/OnePiece";
import FireEmblem, { seriesId as FireEmblemId } from "./jrpg/FireEmblem";
import GranblueFantasy, {
  seriesId as GranblueFantasyId,
} from "./jrpg/GranblueFantasy";

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
  [KonoSubaId]: KonoSuba,
  [SwordArtId]: SwordArt,
  [howDemonId]: howNotToSummonDemonLord,
  [BokuNoHeroId]: BokuNoHero,
  [OnePieceId]: OnePiece,
  [FireEmblemId]: FireEmblem,
  [GranblueFantasyId]: GranblueFantasy,
};

export const leagueGirlsAccessor = (seriesId, charId) => {
  return seriesDb[seriesId][charId];
};
// export const leagueFranchiseAccessor = (seriesId) => {};

export default Underground;
