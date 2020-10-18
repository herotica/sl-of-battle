import { Rooms } from "../constants";
// import Marvel from "./marvel";
// import Pokemon from "./pokemon";
// import LeagueOfLegends from "./leagueOfLegends";
// import disney from "./disney";
// import fighter from "./fighter";

import pornstarA from "./pornstar-a";
import pornstarB from "./pornstar-b";
import ActressA from "./actress-a";
import JavA from "./jav-a";
import Musician from "./musician";

const leagues = [
  { room: Rooms.league, league: pornstarA },
  { room: Rooms.league, league: pornstarB },
  { room: Rooms.league, league: ActressA },
  { room: Rooms.league, league: JavA },
  { room: Rooms.league, league: Musician },
  // { room: Rooms.league, league: Marvel },
  // { room: Rooms.league, league: Pokemon },
  // { room: Rooms.league, league: LeagueOfLegends },
  // { room: Rooms.league, league: disney },
  // { room: Rooms.league, league: fighter },
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
