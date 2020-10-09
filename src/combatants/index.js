//interface for getting data
import { OtherMid } from "./underground/othersMid";
import OtherBasic from "./underground/otherBasic";
import othersHard from "./underground/othersHard";
import HentaiFoundry from "./underground/hentaiFoundry";

// Series Imports
// pornstars
import PornstarA, {seriesId as PornstarAId} from "./pornstar-a";
//battleship
import AzurLane, { seriesId as AzurLaneId } from "./battleship/AzurLane";
import KantaiCollection, {
  seriesId as KantaiCollectionId,
} from "./battleship/KantaiCollection";
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
// disneys
import disney, { seriesId as disneyId } from "./disney";
// league-of-legends
import tekken, { seriesId as tekkenId } from "./fighter/tekken";
import doa, { seriesId as doaId } from "./fighter/doa";

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
  [PornstarAId]:PornstarA,
  [AzurLaneId]: AzurLane,
  [KantaiCollectionId]: KantaiCollection,
  [FireEmblemId]: FireEmblem,
  [GranblueFantasyId]: GranblueFantasy,
  [MarvelId]: Marvel,
  [ToonsId]: Toons,
  [PokemonId]: Pokemon,
  [KimPossibleId]: KimPossible,
  [BokuNoHeroId]: BokuNoHero,
  [OnePieceId]: OnePiece,
  [leagueOfLegendsId]: leagueOfLegends,
  [disneyId]: disney,
  [doaId]: doa,
  [tekkenId]: tekken,
};
const eventsDb = {
}

export const leagueGirlsAccessor = (seriesId, charId) => {
  return seriesDb[seriesId][charId];
};
export const leagueSeriesEvents = (seriesId) => {
  return eventsDb[seriesId];
}
// export const leagueFranchiseAccessor = (seriesId) => {};

export default Underground;
