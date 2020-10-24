import { Rooms } from "../constants";

import pornstarA from "./pornstar-a";
import pornstarB from "./pornstar-b";
import ActressA from "./actress-a";
import AcressB from "./actress-b";
import JavA from "./jav-a";
import Musician from "./musician";

const leagues = [
  { room: Rooms.league, league: pornstarA },
  { room: Rooms.league, league: pornstarB },
  { room: Rooms.league, league: ActressA },
  { room: Rooms.league, league: JavA },
  { room: Rooms.league, league: Musician },
  { room: Rooms.league, league: AcressB },
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
