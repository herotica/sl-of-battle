# Adding Characters & leagues

### Characters

- Characters are first added to `src/combatants`, underneath their respective genre/franchise, try to group those that will be in the same league so it's easier to give them weighted stats relevant to their difficulty.
- Require 3 images & logo (see examples), for 'fight', 'win' & 'lose', see imageCleanup.md.
- Use other character examples, and adjust values/text to match character.

Use below for rough guide to values for `seductionResistance` & `grapplingProwess`, and the values corresponding to `prefAttack`, the rest should be a fair bit lower, with your choice of randomness.

0>5-20   
1>12-30 - jrpg   
2>20-35 - battleship   
3>28-42 - cartoon   
4>35-50 - marvel   
5>42-60 - pokemon   
6>50-68 - lol   
7>60-75 - disney 
8>70-85 - fighter

### Leagues

- Require a minimum of 7 characters, ideally 9
- Add from list of combatants, making sure to upade the file at `src/combatants/index.js`, as thats where the slaves page accesses data
- Create a new league using others as a guide under `src/leagueData` and make sure added to index.js
- Max required renown should be 10, can have multiples, though favour lower renown for now.

