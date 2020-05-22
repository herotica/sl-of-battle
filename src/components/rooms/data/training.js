const TrainingOptions = [
  {
    name: "Seduction",
    description: "Build your ability to seduce others.",
    skill: "seductionProwess",
    onSkillUp: "changeSeductionProwess",
    cost: 10,
    power: 2
  },
  {
    name: "Seduction+",
    description: "Train your skills under the guidance of a master.",
    skill: "seductionProwess",
    onSkillUp: "changeSeductionProwess",
    cost: 40,
    power: 15
  },
  {
    name: "Grappling",
    description: "Spar with another rookie to hone your grappling skills.",
    skill: "grapplingProwess",
    onSkillUp: "changeGrapplingProwess",
    cost: 5,
    power: 1
  },
  {
    name: "Grappling+",
    description: "Train your grappling skills under the guidance of a master.",
    skill: "grapplingProwess",
    onSkillUp: "changeGrapplingProwess",
    cost: 50,
    power: 12
  },
  {
    name: "Tongue Skills",
    description: "Train with the erotic power of your tongue.",
    skill: "tongueProwess",
    onSkillUp: "changeTongueProwess",
    cost: 15,
    power: 5
  },
  {
    name: "Tongue Skills+",
    description:
      "Find a master to practice french kissing, it's just like old sleepovers.",
    skill: "tongueProwess",
    onSkillUp: "changeTongueProwess",
    cost: 80,
    power: 15
  },
  {
    name: "Touch Skills",
    description: "Practice the softness of your touch.",
    skill: "touchProwess",
    onSkillUp: "changeTouchProwess",
    cost: 2,
    power: 1
  },
  {
    name: "Touch Skills+",
    description:
      "Hire a rookie to practive your fingering on, good luck no picking a squirter.",
    skill: "touchProwess",
    onSkillUp: "changeTouchProwess",
    cost: 30,
    power: 6
  },
  {
    name: "Cock/Strapon Skills",
    description: "Practice on one of the onaholes provided.",
    skill: "cockProwess",
    onSkillUp: "changeCockProwess",
    cost: 10,
    power: 2
  },
  {
    name: "Cock/Strapon Skills+",
    description: "Get a rookie, and see how quickly you can get her cumming.",
    skill: "cockProwess",
    onSkillUp: "changeCockProwess",
    cost: 30,
    power: 6
  },
  {
    name: "Pussy Skills",
    description: "Ride the gym's symbian.",
    skill: "vaginaProwess",
    onSkillUp: "changeVaginaProwess",
    cost: 20,
    power: 4,
    reqFemale: true
  },
  {
    name: "Pussy Skills+",
    description: "Hire someone pleasure your lady parts.",
    skill: "vaginaProwess",
    onSkillUp: "changeVaginaProwess",
    cost: 40,
    power: 12,
    reqFemale: true
  },
  {
    name: "Arse Skills",
    description: "Practice tightening your a-hole.",
    skill: "anusProwess",
    onSkillUp: "changeAnusProwess",
    cost: 5,
    power: 2
  },
  {
    name: "Arse Skills+",
    description: "Hire someone pleasure your dark tunnel.",
    skill: "anusProwess",
    onSkillUp: "changeAnusProwess",
    cost: 40,
    power: 10
  }
];

export const ResistanceTraining = [
  {
    name: "Touch Endurance",
    description:
      "Get a rookie to help you build a resistance to a seductive touch.",
    skill: "touchResistance",
    onSkillUp: "changeTouchResistance",
    cost: 30,
    power: 5
  },
  {
    name: "Breast Endurance",
    description: "Get a rookie to fondle your breasts.",
    skill: "breastResistance",
    onSkillUp: "changeBreastResistance",
    cost: 50,
    power: 8,
    reqFemale: true
  },
  {
    name: "Mouth Endurance",
    description: "Get a rookie to play with your mouth and tongue.",
    skill: "mouthResistance",
    onSkillUp: "changeMouthResistance",
    cost: 40,
    power: 6
  },
  {
    name: "Cock Endurance",
    description: "Get a rookie and plunder her holes, focus on not orgasming.",
    skill: "cockResistance",
    onSkillUp: "changeCockResistance",
    cost: 40,
    power: 4,
    reqCock: true
  },
  {
    name: "Pussy Endurance",
    description: "Get someone to stroke your lady orchid.",
    skill: "vaginaResistance",
    onSkillUp: "changeVaginaResistance",
    cost: 90,
    power: 10,
    reqFemale: true
  },
  {
    name: "Arse Endurance",
    description: "Get a rookie to jam some toys up your back tunnel.",
    skill: "anusResistance",
    onSkillUp: "changeAnusResistance",
    cost: 50,
    power: 5
  }
];

export default TrainingOptions;
