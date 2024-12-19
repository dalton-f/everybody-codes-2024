////////////////////////////////////////////////////////////////
// Everybody Codes 2024 Quest 1: The Battle for the Farmlands
// Link: https://everybody.codes/event/2024/quests/1
////////////////////////////////////////////////////////////////

const fs = require("fs");

const input = fs.readFileSync("quests/quest-01/part-3/input.txt", "utf-8");

const creatures = input.split("");

const GROUP_SIZE = 3;

let total = 0;

const potionsForCreature = {
  A: 0,
  B: 1,
  C: 3,
  D: 5,
};

for (let i = 0; i < creatures.length; i += GROUP_SIZE) {
  const group = creatures.slice(i, i + GROUP_SIZE);

  const validCreatures = group.filter((creature) => creature !== "x");

  for (const creature of validCreatures) {
    total += potionsForCreature[creature];

    if (validCreatures.length > 1) {
      total += validCreatures.length - 1;
    }
  }
}

console.log(`Part 3: ${total}`);
