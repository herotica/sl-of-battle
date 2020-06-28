import rookies from "../combatants/jrpg/rookies";
import ranks from "../combatants/jrpg/ranks";
import icon from "../assets/logo/jrpg.png";

export default {
  id: "jrpga",
  name: "League 3; The JRPG League",
  description: "The most beautiful RPG maiden's are fighting for glory.",
  initialPoints: 50,
  renownRequired: 1,
  colors: {
    bgA: "darkred",
    bgB: "red",
    border: "darkred"
  },
  icon,
  rookies,
  ranks: [rookies, ...ranks]
};
