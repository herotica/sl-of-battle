import { Rooms } from "../constants";
import Isekai from "./isekai-league";
import Superpower from "./superpower";
import jrpg from './jrpg';

const leagues = [
  { room: Rooms.league, league: Isekai },
  { room: Rooms.league, league: Superpower },
  { room: Rooms.league, league: jrpg }
];

export const leagueIDs = leagues.map(lg => lg.league.id);
let leagueInit = {};
leagues.forEach(lg => {
  leagueInit[lg.league.id] = {
    isComplete: false,
    pointsAvailable: lg.league.initialPoints
  };
});
export const LeagueInit = leagueInit;
export default leagues;
