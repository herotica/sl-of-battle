import { PenisSize } from "../../constants";

export default [
  {
    displayText: "Fuck her face",
    textOptions: [
      (p, c) =>
        `${p.name} frees ${p.pn.her} ${PenisSize[p.penisSize]} cock from ${
          p.pn.her
        } pants, hanging it before ${c.name}'s face`,
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
];
