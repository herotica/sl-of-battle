import rookies from "../combatants/isekai-league/rookies";
import ranks from "../combatants/isekai-league/ranks";
import icon from "../assets/logo/isekai.png";

export default {
  id: "isekai",
  name: "League 1; The Isekai League",
  description: "The hottest girls from virtual worlds fight for glory.",
  initialPoints: 50,
  renownRequired: 0,
  colors: {
    bgA: "yellow",
    bgB: "darkgoldenrod",
    border: "yellow"
  },
  icon,
  rookies,
  ranks: [rookies, ...ranks]
};
