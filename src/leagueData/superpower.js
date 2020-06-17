import rookies from "../combatants/superpower-league/rookies";
import icon from "../assets/logo/superhero.png";

export default {
  id: "superpower",
  name: "League 2; The Superhero League",
  description:
    "The sexiest and most powerful girls from superhero anime, thankfully their powers have been dulled, as per rules for league entry.",
  initialPoints: 50,
  renownRequired: 1,
  colors: {
    bgA: "#65daaa",
    bgB: "#5c70a9",
    border: "#65daaa"
  },
  icon,
  ranks: [rookies, rookies]
};
