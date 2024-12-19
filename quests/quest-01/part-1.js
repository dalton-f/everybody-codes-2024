////////////////////////////////////////////////////////////////
// Everybody Codes 2024 Quest 1: The Battle for the Farmlands
// Link: https://everybody.codes/event/2024/quests/1
////////////////////////////////////////////////////////////////

const fs = require("fs");

const input = fs.readFileSync("quests/quest-01/input.txt", "utf-8");

const creatures = input.split("");

let total = 0;

const potionsForCreature = {
  A: 0,
  B: 1,
  C: 3,
};

for (const creature of creatures) {
  const potionsRequired = potionsForCreature[creature];

  total += potionsRequired;
}

console.log(`Part 1: ${total}`);
