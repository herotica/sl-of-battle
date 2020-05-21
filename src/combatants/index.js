//interface for getting data
import Mei from "../assets/body-type/chubby.png";
import Bunny from "../assets/body-type/petite.png";
import Carmen from "../assets/body-type/muscular.png";

export const Underground = {
  // Max 3 difficulty tiers, A is the lowest
  tierBasic: {
    mei: {
      name: "Mei",
      description: "Mei overwatch",
      img: Mei
    }
  },
  tierMedium: {
    bunnyGirl: {
      name: "Bunny Girl",
      description: "A sexy bunny girl",
      img: Bunny
    }
  },
  tierHard: {
    carmen: {
      name: "Carmen",
      description:
        "the sexy and ruthless Carmen, a beautiful girl brought to us by Dmitrys",
      img: Carmen
    }
  }
};

export const keys = {
  underground: {
    tierBasic: Object.keys(Underground.tierBasic),
    tierMedium: Object.keys(Underground.tierMedium),
    tierHard: Object.keys(Underground.tierHard)
  }
};

export default Underground;
