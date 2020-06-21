import { PenisSize } from "../constants";

export default {
  // p: playerstore, c: combatant
  dominate: {
    hasCock: [
      {
        displayText: "Fuck her face",
        textOptions: [
          (p, c) =>
            `${p.name} frees her ${
              PenisSize[p.penisSize]
            } cock from her pants, hanging it before xxxx's face`,
        ],
      },
      {
        displayText: "Use her tits",
        textOptions: [(p, c) => `${p.name} fucks ${c.name}'s tits`],
      },
      {
        displayText: "Pound her arse",
        textOptions: [(p, c) => `${p.name} pounds ${c.name}'s arse`],
      },
      {
        displayText: "Destory her pussy",
        textOptions: [(p, c) => `${p.name} destroys ${c.name}'s pussy`],
      },
    ],
    cockBdsm: [
      {
        displayText: "Lock her mouth open and make use of it.",
        textOptions: [
          (p, c) =>
            `${p.name} locks ${c.name}'s mouth open and makes use of it.`,
        ],
      },
      {
        displayText: "Bind her and abuse her tits",
        textOptions: [
          (p, c) => `${p.name} binds ${c.name} up and abuses her tits`,
        ],
      },
      {
        displayText: "Tie her up and plunge her anal passage",
        textOptions: [
          (p, c) =>
            `${p.name} ties ${c.name}up and brutally fucks her back passage`,
        ],
      },
      {
        displayText: "Restrict her and pound her pussy",
        textOptions: [(p, c) => `${p.name} fucks ${c.name}'s pussy`],
      },
    ],
    isWoman: [
      {
        displayText: "Play with her mouth and tits.",
        textOptions: [
          (p, c) => `${p.name} plays with ${c.name}'s mouth & tits`,
        ],
      },
      {
        displayText: "Enjoy her back passage.",
        textOptions: [(p, c) => `${p.name} enjoys ${c.name}'s back passage`],
      },
      {
        displayText: "Taste her pussy.",
        textOptions: [(p, c) => `${p.name} feeds on ${c.name}'s pussy`],
      },
      {
        displayText: "Make her pleasure you.",
        textOptions: [(p, c) => `${p.name} force ${c.name}to pleasure her`],
      },
    ],
  },
  pleasure: {
    hasCock: [
      {
        displayText: "Enjoy a professional blowjob",
        textOptions: [
          (p, c) => `${p.name} is given a pro blowjob by ${c.name}`,
        ],
      },
      {
        displayText: "Let her pleasure you with her tits",
        textOptions: [(p, c) => `${c.name} pleasures you with her tits`],
      },
      {
        displayText: "Dig deep into her arse",
        textOptions: [(p, c) => `${p.name} tenderly fucks ${c.name}'s arse`],
      },
      {
        displayText: "Lovingly fuck her tender pussy.",
        textOptions: [(p, c) => `${p.name} & ${c.name} fuck like rabbits.`],
      },
    ],
    isWoman: [
      {
        displayText: "Pleasure each other's mouth & breasts.",
        textOptions: [
          (p, c) =>
            `${p.name} and ${c.name} kiss & play with each others breasts`,
        ],
      },
      {
        displayText: "Enjoy each others anal passages.",
        textOptions: [
          (p, c) => `${p.name} enjoys some anal play with ${c.name}`,
        ],
      },
      {
        displayText: "Taste each others pussies.",
        textOptions: [
          (p, c) =>
            `${p.name} and ${c.name} take turns devouring each other's pussies`,
        ],
      },
    ],
  },
  finishCock: [
    {
      displayText: "Plaster her face.",
      textOptions: [
        (p, c) =>
          `${p.name}'s cock exlodes, splurting a giant load onto ${c.name}'s face`,
      ],
    },
    {
      displayText: "Cum down her throat.",
      textOptions: [
        (p, c) =>
          `${p.name}'s cock exlodes, cumming a thick load down ${c.name}'s throat`,
      ],
    },
    {
      displayText: "Cover her tits.",
      textOptions: [
        (p, c) => `${p.name}'s blows a huge creamy load over ${c.name}'s tits`,
      ],
    },
    {
      displayText: "Spunk on her chest.",
      textOptions: [
        (p, c) => `${p.name}'s blows a huge creamy load over ${c.name}'s chest`,
      ],
    },
    {
      displayText: "Spunk on her back.",
      textOptions: [
        (p, c) => `${p.name}'s blows a huge creamy load over ${c.name}'s back`,
      ],
    },
    {
      displayText: "Creampie deep in her arse.",
      textOptions: [
        (p, c) =>
          `${p.name}'s blows a huge creamy load deep up ${c.name}'s back passage`,
      ],
    },
    {
      displayText: "Blow your load into her cunt.",
      textOptions: [(p, c) => `${p.name}'s creampies ${c.name}'s pussy`],
    },
  ],
};
