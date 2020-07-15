import { Rooms } from "../constants";
import Isekai from "./isekai-league";
import Superpower from "./superpower";
import jrpg from "./jrpg";
import Battleship from "./battleship";
import Cartoon from "./cartoon";
import Marvel from "./marvel";
import Pokemon from "./pokemon";

const leagues = [
  { room: Rooms.league, league: Isekai },
  { room: Rooms.league, league: Superpower },
  { room: Rooms.league, league: jrpg },
  { room: Rooms.league, league: Battleship },
  { room: Rooms.league, league: Cartoon },
  { room: Rooms.league, league: Marvel },
  { room: Rooms.league, league: Pokemon },
];

export const leagueIDs = leagues.map((lg) => lg.league.id);
let leagueInit = {};
leagues.forEach((lg) => {
  leagueInit[lg.league.id] = {
    isComplete: false,
    pointsAvailable: lg.league.initialPoints,
  };
});
export const LeagueInit = leagueInit;
export default leagues;
