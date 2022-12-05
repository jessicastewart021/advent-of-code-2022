import { readFileSync } from "fs";

export const readDataInput = (fileInputPath: string): string[] => {
  const file = readFileSync(fileInputPath, "utf-8");
  return file
    .toString()
    .split("\n")
    .filter((p) => p.includes("move"));
};

interface CrateObject {
  [key: number]: string[];
}

const crateItemsPart1: CrateObject = {
  1: ["R", "P", "C", "D", "B", "G"],
  2: ["H", "V", "G"],
  3: ["N", "S", "Q", "D", "J", "P", "M"],
  4: ["P", "S", "L", "G", "D", "C", "N", "M"],
  5: ["J", "B", "N", "C", "P", "F", "L", "S"],
  6: ["Q", "B", "D", "Z", "V", "G", "T", "S"],
  7: ["B", "Z", "M", "H", "F", "T", "Q"],
  8: ["C", "M", "D", "B", "F"],
  9: ["F", "C", "Q", "G"],
};

const crateItemsPart2: CrateObject = {
  1: ["R", "P", "C", "D", "B", "G"],
  2: ["H", "V", "G"],
  3: ["N", "S", "Q", "D", "J", "P", "M"],
  4: ["P", "S", "L", "G", "D", "C", "N", "M"],
  5: ["J", "B", "N", "C", "P", "F", "L", "S"],
  6: ["Q", "B", "D", "Z", "V", "G", "T", "S"],
  7: ["B", "Z", "M", "H", "F", "T", "Q"],
  8: ["C", "M", "D", "B", "F"],
  9: ["F", "C", "Q", "G"],
};

export const moveCratePart1 = (instructions: string[]) => {
  for (const instruction of instructions) {
    let instructionArray = instruction.split(" ");
    let move: number = +instructionArray[1];
    let from: number = +instructionArray[3];
    let to: number = +instructionArray[5];

    for (let i = 0; i < move; i++) {
      let poppedElement = crateItemsPart1[from].pop();
      crateItemsPart1[to].push(poppedElement!);
    }
  }
  return crateItemsPart1;
};

export const moveCratePart2 = (instructions: string[]) => {
  for (const instruction of instructions) {
    let instructionArray = instruction.split(" ");
    let move: number = +instructionArray[1];
    let from: number = +instructionArray[3];
    let to: number = +instructionArray[5];

    if (move < 2) {
      for (let i = 0; i < move; i++) {
        let poppedElement = crateItemsPart2[from].pop();
        crateItemsPart2[to].push(poppedElement!);
      }
    } else {
      let poppedElement: string[] = crateItemsPart2[from].splice(-move);
      crateItemsPart2[to].push(...poppedElement!);
    }
  }
  return crateItemsPart2;
};

export const popEachArray = (crateItems: CrateObject) => {
  let resultString: string = "";
  for (let [key, value] of Object.entries(crateItems)) {
    if (value.length > 1) {
      value = value.pop();
    } else {
      value = value.shift();
    }
    resultString = resultString.concat(value);
  }
  return resultString;
};

let input1 = readDataInput("./src/day5/input.txt");
let input2 = JSON.parse(JSON.stringify(input1));
let cratesPart1 = moveCratePart1(input1);
let cratesPart2 = moveCratePart2(input2);
console.log("Part 1 Answer: ", popEachArray(cratesPart1));
console.log("Part 2 Answer: ", popEachArray(cratesPart2));
