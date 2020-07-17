//interface for getting data
import { OtherMid } from "./underground/othersMid";
import OtherBasic from "./underground/otherBasic";
import othersHard from "./underground/othersHard";
import HentaiFoundry from "./underground/hentaiFoundry";

// Series Imports
//battleship
import AzurLane, { seriesId as AzurLaneId } from "./battleship/AzurLane";
import KantaiCollection, {
  seriesId as KantaiCollectionId,
} from "./battleship/KantaiCollection";
//isekai
import KonoSuba, { seriesId as KonoSubaId } from "./isekai/KonoSuba";
import SwordArt, { seriesId as SwordArtId } from "./isekai/SwordArt";
import howNotToSummonDemonLord, {
  seriesId as howDemonId,
} from "./isekai/howNotToSummonDemonLord";
//jrpg
import FireEmblem, { seriesId as FireEmblemId } from "./jrpg/FireEmblem";
import GranblueFantasy, {
  seriesId as GranblueFantasyId,
} from "./jrpg/GranblueFantasy";
//marvel
import Marvel, { seriesId as MarvelId } from "./marvel/marvel";
//na-toons
import Toons, { seriesId as ToonsId } from "./na-toons/toons";
import KimPossible, { seriesId as KimPossibleId } from "./na-toons/KimPossible";
// Pokemon
import Pokemon, { seriesId as PokemonId } from "./pokemon";
//superhero
import BokuNoHero, { seriesId as BokuNoHeroId } from "./superhero/BokuNoHero";
import OnePiece, { seriesId as OnePieceId } from "./superhero/OnePiece";
// league-of-legends
import leagueOfLegends, {
  seriesId as leagueOfLegendsId,
} from "./league-of-legends";

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
  [AzurLaneId]: AzurLane,
  [KantaiCollectionId]: KantaiCollection,
  [KonoSubaId]: KonoSuba,
  [SwordArtId]: SwordArt,
  [howDemonId]: howNotToSummonDemonLord,
  [FireEmblemId]: FireEmblem,
  [GranblueFantasyId]: GranblueFantasy,
  [MarvelId]: Marvel,
  [ToonsId]: Toons,
  [PokemonId]: Pokemon,
  [KimPossibleId]: KimPossible,
  [BokuNoHeroId]: BokuNoHero,
  [OnePieceId]: OnePiece,
  [leagueOfLegendsId]: leagueOfLegends,
};

export const leagueGirlsAccessor = (seriesId, charId) => {
  return seriesDb[seriesId][charId];
};
// export const leagueFranchiseAccessor = (seriesId) => {};

export default Underground;
