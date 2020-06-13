import Rookies from "../combatants/isekai-league/rookies";
import { Rooms } from "../constants";
import icon from "../assets/logo/isekai.png";

export default {
  name: "League 1; The Isekai League",
  description: "The hottest girls from virtual worlds fight for glory.",
  renownRequired: 0,
  icon: null,
  colors: {
    bgA: "yellow",
    bgB: "darkgoldenrod",
    border: "yellow"
  },
  icon,
  rookies: Rookies,
  room: Rooms.leagueA
};
