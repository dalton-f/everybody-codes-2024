////////////////////////////////////////////////////////////////
// Everybody Codes 2024 Quest 1: The Battle for the Farmlands
// Link: https://everybody.codes/event/2024/quests/1
////////////////////////////////////////////////////////////////

const fs = require("fs");

const input = fs.readFileSync("quests/quest-01/part-2/input.txt", "utf-8");

const creatures = input.split("");

let total = 0;

const potionsForCreature = {
  A: 0,
  B: 1,
  C: 3,
  D: 5,
};

for (let i = 0; i < creatures.length - 1; i += 2) {
  const creatureOne = creatures[i];
  const creatureTwo = creatures[i + 1];

  // If no valid pair, just add normal amount of potions like part 1
  if (creatureOne === "x") {
    total += potionsForCreature[creatureTwo] ?? 0;
    continue;
  }

  if (creatureTwo === "x") {
    total += potionsForCreature[creatureOne] ?? 0;
    continue;
  }

  // Add 2 potions as attacking in a pair
  total +=
    potionsForCreature[creatureOne] + potionsForCreature[creatureTwo] + 2;
}

console.log(`Part 2: ${total}`);
